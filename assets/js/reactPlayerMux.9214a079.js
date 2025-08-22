/*! For license information please see reactPlayerMux.9214a079.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64258],
 {
  74486: (e, t, n) => {
   n.r(t), n.d(t, { MaxResolution: () => In, MediaError: () => bn, MinResolution: () => Sn, RenditionOrder: () => Rn, default: () => CE, generatePlayerInitTime: () => Ui, playerSoftwareName: () => SE, playerSoftwareVersion: () => IE });
   var i = n(75271),
    a = Object.create,
    r = Object.defineProperty,
    s = Object.getOwnPropertyDescriptor,
    o = Object.getOwnPropertyNames,
    l = Object.getPrototypeOf,
    d = Object.prototype.hasOwnProperty,
    u = function (e, t) {
     return function () {
      return e && (t = e((e = 0))), t;
     };
    },
    c = function (e, t) {
     return function () {
      return t || e((t = { exports: {} }).exports, t), t.exports;
     };
    },
    h = function (e, t, n) {
     return (
      (n = null != e ? a(l(e)) : {}),
      (function (e, t, n, i) {
       if ((t && 'object' == typeof t) || 'function' == typeof t)
        for (var a, l = o(t), u = 0, c = l.length; u < c; u++)
         (a = l[u]),
          !d.call(e, a) &&
           a !== n &&
           r(e, a, {
            get: function (e) {
             return t[e];
            }.bind(null, a),
            enumerable: !(i = s(t, a)) || i.enumerable,
           });
       return e;
      })(!t && e && e.__esModule ? n : r(n, 'default', { value: e, enumerable: !0 }), e)
     );
    },
    m = c(function (e, t) {
     var n;
     (n = 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : {}), (t.exports = n);
    });
   function p(e, t) {
    return null != t && 'undefined' != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : p(e, t);
   }
   var v = u(function () {
    v();
   });
   function b(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
   }
   var g = u(function () {}),
    E = c(function (e, t) {
     var n = Array.prototype.slice;
     t.exports = function (e, t) {
      for (('length' in e) || (e = [e]), e = n.call(e); e.length; ) {
       var i = e.shift(),
        a = t(i);
       if (a) return a;
       i.childNodes && i.childNodes.length && (e = n.call(i.childNodes).concat(e));
      }
     };
    }),
    f = c(function (e, t) {
     function n(e, t) {
      if (!p(this, n)) return new n(e, t);
      (this.data = e), (this.nodeValue = e), (this.length = e.length), (this.ownerDocument = t || null);
     }
     v(),
      (t.exports = n),
      (n.prototype.nodeType = 8),
      (n.prototype.nodeName = '#comment'),
      (n.prototype.toString = function () {
       return '[object Comment]';
      });
    }),
    y = c(function (e, t) {
     function n(e, t) {
      if (!p(this, n)) return new n(e);
      (this.data = e || ''), (this.length = this.data.length), (this.ownerDocument = t || null);
     }
     v(),
      (t.exports = n),
      (n.prototype.type = 'DOMTextNode'),
      (n.prototype.nodeType = 3),
      (n.prototype.nodeName = '#text'),
      (n.prototype.toString = function () {
       return this.data;
      }),
      (n.prototype.replaceData = function (e, t, n) {
       var i = this.data,
        a = i.substring(0, e),
        r = i.substring(e + t, i.length);
       (this.data = a + n + r), (this.length = this.data.length);
      });
    }),
    _ = c(function (e, t) {
     t.exports = function (e) {
      var t = this,
       n = e.type;
      e.target || (e.target = t), t.listeners || (t.listeners = {});
      var i = t.listeners[n];
      if (i)
       return i.forEach(function (n) {
        (e.currentTarget = t), 'function' == typeof n ? n(e) : n.handleEvent(e);
       });
      t.parentNode && t.parentNode.dispatchEvent(e);
     };
    }),
    T = c(function (e, t) {
     t.exports = function (e, t) {
      var n = this;
      n.listeners || (n.listeners = {}), n.listeners[e] || (n.listeners[e] = []), -1 === n.listeners[e].indexOf(t) && n.listeners[e].push(t);
     };
    }),
    A = c(function (e, t) {
     t.exports = function (e, t) {
      var n = this;
      if (n.listeners && n.listeners[e]) {
       var i = n.listeners[e],
        a = i.indexOf(t);
       -1 !== a && i.splice(a, 1);
      }
     };
    }),
    k = c(function (e, t) {
     g(), (t.exports = i);
     var n = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];
     function i(e) {
      switch (e.nodeType) {
       case 3:
        return s(e.data);
       case 8:
        return '\x3c!--' + e.data + '--\x3e';
       default:
        return (function (e) {
         var t = [],
          o = e.tagName;
         return (
          'http://www.w3.org/1999/xhtml' === e.namespaceURI && (o = o.toLowerCase()),
          t.push(
           '<' +
            o +
            (function (e) {
             var t = [];
             for (var n in e) a(e, n) && t.push({ name: n, value: e[n] });
             for (var i in e._attributes)
              for (var s in e._attributes[i]) {
               var o = e._attributes[i][s],
                l = (o.prefix ? o.prefix + ':' : '') + s;
               t.push({ name: l, value: o.value });
              }
             return e.className && t.push({ name: 'class', value: e.className }), t.length ? r(t) : '';
            })(e) +
            (function (e) {
             var t = e.dataset,
              n = [];
             for (var i in t) n.push({ name: 'data-' + i, value: t[i] });
             return n.length ? r(n) : '';
            })(e),
          ),
          n.indexOf(o) > -1 ? t.push(' />') : (t.push('>'), e.childNodes.length ? t.push.apply(t, e.childNodes.map(i)) : e.textContent || e.innerText ? t.push(s(e.textContent || e.innerText)) : e.innerHTML && t.push(e.innerHTML), t.push('</' + o + '>')),
          t.join('')
         );
        })(e);
      }
     }
     function a(e, t) {
      var n = b(e[t]);
      return ('style' === t && Object.keys(e.style).length > 0) || (e.hasOwnProperty(t) && ('string' === n || 'boolean' === n || 'number' === n) && 'nodeName' !== t && 'className' !== t && 'tagName' !== t && 'textContent' !== t && 'innerText' !== t && 'namespaceURI' !== t && 'innerHTML' !== t);
     }
     function r(e) {
      var t = [];
      return (
       e.forEach(function (e) {
        var n = e.name,
         i = e.value;
        'style' === n &&
         (i = (function (e) {
          if ('string' == typeof e) return e;
          var t = '';
          return (
           Object.keys(e).forEach(function (n) {
            var i = e[n];
            (n = n.replace(/[A-Z]/g, function (e) {
             return '-' + e.toLowerCase();
            })),
             (t += n + ':' + i + ';');
           }),
           t
          );
         })(i)),
         t.push(
          n +
           '="' +
           (function (e) {
            return s(e).replace(/"/g, '&quot;');
           })(i) +
           '"',
         );
       }),
       t.length ? ' ' + t.join(' ') : ''
      );
     }
     function s(e) {
      var t = '';
      return 'string' == typeof e ? (t = e) : e && (t = e.toString()), t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
     }
    }),
    w = c(function (e, t) {
     v();
     var n = E(),
      i = _(),
      a = T(),
      r = A(),
      s = k(),
      o = 'http://www.w3.org/1999/xhtml';
     function l(e, t, n) {
      if (!p(this, l)) return new l(e);
      var i = void 0 === n ? o : n || null;
      (this.tagName = i === o ? String(e).toUpperCase() : e), (this.nodeName = this.tagName), (this.className = ''), (this.dataset = {}), (this.childNodes = []), (this.parentNode = null), (this.style = {}), (this.ownerDocument = t || null), (this.namespaceURI = i), (this._attributes = {}), 'INPUT' === this.tagName && (this.type = 'text');
     }
     (t.exports = l),
      (l.prototype.type = 'DOMElement'),
      (l.prototype.nodeType = 1),
      (l.prototype.appendChild = function (e) {
       return e.parentNode && e.parentNode.removeChild(e), this.childNodes.push(e), (e.parentNode = this), e;
      }),
      (l.prototype.replaceChild = function (e, t) {
       e.parentNode && e.parentNode.removeChild(e);
       var n = this.childNodes.indexOf(t);
       return (t.parentNode = null), (this.childNodes[n] = e), (e.parentNode = this), t;
      }),
      (l.prototype.removeChild = function (e) {
       var t = this.childNodes.indexOf(e);
       return this.childNodes.splice(t, 1), (e.parentNode = null), e;
      }),
      (l.prototype.insertBefore = function (e, t) {
       e.parentNode && e.parentNode.removeChild(e);
       var n = null == t ? -1 : this.childNodes.indexOf(t);
       return n > -1 ? this.childNodes.splice(n, 0, e) : this.childNodes.push(e), (e.parentNode = this), e;
      }),
      (l.prototype.setAttributeNS = function (e, t, n) {
       var i = null,
        a = t,
        r = t.indexOf(':');
       (r > -1 && ((i = t.substr(0, r)), (a = t.substr(r + 1))), 'INPUT' === this.tagName && 'type' === t) ? (this.type = n) : ((this._attributes[e] || (this._attributes[e] = {}))[a] = { value: n, prefix: i });
      }),
      (l.prototype.getAttributeNS = function (e, t) {
       var n = this._attributes[e],
        i = n && n[t] && n[t].value;
       return 'INPUT' === this.tagName && 'type' === t ? this.type : 'string' != typeof i ? null : i;
      }),
      (l.prototype.removeAttributeNS = function (e, t) {
       var n = this._attributes[e];
       n && delete n[t];
      }),
      (l.prototype.hasAttributeNS = function (e, t) {
       var n = this._attributes[e];
       return !!n && t in n;
      }),
      (l.prototype.setAttribute = function (e, t) {
       return this.setAttributeNS(null, e, t);
      }),
      (l.prototype.getAttribute = function (e) {
       return this.getAttributeNS(null, e);
      }),
      (l.prototype.removeAttribute = function (e) {
       return this.removeAttributeNS(null, e);
      }),
      (l.prototype.hasAttribute = function (e) {
       return this.hasAttributeNS(null, e);
      }),
      (l.prototype.removeEventListener = r),
      (l.prototype.addEventListener = a),
      (l.prototype.dispatchEvent = i),
      (l.prototype.focus = function () {}),
      (l.prototype.toString = function () {
       return s(this);
      }),
      (l.prototype.getElementsByClassName = function (e) {
       var t = e.split(' '),
        i = [];
       return (
        n(this, function (e) {
         if (1 === e.nodeType) {
          var n = (e.className || '').split(' ');
          t.every(function (e) {
           return -1 !== n.indexOf(e);
          }) && i.push(e);
         }
        }),
        i
       );
      }),
      (l.prototype.getElementsByTagName = function (e) {
       e = e.toLowerCase();
       var t = [];
       return (
        n(this.childNodes, function (n) {
         1 === n.nodeType && ('*' === e || n.tagName.toLowerCase() === e) && t.push(n);
        }),
        t
       );
      }),
      (l.prototype.contains = function (e) {
       return (
        n(this, function (t) {
         return e === t;
        }) || !1
       );
      });
    }),
    I = c(function (e, t) {
     v();
     var n = w();
     function i(e) {
      if (!p(this, i)) return new i();
      (this.childNodes = []), (this.parentNode = null), (this.ownerDocument = e || null);
     }
     (t.exports = i),
      (i.prototype.type = 'DocumentFragment'),
      (i.prototype.nodeType = 11),
      (i.prototype.nodeName = '#document-fragment'),
      (i.prototype.appendChild = n.prototype.appendChild),
      (i.prototype.replaceChild = n.prototype.replaceChild),
      (i.prototype.removeChild = n.prototype.removeChild),
      (i.prototype.toString = function () {
       return this.childNodes
        .map(function (e) {
         return String(e);
        })
        .join('');
      });
    }),
    S = c(function (e, t) {
     function n(e) {}
     (t.exports = n),
      (n.prototype.initEvent = function (e, t, n) {
       (this.type = e), (this.bubbles = t), (this.cancelable = n);
      }),
      (n.prototype.preventDefault = function () {});
    }),
    R = c(function (e, t) {
     v();
     var n = E(),
      i = f(),
      a = y(),
      r = w(),
      s = I(),
      o = S(),
      l = _(),
      d = T(),
      u = A();
     function c() {
      if (!p(this, c)) return new c();
      (this.head = this.createElement('head')), (this.body = this.createElement('body')), (this.documentElement = this.createElement('html')), this.documentElement.appendChild(this.head), this.documentElement.appendChild(this.body), (this.childNodes = [this.documentElement]), (this.nodeType = 9);
     }
     t.exports = c;
     var h = c.prototype;
     (h.createTextNode = function (e) {
      return new a(e, this);
     }),
      (h.createElementNS = function (e, t) {
       var n = null === e ? null : String(e);
       return new r(t, this, n);
      }),
      (h.createElement = function (e) {
       return new r(e, this);
      }),
      (h.createDocumentFragment = function () {
       return new s(this);
      }),
      (h.createEvent = function (e) {
       return new o(e);
      }),
      (h.createComment = function (e) {
       return new i(e, this);
      }),
      (h.getElementById = function (e) {
       e = String(e);
       var t = n(this.childNodes, function (t) {
        if (String(t.id) === e) return t;
       });
       return t || null;
      }),
      (h.getElementsByClassName = r.prototype.getElementsByClassName),
      (h.getElementsByTagName = r.prototype.getElementsByTagName),
      (h.contains = r.prototype.contains),
      (h.removeEventListener = u),
      (h.addEventListener = d),
      (h.dispatchEvent = l);
    }),
    C = c(function (e, t) {
     var n = R();
     t.exports = new n();
    }),
    D = c(function (e, t) {
     var n,
      i = 'undefined' != typeof global ? global : 'undefined' != typeof window ? window : {},
      a = C();
     'undefined' != typeof document ? (n = document) : (n = i['__GLOBAL_DOCUMENT_CACHE@4']) || (n = i['__GLOBAL_DOCUMENT_CACHE@4'] = a), (t.exports = n);
    });
   function L(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
   }
   function M(e, t) {
    if (e) {
     if ('string' == typeof e) return L(e, t);
     var n = Object.prototype.toString.call(e).slice(8, -1);
     if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(n);
     if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(e, t);
    }
   }
   function x(e, t) {
    return (
     (function (e) {
      if (Array.isArray(e)) return e;
     })(e) ||
     (function (e, t) {
      var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
      if (null != n) {
       var i,
        a,
        r = [],
        s = !0,
        o = !1;
       try {
        for (n = n.call(e); !(s = (i = n.next()).done) && (r.push(i.value), !t || r.length !== t); s = !0);
       } catch (l) {
        (o = !0), (a = l);
       } finally {
        try {
         !s && null != n.return && n.return();
        } finally {
         if (o) throw a;
        }
       }
       return r;
      }
     })(e, t) ||
     M(e, t) ||
     (function () {
      throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
     })()
    );
   }
   var N = h(m()),
    O = h(m()),
    P = h(m()),
    U = {
     now: function () {
      var e = P.default.performance,
       t = e && e.timing,
       n = t && t.navigationStart,
       i = 'number' == typeof n && 'function' == typeof e.now ? n + e.now() : Date.now();
      return Math.round(i);
     },
    },
    H = U,
    W = function () {
     var e, t, n;
     if ('function' == typeof (null === (e = O.default.crypto) || void 0 === e ? void 0 : e.getRandomValues)) {
      (n = new Uint8Array(32)), O.default.crypto.getRandomValues(n);
      for (var i = 0; i < 32; i++) n[i] = n[i] % 16;
     } else {
      n = [];
      for (var a = 0; a < 32; a++) n[a] = (16 * Math.random()) | 0;
     }
     var r = 0;
     t = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
      var t = 'x' === e ? n[r] : (3 & n[r]) | 8;
      return r++, t.toString(16);
     });
     var s = H.now(),
      o = null == s ? void 0 : s.toString(16).substring(3);
     return o ? t.substring(0, 28) + o : t;
    },
    B = function () {
     return ('000000' + ((Math.random() * Math.pow(36, 6)) << 0).toString(36)).slice(-6);
    },
    V = function (e) {
     if (e && void 0 !== e.nodeName) return e.muxId || (e.muxId = B()), e.muxId;
     var t;
     try {
      t = document.querySelector(e);
     } catch (cr) {}
     return t && !t.muxId && (t.muxId = e), (null == t ? void 0 : t.muxId) || e;
    },
    $ = function (e) {
     var t;
     e && void 0 !== e.nodeName ? (e = V((t = e))) : (t = document.querySelector(e));
     var n = t && t.nodeName ? t.nodeName.toLowerCase() : '';
     return [t, e, n];
    };
   function q(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return L(e);
     })(e) ||
     (function (e) {
      if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
     })(e) ||
     M(e) ||
     (function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
     })()
    );
   }
   var K = 0,
    F = 1,
    Y = 2,
    j = 3,
    G = 4,
    Q = (function (e) {
     var t,
      n,
      i,
      a,
      r,
      s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
      o = e ? [console, e] : [console],
      l = (t = console.trace).bind.apply(t, q(o)),
      d = (n = console.info).bind.apply(n, q(o)),
      u = (i = console.debug).bind.apply(i, q(o)),
      c = (a = console.warn).bind.apply(a, q(o)),
      h = (r = console.error).bind.apply(r, q(o)),
      m = s;
     return {
      trace: function () {
       for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
       if (!(m > K)) return l.apply(void 0, q(t));
      },
      debug: function () {
       for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
       if (!(m > F)) return u.apply(void 0, q(t));
      },
      info: function () {
       for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
       if (!(m > Y)) return d.apply(void 0, q(t));
      },
      warn: function () {
       for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
       if (!(m > j)) return c.apply(void 0, q(t));
      },
      error: function () {
       for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
       if (!(m > G)) return h.apply(void 0, q(t));
      },
      get level() {
       return m;
      },
      set level(e) {
       e !== this.level && (m = null != e ? e : s);
      },
     };
    })('[mux]'),
    Z = h(m());
   function z() {
    return '1' === (Z.default.doNotTrack || (Z.default.navigator && Z.default.navigator.doNotTrack));
   }
   function X(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
   }
   function J(e, t) {
    if (!p(e, t)) throw new TypeError('Cannot call a class as a function');
   }
   function ee(e, t) {
    for (var n = 0; n < t.length; n++) {
     var i = t[n];
     (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
   }
   function te(e, t, n) {
    return t && ee(e.prototype, t), n && ee(e, n), e;
   }
   function ne(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function ie(e) {
    return (
     (ie = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     ie(e)
    );
   }
   function ae(e, t, n) {
    return (
     (ae =
      'undefined' != typeof Reflect && Reflect.get
       ? Reflect.get
       : function (e, t, n) {
          var i = (function (e, t) {
           for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ie(e)); );
           return e;
          })(e, t);
          if (i) {
           var a = Object.getOwnPropertyDescriptor(i, t);
           return a.get ? a.get.call(n || e) : a.value;
          }
         }),
     ae(e, t, n || e)
    );
   }
   function re(e, t) {
    return (
     (re =
      Object.setPrototypeOf ||
      function (e, t) {
       return (e.__proto__ = t), e;
      }),
     re(e, t)
    );
   }
   function se(e, t) {
    if (null == e) return {};
    var n,
     i,
     a = (function (e, t) {
      if (null == e) return {};
      var n,
       i,
       a = {},
       r = Object.keys(e);
      for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && (a[n] = e[n]);
      return a;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
   }
   function oe(e) {
    var t = (function () {
     if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
     if ('function' == typeof Proxy) return !0;
     try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
     } catch (e) {
      return !1;
     }
    })();
    return function () {
     var n,
      i = ie(e);
     if (t) {
      var a = ie(this).constructor;
      n = Reflect.construct(i, arguments, a);
     } else n = i.apply(this, arguments);
     return (function (e, t) {
      return !t || ('object' !== b(t) && 'function' != typeof t) ? X(e) : t;
     })(this, n);
    };
   }
   v(), g();
   var le = function (e) {
     return de(e)[0];
    },
    de = function (e) {
     if ('string' != typeof e || '' === e) return ['localhost'];
     var t,
      n = (e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [])[4];
     return n && (t = (n.match(/[^\.]+\.[^\.]+$/) || [])[0]), [n, t];
    },
    ue = h(m()),
    ce = {
     exists: function () {
      var e = ue.default.performance;
      return void 0 !== (e && e.timing);
     },
     domContentLoadedEventEnd: function () {
      var e = ue.default.performance,
       t = e && e.timing;
      return t && t.domContentLoadedEventEnd;
     },
     navigationStart: function () {
      var e = ue.default.performance,
       t = e && e.timing;
      return t && t.navigationStart;
     },
    },
    he = ce;
   function me(e, t, n) {
    (n = void 0 === n ? 1 : n), (e[t] = e[t] || 0), (e[t] += n);
   }
   function pe(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
     'function' == typeof Object.getOwnPropertySymbols &&
      (i = i.concat(
       Object.getOwnPropertySymbols(n).filter(function (e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable;
       }),
      )),
      i.forEach(function (t) {
       ne(e, t, n[t]);
      });
    }
    return e;
   }
   function ve(e, t) {
    return (
     (t = null != t ? t : {}),
     Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : (function (e, t) {
         var n = Object.keys(e);
         if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
           (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
           })),
           n.push.apply(n, i);
         }
         return n;
        })(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        }),
     e
    );
   }
   var be = ['x-request-id', 'cf-ray', 'x-amz-cf-id', 'x-akamai-request-id'],
    ge = ['x-cdn', 'content-type'].concat(be);
   function Ee(e) {
    var t = {};
    return (
     (e = e || '')
      .trim()
      .split(/[\r\n]+/)
      .forEach(function (e) {
       if (e) {
        var n = e.split(': '),
         i = n.shift();
        i && (ge.indexOf(i.toLowerCase()) >= 0 || 0 === i.toLowerCase().indexOf('x-litix-')) && (t[i] = n.join(': '));
       }
      }),
     t
    );
   }
   function fe(e) {
    if (e) {
     var t = be.find(function (t) {
      return void 0 !== e[t];
     });
     return t ? e[t] : void 0;
    }
   }
   var ye = function (e) {
     var t = {};
     for (var n in e) {
      var i = e[n];
      if (-1 !== i['DATA-ID'].search('io.litix.data.')) t[i['DATA-ID'].replace('io.litix.data.', '')] = i.VALUE;
     }
     return t;
    },
    _e = function (e) {
     if (!e) return {};
     var t = he.navigationStart(),
      n = e.loading,
      i = n ? n.start : e.trequest,
      a = n ? n.first : e.tfirst,
      r = n ? n.end : e.tload;
     return { bytesLoaded: e.total, requestStart: Math.round(t + i), responseStart: Math.round(t + a), responseEnd: Math.round(t + r) };
    },
    Te = function (e) {
     if (e && 'function' == typeof e.getAllResponseHeaders) return Ee(e.getAllResponseHeaders());
    },
    Ae = function (e, t) {
     if (!e || !e.requestEndDate) return {};
     var n,
      i = le(e.url),
      a = e.url,
      r = e.bytesLoaded,
      s = new Date(e.requestStartDate).getTime(),
      o = new Date(e.firstByteDate).getTime(),
      l = new Date(e.requestEndDate).getTime(),
      d = isNaN(e.duration) ? 0 : e.duration,
      u = 'function' == typeof t.getMetricsFor ? t.getMetricsFor(e.mediaType).HttpList : t.getDashMetrics().getHttpRequests(e.mediaType);
     return u.length > 0 && (n = Ee(u[u.length - 1]._responseHeaders || '')), { requestStart: s, requestResponseStart: o, requestResponseEnd: l, requestBytesLoaded: r, requestResponseHeaders: n, requestMediaDuration: d, requestHostname: i, requestUrl: a, requestId: n ? fe(n) : void 0 };
    },
    ke = function (e) {
     var t;
     return null === (t = e.match(/.*codecs\*?="(.*)"/)) || void 0 === t ? void 0 : t[1];
    },
    we = function (e, t, n) {
     var i = e.log;
     if (n && n.on) {
      var a = (function (e) {
        try {
         var t,
          n,
          i =
           null === (n = e.getVersion) || void 0 === n || null === (t = n.call(e)) || void 0 === t
            ? void 0
            : t.split('.').map(function (e) {
               return parseInt(e);
              })[0];
         return i;
        } catch (a) {
         return !1;
        }
       })(n),
       r = function (n, i) {
        return e.emit(t, n, i);
       },
       s = function (e) {
        var t = e.type,
         n = (e.data || {}).url;
        r('requestcompleted', { request_event_type: t, request_start: 0, request_response_start: 0, request_response_end: 0, request_bytes_loaded: -1, request_type: 'manifest', request_hostname: le(n), request_url: n });
       };
      n.on('manifestLoaded', s);
      var o = {},
       l = function (e) {
        if ('function' != typeof e.getRequests) return null;
        var t = e.getRequests({ state: 'executed' });
        return 0 === t.length ? null : t[t.length - 1];
       },
       d = function (e) {
        var t = e.type,
         i = e.chunk,
         a = e.request,
         s = (i || {}).mediaInfo || {},
         l = s.type,
         d = s.bitrateList,
         u = {};
        (d = d || []).forEach(function (e, t) {
         (u[t] = {}), (u[t].width = e.width), (u[t].height = e.height), (u[t].bitrate = e.bandwidth), (u[t].attrs = {});
        }),
         'video' === l ? (o.video = u) : 'audio' === l ? (o.audio = u) : (o.media = u);
        var c = Ae(a, n),
         h = c.requestStart,
         m = c.requestResponseStart,
         p = c.requestResponseEnd,
         v = c.requestResponseHeaders,
         b = c.requestMediaDuration,
         g = c.requestHostname,
         E = c.requestUrl,
         f = c.requestId;
        r('requestcompleted', { request_event_type: t, request_start: h, request_response_start: m, request_response_end: p, request_bytes_loaded: -1, request_type: l + '_init', request_response_headers: v, request_hostname: g, request_id: f, request_url: E, request_media_duration: b, request_rendition_lists: o });
       };
      a >= 4
       ? n.on('initFragmentLoaded', d)
       : n.on('initFragmentLoaded', function (e) {
          var t = e.type,
           n = e.fragmentModel,
           i = e.chunk,
           a = l(n);
          d({ type: t, request: a, chunk: i });
         });
      var u = function (e) {
       var t = e.type,
        i = e.chunk,
        a = e.request,
        s = i || {},
        o = s.mediaInfo,
        l = s.start,
        d = (o || {}).type,
        u = Ae(a, n),
        c = u.requestStart,
        h = u.requestResponseStart,
        m = u.requestResponseEnd,
        p = u.requestBytesLoaded,
        v = u.requestResponseHeaders,
        b = u.requestMediaDuration,
        g = u.requestHostname,
        E = u.requestUrl,
        f = u.requestId,
        y = (function (e, t) {
         var n = t.getQualityFor(e),
          i = t.getCurrentTrackFor(e).bitrateList;
         return i ? { currentLevel: n, renditionWidth: i[n].width || null, renditionHeight: i[n].height || null, renditionBitrate: i[n].bandwidth } : {};
        })(d, n),
        _ = y.currentLevel,
        T = y.renditionWidth,
        A = y.renditionHeight,
        k = y.renditionBitrate;
       r('requestcompleted', { request_event_type: t, request_start: c, request_response_start: h, request_response_end: m, request_bytes_loaded: p, request_type: d, request_response_headers: v, request_hostname: g, request_id: f, request_url: E, request_media_start_time: l, request_media_duration: b, request_current_level: _, request_labeled_bitrate: k, request_video_width: T, request_video_height: A });
      };
      a >= 4
       ? n.on('mediaFragmentLoaded', u)
       : n.on('mediaFragmentLoaded', function (e) {
          var t = e.type,
           n = e.fragmentModel,
           i = e.chunk,
           a = l(n);
          u({ type: t, request: a, chunk: i });
         });
      var c = { video: void 0, audio: void 0, totalBitrate: void 0 },
       h = function (e, t, a) {
        if ('number' == typeof e.newQuality) {
         var s = e.mediaType;
         if ('audio' === s || 'video' === s) {
          var o = n.getBitrateInfoListFor(s).find(function (t) {
           return t.qualityIndex === e.newQuality;
          });
          if (!o || 'number' != typeof o.bitrate) return void i.warn('missing bitrate info for '.concat(s));
          c[s] = ve(pe({}, o), { codec: n.getCurrentTrackFor(s).codec });
          var l = (function () {
           if (c.video && 'number' == typeof c.video.bitrate) {
            if (!c.video.width || !c.video.height) return void i.warn('have bitrate info for video but missing width/height');
            var e = c.video.bitrate;
            if ((c.audio && 'number' == typeof c.audio.bitrate && (e += c.audio.bitrate), e !== c.totalBitrate)) return (c.totalBitrate = e), { video_source_bitrate: e, video_source_height: c.video.height, video_source_width: c.video.width, video_source_codec: ke(c.video.codec) };
           }
          })();
          l && r('renditionchange', l);
         }
        } else i.warn('missing evt.newQuality in qualityChangeRendered event', e);
       };
      n.on('qualityChangeRendered', h);
      var m = function (e) {
       var t = e.request,
        n = e.mediaType;
       r('requestcanceled', { request_event_type: (t = t || {}).type + '_' + t.action, request_url: t.url, request_type: n, request_hostname: le(t.url) });
      };
      n.on('fragmentLoadingAbandoned', m);
      var p = function (e) {
       var t,
        n,
        i = e.error,
        a = (null == i || null === (t = i.data) || void 0 === t ? void 0 : t.request) || {},
        s = (null == i || null === (n = i.data) || void 0 === n ? void 0 : n.response) || {};
       27 === (null == i ? void 0 : i.code) && r('requestfailed', { request_error: a.type + '_' + a.action, request_url: a.url, request_hostname: le(a.url), request_type: a.mediaType, request_error_code: s.status, request_error_text: s.statusText });
       var o = ''.concat(null != a && a.url ? 'url: '.concat(a.url, '\n') : '') + ''.concat((null != s && s.status) || (null != s && s.statusText) ? 'response: '.concat(null == s ? void 0 : s.status, ', ').concat(null == s ? void 0 : s.statusText, '\n') : '');
       r('error', { player_error_code: null == i ? void 0 : i.code, player_error_message: null == i ? void 0 : i.message, player_error_context: o });
      };
      n.on('error', p),
       (n._stopMuxMonitor = function () {
        n.off('manifestLoaded', s), n.off('initFragmentLoaded', d), n.off('mediaFragmentLoaded', u), n.off('qualityChangeRendered', h), n.off('error', p), n.off('fragmentLoadingAbandoned', m), delete n._stopMuxMonitor;
       });
     } else i.warn('Invalid dash.js player reference. Monitoring blocked.');
    },
    Ie = 0,
    Se = (function () {
     function e() {
      J(this, e), ne(this, '_listeners', void 0);
     }
     return (
      te(e, [
       {
        key: 'on',
        value: function (e, t, n) {
         return (t._eventEmitterGuid = t._eventEmitterGuid || ++Ie), (this._listeners = this._listeners || {}), (this._listeners[e] = this._listeners[e] || []), n && (t = t.bind(n)), this._listeners[e].push(t), t;
        },
       },
       {
        key: 'off',
        value: function (e, t) {
         var n = this._listeners && this._listeners[e];
         n &&
          n.forEach(function (e, i) {
           e._eventEmitterGuid === t._eventEmitterGuid && n.splice(i, 1);
          });
        },
       },
       {
        key: 'one',
        value: function (e, t, n) {
         var i = this;
         t._eventEmitterGuid = t._eventEmitterGuid || ++Ie;
         var a = function () {
          i.off(e, a), t.apply(n || this, arguments);
         };
         (a._eventEmitterGuid = t._eventEmitterGuid), this.on(e, a);
        },
       },
       {
        key: 'emit',
        value: function (e, t) {
         var n = this;
         if (this._listeners) {
          t = t || {};
          var i = this._listeners['before' + e] || [],
           a = this._listeners['before*'] || [],
           r = this._listeners[e] || [],
           s = this._listeners['after' + e] || [],
           o = function (t, i) {
            (t = t.slice()).forEach(function (t) {
             t.call(n, { type: e }, i);
            });
           };
          o(i, t), o(a, t), o(r, t), o(s, t);
         }
        },
       },
      ]),
      e
     );
    })(),
    Re = Se,
    Ce = h(m()),
    De = (function () {
     function e(t) {
      var n = this;
      J(this, e),
       ne(this, '_playbackHeartbeatInterval', void 0),
       ne(this, '_playheadShouldBeProgressing', void 0),
       ne(this, 'pm', void 0),
       (this.pm = t),
       (this._playbackHeartbeatInterval = null),
       (this._playheadShouldBeProgressing = !1),
       t.on('playing', function () {
        n._playheadShouldBeProgressing = !0;
       }),
       t.on('play', this._startPlaybackHeartbeatInterval.bind(this)),
       t.on('playing', this._startPlaybackHeartbeatInterval.bind(this)),
       t.on('adbreakstart', this._startPlaybackHeartbeatInterval.bind(this)),
       t.on('adplay', this._startPlaybackHeartbeatInterval.bind(this)),
       t.on('adplaying', this._startPlaybackHeartbeatInterval.bind(this)),
       t.on('devicewake', this._startPlaybackHeartbeatInterval.bind(this)),
       t.on('viewstart', this._startPlaybackHeartbeatInterval.bind(this)),
       t.on('rebufferstart', this._startPlaybackHeartbeatInterval.bind(this)),
       t.on('pause', this._stopPlaybackHeartbeatInterval.bind(this)),
       t.on('ended', this._stopPlaybackHeartbeatInterval.bind(this)),
       t.on('viewend', this._stopPlaybackHeartbeatInterval.bind(this)),
       t.on('error', this._stopPlaybackHeartbeatInterval.bind(this)),
       t.on('aderror', this._stopPlaybackHeartbeatInterval.bind(this)),
       t.on('adpause', this._stopPlaybackHeartbeatInterval.bind(this)),
       t.on('adended', this._stopPlaybackHeartbeatInterval.bind(this)),
       t.on('adbreakend', this._stopPlaybackHeartbeatInterval.bind(this)),
       t.on('seeked', function () {
        t.data.player_is_paused ? n._stopPlaybackHeartbeatInterval() : n._startPlaybackHeartbeatInterval();
       }),
       t.on('timeupdate', function () {
        null !== n._playbackHeartbeatInterval && t.emit('playbackheartbeat');
       }),
       t.on('devicesleep', function (e, i) {
        null !== n._playbackHeartbeatInterval && (Ce.default.clearInterval(n._playbackHeartbeatInterval), t.emit('playbackheartbeatend', { viewer_time: i.viewer_time }), (n._playbackHeartbeatInterval = null));
       });
     }
     return (
      te(e, [
       {
        key: '_startPlaybackHeartbeatInterval',
        value: function () {
         var e = this;
         null === this._playbackHeartbeatInterval &&
          (this.pm.emit('playbackheartbeat'),
          (this._playbackHeartbeatInterval = Ce.default.setInterval(function () {
           e.pm.emit('playbackheartbeat');
          }, this.pm.playbackHeartbeatTime)));
        },
       },
       {
        key: '_stopPlaybackHeartbeatInterval',
        value: function () {
         (this._playheadShouldBeProgressing = !1), null !== this._playbackHeartbeatInterval && (Ce.default.clearInterval(this._playbackHeartbeatInterval), this.pm.emit('playbackheartbeatend'), (this._playbackHeartbeatInterval = null));
        },
       },
      ]),
      e
     );
    })(),
    Le = De,
    Me = function e(t) {
     var n = this;
     J(this, e),
      ne(this, 'viewErrored', void 0),
      t.on('viewinit', function () {
       n.viewErrored = !1;
      }),
      t.on('error', function (e, i) {
       try {
        var a = t.errorTranslator({ player_error_code: i.player_error_code, player_error_message: i.player_error_message, player_error_context: i.player_error_context, player_error_severity: i.player_error_severity, player_error_business_exception: i.player_error_business_exception });
        a && ((t.data.player_error_code = a.player_error_code || i.player_error_code), (t.data.player_error_message = a.player_error_message || i.player_error_message), (t.data.player_error_context = a.player_error_context || i.player_error_context), (t.data.player_error_severity = a.player_error_severity || i.player_error_severity), (t.data.player_error_business_exception = a.player_error_business_exception || i.player_error_business_exception), (n.viewErrored = !0));
       } catch (Ra) {
        t.mux.log.warn('Exception in error translator callback.', Ra), (n.viewErrored = !0);
       }
      }),
      t.on('aftererror', function () {
       var e, n, i, a, r;
       null === (e = t.data) || void 0 === e || delete e.player_error_code, null === (n = t.data) || void 0 === n || delete n.player_error_message, null === (i = t.data) || void 0 === i || delete i.player_error_context, null === (a = t.data) || void 0 === a || delete a.player_error_severity, null === (r = t.data) || void 0 === r || delete r.player_error_business_exception;
      });
    },
    xe = (function () {
     function e(t) {
      J(this, e), ne(this, '_watchTimeTrackerLastCheckedTime', void 0), ne(this, 'pm', void 0), (this.pm = t), (this._watchTimeTrackerLastCheckedTime = null), t.on('playbackheartbeat', this._updateWatchTime.bind(this)), t.on('playbackheartbeatend', this._clearWatchTimeState.bind(this));
     }
     return (
      te(e, [
       {
        key: '_updateWatchTime',
        value: function (e, t) {
         var n = t.viewer_time;
         null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = n), me(this.pm.data, 'view_watch_time', n - this._watchTimeTrackerLastCheckedTime), (this._watchTimeTrackerLastCheckedTime = n);
        },
       },
       {
        key: '_clearWatchTimeState',
        value: function (e, t) {
         this._updateWatchTime(e, t), (this._watchTimeTrackerLastCheckedTime = null);
        },
       },
      ]),
      e
     );
    })(),
    Ne = xe,
    Oe = (function () {
     function e(t) {
      var n = this;
      J(this, e), ne(this, '_playbackTimeTrackerLastPlayheadPosition', void 0), ne(this, '_lastTime', void 0), ne(this, '_isAdPlaying', void 0), ne(this, '_callbackUpdatePlaybackTime', void 0), ne(this, 'pm', void 0), (this.pm = t), (this._playbackTimeTrackerLastPlayheadPosition = -1), (this._lastTime = H.now()), (this._isAdPlaying = !1), (this._callbackUpdatePlaybackTime = null);
      var i = this._startPlaybackTimeTracking.bind(this);
      t.on('playing', i), t.on('adplaying', i), t.on('seeked', i);
      var a = this._stopPlaybackTimeTracking.bind(this);
      t.on('playbackheartbeatend', a),
       t.on('seeking', a),
       t.on('adplaying', function () {
        n._isAdPlaying = !0;
       }),
       t.on('adended', function () {
        n._isAdPlaying = !1;
       }),
       t.on('adpause', function () {
        n._isAdPlaying = !1;
       }),
       t.on('adbreakstart', function () {
        n._isAdPlaying = !1;
       }),
       t.on('adbreakend', function () {
        n._isAdPlaying = !1;
       }),
       t.on('adplay', function () {
        n._isAdPlaying = !1;
       }),
       t.on('viewinit', function () {
        (n._playbackTimeTrackerLastPlayheadPosition = -1), (n._lastTime = H.now()), (n._isAdPlaying = !1), (n._callbackUpdatePlaybackTime = null);
       });
     }
     return (
      te(e, [
       {
        key: '_startPlaybackTimeTracking',
        value: function () {
         null === this._callbackUpdatePlaybackTime && ((this._callbackUpdatePlaybackTime = this._updatePlaybackTime.bind(this)), (this._playbackTimeTrackerLastPlayheadPosition = this.pm.data.player_playhead_time), this.pm.on('playbackheartbeat', this._callbackUpdatePlaybackTime));
        },
       },
       {
        key: '_stopPlaybackTimeTracking',
        value: function () {
         this._callbackUpdatePlaybackTime && (this._updatePlaybackTime(), this.pm.off('playbackheartbeat', this._callbackUpdatePlaybackTime), (this._callbackUpdatePlaybackTime = null), (this._playbackTimeTrackerLastPlayheadPosition = -1));
        },
       },
       {
        key: '_updatePlaybackTime',
        value: function () {
         var e = this.pm.data.player_playhead_time,
          t = H.now(),
          n = -1;
         this._playbackTimeTrackerLastPlayheadPosition >= 0 && e > this._playbackTimeTrackerLastPlayheadPosition ? (n = e - this._playbackTimeTrackerLastPlayheadPosition) : this._isAdPlaying && (n = t - this._lastTime), n > 0 && n <= 1e3 && me(this.pm.data, 'view_content_playback_time', n), (this._playbackTimeTrackerLastPlayheadPosition = e), (this._lastTime = t);
        },
       },
      ]),
      e
     );
    })(),
    Pe = Oe,
    Ue = (function () {
     function e(t) {
      J(this, e), ne(this, 'pm', void 0), (this.pm = t);
      var n = this._updatePlayheadTime.bind(this);
      t.on('playbackheartbeat', n),
       t.on('playbackheartbeatend', n),
       t.on('timeupdate', n),
       t.on('destroy', function () {
        t.off('timeupdate', n);
       });
     }
     return (
      te(e, [
       {
        key: '_updateMaxPlayheadPosition',
        value: function () {
         this.pm.data.view_max_playhead_position = void 0 === this.pm.data.view_max_playhead_position ? this.pm.data.player_playhead_time : Math.max(this.pm.data.view_max_playhead_position, this.pm.data.player_playhead_time);
        },
       },
       {
        key: '_updatePlayheadTime',
        value: function (e, t) {
         var n = this,
          i = function () {
           n.pm.currentFragmentPDT && n.pm.currentFragmentStart && (n.pm.data.player_program_time = n.pm.currentFragmentPDT + n.pm.data.player_playhead_time - n.pm.currentFragmentStart);
          };
         if (t && t.player_playhead_time) (this.pm.data.player_playhead_time = t.player_playhead_time), i(), this._updateMaxPlayheadPosition();
         else if (this.pm.getPlayheadTime) {
          var a = this.pm.getPlayheadTime();
          void 0 !== a && ((this.pm.data.player_playhead_time = a), i(), this._updateMaxPlayheadPosition());
         }
        },
       },
      ]),
      e
     );
    })(),
    He = Ue,
    We = 3e5,
    Be = function e(t) {
     if ((J(this, e), !t.disableRebufferTracking)) {
      var n,
       i = function (e, t) {
        a(t), (n = void 0);
       },
       a = function (e) {
        if (n) {
         var i = e.viewer_time - n;
         me(t.data, 'view_rebuffer_duration', i), (n = e.viewer_time), t.data.view_rebuffer_duration > We && (t.emit('viewend'), t.send('viewend'), t.mux.log.warn('Ending view after rebuffering for longer than '.concat(We, 'ms, future events will be ignored unless a programchange or videochange occurs.')));
        }
        t.data.view_watch_time >= 0 && t.data.view_rebuffer_count > 0 && ((t.data.view_rebuffer_frequency = t.data.view_rebuffer_count / t.data.view_watch_time), (t.data.view_rebuffer_percentage = t.data.view_rebuffer_duration / t.data.view_watch_time));
       };
      t.on('playbackheartbeat', function (e, t) {
       return a(t);
      }),
       t.on('rebufferstart', function (e, a) {
        n || (me(t.data, 'view_rebuffer_count', 1), (n = a.viewer_time), t.one('rebufferend', i));
       }),
       t.on('viewinit', function () {
        (n = void 0), t.off('rebufferend', i);
       });
     }
    },
    Ve = (function () {
     function e(t) {
      var n = this;
      J(this, e),
       ne(this, '_lastCheckedTime', void 0),
       ne(this, '_lastPlayheadTime', void 0),
       ne(this, '_lastPlayheadTimeUpdatedTime', void 0),
       ne(this, '_rebuffering', void 0),
       ne(this, 'pm', void 0),
       (this.pm = t),
       !t.disableRebufferTracking &&
        !t.disablePlayheadRebufferTracking &&
        ((this._lastCheckedTime = null),
        (this._lastPlayheadTime = null),
        (this._lastPlayheadTimeUpdatedTime = null),
        t.on('playbackheartbeat', this._checkIfRebuffering.bind(this)),
        t.on('playbackheartbeatend', this._cleanupRebufferTracker.bind(this)),
        t.on('seeking', function () {
         n._cleanupRebufferTracker(null, { viewer_time: H.now() });
        }));
     }
     return (
      te(e, [
       {
        key: '_checkIfRebuffering',
        value: function (e, t) {
         if (this.pm.seekingTracker.isSeeking || this.pm.adTracker.isAdBreak || !this.pm.playbackHeartbeat._playheadShouldBeProgressing) this._cleanupRebufferTracker(e, t);
         else if (null !== this._lastCheckedTime)
          if (this._lastPlayheadTime === this.pm.data.player_playhead_time) {
           var n = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
           'number' == typeof this.pm.sustainedRebufferThreshold && n >= this.pm.sustainedRebufferThreshold && (this._rebuffering || ((this._rebuffering = !0), this.pm.emit('rebufferstart', { viewer_time: this._lastPlayheadTimeUpdatedTime }))), (this._lastCheckedTime = t.viewer_time);
          } else this._cleanupRebufferTracker(e, t, !0);
         else this._prepareRebufferTrackerState(t.viewer_time);
        },
       },
       {
        key: '_clearRebufferTrackerState',
        value: function () {
         (this._lastCheckedTime = null), (this._lastPlayheadTime = null), (this._lastPlayheadTimeUpdatedTime = null);
        },
       },
       {
        key: '_prepareRebufferTrackerState',
        value: function (e) {
         (this._lastCheckedTime = e), (this._lastPlayheadTime = this.pm.data.player_playhead_time), (this._lastPlayheadTimeUpdatedTime = e);
        },
       },
       {
        key: '_cleanupRebufferTracker',
        value: function (e, t) {
         var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
         if (this._rebuffering) (this._rebuffering = !1), this.pm.emit('rebufferend', { viewer_time: t.viewer_time });
         else {
          if (null === this._lastCheckedTime) return;
          var i = this.pm.data.player_playhead_time - this._lastPlayheadTime,
           a = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
          'number' == typeof this.pm.minimumRebufferDuration && i > 0 && a - i > this.pm.minimumRebufferDuration && ((this._lastCheckedTime = null), this.pm.emit('rebufferstart', { viewer_time: this._lastPlayheadTimeUpdatedTime }), this.pm.emit('rebufferend', { viewer_time: this._lastPlayheadTimeUpdatedTime + a - i }));
         }
         n ? this._prepareRebufferTrackerState(t.viewer_time) : this._clearRebufferTrackerState();
        },
       },
      ]),
      e
     );
    })(),
    $e = Ve,
    qe = (function () {
     function e(t) {
      var n = this;
      J(this, e),
       ne(this, 'pm', void 0),
       (this.pm = t),
       t.on('viewinit', function () {
        var e = t.data,
         i = e.view_id;
        if (!e.view_program_changed) {
         var a = function (e, a) {
          var r = a.viewer_time;
          (('playing' === e.type && void 0 === t.data.view_time_to_first_frame) || ('adplaying' === e.type && (void 0 === t.data.view_time_to_first_frame || n._inPrerollPosition()))) && n.calculateTimeToFirstFrame(r || H.now(), i);
         };
         t.one('playing', a),
          t.one('adplaying', a),
          t.one('viewend', function () {
           t.off('playing', a), t.off('adplaying', a);
          });
        }
       });
     }
     return (
      te(e, [
       {
        key: '_inPrerollPosition',
        value: function () {
         return void 0 === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1e3;
        },
       },
       {
        key: 'calculateTimeToFirstFrame',
        value: function (e, t) {
         t === this.pm.data.view_id && (this.pm.watchTimeTracker._updateWatchTime(null, { viewer_time: e }), (this.pm.data.view_time_to_first_frame = this.pm.data.view_watch_time), (this.pm.data.player_autoplay_on || this.pm.data.video_is_autoplay) && this.pm.pageLoadInitTime && (this.pm.data.view_aggregate_startup_time = this.pm.data.view_start + this.pm.data.view_watch_time - this.pm.pageLoadInitTime));
        },
       },
      ]),
      e
     );
    })(),
    Ke = qe,
    Fe = function e(t) {
     var n = this;
     J(this, e),
      ne(this, '_lastPlayerHeight', void 0),
      ne(this, '_lastPlayerWidth', void 0),
      ne(this, '_lastPlayheadPosition', void 0),
      ne(this, '_lastSourceHeight', void 0),
      ne(this, '_lastSourceWidth', void 0),
      t.on('viewinit', function () {
       n._lastPlayheadPosition = -1;
      });
     ['pause', 'rebufferstart', 'seeking', 'error', 'adbreakstart', 'hb', 'renditionchange', 'orientationchange', 'viewend'].forEach(function (e) {
      t.on(e, function () {
       if (n._lastPlayheadPosition >= 0 && t.data.player_playhead_time >= 0 && n._lastPlayerWidth >= 0 && n._lastSourceWidth > 0 && n._lastPlayerHeight >= 0 && n._lastSourceHeight > 0) {
        var e = t.data.player_playhead_time - n._lastPlayheadPosition;
        if (e < 0) return void (n._lastPlayheadPosition = -1);
        var i = Math.min(n._lastPlayerWidth / n._lastSourceWidth, n._lastPlayerHeight / n._lastSourceHeight),
         a = Math.max(0, i - 1),
         r = Math.max(0, 1 - i);
        (t.data.view_max_upscale_percentage = Math.max(t.data.view_max_upscale_percentage || 0, a)), (t.data.view_max_downscale_percentage = Math.max(t.data.view_max_downscale_percentage || 0, r)), me(t.data, 'view_total_content_playback_time', e), me(t.data, 'view_total_upscaling', a * e), me(t.data, 'view_total_downscaling', r * e);
       }
       n._lastPlayheadPosition = -1;
      });
     }),
      ['playing', 'hb', 'renditionchange', 'orientationchange'].forEach(function (e) {
       t.on(e, function () {
        (n._lastPlayheadPosition = t.data.player_playhead_time), (n._lastPlayerWidth = t.data.player_width), (n._lastPlayerHeight = t.data.player_height), (n._lastSourceWidth = t.data.video_source_width), (n._lastSourceHeight = t.data.video_source_height);
       });
      });
    },
    Ye = function e(t) {
     var n = this;
     J(this, e), ne(this, 'isSeeking', void 0), (this.isSeeking = !1);
     var i = -1,
      a = function () {
       var e = H.now(),
        a = (t.data.viewer_time || e) - (i || e);
       me(t.data, 'view_seek_duration', a), (t.data.view_max_seek_time = Math.max(t.data.view_max_seek_time || 0, a)), (n.isSeeking = !1), (i = -1);
      };
     t.on('seeking', function (e, r) {
      Object.assign(t.data, r), n.isSeeking && r.viewer_time - i <= 2e3 ? (i = r.viewer_time) : (n.isSeeking && a(), (n.isSeeking = !0), (i = r.viewer_time), me(t.data, 'view_seek_count', 1), t.send('seeking'));
     }),
      t.on('seeked', function () {
       a();
      }),
      t.on('viewend', function () {
       n.isSeeking && (a(), t.send('seeked')), (n.isSeeking = !1), (i = -1);
      });
    },
    je = function (e, t) {
     e.push(t),
      e.sort(function (e, t) {
       return e.viewer_time - t.viewer_time;
      });
    },
    Ge = ['adbreakstart', 'adrequest', 'adresponse', 'adplay', 'adplaying', 'adpause', 'adended', 'adbreakend', 'aderror', 'adclicked', 'adskipped'],
    Qe = (function () {
     function e(t) {
      var n = this;
      J(this, e),
       ne(this, '_adHasPlayed', void 0),
       ne(this, '_adRequests', void 0),
       ne(this, '_adResponses', void 0),
       ne(this, '_currentAdRequestNumber', void 0),
       ne(this, '_currentAdResponseNumber', void 0),
       ne(this, '_prerollPlayTime', void 0),
       ne(this, '_wouldBeNewAdPlay', void 0),
       ne(this, 'isAdBreak', void 0),
       ne(this, 'pm', void 0),
       (this.pm = t),
       t.on('viewinit', function () {
        (n.isAdBreak = !1), (n._currentAdRequestNumber = 0), (n._currentAdResponseNumber = 0), (n._adRequests = []), (n._adResponses = []), (n._adHasPlayed = !1), (n._wouldBeNewAdPlay = !0), (n._prerollPlayTime = void 0);
       }),
       Ge.forEach(function (e) {
        return t.on(e, n._updateAdData.bind(n));
       });
      var i = function () {
       n.isAdBreak = !1;
      };
      t.on('adbreakstart', function () {
       n.isAdBreak = !0;
      }),
       t.on('play', i),
       t.on('playing', i),
       t.on('viewend', i),
       t.on('adrequest', function (e, i) {
        (i = Object.assign({ ad_request_id: 'generatedAdRequestId' + n._currentAdRequestNumber++ }, i)), je(n._adRequests, i), me(t.data, 'view_ad_request_count'), n.inPrerollPosition() && ((t.data.view_preroll_requested = !0), n._adHasPlayed || me(t.data, 'view_preroll_request_count'));
       }),
       t.on('adresponse', function (e, i) {
        (i = Object.assign({ ad_request_id: 'generatedAdRequestId' + n._currentAdResponseNumber++ }, i)), je(n._adResponses, i);
        var a = n.findAdRequest(i.ad_request_id);
        a && me(t.data, 'view_ad_request_time', Math.max(0, i.viewer_time - a.viewer_time));
       }),
       t.on('adplay', function (e, i) {
        (n._adHasPlayed = !0), n._wouldBeNewAdPlay && ((n._wouldBeNewAdPlay = !1), me(t.data, 'view_ad_played_count')), n.inPrerollPosition() && !t.data.view_preroll_played && ((t.data.view_preroll_played = !0), n._adRequests.length > 0 && (t.data.view_preroll_request_time = Math.max(0, i.viewer_time - n._adRequests[0].viewer_time)), t.data.view_start && (t.data.view_startup_preroll_request_time = Math.max(0, i.viewer_time - t.data.view_start)), (n._prerollPlayTime = i.viewer_time));
       }),
       t.on('adplaying', function (e, i) {
        n.inPrerollPosition() && void 0 === t.data.view_preroll_load_time && void 0 !== n._prerollPlayTime && ((t.data.view_preroll_load_time = i.viewer_time - n._prerollPlayTime), (t.data.view_startup_preroll_load_time = i.viewer_time - n._prerollPlayTime));
       }),
       t.on('adclicked', function (e, i) {
        n._wouldBeNewAdPlay || me(t.data, 'view_ad_clicked_count');
       }),
       t.on('adskipped', function (e, i) {
        n._wouldBeNewAdPlay || me(t.data, 'view_ad_skipped_count');
       }),
       t.on('adended', function () {
        n._wouldBeNewAdPlay = !0;
       }),
       t.on('aderror', function () {
        n._wouldBeNewAdPlay = !0;
       });
     }
     return (
      te(e, [
       {
        key: 'inPrerollPosition',
        value: function () {
         return void 0 === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1e3;
        },
       },
       {
        key: 'findAdRequest',
        value: function (e) {
         for (var t = 0; t < this._adRequests.length; t++) if (this._adRequests[t].ad_request_id === e) return this._adRequests[t];
        },
       },
       {
        key: '_updateAdData',
        value: function (e, t) {
         if (this.inPrerollPosition()) {
          if (!this.pm.data.view_preroll_ad_tag_hostname && t.ad_tag_url) {
           var n = x(de(t.ad_tag_url), 2),
            i = n[0],
            a = n[1];
           (this.pm.data.view_preroll_ad_tag_domain = a), (this.pm.data.view_preroll_ad_tag_hostname = i);
          }
          if (!this.pm.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
           var r = x(de(t.ad_asset_url), 2),
            s = r[0],
            o = r[1];
           (this.pm.data.view_preroll_ad_asset_domain = o), (this.pm.data.view_preroll_ad_asset_hostname = s);
          }
         }
         (this.pm.data.ad_asset_url = null == t ? void 0 : t.ad_asset_url), (this.pm.data.ad_tag_url = null == t ? void 0 : t.ad_tag_url), (this.pm.data.ad_creative_id = null == t ? void 0 : t.ad_creative_id), (this.pm.data.ad_id = null == t ? void 0 : t.ad_id), (this.pm.data.ad_universal_id = null == t ? void 0 : t.ad_universal_id);
        },
       },
      ]),
      e
     );
    })(),
    Ze = Qe,
    ze = h(m()),
    Xe = function e(t) {
     J(this, e);
     var n,
      i,
      a = function () {
       t.disableRebufferTracking || (n && (me(t.data, 'view_waiting_rebuffer_duration', H.now() - n), (n = !1), ze.default.clearInterval(i)));
      },
      r = !1,
      s = function () {
       (r = !1), a();
      };
     t.on('waiting', function () {
      r &&
       (t.disableRebufferTracking ||
        (me(t.data, 'view_waiting_rebuffer_count', 1),
        (n = H.now()),
        (i = ze.default.setInterval(function () {
         if (n) {
          var e = H.now();
          me(t.data, 'view_waiting_rebuffer_duration', e - n), (n = e);
         }
        }, 250))));
     }),
      t.on('playing', function () {
       a(), (r = !0);
      }),
      t.on('pause', s),
      t.on('seeking', s);
    },
    Je = function e(t) {
     var n = this;
     J(this, e), ne(this, 'lastWallClockTime', void 0);
     var i = function () {
       (n.lastWallClockTime = H.now()), t.on('before*', a);
      },
      a = function (e) {
       var i = H.now(),
        a = n.lastWallClockTime;
       (n.lastWallClockTime = i), i - a > 3e4 && (t.emit('devicesleep', { viewer_time: a }), Object.assign(t.data, { viewer_time: a }), t.send('devicesleep'), t.emit('devicewake', { viewer_time: i }), Object.assign(t.data, { viewer_time: i }), t.send('devicewake'));
      };
     t.one('playbackheartbeat', i),
      t.on('playbackheartbeatend', function () {
       t.off('before*', a), t.one('playbackheartbeat', i);
      });
    },
    et = h(m()),
    tt = (function () {
     var e = function () {
      for (var e = 0, t = {}; e < arguments.length; e++) {
       var n = arguments[e];
       for (var i in n) t[i] = n[i];
      }
      return t;
     };
     function t(n) {
      function i(t, a, r) {
       var s;
       if ('undefined' != typeof document) {
        if (arguments.length > 1) {
         if ('number' == typeof (r = e({ path: '/' }, i.defaults, r)).expires) {
          var o = new Date();
          o.setMilliseconds(o.getMilliseconds() + 864e5 * r.expires), (r.expires = o);
         }
         try {
          (s = JSON.stringify(a)), /^[\{\[]/.test(s) && (a = s);
         } catch (jn) {}
         return (a = n.write ? n.write(a, t) : encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)), (t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape)), (document.cookie = [t, '=', a, r.expires ? '; expires=' + r.expires.toUTCString() : '', r.path ? '; path=' + r.path : '', r.domain ? '; domain=' + r.domain : '', r.secure ? '; secure' : ''].join(''));
        }
        t || (s = {});
        for (var l = document.cookie ? document.cookie.split('; ') : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < l.length; u++) {
         var c = l[u].split('='),
          h = c.slice(1).join('=');
         '"' === h.charAt(0) && (h = h.slice(1, -1));
         try {
          var m = c[0].replace(d, decodeURIComponent);
          if (((h = n.read ? n.read(h, m) : n(h, m) || h.replace(d, decodeURIComponent)), this.json))
           try {
            h = JSON.parse(h);
           } catch (jn) {}
          if (t === m) {
           s = h;
           break;
          }
          t || (s[m] = h);
         } catch (jn) {}
        }
        return s;
       }
      }
      return (
       (i.set = i),
       (i.get = function (e) {
        return i.call(i, e);
       }),
       (i.getJSON = function () {
        return i.apply({ json: !0 }, [].slice.call(arguments));
       }),
       (i.defaults = {}),
       (i.remove = function (t, n) {
        i(t, '', e(n, { expires: -1 }));
       }),
       (i.withConverter = t),
       i
      );
     }
     return t(function () {});
    })(),
    nt = 'muxData',
    it = function () {
     var e;
     try {
      e = (function (e) {
       return e.split('&').reduce(function (e, t) {
        var n = x(t.split('='), 2),
         i = n[0],
         a = n[1],
         r = +a,
         s = a && r == a ? r : a;
        return (e[i] = s), e;
       }, {});
      })(tt.get(nt) || '');
     } catch ($r) {
      e = {};
     }
     return e;
    },
    at = function (e) {
     try {
      tt.set(
       nt,
       (function (e) {
        return Object.entries(e)
         .map(function (e) {
          var t = x(e, 2),
           n = t[0],
           i = t[1];
          return ''.concat(n, '=').concat(i);
         })
         .join('&');
       })(e),
       { expires: 365 },
      );
     } catch ($r) {}
    };
   var rt = h(m()),
    st = function () {
     var e;
     switch (ot()) {
      case 'cellular':
       e = 'cellular';
       break;
      case 'ethernet':
       e = 'wired';
       break;
      case 'wifi':
       e = 'wifi';
       break;
      case void 0:
       break;
      default:
       e = 'other';
     }
     return e;
    },
    ot = function () {
     var e = rt.default.navigator,
      t = e && (e.connection || e.mozConnection || e.webkitConnection);
     return t && t.type;
    };
   st.getConnectionFromAPI = ot;
   var lt = st,
    dt = ct({ a: 'env', b: 'beacon', c: 'custom', d: 'ad', e: 'event', f: 'experiment', i: 'internal', m: 'mux', n: 'response', p: 'player', q: 'request', r: 'retry', s: 'session', t: 'timestamp', u: 'viewer', v: 'video', w: 'page', x: 'view', y: 'sub' }),
    ut = ct({ ad: 'ad', af: 'affiliate', ag: 'aggregate', ap: 'api', al: 'application', ao: 'audio', ar: 'architecture', as: 'asset', au: 'autoplay', av: 'average', bi: 'bitrate', bn: 'brand', br: 'break', bw: 'browser', by: 'bytes', bz: 'business', ca: 'cached', cb: 'cancel', cc: 'codec', cd: 'code', cg: 'category', ch: 'changed', ci: 'client', ck: 'clicked', cl: 'canceled', cm: 'cmcd', cn: 'config', co: 'count', ce: 'counter', cp: 'complete', cq: 'creator', cr: 'creative', cs: 'captions', ct: 'content', cu: 'current', cx: 'connection', cz: 'context', dg: 'downscaling', dm: 'domain', dn: 'cdn', do: 'downscale', dr: 'drm', dp: 'dropped', du: 'duration', dv: 'device', dy: 'dynamic', eb: 'enabled', ec: 'encoding', ed: 'edge', en: 'end', eg: 'engine', em: 'embed', er: 'error', ep: 'experiments', es: 'errorcode', et: 'errortext', ee: 'event', ev: 'events', ex: 'expires', ez: 'exception', fa: 'failed', fi: 'first', fm: 'family', ft: 'format', fp: 'fps', fq: 'frequency', fr: 'frame', fs: 'fullscreen', ha: 'has', hb: 'holdback', he: 'headers', ho: 'host', hn: 'hostname', ht: 'height', id: 'id', ii: 'init', in: 'instance', ip: 'ip', is: 'is', ke: 'key', la: 'language', lb: 'labeled', le: 'level', li: 'live', ld: 'loaded', lo: 'load', ls: 'lists', lt: 'latency', ma: 'max', md: 'media', me: 'message', mf: 'manifest', mi: 'mime', ml: 'midroll', mm: 'min', mn: 'manufacturer', mo: 'model', mx: 'mux', ne: 'newest', nm: 'name', no: 'number', on: 'on', or: 'origin', os: 'os', pa: 'paused', pb: 'playback', pd: 'producer', pe: 'percentage', pf: 'played', pg: 'program', ph: 'playhead', pi: 'plugin', pl: 'preroll', pn: 'playing', po: 'poster', pp: 'pip', pr: 'preload', ps: 'position', pt: 'part', pv: 'previous', py: 'property', px: 'pop', pz: 'plan', ra: 'rate', rd: 'requested', re: 'rebuffer', rf: 'rendition', rg: 'range', rm: 'remote', ro: 'ratio', rp: 'response', rq: 'request', rs: 'requests', sa: 'sample', sd: 'skipped', se: 'session', sh: 'shift', sk: 'seek', sm: 'stream', so: 'source', sq: 'sequence', sr: 'series', ss: 'status', st: 'start', su: 'startup', sv: 'server', sw: 'software', sy: 'severity', ta: 'tag', tc: 'tech', te: 'text', tg: 'target', th: 'throughput', ti: 'time', tl: 'total', to: 'to', tt: 'title', ty: 'type', ug: 'upscaling', un: 'universal', up: 'upscale', ur: 'url', us: 'user', va: 'variant', vd: 'viewed', vi: 'video', ve: 'version', vw: 'view', vr: 'viewer', wd: 'width', wa: 'watch', wt: 'waiting' });
   function ct(e) {
    var t = {};
    for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
    return t;
   }
   function ht(e) {
    var t = {},
     n = {};
    return (
     Object.keys(e).forEach(function (i) {
      var a = !1;
      if (e.hasOwnProperty(i) && void 0 !== e[i]) {
       var r = i.split('_'),
        s = r[0],
        o = dt[s];
       o || (Q.info('Data key word `' + r[0] + '` not expected in ' + i), (o = s + '_')),
        r.splice(1).forEach(function (e) {
         'url' === e && (a = !0), ut[e] ? (o += ut[e]) : Number.isInteger(Number(e)) ? (o += e) : (Q.info('Data key word `' + e + '` not expected in ' + i), (o += '_' + e + '_'));
        }),
        a ? (n[o] = e[i]) : (t[o] = e[i]);
      }
     }),
     Object.assign(t, n)
    );
   }
   var mt = h(m()),
    pt = h(D()),
    vt = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 1e4, maxPayloadKBSize: 500 },
    bt = ['hb', 'requestcompleted', 'requestfailed', 'requestcanceled'],
    gt = function (e) {
     var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
     (this._beaconUrl = e || 'https://img.litix.io'), (this._eventQueue = []), (this._postInFlight = !1), (this._resendAfterPost = !1), (this._failureCount = 0), (this._sendTimeout = !1), (this._options = Object.assign({}, vt, t));
    };
   (gt.prototype.queueEvent = function (e, t) {
    var n = Object.assign({}, t);
    return (this._eventQueue.length <= this._options.maxQueueLength || 'eventrateexceeded' === e) && (this._eventQueue.push(n), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength);
   }),
    (gt.prototype.flushEvents = function () {
     arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && 1 === this._eventQueue.length ? this._eventQueue.pop() : (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending());
    }),
    (gt.prototype.destroy = function () {
     var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
     (this.destroyed = !0), e ? this._clearBeaconQueue() : this.flushEvents(), mt.default.clearTimeout(this._sendTimeout);
    }),
    (gt.prototype._clearBeaconQueue = function () {
     var e = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0,
      t = this._eventQueue.slice(e);
     e > 0 && Object.assign(t[t.length - 1], ht({ mux_view_message: 'event queue truncated' }));
     var n = this._createPayload(t);
     ft(this._beaconUrl, n, !0, function () {});
    }),
    (gt.prototype._sendBeaconQueue = function () {
     var e = this;
     if (this._postInFlight) this._resendAfterPost = !0;
     else {
      var t = this._eventQueue.slice(0, this._options.maxBeaconSize);
      (this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize)), (this._postInFlight = !0);
      var n = this._createPayload(t),
       i = H.now();
      ft(this._beaconUrl, n, !1, function (n, a) {
       a ? ((e._eventQueue = t.concat(e._eventQueue)), (e._failureCount += 1), Q.info('Error sending beacon: ' + a)) : (e._failureCount = 0), (e._roundTripTime = H.now() - i), (e._postInFlight = !1), e._resendAfterPost && ((e._resendAfterPost = !1), e._eventQueue.length > 0 && e._sendBeaconQueue());
      });
     }
    }),
    (gt.prototype._getNextBeaconTime = function () {
     if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
     var e = Math.pow(2, this._failureCount - 1);
     return (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons;
    }),
    (gt.prototype._startBeaconSending = function () {
     var e = this;
     mt.default.clearTimeout(this._sendTimeout),
      !this.destroyed &&
       (this._sendTimeout = mt.default.setTimeout(function () {
        e._eventQueue.length && e._sendBeaconQueue(), e._startBeaconSending();
       }, this._getNextBeaconTime()));
    }),
    (gt.prototype._createPayload = function (e) {
     var t = this,
      n = { transmission_timestamp: Math.round(H.now()) };
     this._roundTripTime && (n.rtt_ms = Math.round(this._roundTripTime));
     var i,
      a,
      r,
      s = function () {
       (i = JSON.stringify({ metadata: n, events: a || e })), (r = i.length / 1024);
      },
      o = function () {
       return r <= t._options.maxPayloadKBSize;
      };
     return (
      s(),
      o() ||
       (Q.info('Payload size is too big (' + r + ' kb). Removing unnecessary events.'),
       (a = e.filter(function (e) {
        return -1 === bt.indexOf(e.e);
       })),
       s()),
      o() ||
       (Q.info('Payload size still too big (' + r + ' kb). Cropping fields..'),
       a.forEach(function (e) {
        for (var t in e) {
         var n = e[t];
         'string' == typeof n && n.length > 51200 && (e[t] = n.substring(0, 51200));
        }
       }),
       s()),
      i
     );
    });
   var Et =
     'function' == typeof pt.default.exitPictureInPicture
      ? function (e) {
         return e.length <= 57344;
        }
      : function (e) {
         return !1;
        },
    ft = function (e, t, n, i) {
     if (n && navigator && navigator.sendBeacon && navigator.sendBeacon(e, t)) i();
     else if (mt.default.fetch)
      mt.default
       .fetch(e, { method: 'POST', body: t, headers: { 'Content-Type': 'text/plain' }, keepalive: Et(t) })
       .then(function (e) {
        return i(null, e.ok ? null : 'Error');
       })
       .catch(function (e) {
        return i(null, e);
       });
     else {
      if (mt.default.XMLHttpRequest) {
       var a = new mt.default.XMLHttpRequest();
       return (
        (a.onreadystatechange = function () {
         if (4 === a.readyState) return i(null, 200 !== a.status ? 'error' : void 0);
        }),
        a.open('POST', e),
        a.setRequestHeader('Content-Type', 'text/plain'),
        void a.send(t)
       );
      }
      i();
     }
    },
    yt = gt,
    _t = ['env_key', 'view_id', 'view_sequence_number', 'player_sequence_number', 'beacon_domain', 'player_playhead_time', 'viewer_time', 'mux_api_version', 'event', 'video_id', 'player_instance_id', 'player_error_code', 'player_error_message', 'player_error_context', 'player_error_severity', 'player_error_business_exception'],
    Tt = ['adplay', 'adplaying', 'adpause', 'adfirstquartile', 'admidpoint', 'adthirdquartile', 'adended', 'adresponse', 'adrequest'],
    At = ['ad_id', 'ad_creative_id', 'ad_universal_id'],
    kt = ['viewstart', 'error', 'ended', 'viewend'],
    wt = (function () {
     function e(t, n) {
      var i,
       a,
       r,
       s,
       o,
       l,
       d,
       u,
       c,
       h,
       m,
       p,
       v,
       b,
       g,
       E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      J(this, e),
       ne(this, 'mux', void 0),
       ne(this, 'envKey', void 0),
       ne(this, 'options', void 0),
       ne(this, 'eventQueue', void 0),
       ne(this, 'sampleRate', void 0),
       ne(this, 'disableCookies', void 0),
       ne(this, 'respectDoNotTrack', void 0),
       ne(this, 'previousBeaconData', void 0),
       ne(this, 'lastEventTime', void 0),
       ne(this, 'rateLimited', void 0),
       ne(this, 'pageLevelData', void 0),
       ne(this, 'viewerData', void 0),
       (this.mux = t),
       (this.envKey = n),
       (this.options = E),
       (this.previousBeaconData = null),
       (this.lastEventTime = 0),
       (this.rateLimited = !1),
       (this.eventQueue = new yt(
        (function (e, t) {
         var n = t.beaconCollectionDomain,
          i = t.beaconDomain;
         if (n) return 'https://' + n;
         var a = i || 'litix.io';
         return (e = e || 'inferred').match(/^[a-z0-9]+$/) ? 'https://' + e + '.' + a : 'https://img.litix.io/a.gif';
        })(this.envKey, this.options),
       )),
       (this.sampleRate = null !== (v = this.options.sampleRate) && void 0 !== v ? v : 1),
       (this.disableCookies = null !== (b = this.options.disableCookies) && void 0 !== b && b),
       (this.respectDoNotTrack = null !== (g = this.options.respectDoNotTrack) && void 0 !== g && g),
       (this.previousBeaconData = null),
       (this.lastEventTime = 0),
       (this.rateLimited = !1),
       (this.pageLevelData = { mux_api_version: this.mux.API_VERSION, mux_embed: this.mux.NAME, mux_embed_version: this.mux.VERSION, viewer_application_name: null === (i = this.options.platform) || void 0 === i ? void 0 : i.name, viewer_application_version: null === (a = this.options.platform) || void 0 === a ? void 0 : a.version, viewer_application_engine: null === (r = this.options.platform) || void 0 === r ? void 0 : r.layout, viewer_device_name: null === (s = this.options.platform) || void 0 === s ? void 0 : s.product, viewer_device_category: '', viewer_device_manufacturer: null === (o = this.options.platform) || void 0 === o ? void 0 : o.manufacturer, viewer_os_family: null === (d = this.options.platform) || void 0 === d || null === (l = d.os) || void 0 === l ? void 0 : l.family, viewer_os_architecture: null === (c = this.options.platform) || void 0 === c || null === (u = c.os) || void 0 === u ? void 0 : u.architecture, viewer_os_version: null === (m = this.options.platform) || void 0 === m || null === (h = m.os) || void 0 === h ? void 0 : h.version, viewer_connection_type: lt(), page_url: null === et.default || void 0 === et.default || null === (p = et.default.location) || void 0 === p ? void 0 : p.href }),
       (this.viewerData = this.disableCookies
        ? {}
        : (function () {
           var e = it();
           return (e.mux_viewer_id = e.mux_viewer_id || W()), (e.msn = e.msn || Math.random()), at(e), { mux_viewer_id: e.mux_viewer_id, mux_sample_number: e.msn };
          })());
     }
     return (
      te(e, [
       {
        key: 'send',
        value: function (e, t) {
         if (e && null != t && t.view_id) {
          if (this.respectDoNotTrack && z()) return Q.info('Not sending `' + e + '` because Do Not Track is enabled');
          if (!t || 'object' != typeof t) return Q.error('A data object was expected in send() but was not provided');
          var n = this.disableCookies
            ? {}
            : (function () {
               var e = it(),
                t = H.now();
               return e.session_start && ((e.sst = e.session_start), delete e.session_start), e.session_id && ((e.sid = e.session_id), delete e.session_id), e.session_expires && ((e.sex = e.session_expires), delete e.session_expires), (!e.sex || e.sex < t) && ((e.sid = W()), (e.sst = t)), (e.sex = t + 15e5), at(e), { session_id: e.sid, session_start: e.sst, session_expires: e.sex };
              })(),
           i = ve(pe({}, this.pageLevelData, t, n, this.viewerData), { event: e, env_key: this.envKey });
          i.user_id && ((i.viewer_user_id = i.user_id), delete i.user_id);
          var a,
           r = (null !== (a = i.mux_sample_number) && void 0 !== a ? a : 0) >= this.sampleRate,
           s = ht(this._deduplicateBeaconData(e, i));
          if (((this.lastEventTime = this.mux.utils.now()), r)) return Q.info('Not sending event due to sample rate restriction', e, i, s);
          if ((this.envKey || Q.info('Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL', e, i, s), !this.rateLimited))
           if ((Q.info('Sending event', e, i, s), (this.rateLimited = !this.eventQueue.queueEvent(e, s)), this.mux.WINDOW_UNLOADING && 'viewend' === e)) this.eventQueue.destroy(!0);
           else if ((this.mux.WINDOW_HIDDEN && 'hb' === e ? this.eventQueue.flushEvents(!0) : kt.indexOf(e) >= 0 && this.eventQueue.flushEvents(), this.rateLimited)) return (i.event = 'eventrateexceeded'), (s = ht(i)), this.eventQueue.queueEvent(i.event, s), Q.error('Beaconing disabled due to rate limit.');
         }
        },
       },
       {
        key: 'destroy',
        value: function () {
         this.eventQueue.destroy(!1);
        },
       },
       {
        key: '_deduplicateBeaconData',
        value: function (e, t) {
         var n = this,
          i = {},
          a = t.view_id;
         if ('-1' === a || 'viewstart' === e || 'viewend' === e || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= 6e5) (i = pe({}, t)), a && (this.previousBeaconData = i), a && 'viewend' === e && (this.previousBeaconData = null);
         else {
          var r = 0 === e.indexOf('request');
          Object.entries(t).forEach(function (t) {
           var a = x(t, 2),
            s = a[0],
            o = a[1];
           n.previousBeaconData && (o !== n.previousBeaconData[s] || _t.indexOf(s) > -1 || n.objectHasChanged(r, s, o, n.previousBeaconData[s]) || n.eventRequiresKey(e, s)) && ((i[s] = o), (n.previousBeaconData[s] = o));
          });
         }
         return i;
        },
       },
       {
        key: 'objectHasChanged',
        value: function (e, t, n, i) {
         return !(!e || 0 !== t.indexOf('request_')) && ('request_response_headers' === t || 'object' != typeof n || 'object' != typeof i || Object.keys(n || {}).length !== Object.keys(i || {}).length);
        },
       },
       {
        key: 'eventRequiresKey',
        value: function (e, t) {
         return !!(('renditionchange' === e && 0 === t.indexOf('video_source_')) || (At.includes(t) && Tt.includes(e)));
        },
       },
      ]),
      e
     );
    })(),
    It = function e(t) {
     J(this, e);
     var n = 0,
      i = 0,
      a = 0,
      r = 0,
      s = 0,
      o = 0,
      l = 0;
     t.on('requestcompleted', function (e, o) {
      var l,
       d,
       u = o.request_start,
       c = o.request_response_start,
       h = o.request_response_end,
       m = o.request_bytes_loaded;
      if ((r++, c ? ((l = c - (null != u ? u : 0)), (d = (null != h ? h : 0) - c)) : (d = (null != h ? h : 0) - (null != u ? u : 0)), d > 0 && m && m > 0)) {
       var p = (m / d) * 8e3;
       s++, (i += m), (a += d), (t.data.view_min_request_throughput = Math.min(t.data.view_min_request_throughput || 1 / 0, p)), (t.data.view_average_request_throughput = (i / a) * 8e3), (t.data.view_request_count = r), l > 0 && ((n += l), (t.data.view_max_request_latency = Math.max(t.data.view_max_request_latency || 0, l)), (t.data.view_average_request_latency = n / s));
      }
     }),
      t.on('requestfailed', function (e, n) {
       r++, o++, (t.data.view_request_count = r), (t.data.view_request_failed_count = o);
      }),
      t.on('requestcanceled', function (e, n) {
       r++, l++, (t.data.view_request_count = r), (t.data.view_request_canceled_count = l);
      });
    },
    St = function e(t) {
     var n = this;
     J(this, e),
      ne(this, '_lastEventTime', void 0),
      t.on('before*', function (e, i) {
       var a = i.viewer_time,
        r = H.now(),
        s = n._lastEventTime;
       if (((n._lastEventTime = r), s && r - s > 36e5)) {
        var o = Object.keys(t.data).reduce(function (e, n) {
         return 0 === n.indexOf('video_') ? Object.assign(e, ne({}, n, t.data[n])) : e;
        }, {});
        t.mux.log.info('Received event after at least an hour inactivity, creating a new view');
        var l = t.playbackHeartbeat._playheadShouldBeProgressing;
        t._resetView(Object.assign({ viewer_time: a }, o)), (t.playbackHeartbeat._playheadShouldBeProgressing = l), t.playbackHeartbeat._playheadShouldBeProgressing && 'play' !== e.type && 'adbreakstart' !== e.type && (t.emit('play', { viewer_time: a }), 'playing' !== e.type && t.emit('playing', { viewer_time: a }));
       }
      });
    };
   function Rt(e, t) {
    return (null == e ? void 0 : e.toLowerCase()) === (null == t ? void 0 : t.toLowerCase());
   }
   var Ct = function e(t) {
     J(this, e);
     var n = function (e) {
       var n = (function (e) {
         var t;
         return null != e && e.request_type && ('media' === e.request_type || 'video' === e.request_type) && null !== (t = e.request_response_headers) && void 0 !== t && t['x-cdn'] ? e.request_response_headers['x-cdn'] : null != e && e.video_cdn ? e.video_cdn : null;
        })(e),
        i = (function (e) {
         return null != e && e.request_start ? e.request_start : null != e && e.viewer_time ? e.viewer_time : Date.now();
        })(e);
       if (null != n && !Rt(n, r) && s <= i) {
        (r = n), (s = i);
        var a = { video_cdn: n };
        t.emit('cdnchange', a);
       }
      },
      i = null,
      a = null,
      r = null,
      s = 0;
     t.on('viewinit', function () {
      (i = null), (a = null), (r = null), (s = 0);
     }),
      t.on('beforecdnchange', function (e, t) {
       var n = null == t ? void 0 : t.video_cdn;
       n && (void 0 === t.video_previous_cdn || null === t.video_previous_cdn) && (Rt(n, a) ? (t.video_previous_cdn = null != i ? i : void 0) : ((t.video_previous_cdn = null != a ? a : void 0), (i = a), (a = n)));
      }),
      t.on('requestcompleted', function (e, t) {
       n(t);
      });
    },
    Dt = ['viewstart', 'ended', 'loadstart', 'pause', 'play', 'playing', 'ratechange', 'waiting', 'adplay', 'adpause', 'adended', 'aderror', 'adplaying', 'adrequest', 'adresponse', 'adbreakstart', 'adbreakend', 'adfirstquartile', 'admidpoint', 'adthirdquartile', 'rebufferstart', 'rebufferend', 'seeked', 'error', 'hb', 'requestcompleted', 'requestfailed', 'requestcanceled', 'renditionchange', 'cdnchange'],
    Lt = new Set(['requestcompleted', 'requestfailed', 'requestcanceled']),
    Mt = (function (e) {
     !(function (e, t) {
      if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
      (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && re(e, t);
     })(n, e);
     var t = oe(n);
     function n(e, i, a) {
      var r;
      J(this, n), ne(X((r = t.call(this))), 'pageLoadEndTime', void 0), ne(X(r), 'pageLoadInitTime', void 0), ne(X(r), '_destroyed', void 0), ne(X(r), '_heartBeatTimeout', void 0), ne(X(r), 'adTracker', void 0), ne(X(r), 'dashjs', void 0), ne(X(r), 'data', void 0), ne(X(r), 'disablePlayheadRebufferTracking', void 0), ne(X(r), 'disableRebufferTracking', void 0), ne(X(r), 'errorTracker', void 0), ne(X(r), 'errorTranslator', void 0), ne(X(r), 'emitTranslator', void 0), ne(X(r), 'getAdData', void 0), ne(X(r), 'getPlayheadTime', void 0), ne(X(r), 'getStateData', void 0), ne(X(r), 'stateDataTranslator', void 0), ne(X(r), 'hlsjs', void 0), ne(X(r), 'id', void 0), ne(X(r), 'longResumeTracker', void 0), ne(X(r), 'minimumRebufferDuration', void 0), ne(X(r), 'mux', void 0), ne(X(r), 'playbackEventDispatcher', void 0), ne(X(r), 'playbackHeartbeat', void 0), ne(X(r), 'playbackHeartbeatTime', void 0), ne(X(r), 'playheadTime', void 0), ne(X(r), 'seekingTracker', void 0), ne(X(r), 'sustainedRebufferThreshold', void 0), ne(X(r), 'watchTimeTracker', void 0), ne(X(r), 'currentFragmentPDT', void 0), ne(X(r), 'currentFragmentStart', void 0), (r.pageLoadInitTime = he.navigationStart()), (r.pageLoadEndTime = he.domContentLoadedEventEnd());
      var s = {
       debug: !1,
       minimumRebufferDuration: 250,
       sustainedRebufferThreshold: 1e3,
       playbackHeartbeatTime: 25,
       beaconDomain: 'litix.io',
       sampleRate: 1,
       disableCookies: !1,
       respectDoNotTrack: !1,
       disableRebufferTracking: !1,
       disablePlayheadRebufferTracking: !1,
       errorTranslator: function (e) {
        return e;
       },
       emitTranslator: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t;
       },
       stateDataTranslator: function (e) {
        return e;
       },
      };
      (r.mux = e),
       (r.id = i),
       null != a && a.beaconDomain && r.mux.log.warn('The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.'),
       ((a = Object.assign(s, a)).data = a.data || {}),
       a.data.property_key && ((a.data.env_key = a.data.property_key), delete a.data.property_key),
       (Q.level = a.debug ? F : j),
       (r.getPlayheadTime = a.getPlayheadTime),
       (r.getStateData =
        a.getStateData ||
        function () {
         return {};
        }),
       (r.getAdData = a.getAdData || function () {}),
       (r.minimumRebufferDuration = a.minimumRebufferDuration),
       (r.sustainedRebufferThreshold = a.sustainedRebufferThreshold),
       (r.playbackHeartbeatTime = a.playbackHeartbeatTime),
       (r.disableRebufferTracking = a.disableRebufferTracking),
       r.disableRebufferTracking && r.mux.log.warn('Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.'),
       (r.disablePlayheadRebufferTracking = a.disablePlayheadRebufferTracking),
       (r.errorTranslator = a.errorTranslator),
       (r.emitTranslator = a.emitTranslator),
       (r.stateDataTranslator = a.stateDataTranslator),
       (r.playbackEventDispatcher = new wt(e, a.data.env_key, a)),
       (r.data = { player_instance_id: W(), mux_sample_rate: a.sampleRate, beacon_domain: a.beaconCollectionDomain || a.beaconDomain }),
       (r.data.view_sequence_number = 1),
       (r.data.player_sequence_number = 1);
      var o = function () {
       void 0 === this.data.view_start && ((this.data.view_start = this.mux.utils.now()), this.emit('viewstart'));
      }.bind(X(r));
      if (
       (r.on('viewinit', function (e, t) {
        this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), Object.assign(this.data, t), this._initializeViewData(), this.one('play', o), this.one('adbreakstart', o);
       }),
       r.on('videochange', function (e, t) {
        this._resetView(t);
       }),
       r.on('programchange', function (e, t) {
        this.data.player_is_paused && this.mux.log.warn('The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information.'), this._resetView(Object.assign(t, { view_program_changed: !0 })), o(), this.emit('play'), this.emit('playing');
       }),
       r.on('fragmentchange', function (e, t) {
        (this.currentFragmentPDT = t.currentFragmentPDT), (this.currentFragmentStart = t.currentFragmentStart);
       }),
       r.on('destroy', r.destroy),
       'undefined' != typeof window && 'function' == typeof window.addEventListener && 'function' == typeof window.removeEventListener)
      ) {
       var l = function () {
        var e = void 0 !== r.data.view_start;
        (r.mux.WINDOW_HIDDEN = 'hidden' === document.visibilityState), e && r.mux.WINDOW_HIDDEN && (r.data.player_is_paused || r.emit('hb'));
       };
       window.addEventListener('visibilitychange', l, !1);
       var d = function (e) {
        e.persisted || r.destroy();
       };
       window.addEventListener('pagehide', d, !1),
        r.on('destroy', function () {
         window.removeEventListener('visibilitychange', l), window.removeEventListener('pagehide', d);
        });
      }
      r.on('playerready', function (e, t) {
       Object.assign(this.data, t);
      }),
       Dt.forEach(function (e) {
        r.on(e, function (t, n) {
         0 !== e.indexOf('ad') && this._updateStateData(), Object.assign(this.data, n), this._sanitizeData();
        }),
         r.on('after' + e, function () {
          ('error' !== e || this.errorTracker.viewErrored) && this.send(e);
         });
       }),
       r.on('viewend', function (e, t) {
        Object.assign(r.data, t);
       });
      return (
       r.one('playerready', function (e) {
        var t = this.mux.utils.now();
        this.data.player_init_time && (this.data.player_startup_time = t - this.data.player_init_time), (this.pageLoadInitTime = this.data.page_load_init_time || this.pageLoadInitTime), (this.pageLoadEndTime = this.data.page_load_end_time || this.pageLoadEndTime), !this.mux.PLAYER_TRACKED && this.pageLoadInitTime && ((this.mux.PLAYER_TRACKED = !0), (this.data.player_init_time || this.pageLoadEndTime) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.pageLoadEndTime || 1 / 0) - this.pageLoadInitTime)), this.send('playerready'), delete this.data.player_startup_time, delete this.data.page_load_time;
       }),
       (r.longResumeTracker = new St(X(r))),
       (r.errorTracker = new Me(X(r))),
       new Je(X(r)),
       (r.seekingTracker = new Ye(X(r))),
       (r.playheadTime = new He(X(r))),
       (r.playbackHeartbeat = new Le(X(r))),
       new Fe(X(r)),
       (r.watchTimeTracker = new Ne(X(r))),
       new Pe(X(r)),
       (r.adTracker = new Ze(X(r))),
       new $e(X(r)),
       new Be(X(r)),
       new Ke(X(r)),
       new Xe(X(r)),
       new It(X(r)),
       new Ct(X(r)),
       a.hlsjs && r.addHLSJS(a),
       a.dashjs && r.addDashJS(a),
       r.emit('viewinit', a.data),
       r
      );
     }
     return (
      te(n, [
       {
        key: 'emit',
        value: function (e, t) {
         var i,
          a = Object.assign({ viewer_time: this.mux.utils.now() }, t),
          r = [e, a];
         if (this.emitTranslator)
          try {
           r = this.emitTranslator(e, a);
          } catch (bn) {
           this.mux.log.warn('Exception in emit translator callback.', bn);
          }
         null != r && r.length && (i = ae(ie(n.prototype), 'emit', this)).call.apply(i, [this].concat(q(r)));
        },
       },
       {
        key: 'destroy',
        value: function () {
         this._destroyed || ((this._destroyed = !0), void 0 !== this.data.view_start && (this.emit('viewend'), this.send('viewend')), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), window.clearTimeout(this._heartBeatTimeout));
        },
       },
       {
        key: 'send',
        value: function (e) {
         if (this.data.view_id) {
          var t = Object.assign({}, this.data);
          if (
           (void 0 === t.video_source_is_live && (t.player_source_duration === 1 / 0 || t.video_source_duration === 1 / 0 ? (t.video_source_is_live = !0) : (t.player_source_duration > 0 || t.video_source_duration > 0) && (t.video_source_is_live = !1)),
           t.video_source_is_live ||
            ['player_program_time', 'player_manifest_newest_program_time', 'player_live_edge_program_time', 'player_program_time', 'video_holdback', 'video_part_holdback', 'video_target_duration', 'video_part_target_duration'].forEach(function (e) {
             t[e] = void 0;
            }),
           (t.video_source_url = t.video_source_url || t.player_source_url),
           t.video_source_url)
          ) {
           var n = x(de(t.video_source_url), 2),
            i = n[0],
            a = n[1];
           (t.video_source_domain = a), (t.video_source_hostname = i);
          }
          delete t.ad_request_id, this.playbackEventDispatcher.send(e, t), this.data.view_sequence_number++, this.data.player_sequence_number++, Lt.has(e) || this._restartHeartBeat(), 'viewend' === e && delete this.data.view_id;
         }
        },
       },
       {
        key: '_resetView',
        value: function (e) {
         this.emit('viewend'), this.send('viewend'), this.emit('viewinit', e);
        },
       },
       {
        key: '_updateStateData',
        value: function () {
         var e,
          t = this.getStateData();
         if ('function' == typeof this.stateDataTranslator)
          try {
           t = this.stateDataTranslator(t);
          } catch (n) {
           this.mux.log.warn('Exception in stateDataTranslator translator callback.', n);
          }
         if (null !== (e = this.data) && void 0 !== e && e.video_cdn && null != t && t.video_cdn) {
          t.video_cdn;
          t = se(t, ['video_cdn']);
         }
         Object.assign(this.data, t), this.playheadTime._updatePlayheadTime(), this._sanitizeData();
        },
       },
       {
        key: '_sanitizeData',
        value: function () {
         var e = this;
         ['player_width', 'player_height', 'video_source_width', 'video_source_height', 'player_playhead_time', 'video_source_bitrate'].forEach(function (t) {
          var n = parseInt(e.data[t], 10);
          e.data[t] = isNaN(n) ? void 0 : n;
         });
         ['player_source_url', 'video_source_url'].forEach(function (t) {
          if (e.data[t]) {
           var n = e.data[t].toLowerCase();
           (0 === n.indexOf('data:') || 0 === n.indexOf('blob:')) && (e.data[t] = 'MSE style URL');
          }
         });
        },
       },
       {
        key: '_resetVideoData',
        value: function () {
         var e = this;
         Object.keys(this.data).forEach(function (t) {
          0 === t.indexOf('video_') && delete e.data[t];
         });
        },
       },
       {
        key: '_resetViewData',
        value: function () {
         var e = this;
         Object.keys(this.data).forEach(function (t) {
          0 === t.indexOf('view_') && delete e.data[t];
         }),
          (this.data.view_sequence_number = 1);
        },
       },
       {
        key: '_resetErrorData',
        value: function () {
         delete this.data.player_error_code, delete this.data.player_error_message, delete this.data.player_error_context, delete this.data.player_error_severity, delete this.data.player_error_business_exception;
        },
       },
       {
        key: '_initializeViewData',
        value: function () {
         var e = this,
          t = (this.data.view_id = W()),
          n = function () {
           t === e.data.view_id && me(e.data, 'player_view_count', 1);
          };
         this.data.player_is_paused ? this.one('play', n) : n();
        },
       },
       {
        key: '_restartHeartBeat',
        value: function () {
         var e = this;
         window.clearTimeout(this._heartBeatTimeout),
          (this._heartBeatTimeout = window.setTimeout(function () {
           e.data.player_is_paused || e.emit('hb');
          }, 1e4));
        },
       },
       {
        key: 'addHLSJS',
        value: function (e) {
         e.hlsjs
          ? this.hlsjs
            ? this.mux.log.warn('An instance of HLS.js is already being monitored for this player.')
            : ((this.hlsjs = e.hlsjs),
              (function (e, t, n) {
               var i = arguments.length > 4 ? arguments[4] : void 0,
                a = e.log,
                r = e.utils.secondsToMs,
                s = function (e) {
                 var t,
                  n = parseInt(i.version);
                 return 1 === n && null !== e.programDateTime && (t = e.programDateTime), 0 === n && null !== e.pdt && (t = e.pdt), t;
                };
               if (he.exists()) {
                var o = function (n, i) {
                  return e.emit(t, n, i);
                 },
                 l = function (e, t) {
                  var n = t.levels,
                   i = t.audioTracks,
                   a = t.url,
                   r = t.stats,
                   s = t.networkDetails,
                   l = t.sessionData,
                   d = {},
                   u = {};
                  n.forEach(function (e, t) {
                   d[t] = { width: e.width, height: e.height, bitrate: e.bitrate, attrs: e.attrs };
                  }),
                   i.forEach(function (e, t) {
                    u[t] = { name: e.name, language: e.lang, bitrate: e.bitrate };
                   });
                  var c = _e(r),
                   h = c.bytesLoaded,
                   m = c.requestStart,
                   p = c.responseStart,
                   v = c.responseEnd;
                  o('requestcompleted', ve(pe({}, ye(l)), { request_event_type: e, request_bytes_loaded: h, request_start: m, request_response_start: p, request_response_end: v, request_type: 'manifest', request_hostname: le(a), request_response_headers: Te(s), request_rendition_lists: { media: d, audio: u, video: {} } }));
                 };
                n.on(i.Events.MANIFEST_LOADED, l);
                var d = function (e, t) {
                 var n = t.details,
                  i = t.level,
                  a = t.networkDetails,
                  l = t.stats,
                  d = _e(l),
                  u = d.bytesLoaded,
                  c = d.requestStart,
                  h = d.responseStart,
                  m = d.responseEnd,
                  p = n.fragments[n.fragments.length - 1],
                  v = s(p) + r(p.duration);
                 o('requestcompleted', { request_event_type: e, request_bytes_loaded: u, request_start: c, request_response_start: h, request_response_end: m, request_current_level: i, request_type: 'manifest', request_hostname: le(n.url), request_response_headers: Te(a), video_holdback: n.holdBack && r(n.holdBack), video_part_holdback: n.partHoldBack && r(n.partHoldBack), video_part_target_duration: n.partTarget && r(n.partTarget), video_target_duration: n.targetduration && r(n.targetduration), video_source_is_live: n.live, player_manifest_newest_program_time: isNaN(v) ? void 0 : v });
                };
                n.on(i.Events.LEVEL_LOADED, d);
                var u = function (e, t) {
                 var n = t.details,
                  i = t.networkDetails,
                  a = t.stats,
                  r = _e(a),
                  s = r.bytesLoaded,
                  l = r.requestStart,
                  d = r.responseStart,
                  u = r.responseEnd;
                 o('requestcompleted', { request_event_type: e, request_bytes_loaded: s, request_start: l, request_response_start: d, request_response_end: u, request_type: 'manifest', request_hostname: le(n.url), request_response_headers: Te(i) });
                };
                n.on(i.Events.AUDIO_TRACK_LOADED, u);
                var c = function (e, t) {
                 var i = t.stats,
                  a = t.networkDetails,
                  r = t.frag;
                 i = i || r.stats;
                 var s = _e(i),
                  l = s.bytesLoaded,
                  d = s.requestStart,
                  u = s.responseStart,
                  c = s.responseEnd,
                  h = a ? Te(a) : void 0,
                  m = { request_event_type: e, request_bytes_loaded: l, request_start: d, request_response_start: u, request_response_end: c, request_hostname: a ? le(a.responseURL) : void 0, request_id: h ? fe(h) : void 0, request_response_headers: h, request_media_duration: r.duration, request_url: null == a ? void 0 : a.responseURL };
                 'main' === r.type ? ((m.request_type = 'media'), (m.request_current_level = r.level), (m.request_video_width = (n.levels[r.level] || {}).width), (m.request_video_height = (n.levels[r.level] || {}).height), (m.request_labeled_bitrate = (n.levels[r.level] || {}).bitrate)) : (m.request_type = r.type), o('requestcompleted', m);
                };
                n.on(i.Events.FRAG_LOADED, c);
                var h = function (e, t) {
                 var n = t.frag,
                  i = n.start,
                  a = { currentFragmentPDT: s(n), currentFragmentStart: r(i) };
                 o('fragmentchange', a);
                };
                n.on(i.Events.FRAG_CHANGED, h);
                var m = function (e, t) {
                 var n = t.type,
                  a = t.details,
                  r = t.response,
                  s = t.fatal,
                  l = t.frag,
                  d = t.networkDetails,
                  u = (null == l ? void 0 : l.url) || t.url || '',
                  c = d ? Te(d) : void 0;
                 if (((a === i.ErrorDetails.MANIFEST_LOAD_ERROR || a === i.ErrorDetails.MANIFEST_LOAD_TIMEOUT || a === i.ErrorDetails.FRAG_LOAD_ERROR || a === i.ErrorDetails.FRAG_LOAD_TIMEOUT || a === i.ErrorDetails.LEVEL_LOAD_ERROR || a === i.ErrorDetails.LEVEL_LOAD_TIMEOUT || a === i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || a === i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT || a === i.ErrorDetails.SUBTITLE_LOAD_ERROR || a === i.ErrorDetails.SUBTITLE_LOAD_TIMEOUT || a === i.ErrorDetails.KEY_LOAD_ERROR || a === i.ErrorDetails.KEY_LOAD_TIMEOUT) && o('requestfailed', { request_error: a, request_url: u, request_hostname: le(u), request_id: c ? fe(c) : void 0, request_type: a === i.ErrorDetails.FRAG_LOAD_ERROR || a === i.ErrorDetails.FRAG_LOAD_TIMEOUT ? 'media' : a === i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || a === i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ? 'audio' : a === i.ErrorDetails.SUBTITLE_LOAD_ERROR || a === i.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ? 'subtitle' : a === i.ErrorDetails.KEY_LOAD_ERROR || a === i.ErrorDetails.KEY_LOAD_TIMEOUT ? 'encryption' : 'manifest', request_error_code: null == r ? void 0 : r.code, request_error_text: null == r ? void 0 : r.text }), s)) {
                  var h,
                   m = ''.concat(u ? 'url: '.concat(u, '\n') : '') + ''.concat(r && (r.code || r.text) ? 'response: '.concat(r.code, ', ').concat(r.text, '\n') : '') + ''.concat(t.reason ? 'failure reason: '.concat(t.reason, '\n') : '') + ''.concat(t.level ? 'level: '.concat(t.level, '\n') : '') + ''.concat(t.parent ? 'parent stream controller: '.concat(t.parent, '\n') : '') + ''.concat(t.buffer ? 'buffer length: '.concat(t.buffer, '\n') : '') + ''.concat(t.error ? 'error: '.concat(t.error, '\n') : '') + ''.concat(t.event ? 'event: '.concat(t.event, '\n') : '') + ''.concat(t.err ? 'error message: '.concat(null === (h = t.err) || void 0 === h ? void 0 : h.message, '\n') : '');
                  o('error', { player_error_code: n, player_error_message: a, player_error_context: m });
                 }
                };
                n.on(i.Events.ERROR, m);
                var p = function (e, t) {
                 var n = t.frag,
                  i = (n && n._url) || '';
                 o('requestcanceled', { request_event_type: e, request_url: i, request_type: 'media', request_hostname: le(i) });
                };
                n.on(i.Events.FRAG_LOAD_EMERGENCY_ABORTED, p);
                var v = function (e, t) {
                 var i = t.level,
                  r = n.levels[i];
                 if (r && r.attrs && r.attrs.BANDWIDTH) {
                  var s,
                   l = r.attrs.BANDWIDTH,
                   d = parseFloat(r.attrs['FRAME-RATE']);
                  isNaN(d) || (s = d), l ? o('renditionchange', { video_source_fps: s, video_source_bitrate: l, video_source_width: r.width, video_source_height: r.height, video_source_rendition_name: r.name, video_source_codec: null == r ? void 0 : r.videoCodec }) : a.warn('missing BANDWIDTH from HLS manifest parsed by HLS.js');
                 }
                };
                n.on(i.Events.LEVEL_SWITCHED, v),
                 (n._stopMuxMonitor = function () {
                  n.off(i.Events.MANIFEST_LOADED, l), n.off(i.Events.LEVEL_LOADED, d), n.off(i.Events.AUDIO_TRACK_LOADED, u), n.off(i.Events.FRAG_LOADED, c), n.off(i.Events.FRAG_CHANGED, h), n.off(i.Events.ERROR, m), n.off(i.Events.FRAG_LOAD_EMERGENCY_ABORTED, p), n.off(i.Events.LEVEL_SWITCHED, v), n.off(i.Events.DESTROYING, n._stopMuxMonitor), delete n._stopMuxMonitor;
                 }),
                 n.on(i.Events.DESTROYING, n._stopMuxMonitor);
               } else a.warn('performance timing not supported. Not tracking HLS.js.');
              })(this.mux, this.id, e.hlsjs, {}, e.Hls || window.Hls))
          : this.mux.log.warn('You must pass a valid hlsjs instance in order to track it.');
        },
       },
       {
        key: 'removeHLSJS',
        value: function () {
         this.hlsjs &&
          ((function (e) {
           e && 'function' == typeof e._stopMuxMonitor && e._stopMuxMonitor();
          })(this.hlsjs),
          (this.hlsjs = void 0));
        },
       },
       {
        key: 'addDashJS',
        value: function (e) {
         e.dashjs ? (this.dashjs ? this.mux.log.warn('An instance of Dash.js is already being monitored for this player.') : ((this.dashjs = e.dashjs), we(this.mux, this.id, e.dashjs))) : this.mux.log.warn('You must pass a valid dashjs instance in order to track it.');
        },
       },
       {
        key: 'removeDashJS',
        value: function () {
         this.dashjs &&
          ((function (e) {
           e && 'function' == typeof e._stopMuxMonitor && e._stopMuxMonitor();
          })(this.dashjs),
          (this.dashjs = void 0));
        },
       },
      ]),
      n
     );
    })(Re),
    xt = Mt,
    Nt = h(D());
   var Ot = ['loadstart', 'pause', 'play', 'playing', 'seeking', 'seeked', 'timeupdate', 'ratechange', 'stalled', 'waiting', 'error', 'ended'],
    Pt = { 1: 'MEDIA_ERR_ABORTED', 2: 'MEDIA_ERR_NETWORK', 3: 'MEDIA_ERR_DECODE', 4: 'MEDIA_ERR_SRC_NOT_SUPPORTED' };
   var Ut,
    Ht = h(m());
   Ht.default && Ht.default.WeakMap && (Ut = new WeakMap());
   var Wt = '#EXT-X-TARGETDURATION',
    Bt = '#EXT-X-PART-INF',
    Vt = '#EXT-X-SERVER-CONTROL',
    $t = '#EXTINF',
    qt = '#EXT-X-PROGRAM-DATE-TIME',
    Kt = '#EXT-X-VERSION',
    Ft = '#EXT-X-SESSION-DATA',
    Yt = function (e) {
     return (this.buffer = ''), (this.manifest = { segments: [], serverControl: {}, sessionData: {} }), (this.currentUri = {}), this.process(e), this.manifest;
    };
   (Yt.prototype.process = function (e) {
    var t;
    for (this.buffer += e, t = this.buffer.indexOf('\n'); t > -1; t = this.buffer.indexOf('\n')) this.processLine(this.buffer.substring(0, t)), (this.buffer = this.buffer.substring(t + 1));
   }),
    (Yt.prototype.processLine = function (e) {
     var t = e.indexOf(':'),
      n = Jt(e, t),
      i = n[0],
      a = 2 === n.length ? Qt(n[1]) : void 0;
     if ('#' !== i[0]) (this.currentUri.uri = i), this.manifest.segments.push(this.currentUri), this.manifest.targetDuration && !('duration' in this.currentUri) && (this.currentUri.duration = this.manifest.targetDuration), (this.currentUri = {});
     else
      switch (i) {
       case Wt:
        if (!isFinite(a) || a < 0) return;
        (this.manifest.targetDuration = a), this.setHoldBack();
        break;
       case Bt:
        jt(this.manifest, n), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), this.setHoldBack();
        break;
       case Vt:
        jt(this.manifest, n), this.setHoldBack();
        break;
       case $t:
        0 === a ? (this.currentUri.duration = 0.01) : a > 0 && (this.currentUri.duration = a);
        break;
       case qt:
        var r = a,
         s = new Date(r);
        this.manifest.dateTimeString || ((this.manifest.dateTimeString = r), (this.manifest.dateTimeObject = s)), (this.currentUri.dateTimeString = r), (this.currentUri.dateTimeObject = s);
        break;
       case Kt:
        jt(this.manifest, n);
        break;
       case Ft:
        var o = en(n[1]),
         l = ye(o);
        Object.assign(this.manifest.sessionData, l);
      }
    }),
    (Yt.prototype.setHoldBack = function () {
     var e = this.manifest,
      t = e.serverControl,
      n = e.targetDuration,
      i = e.partTargetDuration;
     if (t) {
      var a = 'holdBack',
       r = 'partHoldBack',
       s = n && 3 * n,
       o = i && 2 * i;
      n && !t.hasOwnProperty(a) && (t[a] = s), s && t[a] < s && (t[a] = s), i && !t.hasOwnProperty(r) && (t[r] = 3 * i), i && t[r] < o && (t[r] = o);
     }
    });
   var jt = function (e, t) {
     var n,
      i = Gt(t[0].replace('#EXT-X-', ''));
     Xt(t[1]) ? ((n = {}), (n = Object.assign(zt(t[1]), n))) : (n = Qt(t[1])), (e[i] = n);
    },
    Gt = function (e) {
     return e.toLowerCase().replace(/-(\w)/g, function (e) {
      return e[1].toUpperCase();
     });
    },
    Qt = function (e) {
     if ('yes' === e.toLowerCase() || 'no' === e.toLowerCase()) return 'yes' === e.toLowerCase();
     var t = -1 !== e.indexOf(':') ? e : parseFloat(e);
     return isNaN(t) ? e : t;
    },
    Zt = function (e) {
     var t = {},
      n = e.split('=');
     n.length > 1 && (t[Gt(n[0])] = Qt(n[1]));
     return t;
    },
    zt = function (e) {
     for (var t = e.split(','), n = {}, i = 0; t.length > i; i++) {
      var a = t[i],
       r = Zt(a);
      n = Object.assign(r, n);
     }
     return n;
    },
    Xt = function (e) {
     return e.indexOf('=') > -1;
    },
    Jt = function (e, t) {
     return -1 === t ? [e] : [e.substring(0, t), e.substring(t + 1)];
    },
    en = function (e) {
     var t = {};
     if (e) {
      var n = e.search(',');
      return (
       [e.slice(0, n), e.slice(n + 1)].forEach(function (e, n) {
        for (var i = e.replace(/['"]+/g, '').split('='), a = 0; a < i.length; a++) 'DATA-ID' === i[a] && (t['DATA-ID'] = i[1 - a]), 'VALUE' === i[a] && (t.VALUE = i[1 - a]);
       }),
       { data: t }
      );
     }
    },
    tn = Yt,
    nn = {
     safeCall: function (e, t, n, i) {
      var a = i;
      if (e && 'function' == typeof e[t])
       try {
        a = e[t].apply(e, n);
       } catch (Ia) {
        Q.info('safeCall error', Ia);
       }
      return a;
     },
     safeIncrement: me,
     getComputedStyle: function (e, t) {
      return e && t && Ht.default && 'function' == typeof Ht.default.getComputedStyle ? (Ut && Ut.has(e) && (n = Ut.get(e)), n || ((n = Ht.default.getComputedStyle(e, null)), Ut && Ut.set(e, n)), n.getPropertyValue(t)) : '';
      var n;
     },
     secondsToMs: function (e) {
      return Math.floor(1e3 * e);
     },
     assign: Object.assign,
     headersStringToObject: Ee,
     cdnHeadersToRequestId: fe,
     extractHostnameAndDomain: de,
     extractHostname: le,
     manifestParser: tn,
     generateShortID: B,
     generateUUID: W,
     now: H.now,
     findMediaElement: $,
    },
    an = nn,
    rn = { PLAYER_READY: 'playerready', VIEW_INIT: 'viewinit', VIDEO_CHANGE: 'videochange', PLAY: 'play', PAUSE: 'pause', PLAYING: 'playing', TIME_UPDATE: 'timeupdate', SEEKING: 'seeking', SEEKED: 'seeked', REBUFFER_START: 'rebufferstart', REBUFFER_END: 'rebufferend', ERROR: 'error', ENDED: 'ended', RENDITION_CHANGE: 'renditionchange', ORIENTATION_CHANGE: 'orientationchange', AD_REQUEST: 'adrequest', AD_RESPONSE: 'adresponse', AD_BREAK_START: 'adbreakstart', AD_PLAY: 'adplay', AD_PLAYING: 'adplaying', AD_PAUSE: 'adpause', AD_FIRST_QUARTILE: 'adfirstquartile', AD_MID_POINT: 'admidpoint', AD_THIRD_QUARTILE: 'adthirdquartile', AD_ENDED: 'adended', AD_BREAK_END: 'adbreakend', AD_ERROR: 'aderror', REQUEST_COMPLETED: 'requestcompleted', REQUEST_FAILED: 'requestfailed', REQUEST_CANCELLED: 'requestcanceled', HEARTBEAT: 'hb', DESTROY: 'destroy' },
    sn = {},
    on = function (e) {
     var t = arguments;
     'string' == typeof e
      ? on.hasOwnProperty(e)
        ? N.default.setTimeout(function () {
           (t = Array.prototype.splice.call(t, 1)), on[e].apply(null, t);
          }, 0)
        : Q.warn('`' + e + '` is an unknown task')
      : 'function' == typeof e
        ? N.default.setTimeout(function () {
           e(on);
          }, 0)
        : Q.warn('`' + e + '` is invalid.');
    },
    ln = {
     loaded: H.now(),
     NAME: 'mux-embed',
     VERSION: '5.11.0',
     API_VERSION: '2.1',
     PLAYER_TRACKED: !1,
     monitor: function (e, t) {
      return (function (e, t, n) {
       var i = x($(t), 3),
        a = i[0],
        r = i[1],
        s = i[2],
        o = e.log,
        l = e.utils.getComputedStyle,
        d = e.utils.secondsToMs;
       if (!a) return o.error('No element was found with the `' + r + '` query selector.');
       if ('video' !== s && 'audio' !== s) return o.error('The element of `' + r + '` was not a media element.');
       a.mux && (a.mux.destroy(), delete a.mux, o.warn('Already monitoring this video element, replacing existing event listeners'));
       var u = {
        getPlayheadTime: function () {
         return d(a.currentTime);
        },
        getStateData: function () {
         var e,
          t,
          n = (null === (e = this.getPlayheadTime) || void 0 === e ? void 0 : e.call(this)) || d(a.currentTime),
          i = this.hlsjs && this.hlsjs.url,
          r = this.dashjs && 'function' == typeof this.dashjs.getSource && this.dashjs.getSource(),
          s = { player_is_paused: a.paused, player_width: parseInt(l(a, 'width')), player_height: parseInt(l(a, 'height')), player_autoplay_on: a.autoplay, player_preload_on: a.preload, player_language_code: a.lang, player_is_fullscreen: Nt.default && !!(Nt.default.fullscreenElement || Nt.default.webkitFullscreenElement || Nt.default.mozFullScreenElement || Nt.default.msFullscreenElement), video_poster_url: a.poster, video_source_url: i || r || a.currentSrc, video_source_duration: d(a.duration), video_source_height: a.videoHeight, video_source_width: a.videoWidth, view_dropped_frame_count: null == a || null === (t = a.getVideoPlaybackQuality) || void 0 === t ? void 0 : t.call(a).droppedVideoFrames };
         if (a.getStartDate && n > 0) {
          var o = a.getStartDate();
          if (o && 'function' == typeof o.getTime && o.getTime()) {
           var u = o.getTime();
           if (((s.player_program_time = u + n), a.seekable.length > 0)) {
            var c = u + a.seekable.end(a.seekable.length - 1);
            s.player_live_edge_program_time = c;
           }
          }
         }
         return s;
        },
       };
       ((n = Object.assign({ automaticErrorTracking: !0 }, n, u)).data = Object.assign({ player_software: 'HTML5 Video Element', player_mux_plugin_name: 'VideoElementMonitor', player_mux_plugin_version: e.VERSION }, n.data)),
        (a.mux = a.mux || {}),
        (a.mux.deleted = !1),
        (a.mux.emit = function (t, n) {
         e.emit(r, t, n);
        }),
        (a.mux.updateData = function (e) {
         a.mux.emit('hb', e);
        });
       var c = function () {
        o.error('The monitor for this video element has already been destroyed.');
       };
       (a.mux.destroy = function () {
        Object.keys(a.mux.listeners).forEach(function (e) {
         a.removeEventListener(e, a.mux.listeners[e], !1);
        }),
         delete a.mux.listeners,
         (a.mux.destroy = c),
         (a.mux.swapElement = c),
         (a.mux.emit = c),
         (a.mux.addHLSJS = c),
         (a.mux.addDashJS = c),
         (a.mux.removeHLSJS = c),
         (a.mux.removeDashJS = c),
         (a.mux.updateData = c),
         (a.mux.setEmitTranslator = c),
         (a.mux.setStateDataTranslator = c),
         (a.mux.setGetPlayheadTime = c),
         (a.mux.deleted = !0),
         e.emit(r, 'destroy');
       }),
        (a.mux.swapElement = function (t) {
         var n = x($(t), 3),
          i = n[0],
          r = n[1],
          s = n[2];
         return i
          ? 'video' !== s && 'audio' !== s
            ? e.log.error('The element of `' + r + '` was not a media element.')
            : ((i.muxId = a.muxId),
              delete a.muxId,
              (i.mux = i.mux || {}),
              (i.mux.listeners = Object.assign({}, a.mux.listeners)),
              delete a.mux.listeners,
              Object.keys(i.mux.listeners).forEach(function (e) {
               a.removeEventListener(e, i.mux.listeners[e], !1), i.addEventListener(e, i.mux.listeners[e], !1);
              }),
              (i.mux.swapElement = a.mux.swapElement),
              (i.mux.destroy = a.mux.destroy),
              delete a.mux,
              void (a = i))
          : e.log.error('No element was found with the `' + r + '` query selector.');
        }),
        (a.mux.addHLSJS = function (t) {
         e.addHLSJS(r, t);
        }),
        (a.mux.addDashJS = function (t) {
         e.addDashJS(r, t);
        }),
        (a.mux.removeHLSJS = function () {
         e.removeHLSJS(r);
        }),
        (a.mux.removeDashJS = function () {
         e.removeDashJS(r);
        }),
        (a.mux.setEmitTranslator = function (t) {
         e.setEmitTranslator(r, t);
        }),
        (a.mux.setStateDataTranslator = function (t) {
         e.setStateDataTranslator(r, t);
        }),
        (a.mux.setGetPlayheadTime = function (t) {
         t || (t = n.getPlayheadTime), e.setGetPlayheadTime(r, t);
        }),
        e.init(r, n),
        e.emit(r, 'playerready'),
        a.paused || (e.emit(r, 'play'), a.readyState > 2 && e.emit(r, 'playing')),
        (a.mux.listeners = {}),
        Ot.forEach(function (t) {
         ('error' === t && !n.automaticErrorTracking) ||
          ((a.mux.listeners[t] = function () {
           var n = {};
           if ('error' === t) {
            if (!a.error || 1 === a.error.code) return;
            (n.player_error_code = a.error.code), (n.player_error_message = Pt[a.error.code] || a.error.message);
           }
           e.emit(r, t, n);
          }),
          a.addEventListener(t, a.mux.listeners[t], !1));
        });
      })(on, e, t);
     },
     destroyMonitor: function (e) {
      var t = x($(e), 1)[0];
      t && t.mux && 'function' == typeof t.mux.destroy ? t.mux.destroy() : Q.error('A video element monitor for `' + e + '` has not been initialized via `mux.monitor`.');
     },
     addHLSJS: function (e, t) {
      var n = V(e);
      sn[n] ? sn[n].addHLSJS(t) : Q.error('A monitor for `' + n + '` has not been initialized.');
     },
     addDashJS: function (e, t) {
      var n = V(e);
      sn[n] ? sn[n].addDashJS(t) : Q.error('A monitor for `' + n + '` has not been initialized.');
     },
     removeHLSJS: function (e) {
      var t = V(e);
      sn[t] ? sn[t].removeHLSJS() : Q.error('A monitor for `' + t + '` has not been initialized.');
     },
     removeDashJS: function (e) {
      var t = V(e);
      sn[t] ? sn[t].removeDashJS() : Q.error('A monitor for `' + t + '` has not been initialized.');
     },
     init: function (e, t) {
      z() && t && t.respectDoNotTrack && Q.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
      var n = V(e);
      sn[n] = new xt(on, n, t);
     },
     emit: function (e, t, n) {
      var i = V(e);
      sn[i] ? (sn[i].emit(t, n), 'destroy' === t && delete sn[i]) : Q.error('A monitor for `' + i + '` has not been initialized.');
     },
     updateData: function (e, t) {
      var n = V(e);
      sn[n] ? sn[n].emit('hb', t) : Q.error('A monitor for `' + n + '` has not been initialized.');
     },
     setEmitTranslator: function (e, t) {
      var n = V(e);
      sn[n] ? (sn[n].emitTranslator = t) : Q.error('A monitor for `' + n + '` has not been initialized.');
     },
     setStateDataTranslator: function (e, t) {
      var n = V(e);
      sn[n] ? (sn[n].stateDataTranslator = t) : Q.error('A monitor for `' + n + '` has not been initialized.');
     },
     setGetPlayheadTime: function (e, t) {
      var n = V(e);
      sn[n] ? (sn[n].getPlayheadTime = t) : Q.error('A monitor for `' + n + '` has not been initialized.');
     },
     checkDoNotTrack: z,
     log: Q,
     utils: an,
     events: rn,
     WINDOW_HIDDEN: !1,
     WINDOW_UNLOADING: !1,
    };
   Object.assign(on, ln),
    void 0 !== N.default &&
     'function' == typeof N.default.addEventListener &&
     N.default.addEventListener(
      'pagehide',
      function (e) {
       e.persisted || (on.WINDOW_UNLOADING = !0);
      },
      !1,
     );
   var dn = on,
    un = n(91899).ZP,
    cn = 'video',
    hn = 'drm',
    mn = { NOT_AN_ERROR: 0, NETWORK_OFFLINE: 2000002, NETWORK_UNKNOWN_ERROR: 2e6, NETWORK_NO_STATUS: 2000001, NETWORK_INVALID_URL: 24e5, NETWORK_NOT_FOUND: 2404e3, NETWORK_NOT_READY: 2412e3, NETWORK_GENERIC_SERVER_FAIL: 25e5, NETWORK_TOKEN_MISSING: 2403201, NETWORK_TOKEN_MALFORMED: 2412202, NETWORK_TOKEN_EXPIRED: 2403210, NETWORK_TOKEN_AUD_MISSING: 2403221, NETWORK_TOKEN_AUD_MISMATCH: 2403222, NETWORK_TOKEN_SUB_MISMATCH: 2403232, ENCRYPTED_ERROR: 5e6, ENCRYPTED_UNSUPPORTED_KEY_SYSTEM: 5000001, ENCRYPTED_GENERATE_REQUEST_FAILED: 5000002, ENCRYPTED_UPDATE_LICENSE_FAILED: 5000003, ENCRYPTED_UPDATE_SERVER_CERT_FAILED: 5000004, ENCRYPTED_CDM_ERROR: 5000005, ENCRYPTED_OUTPUT_RESTRICTED: 5000006, ENCRYPTED_MISSING_TOKEN: 5000002 },
    pn = (e) => (e === cn ? 'playback' : e),
    vn = class e extends Error {
     constructor(t, n = e.MEDIA_ERR_CUSTOM, i, a) {
      var r;
      super(t), (this.name = 'MediaError'), (this.code = n), (this.context = a), (this.fatal = null != i ? i : n >= e.MEDIA_ERR_NETWORK && n <= e.MEDIA_ERR_ENCRYPTED), this.message || (this.message = null != (r = e.defaultMessages[this.code]) ? r : '');
     }
    };
   (vn.MEDIA_ERR_ABORTED = 1), (vn.MEDIA_ERR_NETWORK = 2), (vn.MEDIA_ERR_DECODE = 3), (vn.MEDIA_ERR_SRC_NOT_SUPPORTED = 4), (vn.MEDIA_ERR_ENCRYPTED = 5), (vn.MEDIA_ERR_CUSTOM = 100), (vn.defaultMessages = { 1: 'You aborted the media playback', 2: 'A network error caused the media download to fail.', 3: 'A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.', 4: 'An unsupported error occurred. The server or network failed, or your browser does not support this format.', 5: 'The media is encrypted and there are no keys to decrypt it.' });
   var bn = vn,
    gn = (e, t) => !((e) => null == e)(t) && e in t,
    En = { ANY: 'any', MUTED: 'muted' },
    fn = { ON_DEMAND: 'on-demand', LIVE: 'live', UNKNOWN: 'unknown' },
    yn = 'mse',
    _n = 'native',
    Tn = { HEADER: 'header', QUERY: 'query', NONE: 'none' },
    An = Object.values(Tn),
    kn = { M3U8: 'application/vnd.apple.mpegurl', MP4: 'video/mp4' },
    wn = { HLS: kn.M3U8 },
    In = (Object.keys(wn), Object.values(kn), { upTo720p: '720p', upTo1080p: '1080p', upTo1440p: '1440p', upTo2160p: '2160p' }),
    Sn = { noLessThan480p: '480p', noLessThan540p: '540p', noLessThan720p: '720p', noLessThan1080p: '1080p', noLessThan1440p: '1440p', noLessThan2160p: '2160p' },
    Rn = { DESCENDING: 'desc' },
    Cn = { code: 'en' },
    Dn = (e, t, n, i, a = e) => {
     a.addEventListener(t, n, i),
      e.addEventListener(
       'teardown',
       () => {
        a.removeEventListener(t, n);
       },
       { once: !0 },
      );
    };
   var Ln = (e) => {
     let t = e.indexOf('?');
     return t < 0 ? [e] : [e.slice(0, t), e.slice(t)];
    },
    Mn = (e) => {
     let { type: t } = e;
     if (t) {
      let e = t.toUpperCase();
      return gn(e, wn) ? wn[e] : t;
     }
     return On(e);
    },
    xn = (e) => ('VOD' === e ? fn.ON_DEMAND : fn.LIVE),
    Nn = (e) => ('EVENT' === e ? Number.POSITIVE_INFINITY : 'VOD' === e ? Number.NaN : 0),
    On = (e) => {
     let { src: t } = e;
     if (!t) return '';
     let n = '';
     try {
      n = new URL(t).pathname;
     } catch {
      console.error('invalid url');
     }
     let i = n.lastIndexOf('.');
     if (i < 0) return Pn(e) ? kn.M3U8 : '';
     let a = n.slice(i + 1).toUpperCase();
     return gn(a, kn) ? kn[a] : '';
    },
    Pn = ({ src: e, customDomain: t = 'mux.com' }) => {
     let n;
     try {
      n = new URL(`${e}`);
     } catch {
      return !1;
     }
     let i = 'https:' === n.protocol,
      a = n.hostname === `stream.${t}`.toLowerCase(),
      r = n.pathname.split('/'),
      s = 2 === r.length,
      o = !(null != r && r[1].includes('.'));
     return i && a && s && o;
    },
    Un = (e) => {
     let t = (null != e ? e : '').split('.')[1];
     if (t)
      try {
       let e = t.replace(/-/g, '+').replace(/_/g, '/'),
        n = decodeURIComponent(
         atob(e)
          .split('')
          .map(function (e) {
           return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
          })
          .join(''),
        );
       return JSON.parse(n);
      } catch {
       return;
      }
    },
    Hn = 'en';
   function Wn(e, t = !0) {
    var n, i;
    let a = t && null != (i = null == (n = Cn) ? void 0 : n[e]) ? i : e,
     r = t ? Cn.code : Hn;
    return new Bn(a, r);
   }
   var Bn = class {
     constructor(e, t = ((e) => (null != (e = Cn) ? e : Hn))()) {
      (this.message = e), (this.locale = t);
     }
     format(e) {
      return this.message.replace(/\{(\w+)\}/g, (t, n) => {
       var i;
       return null != (i = e[n]) ? i : '';
      });
     }
     toString() {
      return this.message;
     }
    },
    Vn = Object.values(En),
    $n = (e) => 'boolean' == typeof e || ('string' == typeof e && Vn.includes(e)),
    qn = (e, t) => {
     if (!t) return;
     let n = e.muted,
      i = () => (e.muted = n);
     switch (t) {
      case En.ANY:
       e.play().catch(() => {
        (e.muted = !0), e.play().catch(i);
       });
       break;
      case En.MUTED:
       (e.muted = !0), e.play().catch(i);
       break;
      default:
       e.play().catch(() => {});
     }
    };
   function Kn(e, t) {
    var n;
    if (!('videoTracks' in e)) return;
    let i = new WeakMap();
    t.on(un.Events.MANIFEST_PARSED, function (t, n) {
     r();
     let a = e.addVideoTrack('main');
     a.selected = !0;
     for (let [e, r] of n.levels.entries()) {
      let t = a.addRendition(r.url[0], r.width, r.height, r.videoCodec, r.bitrate);
      i.set(r, `${e}`), (t.id = `${e}`);
     }
    }),
     t.on(un.Events.AUDIO_TRACKS_UPDATED, function (t, n) {
      a();
      for (let i of n.audioTracks) {
       let t = i.default ? 'main' : 'alternative',
        n = e.addAudioTrack(t, i.name, i.lang);
       (n.id = `${i.id}`), i.default && (n.enabled = !0);
      }
     }),
     e.audioTracks.addEventListener('change', () => {
      var n;
      let i = +(null == (n = [...e.audioTracks].find((e) => e.enabled)) ? void 0 : n.id),
       a = t.audioTracks.map((e) => e.id);
      i != t.audioTrack && a.includes(i) && (t.audioTrack = i);
     }),
     t.on(un.Events.LEVELS_UPDATED, function (t, n) {
      var a;
      let r = e.videoTracks[null != (a = e.videoTracks.selectedIndex) ? a : 0];
      if (!r) return;
      let s = n.levels.map((e) => i.get(e));
      for (let i of e.videoRenditions) i.id && !s.includes(i.id) && r.removeRendition(i);
     });
    null == (n = e.videoRenditions) ||
     n.addEventListener('change', (e) => {
      let n = e.target.selectedIndex;
      n != t.nextLevel && (t.nextLevel = n);
     });
    let a = () => {
      for (let t of e.audioTracks) e.removeAudioTrack(t);
     },
     r = () => {
      (() => {
       for (let t of e.videoTracks) e.removeVideoTrack(t);
      })(),
       a();
     };
    t.once(un.Events.DESTROYING, r);
   }
   var Fn = (e) => ('time' in e ? e.time : e.startTime);
   function Yn(e, t, n, i, a, r) {
    let s = document.createElement('track');
    return (s.kind = t), (s.label = n), i && (s.srclang = i), a && (s.id = a), r && (s.default = !0), (s.track.mode = ['subtitles', 'captions'].includes(t) ? 'disabled' : 'hidden'), s.setAttribute('data-removeondestroy', ''), e.append(s), s.track;
   }
   function jn(e, t, n) {
    var i;
    return null == (i = Array.from(e.querySelectorAll('track')).find((e) => e.track.label === t && e.track.kind === n)) ? void 0 : i.track;
   }
   async function Gn(e, t, n, i) {
    let a = jn(e, n, i);
    return (
     a || ((a = Yn(e, i, n)), (a.mode = 'hidden'), await new Promise((e) => setTimeout(() => e(void 0), 0))),
     'hidden' !== a.mode && (a.mode = 'hidden'),
     [...t]
      .sort((e, t) => Fn(t) - Fn(e))
      .forEach((t) => {
       var n, r;
       let s = t.value,
        o = Fn(t);
       if ('endTime' in t && null != t.endTime) null == a || a.addCue(new VTTCue(o, t.endTime, 'chapters' === i ? s : JSON.stringify(null != s ? s : null)));
       else {
        let t = Array.prototype.findIndex.call(null == a ? void 0 : a.cues, (e) => e.startTime >= o),
         l = null == (n = null == a ? void 0 : a.cues) ? void 0 : n[t],
         d = l ? l.startTime : Number.isFinite(e.duration) ? e.duration : Number.MAX_SAFE_INTEGER,
         u = null == (r = null == a ? void 0 : a.cues) ? void 0 : r[t - 1];
        u && (u.endTime = o), null == a || a.addCue(new VTTCue(o, d, 'chapters' === i ? s : JSON.stringify(null != s ? s : null)));
       }
      }),
     e.textTracks.dispatchEvent(new Event('change', { bubbles: !0, composed: !0 })),
     a
    );
   }
   var Qn = 'cuepoints',
    Zn = Object.freeze({ label: Qn });
   async function zn(e, t, n = Zn) {
    return Gn(e, t, n.label, 'metadata');
   }
   var Xn = (e) => ({ time: e.startTime, value: JSON.parse(e.text) });
   function Jn(e, t = { label: Qn }) {
    var n, i;
    let a = jn(e, t.label, 'metadata');
    if (null == (n = null == a ? void 0 : a.activeCues) || !n.length) return;
    if (1 === a.activeCues.length) return Xn(a.activeCues[0]);
    let { currentTime: r } = e,
     s = Array.prototype.find.call(null != (i = a.activeCues) ? i : [], ({ startTime: e, endTime: t }) => e <= r && t > r);
    return Xn(s || a.activeCues[0]);
   }
   var ei = 'chapters',
    ti = Object.freeze({ label: ei }),
    ni = (e) => ({ startTime: e.startTime, endTime: e.endTime, value: e.text });
   async function ii(e, t, n = ti) {
    return Gn(e, t, n.label, 'chapters');
   }
   function ai(e, t = { label: ei }) {
    var n, i;
    let a = jn(e, t.label, 'chapters');
    if (null == (n = null == a ? void 0 : a.activeCues) || !n.length) return;
    if (1 === a.activeCues.length) return ni(a.activeCues[0]);
    let { currentTime: r } = e,
     s = Array.prototype.find.call(null != (i = a.activeCues) ? i : [], ({ startTime: e, endTime: t }) => e <= r && t > r);
    return ni(s || a.activeCues[0]);
   }
   var ri = 'v',
    si = 't',
    oi = 's',
    li = 'd',
    di = (e, t, n, i, a = !1, r = !((e) => (null == (e = globalThis.navigator) ? void 0 : e.onLine))()) => {
     var s, o;
     if (r) {
      let n,
       i = Wn('Your device appears to be offline', a),
       r = bn.MEDIA_ERR_NETWORK,
       s = new bn(i, r, !1, n);
      return (s.errorCategory = t), (s.muxCode = mn.NETWORK_OFFLINE), (s.data = e), s;
     }
     let l = 'status' in e ? e.status : e.code,
      d = Date.now(),
      u = bn.MEDIA_ERR_NETWORK;
     if (200 === l) return;
     let c = pn(t),
      h = ((e, t) => {
       var n, i;
       let a = pn(e),
        r = `${a}Token`;
       return null != (n = t.tokens) && n[a] ? (null == (i = t.tokens) ? void 0 : i[a]) : gn(r, t) ? t[r] : void 0;
      })(t, n),
      m = ((e) => (e === cn ? ri : e === hn ? li : void 0))(t),
      [p] = Ln(null != (s = n.playbackId) ? s : '');
     if (!l || !p) return;
     let v = Un(h);
     if (h && !v) {
      let n = Wn('The {tokenNamePrefix}-token provided is invalid or malformed.', a).format({ tokenNamePrefix: c }),
       i = Wn('Compact JWT string: {token}', a).format({ token: h }),
       r = new bn(n, u, !0, i);
      return (r.errorCategory = t), (r.muxCode = mn.NETWORK_TOKEN_MALFORMED), (r.data = e), r;
     }
     if (l >= 500) {
      let e = new bn('', u, null == i || i);
      return (e.errorCategory = t), (e.muxCode = mn.NETWORK_UNKNOWN_ERROR), e;
     }
     if (403 === l) {
      if (!v) {
       let n = Wn('Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.', a).format({ tokenNamePrefix: c, category: t }),
        r = Wn('Specified playback ID: {playbackId}', a).format({ playbackId: p }),
        s = new bn(n, u, null == i || i, r);
       return (s.errorCategory = t), (s.muxCode = mn.NETWORK_TOKEN_MISSING), (s.data = e), s;
      }
      if ((({ exp: e }, t = Date.now()) => !e || 1e3 * e < t)(v, d)) {
       let n = { timeStyle: 'medium', dateStyle: 'medium' },
        i = Wn('The video\u2019s secured {tokenNamePrefix}-token has expired.', a).format({ tokenNamePrefix: c }),
        r = Wn('Expired at: {expiredDate}. Current time: {currentDate}.', a).format({ expiredDate: new Intl.DateTimeFormat('en', n).format(null != (o = v.exp) ? o : 0), currentDate: new Intl.DateTimeFormat('en', n).format(d) }),
        s = new bn(i, u, !0, r);
       return (s.errorCategory = t), (s.muxCode = mn.NETWORK_TOKEN_EXPIRED), (s.data = e), s;
      }
      if ((({ sub: e }, t) => e !== t)(v, p)) {
       let n = Wn('The video\u2019s playback ID does not match the one encoded in the {tokenNamePrefix}-token.', a).format({ tokenNamePrefix: c }),
        i = Wn('Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}', a).format({ tokenNamePrefix: c, playbackId: p, tokenPlaybackId: v.sub }),
        r = new bn(n, u, !0, i);
       return (r.errorCategory = t), (r.muxCode = mn.NETWORK_TOKEN_SUB_MISMATCH), (r.data = e), r;
      }
      if ((({ aud: e }, t) => !e)(v)) {
       let n = Wn('The {tokenNamePrefix}-token is formatted with incorrect information.', a).format({ tokenNamePrefix: c }),
        i = Wn('The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.', a).format({ tokenNamePrefix: c, expectedAud: m }),
        r = new bn(n, u, !0, i);
       return (r.errorCategory = t), (r.muxCode = mn.NETWORK_TOKEN_AUD_MISSING), (r.data = e), r;
      }
      if ((({ aud: e }, t) => e !== t)(v, m)) {
       let n = Wn('The {tokenNamePrefix}-token is formatted with incorrect information.', a).format({ tokenNamePrefix: c }),
        i = Wn('The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.', a).format({ tokenNamePrefix: c, expectedAud: m, aud: v.aud }),
        r = new bn(n, u, !0, i);
       return (r.errorCategory = t), (r.muxCode = mn.NETWORK_TOKEN_AUD_MISMATCH), (r.data = e), r;
      }
     }
     if (412 === l) {
      let r = Wn('This playback-id may belong to a live stream that is not currently active or an asset that is not ready.', a),
       s = Wn('Specified playback ID: {playbackId}', a).format({ playbackId: p }),
       o = new bn(r, u, null == i || i, s);
      return (o.errorCategory = t), (o.muxCode = mn.NETWORK_NOT_READY), (o.streamType = n.streamType === fn.LIVE ? 'live' : n.streamType === fn.ON_DEMAND ? 'on-demand' : 'unknown'), (o.data = e), o;
     }
     if (404 === l) {
      let n = Wn('This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.', a),
       r = Wn('Specified playback ID: {playbackId}', a).format({ playbackId: p }),
       s = new bn(n, u, null == i || i, r);
      return (s.errorCategory = t), (s.muxCode = mn.NETWORK_NOT_FOUND), (s.data = e), s;
     }
     if (400 === l) {
      let n = Wn('The URL or playback-id was invalid. You may have used an invalid value as a playback-id.'),
       r = Wn('Specified playback ID: {playbackId}', a).format({ playbackId: p }),
       s = new bn(n, u, null == i || i, r);
      return (s.errorCategory = t), (s.muxCode = mn.NETWORK_INVALID_URL), (s.data = e), s;
     }
     let b = new bn('', u, null == i || i);
     return (b.errorCategory = t), (b.muxCode = mn.NETWORK_UNKNOWN_ERROR), (b.data = e), b;
    },
    ui = un.DefaultConfig.capLevelController,
    ci = class e extends ui {
     constructor(e) {
      super(e);
     }
     get levels() {
      var e;
      return null != (e = this.hls.levels) ? e : [];
     }
     getValidLevels(e) {
      return this.levels.filter((t, n) => this.isLevelAllowed(t) && n <= e);
     }
     getMaxLevel(t) {
      let n = super.getMaxLevel(t),
       i = this.getValidLevels(t);
      if (!i[n]) return n;
      let a = Math.min(i[n].width, i[n].height),
       r = e.minMaxResolution;
      return a >= r ? n : ui.getMaxLevelByMediaSize(i, r * (16 / 9), r);
     }
    };
   ci.minMaxResolution = 720;
   var hi = ci,
    mi = 'fairplay',
    pi = 'playready',
    vi = 'widevine',
    bi = (e) => {
     let t = e.split('\n').filter((e) => e.startsWith('#EXT-X-SESSION-DATA'));
     if (!t.length) return {};
     let n = {};
     for (let i of t) {
      let e = Ei(i),
       t = e['DATA-ID'];
      t && (n[t] = { ...e });
     }
     return { sessionData: n };
    },
    gi = /([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;
   function Ei(e) {
    let t = [...e.matchAll(gi)];
    return Object.fromEntries(t.map(([, e, t]) => [e, t]));
   }
   var fi,
    yi,
    _i,
    Ti,
    Ai,
    ki,
    wi,
    Ii = (e) => {
     var t, n, i;
     let a,
      r = e.split('\n'),
      s = null == (n = (null != (t = r.find((e) => e.startsWith('#EXT-X-PLAYLIST-TYPE'))) ? t : '').split(':')[1]) ? void 0 : n.trim(),
      o = xn(s),
      l = Nn(s);
     if (o === fn.LIVE) {
      let e = r.find((e) => e.startsWith('#EXT-X-PART-INF'));
      if (e) a = 2 * +e.split(':')[1].split('=')[1];
      else {
       let e = r.find((e) => e.startsWith('#EXT-X-TARGETDURATION')),
        t = null == (i = null == e ? void 0 : e.split(':')) ? void 0 : i[1];
       a = 3 * +(null != t ? t : 6);
      }
     }
     return { streamType: o, targetLiveWindow: l, liveEdgeStartOffset: a };
    },
    Si = async (e, t) => {
     if (t === kn.MP4) return { streamType: fn.ON_DEMAND, targetLiveWindow: Number.NaN, liveEdgeStartOffset: void 0, sessionData: void 0 };
     if (t === kn.M3U8) {
      let t = await fetch(e);
      if (!t.ok) return Promise.reject(t);
      let n = await t.text(),
       i = await ((e) => {
        let t = e.split('\n').find((e, t, n) => t && n[t - 1].startsWith('#EXT-X-STREAM-INF'));
        return fetch(t).then((e) => (200 !== e.status ? Promise.reject(e) : e.text()));
       })(n);
      return { ...bi(n), ...Ii(i) };
     }
     return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`), { streamType: void 0, targetLiveWindow: void 0, liveEdgeStartOffset: void 0, sessionData: void 0 };
    },
    Ri = async (e, t) => {
     var n, i;
     try {
      let a = await fetch(e);
      if (!a.ok) throw new Error(`Failed to fetch Mux metadata: ${a.status} ${a.statusText}`);
      let r = await a.json(),
       s = {};
      if (null == (n = null == r ? void 0 : r[0]) || !n.metadata) return;
      for (let e of r[0].metadata) e.key && e.value && (s[e.key] = e.value);
      (null != (i = xi.get(t)) ? i : {}).metadata = s;
      let o = new CustomEvent('muxmetadata');
      t.dispatchEvent(o);
     } catch (Ra) {
      console.error(Ra);
     }
    },
    Ci = (e, t, n) => {
     var i, a, r, s, o, l, d, u;
     let {
      streamType: c,
      targetLiveWindow: h,
      liveEdgeStartOffset: m,
      lowLatency: p,
     } = ((e) => {
      var t;
      let n,
       i = e.type,
       a = xn(i),
       r = Nn(i),
       s = !(null == (t = e.partList) || !t.length);
      return a === fn.LIVE && (n = s ? 2 * e.partTarget : 3 * e.targetduration), { streamType: a, targetLiveWindow: r, liveEdgeStartOffset: n, lowLatency: s };
     })(e);
     if (c === fn.LIVE) {
      p ? ((n.config.backBufferLength = null != (i = n.userConfig.backBufferLength) ? i : 4), (n.config.maxFragLookUpTolerance = null != (a = n.userConfig.maxFragLookUpTolerance) ? a : 0.001), (n.config.abrBandWidthUpFactor = null != (r = n.userConfig.abrBandWidthUpFactor) ? r : n.config.abrBandWidthFactor)) : (n.config.backBufferLength = null != (s = n.userConfig.backBufferLength) ? s : 8);
      let e = Object.freeze({
       get length() {
        return t.seekable.length;
       },
       start: (e) => t.seekable.start(e),
       end(e) {
        var i;
        return e > this.length || e < 0 || Number.isFinite(t.duration) ? t.seekable.end(e) : null != (i = n.liveSyncPosition) ? i : t.seekable.end(e);
       },
      });
      (null != (o = xi.get(t)) ? o : {}).seekable = e;
     }
     ((null != (l = xi.get(t)) ? l : {}).liveEdgeStartOffset = m), ((null != (d = xi.get(t)) ? d : {}).targetLiveWindow = h), t.dispatchEvent(new CustomEvent('targetlivewindowchange', { composed: !0, bubbles: !0 })), ((null != (u = xi.get(t)) ? u : {}).streamType = c), t.dispatchEvent(new CustomEvent('streamtypechange', { composed: !0, bubbles: !0 }));
    },
    Di = null != (yi = null == (fi = null == globalThis ? void 0 : globalThis.navigator) ? void 0 : fi.userAgent) ? yi : '',
    Li = null != (Ai = null == (Ti = null == (_i = null == globalThis ? void 0 : globalThis.navigator) ? void 0 : _i.userAgentData) ? void 0 : Ti.platform) ? Ai : '',
    Mi = Di.toLowerCase().includes('android') || ['x11', 'android'].some((e) => Li.toLowerCase().includes(e)),
    xi = new WeakMap(),
    Ni = 'mux.com',
    Oi = null == (wi = (ki = un).isSupported) ? void 0 : wi.call(ki),
    Pi = Mi,
    Ui = () => dn.utils.now(),
    Hi = dn.utils.generateUUID,
    Wi = ({ playbackId: e, customDomain: t = Ni, maxResolution: n, minResolution: i, renditionOrder: a, programStartTime: r, programEndTime: s, assetStartTime: o, assetEndTime: l, playbackToken: d, tokens: { playback: u = d } = {}, extraSourceParams: c = {} } = {}) => {
     if (!e) return;
     let [h, m = ''] = Ln(e),
      p = new URL(`https://stream.${t}/${h}.m3u8${m}`);
     return (
      u || p.searchParams.has('token')
       ? (p.searchParams.forEach((e, t) => {
          'token' != t && p.searchParams.delete(t);
         }),
         u && p.searchParams.set('token', u))
       : (n && p.searchParams.set('max_resolution', n),
         i && (p.searchParams.set('min_resolution', i), n && +n.slice(0, -1) < +i.slice(0, -1) && console.error('minResolution must be <= maxResolution', 'minResolution', i, 'maxResolution', n)),
         a && p.searchParams.set('rendition_order', a),
         r && p.searchParams.set('program_start_time', `${r}`),
         s && p.searchParams.set('program_end_time', `${s}`),
         o && p.searchParams.set('asset_start_time', `${o}`),
         l && p.searchParams.set('asset_end_time', `${l}`),
         Object.entries(c).forEach(([e, t]) => {
          null != t && p.searchParams.set(e, t);
         })),
      p.toString()
     );
    },
    Bi = (e) => {
     if (!e) return;
     let [t] = e.split('?');
     return t || void 0;
    },
    Vi = (e) => {
     if (!e || !e.startsWith('https://stream.')) return;
     let [t] = new URL(e).pathname.slice(1).split(/\.m3u8|\//);
     return t || void 0;
    },
    $i = (e) => {
     var t;
     return null == (t = xi.get(e)) ? void 0 : t.error;
    },
    qi = (e) => {
     var t, n;
     return null != (n = null == (t = xi.get(e)) ? void 0 : t.streamType) ? n : fn.UNKNOWN;
    },
    Ki = (e) => {
     var t, n;
     return null != (n = null == (t = xi.get(e)) ? void 0 : t.seekable) ? n : e.seekable;
    },
    Fi = (e, t, n = 0.034) => e > t || ((e, t, n = 0.034) => Math.abs(e - t) <= n)(e, t, n),
    Yi = (e, t) => {
     var n, i, a;
     if (!t || !e.buffered.length) return;
     if (e.readyState > 2) return !1;
     let r = t.currentLevel >= 0 ? (null == (i = null == (n = t.levels) ? void 0 : n[t.currentLevel]) ? void 0 : i.details) : null == (a = t.levels.find((e) => !!e.details)) ? void 0 : a.details;
     if (!r || r.live) return;
     let { fragments: s } = r;
     if (null == s || !s.length) return;
     if (e.currentTime < e.duration - (r.targetduration + 0.5)) return !1;
     let o = s[s.length - 1];
     if (e.currentTime <= o.start) return !1;
     let l = o.start + o.duration / 2,
      d = e.buffered.start(e.buffered.length - 1),
      u = e.buffered.end(e.buffered.length - 1);
     return l > d && l < u;
    },
    ji = (e, t) => (e.ended || e.loop ? e.ended : !(!t || !Yi(e, t)) || ((e, t = 0.034) => e.paused && Fi(e.currentTime, e.duration, t))(e)),
    Gi = (e, t, n) => {
     Qi(t, n, e);
     let { metadata: i = {} } = e,
      { view_session_id: a = Hi() } = i,
      r = ((e) => {
       var t, n, i;
       return null != (t = null == e ? void 0 : e.metadata) && t.video_id ? e.metadata.video_id : ia(e) && null != (i = null != (n = Bi(e.playbackId)) ? n : Vi(e.src)) ? i : e.src;
      })(e);
     (i.view_session_id = a), (i.video_id = r), (e.metadata = i);
     (e.drmTypeCb = (e) => {
      var n;
      null == (n = t.mux) || n.emit('hb', { view_drm_type: e });
     }),
      xi.set(t, { retryCount: 0 });
     let s = zi(e, t),
      o = (({ preload: e, src: t }, n, i) => {
       let a = (e) => {
        null != e && ['', 'none', 'metadata', 'auto'].includes(e) ? n.setAttribute('preload', e) : n.removeAttribute('preload');
       };
       if (!i) return a(e), a;
       let r = !1,
        s = !1,
        o = i.config.maxBufferLength,
        l = i.config.maxBufferSize,
        d = (e) => {
         a(e);
         let t = null != e ? e : n.preload;
         s || 'none' === t || ('metadata' === t ? ((i.config.maxBufferLength = 1), (i.config.maxBufferSize = 1)) : ((i.config.maxBufferLength = o), (i.config.maxBufferSize = l)), u());
        },
        u = () => {
         !r && t && ((r = !0), i.loadSource(t));
        };
       return (
        Dn(
         n,
         'play',
         () => {
          (s = !0), (i.config.maxBufferLength = o), (i.config.maxBufferSize = l), u();
         },
         { once: !0 },
        ),
        d(e),
        d
       );
      })(e, t, s);
     null != e && e.muxDataKeepSession && null != t && t.mux && !t.mux.deleted ? s && t.mux.addHLSJS({ hlsjs: s, Hls: s ? un : void 0 }) : aa(e, t, s),
      ra(e, t, s),
      (async function (e, t = Zn) {
       new Promise((n) => {
        Dn(e, 'loadstart', async () => {
         let i = await zn(e, [], t);
         Dn(
          e,
          'cuechange',
          () => {
           let t = Jn(e);
           if (t) {
            let n = new CustomEvent('cuepointchange', { composed: !0, bubbles: !0, detail: t });
            e.dispatchEvent(n);
           }
          },
          {},
          i,
         ),
          n(i);
        });
       });
      })(t),
      (async function (e, t = ti) {
       new Promise((n) => {
        Dn(e, 'loadstart', async () => {
         let i = await ii(e, [], t);
         Dn(
          e,
          'cuechange',
          () => {
           let t = ai(e);
           if (t) {
            let n = new CustomEvent('chapterchange', { composed: !0, bubbles: !0, detail: t });
            e.dispatchEvent(n);
           }
          },
          {},
          i,
         ),
          n(i);
        });
       });
      })(t);
     let l = ((e, t, n) => {
      let { autoplay: i } = e,
       a = !1,
       r = !1,
       s = $n(i) ? i : !!i,
       o = () => {
        a ||
         Dn(
          t,
          'playing',
          () => {
           a = !0;
          },
          { once: !0 },
         );
       };
      if (
       (o(),
       Dn(
        t,
        'loadstart',
        () => {
         (a = !1), o(), qn(t, s);
        },
        { once: !0 },
       ),
       Dn(
        t,
        'loadstart',
        () => {
         n || (r = e.streamType && e.streamType !== fn.UNKNOWN ? e.streamType === fn.LIVE : !Number.isFinite(t.duration)), qn(t, s);
        },
        { once: !0 },
       ),
       n &&
        n.once(un.Events.LEVEL_LOADED, (t, n) => {
         var i;
         r = e.streamType && e.streamType !== fn.UNKNOWN ? e.streamType === fn.LIVE : null != (i = n.details.live) && i;
        }),
       !s)
      ) {
       let i = () => {
        !r || Number.isFinite(e.startTime) || (null != n && n.liveSyncPosition ? (t.currentTime = n.liveSyncPosition) : Number.isFinite(t.seekable.end(0)) && (t.currentTime = t.seekable.end(0)));
       };
       n &&
        Dn(
         t,
         'play',
         () => {
          'metadata' === t.preload ? n.once(un.Events.LEVEL_UPDATED, i) : i();
         },
         { once: !0 },
        );
      }
      return (e) => {
       a || ((s = $n(e) ? e : !!e), qn(t, s));
      };
     })(e, t, s);
     return { engine: s, setAutoplay: l, setPreload: o };
    },
    Qi = (e, t, n) => {
     let i = null == t ? void 0 : t.engine;
     null != e && e.mux && !e.mux.deleted && (null != n && n.muxDataKeepSession ? i && e.mux.removeHLSJS() : (e.mux.destroy(), delete e.mux)), i && (i.detachMedia(), i.destroy()), e && (e.hasAttribute('src') && (e.removeAttribute('src'), e.load()), e.removeEventListener('error', oa), e.removeEventListener('error', da), e.removeEventListener('durationchange', sa), xi.delete(e), e.dispatchEvent(new Event('teardown')));
    };
   function Zi(e, t) {
    var n;
    let i = Mn(e);
    if (i !== kn.M3U8) return !0;
    let a = !i || null == (n = t.canPlayType(i)) || n,
     { preferPlayback: r } = e;
    return a && (r === _n || !(Oi && (r === yn || Pi)));
   }
   var zi = (e, t) => {
     let { debug: n, streamType: i, startTime: a = -1, metadata: r, preferCmcd: s, _hlsConfig: o = {} } = e,
      l = Mn(e) === kn.M3U8,
      d = Zi(e, t);
     if (l && !d && Oi) {
      let l = { backBufferLength: 30, renderTextTracksNatively: !1, liveDurationInfinity: !0, capLevelToPlayerSize: !0, capLevelOnFPSDrop: !0 },
       d = Xi(i),
       u = Ji(e),
       c = [Tn.QUERY, Tn.HEADER].includes(s) ? { useHeaders: s === Tn.HEADER, sessionId: null == r ? void 0 : r.view_session_id, contentId: null == r ? void 0 : r.video_id } : void 0,
       h = new un({
        debug: n,
        startPosition: a,
        cmcd: c,
        xhrSetup: (e, t) => {
         var n, i;
         if (s && s !== Tn.QUERY) return;
         let a = new URL(t);
         if (!a.searchParams.has('CMCD')) return;
         let r = (null != (i = null == (n = a.searchParams.get('CMCD')) ? void 0 : n.split(',')) ? i : []).filter((e) => e.startsWith('sid') || e.startsWith('cid')).join(',');
         a.searchParams.set('CMCD', r), e.open('GET', a);
        },
        capLevelController: hi,
        ...l,
        ...d,
        ...u,
        ...o,
       });
      return (
       h.on(un.Events.MANIFEST_PARSED, async function (e, n) {
        var i, a;
        let r = null == (i = n.sessionData) ? void 0 : i['com.apple.hls.chapters'];
        ((null != r && r.URI) || (null != r && r.VALUE.toLocaleLowerCase().startsWith('http'))) && Ri(null != (a = null == r ? void 0 : r.URI) ? a : null == r ? void 0 : r.VALUE, t);
       }),
       h
      );
     }
    },
    Xi = (e) => (e === fn.LIVE ? { backBufferLength: 8 } : {}),
    Ji = (e) => {
     let { tokens: { drm: t } = {}, playbackId: n, drmTypeCb: i } = e,
      a = Bi(n);
     return t && a
      ? {
         emeEnabled: !0,
         drmSystems: { 'com.apple.fps': { licenseUrl: ta(e, 'fairplay'), serverCertificateUrl: na(e, 'fairplay') }, 'com.widevine.alpha': { licenseUrl: ta(e, 'widevine') }, 'com.microsoft.playready': { licenseUrl: ta(e, 'playready') } },
         requestMediaKeySystemAccessFunc: (e, t) => (
          'com.widevine.alpha' === e &&
           (t = [
            ...t.map((e) => {
             var t;
             let n = null == (t = e.videoCapabilities) ? void 0 : t.map((e) => ({ ...e, robustness: 'HW_SECURE_ALL' }));
             return { ...e, videoCapabilities: n };
            }),
            ...t,
           ]),
          navigator.requestMediaKeySystemAccess(e, t).then((t) => {
           let n = ((e) => (e.includes('fps') ? mi : e.includes('playready') ? pi : e.includes('widevine') ? vi : void 0))(e);
           return null == i || i(n), t;
          })
         ),
        }
      : {};
    },
    ea = (e, t) => {
     Dn(t, 'encrypted', async (n) => {
      try {
       let i = n.initDataType;
       if ('skd' !== i) return void console.error(`Received unexpected initialization data type "${i}"`);
       if (!t.mediaKeys) {
        let n = await navigator
         .requestMediaKeySystemAccess('com.apple.fps', [{ initDataTypes: [i], videoCapabilities: [{ contentType: 'application/vnd.apple.mpegurl', robustness: '' }], distinctiveIdentifier: 'not-allowed', persistentState: 'not-allowed', sessionTypes: ['temporary'] }])
         .then((t) => {
          var n;
          return null == (n = e.drmTypeCb) || n.call(e, mi), t;
         })
         .catch(() => {
          let e = Wn('Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.'),
           n = new bn(e, bn.MEDIA_ERR_ENCRYPTED, !0);
          (n.errorCategory = hn), (n.muxCode = mn.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM), la(t, n);
         });
        if (!n) return;
        let a = await n.createMediaKeys();
        try {
         let t = await (async (e) => {
          let t = await fetch(e);
          return 200 !== t.status ? Promise.reject(t) : await t.arrayBuffer();
         })(na(e, 'fairplay')).catch((t) => {
          if (t instanceof Response) {
           let n = di(t, hn, e);
           return console.error('mediaError', null == n ? void 0 : n.message, null == n ? void 0 : n.context), n ? Promise.reject(n) : Promise.reject(new Error('Unexpected error in app cert request'));
          }
          return Promise.reject(t);
         });
         await a.setServerCertificate(t).catch(() => {
          let e = Wn('Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.'),
           t = new bn(e, bn.MEDIA_ERR_ENCRYPTED, !0);
          return (t.errorCategory = hn), (t.muxCode = mn.ENCRYPTED_UPDATE_SERVER_CERT_FAILED), Promise.reject(t);
         });
        } catch (ba) {
         return void la(t, ba);
        }
        await t.setMediaKeys(a);
       }
       let a = n.initData;
       if (null == a) return void console.error(`Could not start encrypted playback due to missing initData in ${n.type} event`);
       let r = t.mediaKeys.createSession();
       r.addEventListener('keystatuseschange', () => {
        r.keyStatuses.forEach((e) => {
         let n;
         if ('internal-error' === e) {
          let e = Wn('The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.');
          (n = new bn(e, bn.MEDIA_ERR_ENCRYPTED, !0)), (n.errorCategory = hn), (n.muxCode = mn.ENCRYPTED_CDM_ERROR);
         } else if ('output-restricted' === e || 'output-downscaled' === e) {
          let e = Wn('DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.');
          (n = new bn(e, bn.MEDIA_ERR_ENCRYPTED, !1)), (n.errorCategory = hn), (n.muxCode = mn.ENCRYPTED_OUTPUT_RESTRICTED);
         }
         n && la(t, n);
        });
       });
       let s = await Promise.all([
         r.generateRequest(i, a).catch(() => {
          let e = Wn('Failed to generate a DRM license request. This may be an issue with the player or your protected content.'),
           n = new bn(e, bn.MEDIA_ERR_ENCRYPTED, !0);
          (n.errorCategory = hn), (n.muxCode = mn.ENCRYPTED_GENERATE_REQUEST_FAILED), la(t, n);
         }),
         new Promise((e) => {
          r.addEventListener(
           'message',
           (t) => {
            e(t.message);
           },
           { once: !0 },
          );
         }),
        ]).then(([, e]) => e),
        o = await (async (e, t) => {
         let n = await fetch(t, { method: 'POST', headers: { 'Content-type': 'application/octet-stream' }, body: e });
         if (200 !== n.status) return Promise.reject(n);
         let i = await n.arrayBuffer();
         return new Uint8Array(i);
        })(s, ta(e, 'fairplay')).catch((t) => {
         if (t instanceof Response) {
          let n = di(t, hn, e);
          return console.error('mediaError', null == n ? void 0 : n.message, null == n ? void 0 : n.context), n ? Promise.reject(n) : Promise.reject(new Error('Unexpected error in license key request'));
         }
         return Promise.reject(t);
        });
       await r.update(o).catch(() => {
        let e = Wn('Failed to update DRM license. This may be an issue with the player or your protected content.'),
         t = new bn(e, bn.MEDIA_ERR_ENCRYPTED, !0);
        return (t.errorCategory = hn), (t.muxCode = mn.ENCRYPTED_UPDATE_LICENSE_FAILED), Promise.reject(t);
       });
      } catch (Ra) {
       return void la(t, Ra);
      }
     });
    },
    ta = ({ playbackId: e, tokens: { drm: t } = {}, customDomain: n = Ni }, i) => {
     let a = Bi(e);
     return `https://license.${n.toLocaleLowerCase().endsWith(Ni) ? n : Ni}/license/${i}/${a}?token=${t}`;
    },
    na = ({ playbackId: e, tokens: { drm: t } = {}, customDomain: n = Ni }, i) => {
     let a = Bi(e);
     return `https://license.${n.toLocaleLowerCase().endsWith(Ni) ? n : Ni}/appcert/${i}/${a}?token=${t}`;
    },
    ia = ({ playbackId: e, src: t, customDomain: n }) => {
     if (e) return !0;
     if ('string' != typeof t) return !1;
     let i = null == window ? void 0 : window.location.href,
      a = new URL(t, i).hostname.toLocaleLowerCase();
     return a.includes(Ni) || (!!n && a.includes(n.toLocaleLowerCase()));
    },
    aa = (e, t, n) => {
     var i;
     let { envKey: a, disableTracking: r, muxDataSDK: s = dn, muxDataSDKOptions: o = {} } = e,
      l = ia(e);
     if (!r && (a || l)) {
      let { playerInitTime: r, playerSoftwareName: l, playerSoftwareVersion: d, beaconCollectionDomain: u, debug: c, disableCookies: h } = e,
       m = { ...e.metadata, video_title: (null == (i = null == e ? void 0 : e.metadata) ? void 0 : i.video_title) || void 0 },
       p = (t) => 'string' != typeof t.player_error_code && ('function' == typeof e.errorTranslator ? e.errorTranslator(t) : t);
      s.monitor(t, { debug: c, beaconCollectionDomain: u, hlsjs: n, Hls: n ? un : void 0, automaticErrorTracking: !1, errorTranslator: p, disableCookies: h, ...o, data: { ...(a ? { env_key: a } : {}), player_software_name: l, player_software: l, player_software_version: d, player_init_time: r, ...m } });
     }
    },
    ra = (e, t, n) => {
     var i, a;
     let r,
      s,
      o = Zi(e, t),
      { src: l, customDomain: d = Ni } = e,
      u = () => {
       t.ended || !ji(t, n) || (Yi(t, n) ? (t.currentTime = t.buffered.end(t.buffered.length - 1)) : t.dispatchEvent(new Event('ended')));
      },
      c = () => {
       let e,
        n,
        i = Ki(t);
       i.length > 0 && ((e = i.start(0)), (n = i.end(0))), (s !== n || r !== e) && t.dispatchEvent(new CustomEvent('seekablechange', { composed: !0 })), (r = e), (s = n);
      };
     if ((Dn(t, 'durationchange', c), t && o)) {
      let n = Mn(e);
      if ('string' == typeof l) {
       if (l.endsWith('.mp4') && l.includes(d)) {
        let e = Vi(l),
         n = new URL(`https://stream.${d}/${e}/metadata.json`);
        Ri(n.toString(), t);
       }
       let r = () => {
         if (qi(t) !== fn.LIVE || Number.isFinite(t.duration)) return;
         let e = setInterval(c, 1e3);
         t.addEventListener(
          'teardown',
          () => {
           clearInterval(e);
          },
          { once: !0 },
         ),
          Dn(t, 'durationchange', () => {
           Number.isFinite(t.duration) && clearInterval(e);
          });
        },
        s = async () =>
         (async (e, t, n = Mn({ src: e })) => {
          var i, a, r, s;
          let { streamType: o, targetLiveWindow: l, liveEdgeStartOffset: d, sessionData: u } = await Si(e, n),
           c = null == u ? void 0 : u['com.apple.hls.chapters'];
          ((null != c && c.URI) || (null != c && c.VALUE.toLocaleLowerCase().startsWith('http'))) && Ri(null != (i = c.URI) ? i : c.VALUE, t), ((null != (a = xi.get(t)) ? a : {}).liveEdgeStartOffset = d), ((null != (r = xi.get(t)) ? r : {}).targetLiveWindow = l), t.dispatchEvent(new CustomEvent('targetlivewindowchange', { composed: !0, bubbles: !0 })), ((null != (s = xi.get(t)) ? s : {}).streamType = o), t.dispatchEvent(new CustomEvent('streamtypechange', { composed: !0, bubbles: !0 }));
         })(l, t, n)
          .then(r)
          .catch((n) => {
           if (n instanceof Response) {
            let i = di(n, cn, e);
            if (i) return void la(t, i);
           } else Error;
          });
       if ('none' === t.preload) {
        let e = () => {
          s(), t.removeEventListener('loadedmetadata', n);
         },
         n = () => {
          s(), t.removeEventListener('play', e);
         };
        Dn(t, 'play', e, { once: !0 }), Dn(t, 'loadedmetadata', n, { once: !0 });
       } else s();
       null != (i = e.tokens) && i.drm
        ? ea(e, t)
        : Dn(
           t,
           'encrypted',
           () => {
            let e = Wn('Attempting to play DRM-protected content without providing a DRM token.'),
             n = new bn(e, bn.MEDIA_ERR_ENCRYPTED, !0);
            (n.errorCategory = hn), (n.muxCode = mn.ENCRYPTED_MISSING_TOKEN), la(t, n);
           },
           { once: !0 },
          ),
        t.setAttribute('src', l),
        e.startTime && (((null != (a = xi.get(t)) ? a : {}).startTime = e.startTime), t.addEventListener('durationchange', sa, { once: !0 }));
      } else t.removeAttribute('src');
      t.addEventListener('error', oa),
       t.addEventListener('error', da),
       t.addEventListener(
        'emptied',
        () => {
         t.querySelectorAll('track[data-removeondestroy]').forEach((e) => {
          e.remove();
         });
        },
        { once: !0 },
       ),
       Dn(t, 'pause', u),
       Dn(t, 'seeked', u),
       Dn(t, 'play', () => {
        t.ended || (Fi(t.currentTime, t.duration) && (t.currentTime = t.seekable.length ? t.seekable.start(0) : 0));
       });
     } else
      n && l
       ? (n.once(un.Events.LEVEL_LOADED, (e, i) => {
          Ci(i.details, t, n),
           c(),
           qi(t) === fn.LIVE &&
            !Number.isFinite(t.duration) &&
            (n.on(un.Events.LEVEL_UPDATED, c),
            Dn(t, 'durationchange', () => {
             Number.isFinite(t.duration) && n.off(un.Events.LEVELS_UPDATED, c);
            }));
         }),
         n.on(un.Events.ERROR, (i, a) => {
          var r, s;
          let o = Ta(a, e);
          if (o.muxCode === mn.NETWORK_NOT_READY) {
           let e = null != (r = xi.get(t)) ? r : {},
            i = null != (s = e.retryCount) ? s : 0;
           if (i < 6) {
            let r = 0 === i ? 5e3 : 6e4,
             s = new bn(`Retrying in ${r / 1e3} seconds...`, o.code, o.fatal);
            return (
             Object.assign(s, o),
             la(t, s),
             void setTimeout(() => {
              (e.retryCount = i + 1), 'manifestLoadError' === a.details && a.url && n.loadSource(a.url);
             }, r)
            );
           }
           {
            e.retryCount = 0;
            let n = new bn('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>', o.code, o.fatal);
            return Object.assign(n, o), void la(t, n);
           }
          }
          la(t, o);
         }),
         n.on(un.Events.MANIFEST_LOADED, () => {
          let e = xi.get(t);
          e && e.error && ((e.error = null), (e.retryCount = 0), t.dispatchEvent(new Event('emptied')), t.dispatchEvent(new Event('loadstart')));
         }),
         t.addEventListener('error', da),
         Dn(t, 'waiting', u),
         Kn(e, n),
         (function (e, t) {
          t.on(un.Events.NON_NATIVE_TEXT_TRACKS_FOUND, (n, { tracks: i }) => {
           i.forEach((n) => {
            var i, a;
            let r = null != (i = n.subtitleTrack) ? i : n.closedCaptions,
             s = t.subtitleTracks.findIndex(({ lang: e, name: t, type: i }) => e == (null == r ? void 0 : r.lang) && t === n.label && i.toLowerCase() === n.kind),
             o = (null != (a = n._id) ? a : n.default) ? 'default' : `${n.kind}${s}`;
            Yn(e, n.kind, n.label, null == r ? void 0 : r.lang, o, n.default);
           });
          });
          let n = () => {
           if (!t.subtitleTracks.length) return;
           let n = Array.from(e.textTracks).find((e) => e.id && 'showing' === e.mode && ['subtitles', 'captions'].includes(e.kind));
           if (!n) return;
           let i = t.subtitleTracks[t.subtitleTrack],
            a = i ? (i.default ? 'default' : `${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`) : void 0;
           if (t.subtitleTrack < 0 || (null == n ? void 0 : n.id) !== a) {
            let e = t.subtitleTracks.findIndex(({ lang: e, name: t, type: i, default: a }) => ('default' === n.id && a) || (e == n.language && t === n.label && i.toLowerCase() === n.kind));
            t.subtitleTrack = e;
           }
           (null == n ? void 0 : n.id) === a &&
            n.cues &&
            Array.from(n.cues).forEach((e) => {
             n.addCue(e);
            });
          };
          e.textTracks.addEventListener('change', n),
           t.on(un.Events.CUES_PARSED, (t, { track: n, cues: i }) => {
            let a = e.textTracks.getTrackById(n);
            if (!a) return;
            let r = 'disabled' === a.mode;
            r && (a.mode = 'hidden'),
             i.forEach((e) => {
              var t;
              (null != (t = a.cues) && t.getCueById(e.id)) || a.addCue(e);
             }),
             r && (a.mode = 'disabled');
           }),
           t.once(un.Events.DESTROYING, () => {
            e.textTracks.removeEventListener('change', n),
             e.querySelectorAll('track[data-removeondestroy]').forEach((e) => {
              e.remove();
             });
           });
          let i = () => {
           Array.from(e.textTracks).forEach((t) => {
            var n, i;
            if (!['subtitles', 'caption'].includes(t.kind) && ('thumbnails' === t.label || 'chapters' === t.kind)) {
             if (null == (n = t.cues) || !n.length) {
              let n = 'track';
              t.kind && (n += `[kind="${t.kind}"]`), t.label && (n += `[label="${t.label}"]`);
              let a = e.querySelector(n),
               r = null != (i = null == a ? void 0 : a.getAttribute('src')) ? i : '';
              null == a || a.removeAttribute('src'),
               setTimeout(() => {
                null == a || a.setAttribute('src', r);
               }, 0);
             }
             'hidden' !== t.mode && (t.mode = 'hidden');
            }
           });
          };
          t.once(un.Events.MANIFEST_LOADED, i), t.once(un.Events.MEDIA_ATTACHED, i);
         })(t, n),
         n.attachMedia(t))
       : console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.");
    };
   function sa(e) {
    var t;
    let n = e.target,
     i = null == (t = xi.get(n)) ? void 0 : t.startTime;
    if (
     i &&
     (function (e, t, n) {
      t && n > t && (n = t);
      for (let i = 0; i < e.length; i++) if (e.start(i) <= n && e.end(i) >= n) return !0;
      return !1;
     })(n.seekable, n.duration, i)
    ) {
     let e = 'auto' === n.preload;
     e && (n.preload = 'none'), (n.currentTime = i), e && (n.preload = 'auto');
    }
   }
   async function oa(e) {
    if (!e.isTrusted) return;
    e.stopImmediatePropagation();
    let t = e.target;
    if (null == t || !t.error) return;
    let { message: n, code: i } = t.error,
     a = new bn(n, i);
    if (t.src && i === bn.MEDIA_ERR_SRC_NOT_SUPPORTED && t.readyState === HTMLMediaElement.HAVE_NOTHING)
     setTimeout(() => {
      var e;
      let n = null != (e = $i(t)) ? e : t.error;
      (null == n ? void 0 : n.code) === bn.MEDIA_ERR_SRC_NOT_SUPPORTED && la(t, a);
     }, 500);
    else {
     if (t.src && (i !== bn.MEDIA_ERR_DECODE || void 0 !== i))
      try {
       let { status: e } = await fetch(t.src);
       a.data = { response: { code: e } };
      } catch {}
     la(t, a);
    }
   }
   function la(e, t) {
    var n;
    t.fatal && (((null != (n = xi.get(e)) ? n : {}).error = t), e.dispatchEvent(new CustomEvent('error', { detail: t })));
   }
   function da(e) {
    var t, n;
    if (!(e instanceof CustomEvent && e.detail instanceof bn)) return;
    let i = e.target,
     a = e.detail;
    !a || !a.fatal || (((null != (t = xi.get(i)) ? t : {}).error = a), null == (n = i.mux) || n.emit('error', { player_error_code: a.code, player_error_message: a.message, player_error_context: a.context }));
   }
   var ua,
    ca,
    ha,
    ma,
    pa,
    va,
    ba,
    ga,
    Ea,
    fa,
    ya,
    _a,
    Ta = (e, t) => {
     var n, i, a;
     console.error('getErrorFromHlsErrorData()', e);
     let r,
      s = { [un.ErrorTypes.NETWORK_ERROR]: bn.MEDIA_ERR_NETWORK, [un.ErrorTypes.MEDIA_ERROR]: bn.MEDIA_ERR_DECODE, [un.ErrorTypes.KEY_SYSTEM_ERROR]: bn.MEDIA_ERR_ENCRYPTED },
      o = ((e) => ([un.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, un.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details) ? bn.MEDIA_ERR_NETWORK : s[e.type]))(e);
     if (o === bn.MEDIA_ERR_NETWORK && e.response) {
      let a = null != (n = ((e) => (e.type === un.ErrorTypes.KEY_SYSTEM_ERROR ? hn : e.type === un.ErrorTypes.NETWORK_ERROR ? cn : void 0))(e)) ? n : cn;
      r = null != (i = di(e.response, a, t, e.fatal)) ? i : new bn('', o, e.fatal);
     } else if (o === bn.MEDIA_ERR_ENCRYPTED)
      if (e.details === un.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE) {
       let t = Wn('Attempting to play DRM-protected content without providing a DRM token.');
       (r = new bn(t, bn.MEDIA_ERR_ENCRYPTED, e.fatal)), (r.errorCategory = hn), (r.muxCode = mn.ENCRYPTED_MISSING_TOKEN);
      } else if (e.details === un.ErrorDetails.KEY_SYSTEM_NO_ACCESS) {
       let t = Wn('Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.');
       (r = new bn(t, bn.MEDIA_ERR_ENCRYPTED, e.fatal)), (r.errorCategory = hn), (r.muxCode = mn.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM);
      } else if (e.details === un.ErrorDetails.KEY_SYSTEM_NO_SESSION) {
       let e = Wn('Failed to generate a DRM license request. This may be an issue with the player or your protected content.');
       (r = new bn(e, bn.MEDIA_ERR_ENCRYPTED, !0)), (r.errorCategory = hn), (r.muxCode = mn.ENCRYPTED_GENERATE_REQUEST_FAILED);
      } else if (e.details === un.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED) {
       let t = Wn('Failed to update DRM license. This may be an issue with the player or your protected content.');
       (r = new bn(t, bn.MEDIA_ERR_ENCRYPTED, e.fatal)), (r.errorCategory = hn), (r.muxCode = mn.ENCRYPTED_UPDATE_LICENSE_FAILED);
      } else if (e.details === un.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED) {
       let t = Wn('Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.');
       (r = new bn(t, bn.MEDIA_ERR_ENCRYPTED, e.fatal)), (r.errorCategory = hn), (r.muxCode = mn.ENCRYPTED_UPDATE_SERVER_CERT_FAILED);
      } else if (e.details === un.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR) {
       let t = Wn('The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.');
       (r = new bn(t, bn.MEDIA_ERR_ENCRYPTED, e.fatal)), (r.errorCategory = hn), (r.muxCode = mn.ENCRYPTED_CDM_ERROR);
      } else if (e.details === un.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED) {
       let e = Wn('DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.');
       (r = new bn(e, bn.MEDIA_ERR_ENCRYPTED, !1)), (r.errorCategory = hn), (r.muxCode = mn.ENCRYPTED_OUTPUT_RESTRICTED);
      } else (r = new bn(e.error.message, bn.MEDIA_ERR_ENCRYPTED, e.fatal)), (r.errorCategory = hn), (r.muxCode = mn.ENCRYPTED_ERROR);
     else r = new bn('', o, e.fatal);
     return r.context || (r.context = `${e.url ? `url: ${e.url}\n` : ''}${e.response && (e.response.code || e.response.text) ? `response: ${e.response.code}, ${e.response.text}\n` : ''}${e.reason ? `failure reason: ${e.reason}\n` : ''}${e.level ? `level: ${e.level}\n` : ''}${e.parent ? `parent stream controller: ${e.parent}\n` : ''}${e.buffer ? `buffer length: ${e.buffer}\n` : ''}${e.error ? `error: ${e.error}\n` : ''}${e.event ? `event: ${e.event}\n` : ''}${e.err ? `error message: ${null == (a = e.err) ? void 0 : a.message}\n` : ''}`), (r.data = e), r;
    },
    Aa = n(60922),
    ka = (e) => {
     throw TypeError(e);
    },
    wa = (e, t, n) => t.has(e) || ka('Cannot ' + n),
    Ia = (e, t, n) => (wa(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    Sa = (e, t, n) => (t.has(e) ? ka('Cannot add the same private member more than once') : t instanceof WeakSet ? t.add(e) : t.set(e, n)),
    Ra = (e, t, n, i) => (wa(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    Ca = (e, t, n) => (wa(e, t, 'access private method'), n),
    Da = (() => {
     try {
      return '0.26.1';
     } catch {}
     return 'UNKNOWN';
    })(),
    La = { BEACON_COLLECTION_DOMAIN: 'beacon-collection-domain', CUSTOM_DOMAIN: 'custom-domain', DEBUG: 'debug', DISABLE_TRACKING: 'disable-tracking', DISABLE_COOKIES: 'disable-cookies', DRM_TOKEN: 'drm-token', PLAYBACK_TOKEN: 'playback-token', ENV_KEY: 'env-key', MAX_RESOLUTION: 'max-resolution', MIN_RESOLUTION: 'min-resolution', RENDITION_ORDER: 'rendition-order', PROGRAM_START_TIME: 'program-start-time', PROGRAM_END_TIME: 'program-end-time', ASSET_START_TIME: 'asset-start-time', ASSET_END_TIME: 'asset-end-time', METADATA_URL: 'metadata-url', PLAYBACK_ID: 'playback-id', PLAYER_SOFTWARE_NAME: 'player-software-name', PLAYER_SOFTWARE_VERSION: 'player-software-version', PLAYER_INIT_TIME: 'player-init-time', PREFER_CMCD: 'prefer-cmcd', PREFER_PLAYBACK: 'prefer-playback', START_TIME: 'start-time', STREAM_TYPE: 'stream-type', TARGET_LIVE_WINDOW: 'target-live-window', LIVE_EDGE_OFFSET: 'live-edge-offset', TYPE: 'type', LOGO: 'logo' },
    Ma = Object.values(La),
    xa = Da,
    Na = 'mux-video',
    Oa = class extends Aa.zM {
     constructor() {
      super(),
       Sa(this, ya),
       Sa(this, ua),
       Sa(this, ca),
       Sa(this, ha),
       Sa(this, ma, {}),
       Sa(this, pa, {}),
       Sa(this, va),
       Sa(this, ba),
       Sa(this, ga),
       Sa(this, Ea),
       Sa(this, fa, ''),
       Ra(this, ha, Ui()),
       this.nativeEl.addEventListener('muxmetadata', (e) => {
        var t;
        let n = ((e) => {
          var t;
          return null == (t = xi.get(e)) ? void 0 : t.metadata;
         })(this.nativeEl),
         i = null != (t = this.metadata) ? t : {};
        (this.metadata = { ...n, ...i }), 'mux-free-plan' === (null == n ? void 0 : n['com.mux.video.branding']) && (Ra(this, fa, 'default'), this.updateLogo());
       });
     }
     static get NAME() {
      return Na;
     }
     static get VERSION() {
      return xa;
     }
     static get observedAttributes() {
      var e;
      return [...Ma, ...(null != (e = Aa.zM.observedAttributes) ? e : [])];
     }
     static getLogoHTML(e) {
      return e && 'false' !== e ? ('default' === e ? '\n<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>' : `<img part="logo" src="${e}" />`) : '';
     }
     static getTemplateHTML(e = {}) {
      var t;
      return `\n      ${Aa.zM.getTemplateHTML(e)}\n      <style>\n        :host {\n          position: relative;\n        }\n        slot[name="logo"] {\n          display: flex;\n          justify-content: end;\n          position: absolute;\n          top: 1rem;\n          right: 1rem;\n          opacity: 0;\n          transition: opacity 0.25s ease-in-out;\n          z-index: 1;\n        }\n        slot[name="logo"]:has([part="logo"]) {\n          opacity: 1;\n        }\n        slot[name="logo"] [part="logo"] {\n          width: 5rem;\n          pointer-events: none;\n          user-select: none;\n        }\n      </style>\n      <slot name="logo">\n        ${this.getLogoHTML(null != (t = e[La.LOGO]) ? t : '')}\n      </slot>\n    `;
     }
     get preferCmcd() {
      var e;
      return null != (e = this.getAttribute(La.PREFER_CMCD)) ? e : void 0;
     }
     set preferCmcd(e) {
      e !== this.preferCmcd && (e ? (An.includes(e) ? this.setAttribute(La.PREFER_CMCD, e) : console.warn(`Invalid value for preferCmcd. Must be one of ${An.join()}`)) : this.removeAttribute(La.PREFER_CMCD));
     }
     get playerInitTime() {
      return this.hasAttribute(La.PLAYER_INIT_TIME) ? +this.getAttribute(La.PLAYER_INIT_TIME) : Ia(this, ha);
     }
     set playerInitTime(e) {
      e != this.playerInitTime && (null == e ? this.removeAttribute(La.PLAYER_INIT_TIME) : this.setAttribute(La.PLAYER_INIT_TIME, '' + +e));
     }
     get playerSoftwareName() {
      var e;
      return null != (e = Ia(this, ga)) ? e : Na;
     }
     set playerSoftwareName(e) {
      Ra(this, ga, e);
     }
     get playerSoftwareVersion() {
      var e;
      return null != (e = Ia(this, ba)) ? e : xa;
     }
     set playerSoftwareVersion(e) {
      Ra(this, ba, e);
     }
     get _hls() {
      var e;
      return null == (e = Ia(this, ua)) ? void 0 : e.engine;
     }
     get mux() {
      var e;
      return null == (e = this.nativeEl) ? void 0 : e.mux;
     }
     get error() {
      var e;
      return null != (e = $i(this.nativeEl)) ? e : null;
     }
     get errorTranslator() {
      return Ia(this, Ea);
     }
     set errorTranslator(e) {
      Ra(this, Ea, e);
     }
     get src() {
      return this.getAttribute('src');
     }
     set src(e) {
      e !== this.src && (null == e ? this.removeAttribute('src') : this.setAttribute('src', e));
     }
     get type() {
      var e;
      return null != (e = this.getAttribute(La.TYPE)) ? e : void 0;
     }
     set type(e) {
      e !== this.type && (e ? this.setAttribute(La.TYPE, e) : this.removeAttribute(La.TYPE));
     }
     get preload() {
      let e = this.getAttribute('preload');
      return '' === e ? 'auto' : ['none', 'metadata', 'auto'].includes(e) ? e : super.preload;
     }
     set preload(e) {
      e != this.getAttribute('preload') && (['', 'none', 'metadata', 'auto'].includes(e) ? this.setAttribute('preload', e) : this.removeAttribute('preload'));
     }
     get debug() {
      return null != this.getAttribute(La.DEBUG);
     }
     set debug(e) {
      e !== this.debug && (e ? this.setAttribute(La.DEBUG, '') : this.removeAttribute(La.DEBUG));
     }
     get disableTracking() {
      return this.hasAttribute(La.DISABLE_TRACKING);
     }
     set disableTracking(e) {
      e !== this.disableTracking && this.toggleAttribute(La.DISABLE_TRACKING, !!e);
     }
     get disableCookies() {
      return this.hasAttribute(La.DISABLE_COOKIES);
     }
     set disableCookies(e) {
      e !== this.disableCookies && (e ? this.setAttribute(La.DISABLE_COOKIES, '') : this.removeAttribute(La.DISABLE_COOKIES));
     }
     get startTime() {
      let e = this.getAttribute(La.START_TIME);
      if (null == e) return;
      let t = +e;
      return Number.isNaN(t) ? void 0 : t;
     }
     set startTime(e) {
      e !== this.startTime && (null == e ? this.removeAttribute(La.START_TIME) : this.setAttribute(La.START_TIME, `${e}`));
     }
     get playbackId() {
      var e;
      return this.hasAttribute(La.PLAYBACK_ID) ? this.getAttribute(La.PLAYBACK_ID) : null != (e = Vi(this.src)) ? e : void 0;
     }
     set playbackId(e) {
      e !== this.playbackId && (e ? this.setAttribute(La.PLAYBACK_ID, e) : this.removeAttribute(La.PLAYBACK_ID));
     }
     get maxResolution() {
      var e;
      return null != (e = this.getAttribute(La.MAX_RESOLUTION)) ? e : void 0;
     }
     set maxResolution(e) {
      e !== this.maxResolution && (e ? this.setAttribute(La.MAX_RESOLUTION, e) : this.removeAttribute(La.MAX_RESOLUTION));
     }
     get minResolution() {
      var e;
      return null != (e = this.getAttribute(La.MIN_RESOLUTION)) ? e : void 0;
     }
     set minResolution(e) {
      e !== this.minResolution && (e ? this.setAttribute(La.MIN_RESOLUTION, e) : this.removeAttribute(La.MIN_RESOLUTION));
     }
     get renditionOrder() {
      var e;
      return null != (e = this.getAttribute(La.RENDITION_ORDER)) ? e : void 0;
     }
     set renditionOrder(e) {
      e !== this.renditionOrder && (e ? this.setAttribute(La.RENDITION_ORDER, e) : this.removeAttribute(La.RENDITION_ORDER));
     }
     get programStartTime() {
      let e = this.getAttribute(La.PROGRAM_START_TIME);
      if (null == e) return;
      let t = +e;
      return Number.isNaN(t) ? void 0 : t;
     }
     set programStartTime(e) {
      null == e ? this.removeAttribute(La.PROGRAM_START_TIME) : this.setAttribute(La.PROGRAM_START_TIME, `${e}`);
     }
     get programEndTime() {
      let e = this.getAttribute(La.PROGRAM_END_TIME);
      if (null == e) return;
      let t = +e;
      return Number.isNaN(t) ? void 0 : t;
     }
     set programEndTime(e) {
      null == e ? this.removeAttribute(La.PROGRAM_END_TIME) : this.setAttribute(La.PROGRAM_END_TIME, `${e}`);
     }
     get assetStartTime() {
      let e = this.getAttribute(La.ASSET_START_TIME);
      if (null == e) return;
      let t = +e;
      return Number.isNaN(t) ? void 0 : t;
     }
     set assetStartTime(e) {
      null == e ? this.removeAttribute(La.ASSET_START_TIME) : this.setAttribute(La.ASSET_START_TIME, `${e}`);
     }
     get assetEndTime() {
      let e = this.getAttribute(La.ASSET_END_TIME);
      if (null == e) return;
      let t = +e;
      return Number.isNaN(t) ? void 0 : t;
     }
     set assetEndTime(e) {
      null == e ? this.removeAttribute(La.ASSET_END_TIME) : this.setAttribute(La.ASSET_END_TIME, `${e}`);
     }
     get customDomain() {
      var e;
      return null != (e = this.getAttribute(La.CUSTOM_DOMAIN)) ? e : void 0;
     }
     set customDomain(e) {
      e !== this.customDomain && (e ? this.setAttribute(La.CUSTOM_DOMAIN, e) : this.removeAttribute(La.CUSTOM_DOMAIN));
     }
     get drmToken() {
      var e;
      return null != (e = this.getAttribute(La.DRM_TOKEN)) ? e : void 0;
     }
     set drmToken(e) {
      e !== this.drmToken && (e ? this.setAttribute(La.DRM_TOKEN, e) : this.removeAttribute(La.DRM_TOKEN));
     }
     get playbackToken() {
      var e, t, n, i;
      if (this.hasAttribute(La.PLAYBACK_TOKEN)) return null != (e = this.getAttribute(La.PLAYBACK_TOKEN)) ? e : void 0;
      if (this.hasAttribute(La.PLAYBACK_ID)) {
       let [, e] = Ln(null != (t = this.playbackId) ? t : '');
       return null != (n = new URLSearchParams(e).get('token')) ? n : void 0;
      }
      return this.src && null != (i = new URLSearchParams(this.src).get('token')) ? i : void 0;
     }
     set playbackToken(e) {
      e !== this.playbackToken && (e ? this.setAttribute(La.PLAYBACK_TOKEN, e) : this.removeAttribute(La.PLAYBACK_TOKEN));
     }
     get tokens() {
      let e = this.getAttribute(La.PLAYBACK_TOKEN),
       t = this.getAttribute(La.DRM_TOKEN);
      return { ...Ia(this, pa), ...(null != e ? { playback: e } : {}), ...(null != t ? { drm: t } : {}) };
     }
     set tokens(e) {
      Ra(this, pa, null != e ? e : {});
     }
     get ended() {
      return ji(this.nativeEl, this._hls);
     }
     get envKey() {
      var e;
      return null != (e = this.getAttribute(La.ENV_KEY)) ? e : void 0;
     }
     set envKey(e) {
      e !== this.envKey && (e ? this.setAttribute(La.ENV_KEY, e) : this.removeAttribute(La.ENV_KEY));
     }
     get beaconCollectionDomain() {
      var e;
      return null != (e = this.getAttribute(La.BEACON_COLLECTION_DOMAIN)) ? e : void 0;
     }
     set beaconCollectionDomain(e) {
      e !== this.beaconCollectionDomain && (e ? this.setAttribute(La.BEACON_COLLECTION_DOMAIN, e) : this.removeAttribute(La.BEACON_COLLECTION_DOMAIN));
     }
     get streamType() {
      var e;
      return null != (e = this.getAttribute(La.STREAM_TYPE)) ? e : qi(this.nativeEl);
     }
     set streamType(e) {
      e !== this.streamType && (e ? this.setAttribute(La.STREAM_TYPE, e) : this.removeAttribute(La.STREAM_TYPE));
     }
     get targetLiveWindow() {
      return this.hasAttribute(La.TARGET_LIVE_WINDOW)
       ? +this.getAttribute(La.TARGET_LIVE_WINDOW)
       : ((e) => {
          var t, n;
          return null != (n = null == (t = xi.get(e)) ? void 0 : t.targetLiveWindow) ? n : Number.NaN;
         })(this.nativeEl);
     }
     set targetLiveWindow(e) {
      e != this.targetLiveWindow && (null == e ? this.removeAttribute(La.TARGET_LIVE_WINDOW) : this.setAttribute(La.TARGET_LIVE_WINDOW, '' + +e));
     }
     get liveEdgeStart() {
      var e, t;
      if (this.hasAttribute(La.LIVE_EDGE_OFFSET)) {
       let { liveEdgeOffset: n } = this,
        i = null != (e = this.nativeEl.seekable.end(0)) ? e : 0,
        a = null != (t = this.nativeEl.seekable.start(0)) ? t : 0;
       return Math.max(a, i - n);
      }
      return ((e) => {
       var t;
       let n = null == (t = xi.get(e)) ? void 0 : t.liveEdgeStartOffset;
       if ('number' != typeof n) return Number.NaN;
       let i = Ki(e);
       return i.length ? i.end(i.length - 1) - n : Number.NaN;
      })(this.nativeEl);
     }
     get liveEdgeOffset() {
      if (this.hasAttribute(La.LIVE_EDGE_OFFSET)) return +this.getAttribute(La.LIVE_EDGE_OFFSET);
     }
     set liveEdgeOffset(e) {
      e != this.liveEdgeOffset && (null == e ? this.removeAttribute(La.LIVE_EDGE_OFFSET) : this.setAttribute(La.LIVE_EDGE_OFFSET, '' + +e));
     }
     get seekable() {
      return Ki(this.nativeEl);
     }
     async addCuePoints(e) {
      return zn(this.nativeEl, e);
     }
     get activeCuePoint() {
      return Jn(this.nativeEl);
     }
     get cuePoints() {
      return (function (e, t = { label: Qn }) {
       let n = jn(e, t.label, 'metadata');
       return null != n && n.cues ? Array.from(n.cues, (e) => Xn(e)) : [];
      })(this.nativeEl);
     }
     async addChapters(e) {
      return ii(this.nativeEl, e);
     }
     get activeChapter() {
      return ai(this.nativeEl);
     }
     get chapters() {
      return (function (e, t = { label: ei }) {
       var n;
       let i = jn(e, t.label, 'chapters');
       return null != (n = null == i ? void 0 : i.cues) && n.length ? Array.from(i.cues, (e) => ni(e)) : [];
      })(this.nativeEl);
     }
     getStartDate() {
      return (function (e, t) {
       if (t) {
        let n = t.playingDate;
        if (null != n) return new Date(n.getTime() - 1e3 * e.currentTime);
       }
       return 'function' == typeof e.getStartDate ? e.getStartDate() : new Date(NaN);
      })(this.nativeEl, this._hls);
     }
     get currentPdt() {
      return (function (e, t) {
       if (t && t.playingDate) return t.playingDate;
       if ('function' == typeof e.getStartDate) {
        let t = e.getStartDate();
        return new Date(t.getTime() + 1e3 * e.currentTime);
       }
       return new Date(NaN);
      })(this.nativeEl, this._hls);
     }
     get preferPlayback() {
      let e = this.getAttribute(La.PREFER_PLAYBACK);
      if (e === yn || e === _n) return e;
     }
     set preferPlayback(e) {
      e !== this.preferPlayback && (e === yn || e === _n ? this.setAttribute(La.PREFER_PLAYBACK, e) : this.removeAttribute(La.PREFER_PLAYBACK));
     }
     get metadata() {
      return {
       ...this.getAttributeNames()
        .filter((e) => e.startsWith('metadata-') && ![La.METADATA_URL].includes(e))
        .reduce((e, t) => {
         let n = this.getAttribute(t);
         return null != n && (e[t.replace(/^metadata-/, '').replace(/-/g, '_')] = n), e;
        }, {}),
       ...Ia(this, ma),
      };
     }
     set metadata(e) {
      Ra(this, ma, null != e ? e : {}), this.mux && this.mux.emit('hb', Ia(this, ma));
     }
     get _hlsConfig() {
      return Ia(this, va);
     }
     set _hlsConfig(e) {
      Ra(this, va, e);
     }
     get logo() {
      var e;
      return null != (e = this.getAttribute(La.LOGO)) ? e : Ia(this, fa);
     }
     set logo(e) {
      e ? this.setAttribute(La.LOGO, e) : this.removeAttribute(La.LOGO);
     }
     load() {
      Ra(this, ua, Gi(this, this.nativeEl, Ia(this, ua)));
     }
     unload() {
      Qi(this.nativeEl, Ia(this, ua), this), Ra(this, ua, void 0);
     }
     attributeChangedCallback(e, t, n) {
      var i, a;
      switch ((Aa.zM.observedAttributes.includes(e) && !['src', 'autoplay', 'preload'].includes(e) && super.attributeChangedCallback(e, t, n), e)) {
       case La.PLAYER_SOFTWARE_NAME:
        this.playerSoftwareName = null != n ? n : void 0;
        break;
       case La.PLAYER_SOFTWARE_VERSION:
        this.playerSoftwareVersion = null != n ? n : void 0;
        break;
       case 'src': {
        let e = !!t,
         i = !!n;
        !e && i ? Ca(this, ya, _a).call(this) : e && !i ? this.unload() : e && i && (this.unload(), Ca(this, ya, _a).call(this));
        break;
       }
       case 'autoplay':
        if (n === t) break;
        null == (i = Ia(this, ua)) || i.setAutoplay(this.autoplay);
        break;
       case 'preload':
        if (n === t) break;
        null == (a = Ia(this, ua)) || a.setPreload(n);
        break;
       case La.PLAYBACK_ID:
        this.src = Wi(this);
        break;
       case La.DEBUG: {
        let e = this.debug;
        this.mux && console.info('Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src.'), this._hls && (this._hls.config.debug = e);
        break;
       }
       case La.METADATA_URL:
        n &&
         fetch(n)
          .then((e) => e.json())
          .then((e) => (this.metadata = e))
          .catch(() => console.error(`Unable to load or parse metadata JSON from metadata-url ${n}!`));
        break;
       case La.STREAM_TYPE:
        (null == n || n !== t) && this.dispatchEvent(new CustomEvent('streamtypechange', { composed: !0, bubbles: !0 }));
        break;
       case La.TARGET_LIVE_WINDOW:
        (null == n || n !== t) && this.dispatchEvent(new CustomEvent('targetlivewindowchange', { composed: !0, bubbles: !0, detail: this.targetLiveWindow }));
        break;
       case La.LOGO:
        (null == n || n !== t) && this.updateLogo();
      }
     }
     updateLogo() {
      if (!this.shadowRoot) return;
      let e = this.shadowRoot.querySelector('slot[name="logo"]');
      if (!e) return;
      let t = this.constructor.getLogoHTML(Ia(this, fa) || this.logo);
      e.innerHTML = t;
     }
     connectedCallback() {
      var e;
      null == (e = super.connectedCallback) || e.call(this), this.nativeEl && this.src && !Ia(this, ua) && Ca(this, ya, _a).call(this);
     }
     disconnectedCallback() {
      this.unload();
     }
     handleEvent(e) {
      e.target === this.nativeEl && this.dispatchEvent(new CustomEvent(e.type, { composed: !0, detail: e.detail }));
     }
    };
   (ua = new WeakMap()),
    (ca = new WeakMap()),
    (ha = new WeakMap()),
    (ma = new WeakMap()),
    (pa = new WeakMap()),
    (va = new WeakMap()),
    (ba = new WeakMap()),
    (ga = new WeakMap()),
    (Ea = new WeakMap()),
    (fa = new WeakMap()),
    (ya = new WeakSet()),
    (_a = async function () {
     Ia(this, ca) || (await Ra(this, ca, Promise.resolve()), Ra(this, ca, null), this.load());
    });
   const Pa = new WeakMap();
   class Ua extends Error {}
   class Ha extends Error {}
   const Wa = ['application/x-mpegURL', 'application/vnd.apple.mpegurl', 'audio/mpegurl'];
   function Ba() {
    return globalThis.cast?.framework?.CastContext.getInstance();
   }
   function Va() {
    return Ba()?.getCurrentSession();
   }
   function $a() {
    return Va()?.getSessionObj().media[0];
   }
   function qa(e) {
    return Ba().setOptions({ receiverApplicationId: 'CC1AD845', autoJoinPolicy: 'origin_scoped', androidReceiverCompatible: !1, language: 'en-US', resumeSavedSession: !0, ...e });
   }
   const Ka = new (
     globalThis.WeakRef
      ? class extends Set {
         add(e) {
          super.add(new WeakRef(e));
         }
         forEach(e) {
          super.forEach((t) => {
           const n = t.deref();
           n && e(n);
          });
         }
        }
      : Set
    )(),
    Fa = new WeakSet();
   let Ya;
   var ja;
   (ja = () => {
    globalThis.chrome?.cast?.isAvailable
     ? Ya ||
       ((Ya = cast.framework),
       Ba().addEventListener(Ya.CastContextEventType.CAST_STATE_CHANGED, (e) => {
        Ka.forEach((t) => Pa.get(t).onCastStateChanged?.(e));
       }),
       Ba().addEventListener(Ya.CastContextEventType.SESSION_STATE_CHANGED, (e) => {
        Ka.forEach((t) => Pa.get(t).onSessionStateChanged?.(e));
       }),
       Ka.forEach((e) => Pa.get(e).init?.()))
     : console.debug('chrome.cast.isAvailable', globalThis.chrome?.cast?.isAvailable);
   }),
    globalThis.chrome?.cast?.isAvailable
     ? globalThis.cast?.framework
       ? ja()
       : customElements.whenDefined('google-cast-button').then(ja)
     : (globalThis.__onGCastApiAvailable = () => {
        customElements.whenDefined('google-cast-button').then(ja);
       });
   let Ga = 0;
   class Qa extends EventTarget {
    #e;
    #t;
    #n;
    #i;
    #a = 'disconnected';
    #r = !1;
    #s = new Set();
    #o = new WeakMap();
    constructor(e) {
     super(), (this.#e = e), Ka.add(this), Pa.set(this, { init: () => this.#l(), onCastStateChanged: () => this.#d(), onSessionStateChanged: () => this.#u(), getCastPlayer: () => this.#c }), this.#l();
    }
    get #c() {
     if (Fa.has(this.#e)) return this.#n;
    }
    get state() {
     return this.#a;
    }
    async watchAvailability(e) {
     if (this.#e.disableRemotePlayback) throw new Ua('disableRemotePlayback attribute is present.');
     return this.#o.set(e, ++Ga), this.#s.add(e), queueMicrotask(() => e(this.#h())), Ga;
    }
    async cancelWatchAvailability(e) {
     if (this.#e.disableRemotePlayback) throw new Ua('disableRemotePlayback attribute is present.');
     e ? this.#s.delete(e) : this.#s.clear();
    }
    async prompt() {
     if (this.#e.disableRemotePlayback) throw new Ua('disableRemotePlayback attribute is present.');
     if (!globalThis.chrome?.cast?.isAvailable) throw new Ha('The RemotePlayback API is disabled on this platform.');
     const e = Fa.has(this.#e);
     Fa.add(this.#e),
      qa(this.#e.castOptions),
      Object.entries(this.#i).forEach(([e, t]) => {
       this.#n.controller.addEventListener(e, t);
      });
     try {
      await Ba().requestSession();
     } catch (t) {
      if ((e || Fa.delete(this.#e), 'cancel' === t)) return;
      throw new Error(t);
     }
     Pa.get(this.#e)?.loadOnPrompt?.();
    }
    #m() {
     Fa.has(this.#e) &&
      (Object.entries(this.#i).forEach(([e, t]) => {
       this.#n.controller.removeEventListener(e, t);
      }),
      Fa.delete(this.#e),
      (this.#e.muted = this.#n.isMuted),
      (this.#e.currentTime = this.#n.savedPlayerState.currentTime),
      !1 === this.#n.savedPlayerState.isPaused && this.#e.play());
    }
    #h() {
     const e = Ba()?.getCastState();
     return e && 'NO_DEVICES_AVAILABLE' !== e;
    }
    #d() {
     const e = Ba().getCastState();
     if ((Fa.has(this.#e) && 'CONNECTING' === e && ((this.#a = 'connecting'), this.dispatchEvent(new Event('connecting'))), !this.#r && e?.includes('CONNECT'))) {
      this.#r = !0;
      for (let e of this.#s) e(!0);
     } else if (this.#r && (!e || 'NO_DEVICES_AVAILABLE' === e)) {
      this.#r = !1;
      for (let e of this.#s) e(!1);
     }
    }
    async #u() {
     const { SESSION_RESUMED: e } = Ya.SessionState;
     if (Ba().getSessionState() === e && this.#e.castSrc === $a()?.media.contentId) {
      Fa.add(this.#e),
       Object.entries(this.#i).forEach(([e, t]) => {
        this.#n.controller.addEventListener(e, t);
       });
      try {
       await (function (e) {
        return new Promise((t, n) => {
         $a().getStatus(e, t, n);
        });
       })(new chrome.cast.media.GetStatusRequest());
      } catch (t) {
       console.error(t);
      }
      this.#i[Ya.RemotePlayerEventType.IS_PAUSED_CHANGED](), this.#i[Ya.RemotePlayerEventType.PLAYER_STATE_CHANGED]();
     }
    }
    #l() {
     Ya &&
      !this.#t &&
      ((this.#t = !0),
      qa(this.#e.castOptions),
      this.#e.textTracks.addEventListener('change', () => this.#p()),
      this.#d(),
      (this.#n = new Ya.RemotePlayer()),
      new Ya.RemotePlayerController(this.#n),
      (this.#i = {
       [Ya.RemotePlayerEventType.IS_CONNECTED_CHANGED]: ({ value: e }) => {
        !0 === e ? ((this.#a = 'connected'), this.dispatchEvent(new Event('connect'))) : (this.#m(), (this.#a = 'disconnected'), this.dispatchEvent(new Event('disconnect')));
       },
       [Ya.RemotePlayerEventType.DURATION_CHANGED]: () => {
        this.#e.dispatchEvent(new Event('durationchange'));
       },
       [Ya.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]: () => {
        this.#e.dispatchEvent(new Event('volumechange'));
       },
       [Ya.RemotePlayerEventType.IS_MUTED_CHANGED]: () => {
        this.#e.dispatchEvent(new Event('volumechange'));
       },
       [Ya.RemotePlayerEventType.CURRENT_TIME_CHANGED]: () => {
        this.#c?.isMediaLoaded && this.#e.dispatchEvent(new Event('timeupdate'));
       },
       [Ya.RemotePlayerEventType.VIDEO_INFO_CHANGED]: () => {
        this.#e.dispatchEvent(new Event('resize'));
       },
       [Ya.RemotePlayerEventType.IS_PAUSED_CHANGED]: () => {
        this.#e.dispatchEvent(new Event(this.paused ? 'pause' : 'play'));
       },
       [Ya.RemotePlayerEventType.PLAYER_STATE_CHANGED]: () => {
        this.#c?.playerState !== chrome.cast.media.PlayerState.PAUSED && this.#e.dispatchEvent(new Event({ [chrome.cast.media.PlayerState.PLAYING]: 'playing', [chrome.cast.media.PlayerState.BUFFERING]: 'waiting', [chrome.cast.media.PlayerState.IDLE]: 'emptied' }[this.#c?.playerState]));
       },
       [Ya.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]: async () => {
        this.#c?.isMediaLoaded && (await Promise.resolve(), this.#v());
       },
      }));
    }
    #v() {
     this.#p();
    }
    async #p() {
     if (!this.#c) return;
     const e = (this.#n.mediaInfo?.tracks ?? []).filter(({ type: e }) => e === chrome.cast.media.TrackType.TEXT),
      t = [...this.#e.textTracks].filter(({ kind: e }) => 'subtitles' === e || 'captions' === e),
      n = e
       .map(({ language: e, name: n, trackId: i }) => {
        const { mode: a } = t.find((t) => t.language === e && t.label === n) ?? {};
        return !!a && { mode: a, trackId: i };
       })
       .filter(Boolean),
      i = n.filter(({ mode: e }) => 'showing' !== e).map(({ trackId: e }) => e),
      a = n.find(({ mode: e }) => 'showing' === e),
      r = Va()?.getSessionObj().media[0]?.activeTrackIds ?? [];
     let s = r;
     r.length && (s = s.filter((e) => !i.includes(e))), a?.trackId && (s = [...s, a.trackId]), (s = [...new Set(s)]);
     if (!((e, t) => e.length === t.length && e.every((e) => t.includes(e)))(r, s))
      try {
       const e = new chrome.cast.media.EditTracksInfoRequest(s);
       await (function (e) {
        return new Promise((t, n) => {
         $a().editTracksInfo(e, t, n);
        });
       })(e);
      } catch (o) {
       console.error(o);
      }
    }
   }
   const Za = (e) =>
    class extends e {
     static observedAttributes = [...(e.observedAttributes ?? []), 'cast-src', 'cast-content-type', 'cast-stream-type', 'cast-receiver'];
     #b = { paused: !1 };
     #g = { receiverApplicationId: 'CC1AD845', autoJoinPolicy: 'origin_scoped', androidReceiverCompatible: !1, language: 'en-US', resumeSavedSession: !0 };
     #E;
     #f;
     get remote() {
      return this.#f
       ? this.#f
       : globalThis.chrome
         ? (this.disableRemotePlayback ||
            (function () {
             const e = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1';
             if (globalThis.chrome?.cast || document.querySelector(`script[src="${e}"]`)) return;
             const t = document.createElement('script');
             (t.src = e), document.head.append(t);
            })(),
           Pa.set(this, { loadOnPrompt: () => this.#y() }),
           (this.#f = new Qa(this)))
         : super.remote;
     }
     get #c() {
      return Pa.get(this.remote)?.getCastPlayer?.();
     }
     attributeChangedCallback(e, t, n) {
      if ((super.attributeChangedCallback(e, t, n), 'cast-receiver' === e && n)) this.#g.receiverApplicationId = n;
      else if (this.#c)
       switch (e) {
        case 'cast-stream-type':
        case 'cast-src':
         this.load();
       }
     }
     async #y() {
      (this.#b.paused = super.paused), super.pause(), (this.muted = super.muted);
      try {
       await this.load();
      } catch (e) {
       console.error(e);
      }
     }
     async load() {
      if (!this.#c) return super.load();
      const e = new chrome.cast.media.MediaInfo(this.castSrc, this.castContentType);
      e.customData = this.castCustomData;
      const t = [...this.querySelectorAll('track')].filter(({ kind: e, src: t }) => t && ('subtitles' === e || 'captions' === e)),
       n = [];
      let i = 0;
      if (
       (t.length &&
        (e.tracks = t.map((e) => {
         const t = ++i;
         0 === n.length && 'showing' === e.track.mode && n.push(t);
         const a = new chrome.cast.media.Track(t, chrome.cast.media.TrackType.TEXT);
         return (a.trackContentId = e.src), (a.trackContentType = 'text/vtt'), (a.subtype = 'captions' === e.kind ? chrome.cast.media.TextTrackType.CAPTIONS : chrome.cast.media.TextTrackType.SUBTITLES), (a.name = e.label), (a.language = e.srclang), a;
        })),
       'live' === this.castStreamType ? (e.streamType = chrome.cast.media.StreamType.LIVE) : (e.streamType = chrome.cast.media.StreamType.BUFFERED),
       (e.metadata = new chrome.cast.media.GenericMediaMetadata()),
       (e.metadata.title = this.title),
       (e.metadata.images = [{ url: this.poster }]),
       (async function (e) {
        try {
         const t = (await fetch(e, { method: 'HEAD' })).headers.get('Content-Type');
         return Wa.some((e) => t === e);
        } catch (t) {
         return console.error('Error while trying to get the Content-Type of the manifest', t), !1;
        }
       })(this.castSrc))
      ) {
       const t = await (async function (e) {
        try {
         const t = await (await fetch(e)).text();
         let n = t;
         const i = (function (e) {
          const t = e.split('\n'),
           n = [];
          for (let i = 0; i < t.length; i++)
           if (t[i].trim().startsWith('#EXT-X-STREAM-INF')) {
            const e = t[i + 1] ? t[i + 1].trim() : '';
            e && !e.startsWith('#') && n.push(e);
           }
          return n;
         })(t);
         if (i.length > 0) {
          const t = new URL(i[0], e).toString();
          n = await (await fetch(t)).text();
         }
         return (function (e) {
          if (!e) return;
          const t = e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);
          return t ? t[1] : null;
         })(n.split('\n').find((e) => !e.trim().startsWith('#') && '' !== e.trim()));
        } catch (t) {
         return void console.error('Error while trying to parse the manifest playlist', t);
        }
       })(this.castSrc);
       (t?.includes('m4s') || t?.includes('mp4')) && ((e.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.FMP4), (e.hlsVideoSegmentFormat = chrome.cast.media.HlsVideoSegmentFormat.FMP4));
      }
      const a = new chrome.cast.media.LoadRequest(e);
      (a.currentTime = super.currentTime ?? 0), (a.autoplay = !this.#b.paused), (a.activeTrackIds = n), await Va()?.loadMedia(a), this.dispatchEvent(new Event('volumechange'));
     }
     play() {
      if (!this.#c) return super.play();
      this.#c.isPaused && this.#c.controller?.playOrPause();
     }
     pause() {
      this.#c ? this.#c.isPaused || this.#c.controller?.playOrPause() : super.pause();
     }
     get castOptions() {
      return this.#g;
     }
     get castReceiver() {
      return this.getAttribute('cast-receiver') ?? void 0;
     }
     set castReceiver(e) {
      this.castReceiver != e && this.setAttribute('cast-receiver', `${e}`);
     }
     get castSrc() {
      return this.getAttribute('cast-src') ?? this.querySelector('source')?.src ?? this.currentSrc;
     }
     set castSrc(e) {
      this.castSrc != e && this.setAttribute('cast-src', `${e}`);
     }
     get castContentType() {
      return this.getAttribute('cast-content-type') ?? void 0;
     }
     set castContentType(e) {
      this.setAttribute('cast-content-type', `${e}`);
     }
     get castStreamType() {
      return this.getAttribute('cast-stream-type') ?? this.streamType ?? void 0;
     }
     set castStreamType(e) {
      this.setAttribute('cast-stream-type', `${e}`);
     }
     get castCustomData() {
      return this.#E;
     }
     set castCustomData(e) {
      const t = typeof e;
      ['object', 'undefined'].includes(t) ? (this.#E = e) : console.error(`castCustomData must be nullish or an object but value was of type ${t}`);
     }
     get readyState() {
      if (this.#c)
       switch (this.#c.playerState) {
        case chrome.cast.media.PlayerState.IDLE:
         return 0;
        case chrome.cast.media.PlayerState.BUFFERING:
         return 2;
        default:
         return 3;
       }
      return super.readyState;
     }
     get paused() {
      return this.#c ? this.#c.isPaused : super.paused;
     }
     get muted() {
      return this.#c ? this.#c?.isMuted : super.muted;
     }
     set muted(e) {
      this.#c ? ((e && !this.#c.isMuted) || (!e && this.#c.isMuted)) && this.#c.controller?.muteOrUnmute() : (super.muted = e);
     }
     get volume() {
      return this.#c ? (this.#c?.volumeLevel ?? 1) : super.volume;
     }
     set volume(e) {
      if (this.#c) return (this.#c.volumeLevel = +e), void this.#c.controller?.setVolumeLevel();
      super.volume = e;
     }
     get duration() {
      return this.#c && this.#c?.isMediaLoaded ? (this.#c?.duration ?? NaN) : super.duration;
     }
     get currentTime() {
      return this.#c && this.#c?.isMediaLoaded ? (this.#c?.currentTime ?? 0) : super.currentTime;
     }
     set currentTime(e) {
      if (this.#c) return (this.#c.currentTime = e), void this.#c.controller?.seek();
      super.currentTime = e;
     }
    };
   var za = n(47273),
    Xa = (e) => {
     throw TypeError(e);
    },
    Ja = (e, t, n) => t.has(e) || Xa('Cannot ' + n),
    er = (e, t, n) => (Ja(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    tr = (e, t, n) => (t.has(e) ? Xa('Cannot add the same private member more than once') : t instanceof WeakSet ? t.add(e) : t.set(e, n)),
    nr = (e, t, n, i) => (Ja(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    ir = class {
     addEventListener() {}
     removeEventListener() {}
     dispatchEvent(e) {
      return !0;
     }
    };
   if ('undefined' == typeof DocumentFragment) {
    class e extends ir {}
    globalThis.DocumentFragment = e;
   }
   var ar,
    rr = class extends ir {},
    sr = { get(e) {}, define(e, t, n) {}, getName: (e) => null, upgrade(e) {}, whenDefined: (e) => Promise.resolve(rr) };
   ar = new WeakMap();
   var or,
    lr = {
     document: {
      createElement: function (e, t) {
       return new rr();
      },
     },
     DocumentFragment: DocumentFragment,
     customElements: sr,
     CustomEvent: class {
      constructor(e, t = {}) {
       tr(this, ar), nr(this, ar, null == t ? void 0 : t.detail);
      }
      get detail() {
       return er(this, ar);
      }
      initCustomEvent() {}
     },
     EventTarget: ir,
     HTMLElement: rr,
     HTMLVideoElement: class extends ir {},
    },
    dr = 'undefined' == typeof window || void 0 === globalThis.customElements,
    ur = dr ? lr : globalThis,
    cr =
     (dr || globalThis.document,
     class extends Za((0, za.lK)(Oa)) {
      constructor() {
       super(...arguments), tr(this, or);
      }
      get autoplay() {
       let e = this.getAttribute('autoplay');
       return null !== e && ('' === e || e);
      }
      set autoplay(e) {
       e !== this.autoplay && (e ? this.setAttribute('autoplay', 'string' == typeof e ? e : '') : this.removeAttribute('autoplay'));
      }
      get muxCastCustomData() {
       return { mux: { playbackId: this.playbackId, minResolution: this.minResolution, maxResolution: this.maxResolution, renditionOrder: this.renditionOrder, customDomain: this.customDomain, tokens: { drm: this.drmToken }, envKey: this.envKey, metadata: this.metadata, disableCookies: this.disableCookies, disableTracking: this.disableTracking, beaconCollectionDomain: this.beaconCollectionDomain, startTime: this.startTime, preferCmcd: this.preferCmcd } };
      }
      get castCustomData() {
       var e;
       return null != (e = er(this, or)) ? e : this.muxCastCustomData;
      }
      set castCustomData(e) {
       nr(this, or, e);
      }
     });
   (or = new WeakMap()), ur.customElements.get('mux-video') || (ur.customElements.define('mux-video', cr), (ur.MuxVideoElement = cr));
   const hr = { MEDIA_PLAY_REQUEST: 'mediaplayrequest', MEDIA_PAUSE_REQUEST: 'mediapauserequest', MEDIA_MUTE_REQUEST: 'mediamuterequest', MEDIA_UNMUTE_REQUEST: 'mediaunmuterequest', MEDIA_VOLUME_REQUEST: 'mediavolumerequest', MEDIA_SEEK_REQUEST: 'mediaseekrequest', MEDIA_AIRPLAY_REQUEST: 'mediaairplayrequest', MEDIA_ENTER_FULLSCREEN_REQUEST: 'mediaenterfullscreenrequest', MEDIA_EXIT_FULLSCREEN_REQUEST: 'mediaexitfullscreenrequest', MEDIA_PREVIEW_REQUEST: 'mediapreviewrequest', MEDIA_ENTER_PIP_REQUEST: 'mediaenterpiprequest', MEDIA_EXIT_PIP_REQUEST: 'mediaexitpiprequest', MEDIA_ENTER_CAST_REQUEST: 'mediaentercastrequest', MEDIA_EXIT_CAST_REQUEST: 'mediaexitcastrequest', MEDIA_SHOW_TEXT_TRACKS_REQUEST: 'mediashowtexttracksrequest', MEDIA_HIDE_TEXT_TRACKS_REQUEST: 'mediahidetexttracksrequest', MEDIA_SHOW_SUBTITLES_REQUEST: 'mediashowsubtitlesrequest', MEDIA_DISABLE_SUBTITLES_REQUEST: 'mediadisablesubtitlesrequest', MEDIA_TOGGLE_SUBTITLES_REQUEST: 'mediatogglesubtitlesrequest', MEDIA_PLAYBACK_RATE_REQUEST: 'mediaplaybackraterequest', MEDIA_RENDITION_REQUEST: 'mediarenditionrequest', MEDIA_AUDIO_TRACK_REQUEST: 'mediaaudiotrackrequest', MEDIA_SEEK_TO_LIVE_REQUEST: 'mediaseektoliverequest', REGISTER_MEDIA_STATE_RECEIVER: 'registermediastatereceiver', UNREGISTER_MEDIA_STATE_RECEIVER: 'unregistermediastatereceiver' },
    mr = { MEDIA_CHROME_ATTRIBUTES: 'mediachromeattributes', MEDIA_CONTROLLER: 'mediacontroller' },
    pr = { MEDIA_AIRPLAY_UNAVAILABLE: 'mediaAirplayUnavailable', MEDIA_AUDIO_TRACK_ENABLED: 'mediaAudioTrackEnabled', MEDIA_AUDIO_TRACK_LIST: 'mediaAudioTrackList', MEDIA_AUDIO_TRACK_UNAVAILABLE: 'mediaAudioTrackUnavailable', MEDIA_BUFFERED: 'mediaBuffered', MEDIA_CAST_UNAVAILABLE: 'mediaCastUnavailable', MEDIA_CHAPTERS_CUES: 'mediaChaptersCues', MEDIA_CURRENT_TIME: 'mediaCurrentTime', MEDIA_DURATION: 'mediaDuration', MEDIA_ENDED: 'mediaEnded', MEDIA_ERROR: 'mediaError', MEDIA_ERROR_CODE: 'mediaErrorCode', MEDIA_ERROR_MESSAGE: 'mediaErrorMessage', MEDIA_FULLSCREEN_UNAVAILABLE: 'mediaFullscreenUnavailable', MEDIA_HAS_PLAYED: 'mediaHasPlayed', MEDIA_HEIGHT: 'mediaHeight', MEDIA_IS_AIRPLAYING: 'mediaIsAirplaying', MEDIA_IS_CASTING: 'mediaIsCasting', MEDIA_IS_FULLSCREEN: 'mediaIsFullscreen', MEDIA_IS_PIP: 'mediaIsPip', MEDIA_LOADING: 'mediaLoading', MEDIA_MUTED: 'mediaMuted', MEDIA_PAUSED: 'mediaPaused', MEDIA_PIP_UNAVAILABLE: 'mediaPipUnavailable', MEDIA_PLAYBACK_RATE: 'mediaPlaybackRate', MEDIA_PREVIEW_CHAPTER: 'mediaPreviewChapter', MEDIA_PREVIEW_COORDS: 'mediaPreviewCoords', MEDIA_PREVIEW_IMAGE: 'mediaPreviewImage', MEDIA_PREVIEW_TIME: 'mediaPreviewTime', MEDIA_RENDITION_LIST: 'mediaRenditionList', MEDIA_RENDITION_SELECTED: 'mediaRenditionSelected', MEDIA_RENDITION_UNAVAILABLE: 'mediaRenditionUnavailable', MEDIA_SEEKABLE: 'mediaSeekable', MEDIA_STREAM_TYPE: 'mediaStreamType', MEDIA_SUBTITLES_LIST: 'mediaSubtitlesList', MEDIA_SUBTITLES_SHOWING: 'mediaSubtitlesShowing', MEDIA_TARGET_LIVE_WINDOW: 'mediaTargetLiveWindow', MEDIA_TIME_IS_LIVE: 'mediaTimeIsLive', MEDIA_VOLUME: 'mediaVolume', MEDIA_VOLUME_LEVEL: 'mediaVolumeLevel', MEDIA_VOLUME_UNAVAILABLE: 'mediaVolumeUnavailable', MEDIA_WIDTH: 'mediaWidth' },
    vr = Object.entries(pr),
    br = vr.reduce((e, [t, n]) => ((e[t] = n.toLowerCase()), e), {}),
    gr = vr.reduce((e, [t, n]) => ((e[t] = n.toLowerCase()), e), { USER_INACTIVE_CHANGE: 'userinactivechange', BREAKPOINTS_CHANGE: 'breakpointchange', BREAKPOINTS_COMPUTED: 'breakpointscomputed' }),
    Er =
     (Object.entries(gr).reduce(
      (e, [t, n]) => {
       const i = br[t];
       return i && (e[n] = i), e;
      },
      { userinactivechange: 'userinactive' },
     ),
     Object.entries(br).reduce(
      (e, [t, n]) => {
       const i = gr[t];
       return i && (e[n] = i), e;
      },
      { userinactive: 'userinactivechange' },
     )),
    fr = { SUBTITLES: 'subtitles', CAPTIONS: 'captions', DESCRIPTIONS: 'descriptions', CHAPTERS: 'chapters', METADATA: 'metadata' },
    yr = 'disabled',
    _r = 'showing',
    Tr = 'mouse',
    Ar = 'touch',
    kr = 'unavailable',
    wr = 'unsupported',
    Ir = { LIVE: 'live', ON_DEMAND: 'on-demand', UNKNOWN: 'unknown' },
    Sr = 'fullscreen';
   function Rr(e) {
    if (e) {
     const { id: t, width: n, height: i } = e;
     return [t, n, i].filter((e) => null != e).join(':');
    }
   }
   function Cr(e) {
    if (e) {
     const [t, n, i] = e.split(':');
     return { id: t, width: +n, height: +i };
    }
   }
   function Dr(e) {
    if (e) {
     const { id: t, kind: n, language: i, label: a } = e;
     return [t, n, i, a].filter((e) => null != e).join(':');
    }
   }
   function Lr(e) {
    if (e) {
     const [t, n, i, a] = e.split(':');
     return { id: t, kind: n, language: i, label: a };
    }
   }
   function Mr(e) {
    return e.replace(/[-_]([a-z])/g, (e, t) => t.toUpperCase());
   }
   function xr(e) {
    return 'number' == typeof e && !Number.isNaN(e) && Number.isFinite(e);
   }
   function Nr(e) {
    return 'string' == typeof e && !isNaN(e) && !isNaN(parseFloat(e));
   }
   const Or = (e) => new Promise((t) => setTimeout(t, e)),
    Pr = [
     { singular: 'hour', plural: 'hours' },
     { singular: 'minute', plural: 'minutes' },
     { singular: 'second', plural: 'seconds' },
    ],
    Ur = (e) => {
     if (!xr(e)) return '';
     const t = Math.abs(e),
      n = t !== e,
      i = new Date(0, 0, 0, 0, 0, t, 0),
      a = [i.getHours(), i.getMinutes(), i.getSeconds()]
       .map((e, t) => e && ((e, t) => `${e} ${1 === e ? Pr[t].singular : Pr[t].plural}`)(e, t))
       .filter((e) => e)
       .join(', ');
     return `${a}${n ? ' remaining' : ''}`;
    };
   function Hr(e, t) {
    let n = !1;
    e < 0 && ((n = !0), (e = 0 - e)), (e = e < 0 ? 0 : e);
    let i = Math.floor(e % 60),
     a = Math.floor((e / 60) % 60),
     r = Math.floor(e / 3600);
    const s = Math.floor((t / 60) % 60),
     o = Math.floor(t / 3600);
    return (isNaN(e) || e === 1 / 0) && (r = a = i = '0'), (r = r > 0 || o > 0 ? r + ':' : ''), (a = ((r || s >= 10) && a < 10 ? '0' + a : a) + ':'), (i = i < 10 ? '0' + i : i), (n ? '-' : '') + r + a + i;
   }
   Object.freeze({
    length: 0,
    start(e) {
     const t = e >>> 0;
     if (t >= this.length) throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);
     return 0;
    },
    end(e) {
     const t = e >>> 0;
     if (t >= this.length) throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);
     return 0;
    },
   });
   var Wr;
   const Br = { en: { 'Start airplay': 'Start airplay', 'Stop airplay': 'Stop airplay', Audio: 'Audio', Captions: 'Captions', 'Enable captions': 'Enable captions', 'Disable captions': 'Disable captions', 'Start casting': 'Start casting', 'Stop casting': 'Stop casting', 'Enter fullscreen mode': 'Enter fullscreen mode', 'Exit fullscreen mode': 'Exit fullscreen mode', Mute: 'Mute', Unmute: 'Unmute', 'Enter picture in picture mode': 'Enter picture in picture mode', 'Exit picture in picture mode': 'Exit picture in picture mode', Play: 'Play', Pause: 'Pause', 'Playback rate': 'Playback rate', 'Playback rate {playbackRate}': 'Playback rate {playbackRate}', Quality: 'Quality', 'Seek backward': 'Seek backward', 'Seek forward': 'Seek forward', Settings: 'Settings', Auto: 'Auto', 'audio player': 'audio player', 'video player': 'video player', volume: 'volume', seek: 'seek', 'closed captions': 'closed captions', 'current playback rate': 'current playback rate', 'playback time': 'playback time', 'media loading': 'media loading', settings: 'settings', 'audio tracks': 'audio tracks', quality: 'quality', play: 'play', pause: 'pause', mute: 'mute', unmute: 'unmute', live: 'live', Off: 'Off', 'start airplay': 'start airplay', 'stop airplay': 'stop airplay', 'start casting': 'start casting', 'stop casting': 'stop casting', 'enter fullscreen mode': 'enter fullscreen mode', 'exit fullscreen mode': 'exit fullscreen mode', 'enter picture in picture mode': 'enter picture in picture mode', 'exit picture in picture mode': 'exit picture in picture mode', 'seek to live': 'seek to live', 'playing live': 'playing live', 'seek back {seekOffset} seconds': 'seek back {seekOffset} seconds', 'seek forward {seekOffset} seconds': 'seek forward {seekOffset} seconds', 'Network Error': 'Network Error', 'Decode Error': 'Decode Error', 'Source Not Supported': 'Source Not Supported', 'Encryption Error': 'Encryption Error', 'A network error caused the media download to fail.': 'A network error caused the media download to fail.', 'A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.': 'A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.', 'An unsupported error occurred. The server or network failed, or your browser does not support this format.': 'An unsupported error occurred. The server or network failed, or your browser does not support this format.', 'The media is encrypted and there are no keys to decrypt it.': 'The media is encrypted and there are no keys to decrypt it.' } };
   let Vr = (null == (Wr = globalThis.navigator) ? void 0 : Wr.language) || 'en';
   const $r = (e, t = {}) =>
    ((e) => {
     var t, n, i;
     const [a] = Vr.split('-');
     return (null == (t = Br[Vr]) ? void 0 : t[e]) || (null == (n = Br[a]) ? void 0 : n[e]) || (null == (i = Br.en) ? void 0 : i[e]) || e;
    })(e).replace(/\{(\w+)\}/g, (e, n) => (n in t ? String(t[n]) : `{${n}}`));
   class qr {
    addEventListener() {}
    removeEventListener() {}
    dispatchEvent() {
     return !0;
    }
   }
   class Kr extends qr {}
   class Fr extends Kr {
    constructor() {
     super(...arguments), (this.role = null);
    }
   }
   const Yr = {
     createElement: function () {
      return new jr.HTMLElement();
     },
     createElementNS: function () {
      return new jr.HTMLElement();
     },
     addEventListener() {},
     removeEventListener() {},
     dispatchEvent: (e) => !1,
    },
    jr = {
     ResizeObserver: class {
      observe() {}
      unobserve() {}
      disconnect() {}
     },
     document: Yr,
     Node: Kr,
     Element: Fr,
     HTMLElement: class extends Fr {
      constructor() {
       super(...arguments), (this.innerHTML = '');
      }
      get content() {
       return new jr.DocumentFragment();
      }
     },
     DocumentFragment: class extends qr {},
     customElements: { get: function () {}, define: function () {}, whenDefined: function () {} },
     localStorage: { getItem: (e) => null, setItem(e, t) {}, removeItem(e) {} },
     CustomEvent: function () {},
     getComputedStyle: function () {},
     navigator: {
      languages: [],
      get userAgent() {
       return '';
      },
     },
     matchMedia: (e) => ({ matches: !1, media: e }),
     DOMParser: class {
      parseFromString(e, t) {
       return { body: { textContent: e } };
      }
     },
    },
    Gr = 'undefined' == typeof window || void 0 === window.customElements,
    Qr = Object.keys(jr).every((e) => e in globalThis),
    Zr = Gr && !Qr ? jr : globalThis,
    zr = Gr && !Qr ? Yr : globalThis.document,
    Xr = new WeakMap(),
    Jr = (e) => {
     let t = Xr.get(e);
     return t || Xr.set(e, (t = new Set())), t;
    },
    es = new Zr.ResizeObserver((e) => {
     for (const t of e) for (const e of Jr(t.target)) e(t);
    });
   function ts(e, t) {
    Jr(e).add(t), es.observe(e);
   }
   function ns(e, t) {
    const n = Jr(e);
    n.delete(t), n.size || es.unobserve(e);
   }
   function is(e) {
    const t = {};
    for (const n of e) t[n.name] = n.value;
    return t;
   }
   function as(e) {
    var t;
    return null != (t = rs(e)) ? t : ds(e, 'media-controller');
   }
   function rs(e) {
    var t;
    const { MEDIA_CONTROLLER: n } = mr,
     i = e.getAttribute(n);
    if (i) return null == (t = cs(e)) ? void 0 : t.getElementById(i);
   }
   const ss = (e, t, n = '.value') => {
     const i = e.querySelector(n);
     i && (i.textContent = t);
    },
    os = (e, t) =>
     ((e, t) => {
      const n = `slot[name="${t}"]`,
       i = e.shadowRoot.querySelector(n);
      return i ? i.children : [];
     })(e, t)[0],
    ls = (e, t) => !(!e || !t) && (!!(null == e ? void 0 : e.contains(t)) || ls(e, t.getRootNode().host)),
    ds = (e, t) => {
     if (!e) return null;
     const n = e.closest(t);
     return n || ds(e.getRootNode().host, t);
    };
   function us(e = document) {
    var t;
    const n = null == e ? void 0 : e.activeElement;
    return n ? (null != (t = us(n.shadowRoot)) ? t : n) : null;
   }
   function cs(e) {
    var t;
    const n = null == (t = null == e ? void 0 : e.getRootNode) ? void 0 : t.call(e);
    return n instanceof ShadowRoot || n instanceof Document ? n : null;
   }
   function hs(e, { depth: t = 3, checkOpacity: n = !0, checkVisibilityCSS: i = !0 } = {}) {
    if (e.checkVisibility) return e.checkVisibility({ checkOpacity: n, checkVisibilityCSS: i });
    let a = e;
    for (; a && t > 0; ) {
     const e = getComputedStyle(a);
     if ((n && '0' === e.opacity) || (i && 'hidden' === e.visibility) || 'none' === e.display) return !1;
     (a = a.parentElement), t--;
    }
    return !0;
   }
   function ms(e, t) {
    const n = (function (e, t) {
     var n, i;
     let a;
     for (a of null != (n = e.querySelectorAll('style:not([media])')) ? n : []) {
      let e;
      try {
       e = null == (i = a.sheet) ? void 0 : i.cssRules;
      } catch {
       continue;
      }
      for (const n of null != e ? e : []) if (t(n.selectorText)) return n;
     }
    })(e, (e) => e === t);
    return n || ps(e, t);
   }
   function ps(e, t) {
    var n, i;
    const a = null != (n = e.querySelectorAll('style:not([media])')) ? n : [],
     r = null == a ? void 0 : a[a.length - 1];
    return (null == r ? void 0 : r.sheet) ? (null == r || r.sheet.insertRule(`${t}{}`, r.sheet.cssRules.length), null == (i = r.sheet.cssRules) ? void 0 : i[r.sheet.cssRules.length - 1]) : (console.warn('Media Chrome: No style sheet found on style tag of', e), { style: { setProperty: () => {}, removeProperty: () => '', getPropertyValue: () => '' } });
   }
   function vs(e, t, n = Number.NaN) {
    const i = e.getAttribute(t);
    return null != i ? +i : n;
   }
   function bs(e, t, n) {
    const i = +n;
    null == n || Number.isNaN(i) ? e.hasAttribute(t) && e.removeAttribute(t) : vs(e, t, void 0) !== i && e.setAttribute(t, `${i}`);
   }
   function gs(e, t) {
    return e.hasAttribute(t);
   }
   function Es(e, t, n) {
    null != n ? gs(e, t) != n && e.toggleAttribute(t, n) : e.hasAttribute(t) && e.removeAttribute(t);
   }
   function fs(e, t, n = null) {
    var i;
    return null != (i = e.getAttribute(t)) ? i : n;
   }
   function ys(e, t, n) {
    if (null == n) return void (e.hasAttribute(t) && e.removeAttribute(t));
    const i = `${n}`;
    fs(e, t, void 0) !== i && e.setAttribute(t, i);
   }
   var _s,
    Ts = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    As = (e, t, n) => (Ts(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    ks = (e, t, n, i) => (Ts(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n);
   class ws extends Zr.HTMLElement {
    constructor() {
     if (
      (super(),
      ((e, t, n) => {
       if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
       t instanceof WeakSet ? t.add(e) : t.set(e, n);
      })(this, _s, void 0),
      !this.shadowRoot)
     ) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
     }
    }
    static get observedAttributes() {
     return [mr.MEDIA_CONTROLLER, br.MEDIA_PAUSED];
    }
    attributeChangedCallback(e, t, n) {
     var i, a, r, s, o;
     e === mr.MEDIA_CONTROLLER && (t && (null == (a = null == (i = As(this, _s)) ? void 0 : i.unassociateElement) || a.call(i, this), ks(this, _s, null)), n && this.isConnected && (ks(this, _s, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)), null == (o = null == (s = As(this, _s)) ? void 0 : s.associateElement) || o.call(s, this)));
    }
    connectedCallback() {
     var e, t, n, i;
     (this.tabIndex = -1),
      this.setAttribute('aria-hidden', 'true'),
      ks(
       this,
       _s,
       (function (e) {
        var t;
        const n = e.getAttribute(mr.MEDIA_CONTROLLER);
        if (n) return null == (t = e.getRootNode()) ? void 0 : t.getElementById(n);
        return ds(e, 'media-controller');
       })(this),
      ),
      this.getAttribute(mr.MEDIA_CONTROLLER) && (null == (t = null == (e = As(this, _s)) ? void 0 : e.associateElement) || t.call(e, this)),
      null == (n = As(this, _s)) || n.addEventListener('pointerdown', this),
      null == (i = As(this, _s)) || i.addEventListener('click', this);
    }
    disconnectedCallback() {
     var e, t, n, i;
     this.getAttribute(mr.MEDIA_CONTROLLER) && (null == (t = null == (e = As(this, _s)) ? void 0 : e.unassociateElement) || t.call(e, this)), null == (n = As(this, _s)) || n.removeEventListener('pointerdown', this), null == (i = As(this, _s)) || i.removeEventListener('click', this), ks(this, _s, null);
    }
    handleEvent(e) {
     var t;
     const n = null == (t = e.composedPath()) ? void 0 : t[0];
     if (['video', 'media-controller'].includes(null == n ? void 0 : n.localName))
      if ('pointerdown' === e.type) this._pointerType = e.pointerType;
      else if ('click' === e.type) {
       const { clientX: t, clientY: n } = e,
        { left: i, top: a, width: r, height: s } = this.getBoundingClientRect(),
        o = t - i,
        l = n - a;
       if (o < 0 || l < 0 || o > r || l > s || (0 === r && 0 === s)) return;
       const { pointerType: d = this._pointerType } = e;
       if (((this._pointerType = void 0), d === Ar)) return void this.handleTap(e);
       if (d === Tr) return void this.handleMouseClick(e);
      }
    }
    get mediaPaused() {
     return gs(this, br.MEDIA_PAUSED);
    }
    set mediaPaused(e) {
     Es(this, br.MEDIA_PAUSED, e);
    }
    handleTap(e) {}
    handleMouseClick(e) {
     const t = this.mediaPaused ? hr.MEDIA_PLAY_REQUEST : hr.MEDIA_PAUSE_REQUEST;
     this.dispatchEvent(new Zr.CustomEvent(t, { composed: !0, bubbles: !0 }));
    }
   }
   (_s = new WeakMap()),
    (ws.shadowRootOptions = { mode: 'open' }),
    (ws.getTemplateHTML = function (e) {
     return '\n    <style>\n      :host {\n        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));\n        box-sizing: border-box;\n      }\n    </style>\n  ';
    }),
    Zr.customElements.get('media-gesture-receiver') || Zr.customElements.define('media-gesture-receiver', ws);
   var Is,
    Ss,
    Rs,
    Cs,
    Ds,
    Ls,
    Ms,
    xs,
    Ns,
    Os,
    Ps,
    Us,
    Hs,
    Ws,
    Bs,
    Vs,
    $s,
    qs,
    Ks,
    Fs = ws,
    Ys = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    js = (e, t, n) => (Ys(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    Gs = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    Qs = (e, t, n, i) => (Ys(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    Zs = (e, t, n) => (Ys(e, t, 'access private method'), n);
   const zs = { AUDIO: 'audio', AUTOHIDE: 'autohide', BREAKPOINTS: 'breakpoints', GESTURES_DISABLED: 'gesturesdisabled', KEYBOARD_CONTROL: 'keyboardcontrol', NO_AUTOHIDE: 'noautohide', USER_INACTIVE: 'userinactive', AUTOHIDE_OVER_CONTROLS: 'autohideovercontrols' };
   const Xs = Object.values(br),
    Js = 'sm:384 md:576 lg:768 xl:960';
   function eo(e, t) {
    var n;
    if (!e.isConnected) return;
    const i = (function (e) {
      const t = e.split(/\s+/);
      return Object.fromEntries(t.map((e) => e.split(':')));
     })(null != (n = e.getAttribute(zs.BREAKPOINTS)) ? n : Js),
     a = (function (e, t) {
      return Object.keys(e).filter((n) => t >= parseInt(e[n]));
     })(i, t);
    let r = !1;
    if (
     (Object.keys(i).forEach((t) => {
      a.includes(t) ? e.hasAttribute(`breakpoint${t}`) || (e.setAttribute(`breakpoint${t}`, ''), (r = !0)) : e.hasAttribute(`breakpoint${t}`) && (e.removeAttribute(`breakpoint${t}`), (r = !0));
     }),
     r)
    ) {
     const t = new CustomEvent(gr.BREAKPOINTS_CHANGE, { detail: a });
     e.dispatchEvent(t);
    }
    e.breakpointsComputed || ((e.breakpointsComputed = !0), e.dispatchEvent(new CustomEvent(gr.BREAKPOINTS_COMPUTED, { bubbles: !0, composed: !0 })));
   }
   class to extends Zr.HTMLElement {
    constructor() {
     if (
      (super(),
      Gs(this, Ls),
      Gs(this, Os),
      Gs(this, Us),
      Gs(this, Ws),
      Gs(this, Vs),
      Gs(this, qs),
      Gs(this, Is, 0),
      Gs(this, Ss, null),
      Gs(this, Rs, null),
      Gs(this, Cs, void 0),
      (this.breakpointsComputed = !1),
      Gs(this, Ds, new MutationObserver(Zs(this, Ls, Ms).bind(this))),
      Gs(this, xs, !1),
      Gs(this, Ns, (e) => {
       js(this, xs) ||
        (setTimeout(() => {
         !(function (e) {
          eo(e.target, e.contentRect.width);
         })(e),
          Qs(this, xs, !1);
        }, 0),
        Qs(this, xs, !0));
      }),
      !this.shadowRoot)
     ) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes),
       t = this.constructor.getTemplateHTML(e);
      this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(t) : (this.shadowRoot.innerHTML = t);
     }
     const e = this.querySelector(':scope > slot[slot=media]');
     e &&
      e.addEventListener('slotchange', () => {
       e.assignedElements({ flatten: !0 }).length ? this.handleMediaUpdated(this.media) : js(this, Ss) && this.mediaUnsetCallback(js(this, Ss));
      });
    }
    static get observedAttributes() {
     return [zs.AUTOHIDE, zs.GESTURES_DISABLED].concat(Xs).filter((e) => ![br.MEDIA_RENDITION_LIST, br.MEDIA_AUDIO_TRACK_LIST, br.MEDIA_CHAPTERS_CUES, br.MEDIA_WIDTH, br.MEDIA_HEIGHT, br.MEDIA_ERROR, br.MEDIA_ERROR_MESSAGE].includes(e));
    }
    attributeChangedCallback(e, t, n) {
     e.toLowerCase() == zs.AUTOHIDE && (this.autohide = n);
    }
    get media() {
     let e = this.querySelector(':scope > [slot=media]');
     return 'SLOT' == (null == e ? void 0 : e.nodeName) && (e = e.assignedElements({ flatten: !0 })[0]), e;
    }
    async handleMediaUpdated(e) {
     e && (Qs(this, Ss, e), e.localName.includes('-') && (await Zr.customElements.whenDefined(e.localName)), this.mediaSetCallback(e));
    }
    connectedCallback() {
     var e;
     js(this, Ds).observe(this, { childList: !0, subtree: !0 }), ts(this, js(this, Ns));
     const t = null != this.getAttribute(zs.AUDIO),
      n = $r(t ? 'audio player' : 'video player');
     this.setAttribute('role', 'region'), this.setAttribute('aria-label', n), this.handleMediaUpdated(this.media), this.setAttribute(zs.USER_INACTIVE, ''), eo(this, this.getBoundingClientRect().width), this.addEventListener('pointerdown', this), this.addEventListener('pointermove', this), this.addEventListener('pointerup', this), this.addEventListener('mouseleave', this), this.addEventListener('keyup', this), null == (e = Zr.window) || e.addEventListener('mouseup', this);
    }
    disconnectedCallback() {
     var e;
     js(this, Ds).disconnect(), ns(this, js(this, Ns)), this.media && this.mediaUnsetCallback(this.media), null == (e = Zr.window) || e.removeEventListener('mouseup', this);
    }
    mediaSetCallback(e) {}
    mediaUnsetCallback(e) {
     Qs(this, Ss, null);
    }
    handleEvent(e) {
     switch (e.type) {
      case 'pointerdown':
       Qs(this, Is, e.timeStamp);
       break;
      case 'pointermove':
       Zs(this, Os, Ps).call(this, e);
       break;
      case 'pointerup':
       Zs(this, Us, Hs).call(this, e);
       break;
      case 'mouseleave':
       Zs(this, Ws, Bs).call(this);
       break;
      case 'mouseup':
       this.removeAttribute(zs.KEYBOARD_CONTROL);
       break;
      case 'keyup':
       Zs(this, qs, Ks).call(this), this.setAttribute(zs.KEYBOARD_CONTROL, '');
     }
    }
    set autohide(e) {
     const t = Number(e);
     Qs(this, Cs, isNaN(t) ? 0 : t);
    }
    get autohide() {
     return (void 0 === js(this, Cs) ? 2 : js(this, Cs)).toString();
    }
    get breakpoints() {
     return fs(this, zs.BREAKPOINTS);
    }
    set breakpoints(e) {
     ys(this, zs.BREAKPOINTS, e);
    }
    get audio() {
     return gs(this, zs.AUDIO);
    }
    set audio(e) {
     Es(this, zs.AUDIO, e);
    }
    get gesturesDisabled() {
     return gs(this, zs.GESTURES_DISABLED);
    }
    set gesturesDisabled(e) {
     Es(this, zs.GESTURES_DISABLED, e);
    }
    get keyboardControl() {
     return gs(this, zs.KEYBOARD_CONTROL);
    }
    set keyboardControl(e) {
     Es(this, zs.KEYBOARD_CONTROL, e);
    }
    get noAutohide() {
     return gs(this, zs.NO_AUTOHIDE);
    }
    set noAutohide(e) {
     Es(this, zs.NO_AUTOHIDE, e);
    }
    get autohideOverControls() {
     return gs(this, zs.AUTOHIDE_OVER_CONTROLS);
    }
    set autohideOverControls(e) {
     Es(this, zs.AUTOHIDE_OVER_CONTROLS, e);
    }
    get userInteractive() {
     return gs(this, zs.USER_INACTIVE);
    }
    set userInteractive(e) {
     Es(this, zs.USER_INACTIVE, e);
    }
   }
   (Is = new WeakMap()),
    (Ss = new WeakMap()),
    (Rs = new WeakMap()),
    (Cs = new WeakMap()),
    (Ds = new WeakMap()),
    (Ls = new WeakSet()),
    (Ms = function (e) {
     const t = this.media;
     for (const n of e) {
      if ('childList' !== n.type) continue;
      const e = n.removedNodes;
      for (const i of e) {
       if ('media' != i.slot || n.target != this) continue;
       let e = n.previousSibling && n.previousSibling.previousElementSibling;
       if (e && t) {
        let t = 'media' !== e.slot;
        for (; null !== (e = e.previousSibling); ) 'media' == e.slot && (t = !1);
        t && this.mediaUnsetCallback(i);
       } else this.mediaUnsetCallback(i);
      }
      if (t) for (const i of n.addedNodes) i === t && this.handleMediaUpdated(t);
     }
    }),
    (xs = new WeakMap()),
    (Ns = new WeakMap()),
    (Os = new WeakSet()),
    (Ps = function (e) {
     if ('mouse' !== e.pointerType) {
      const t = 250;
      if (e.timeStamp - js(this, Is) < t) return;
     }
     Zs(this, Vs, $s).call(this), clearTimeout(js(this, Rs));
     const t = this.hasAttribute(zs.AUTOHIDE_OVER_CONTROLS);
     ([this, this.media].includes(e.target) || t) && Zs(this, qs, Ks).call(this);
    }),
    (Us = new WeakSet()),
    (Hs = function (e) {
     if ('touch' === e.pointerType) {
      const t = !this.hasAttribute(zs.USER_INACTIVE);
      [this, this.media].includes(e.target) && t ? Zs(this, Ws, Bs).call(this) : Zs(this, qs, Ks).call(this);
     } else e.composedPath().some((e) => ['media-play-button', 'media-fullscreen-button'].includes(null == e ? void 0 : e.localName)) && Zs(this, qs, Ks).call(this);
    }),
    (Ws = new WeakSet()),
    (Bs = function () {
     if (js(this, Cs) < 0) return;
     if (this.hasAttribute(zs.USER_INACTIVE)) return;
     this.setAttribute(zs.USER_INACTIVE, '');
     const e = new Zr.CustomEvent(gr.USER_INACTIVE_CHANGE, { composed: !0, bubbles: !0, detail: !0 });
     this.dispatchEvent(e);
    }),
    (Vs = new WeakSet()),
    ($s = function () {
     if (!this.hasAttribute(zs.USER_INACTIVE)) return;
     this.removeAttribute(zs.USER_INACTIVE);
     const e = new Zr.CustomEvent(gr.USER_INACTIVE_CHANGE, { composed: !0, bubbles: !0, detail: !1 });
     this.dispatchEvent(e);
    }),
    (qs = new WeakSet()),
    (Ks = function () {
     Zs(this, Vs, $s).call(this), clearTimeout(js(this, Rs));
     const e = parseInt(this.autohide);
     e < 0 ||
      Qs(
       this,
       Rs,
       setTimeout(() => {
        Zs(this, Ws, Bs).call(this);
       }, 1e3 * e),
      );
    }),
    (to.shadowRootOptions = { mode: 'open' }),
    (to.getTemplateHTML = function (e) {
     return `\n    <style>\n      \n      :host([${br.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {\n        outline: none;\n      }\n\n      :host {\n        box-sizing: border-box;\n        position: relative;\n        display: inline-block;\n        line-height: 0;\n        background-color: var(--media-background-color, #000);\n      }\n\n      :host(:not([${zs.AUDIO}])) [part~=layer]:not([part~=media-layer]) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        display: flex;\n        flex-flow: column nowrap;\n        align-items: start;\n        pointer-events: none;\n        background: none;\n      }\n\n      slot[name=media] {\n        display: var(--media-slot-display, contents);\n      }\n\n      \n      :host([${zs.AUDIO}]) slot[name=media] {\n        display: var(--media-slot-display, none);\n      }\n\n      \n      :host([${zs.AUDIO}]) [part~=layer][part~=gesture-layer] {\n        height: 0;\n        display: block;\n      }\n\n      \n      :host(:not([${zs.AUDIO}])[${zs.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),\n          :host(:not([${zs.AUDIO}])[${zs.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {\n        display: none;\n      }\n\n      \n      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {\n        pointer-events: auto;\n      }\n\n      :host(:not([${zs.AUDIO}])) *[part~=layer][part~=centered-layer] {\n        align-items: center;\n        justify-content: center;\n      }\n\n      :host(:not([${zs.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),\n      :host(:not([${zs.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {\n        align-self: stretch;\n        flex-grow: 1;\n      }\n\n      slot[name=middle-chrome] {\n        display: inline;\n        flex-grow: 1;\n        pointer-events: none;\n        background: none;\n      }\n\n      \n      ::slotted([slot=media]),\n      ::slotted([slot=poster]) {\n        width: 100%;\n        height: 100%;\n      }\n\n      \n      :host(:not([${zs.AUDIO}])) .spacer {\n        flex-grow: 1;\n      }\n\n      \n      :host(:-webkit-full-screen) {\n        \n        width: 100% !important;\n        height: 100% !important;\n      }\n\n      \n      ::slotted(:not([slot=media]):not([slot=poster]):not([${zs.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {\n        opacity: 1;\n        transition: var(--media-control-transition-in, opacity 0.25s);\n      }\n\n      \n      :host([${zs.USER_INACTIVE}]:not([${br.MEDIA_PAUSED}]):not([${br.MEDIA_IS_AIRPLAYING}]):not([${br.MEDIA_IS_CASTING}]):not([${zs.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${zs.NO_AUTOHIDE}]):not([role=dialog])) {\n        opacity: 0;\n        transition: var(--media-control-transition-out, opacity 1s);\n      }\n\n      :host([${zs.USER_INACTIVE}]:not([${zs.NO_AUTOHIDE}]):not([${br.MEDIA_PAUSED}]):not([${br.MEDIA_IS_CASTING}]):not([${zs.AUDIO}])) ::slotted([slot=media]) {\n        cursor: none;\n      }\n\n      :host([${zs.USER_INACTIVE}][${zs.AUTOHIDE_OVER_CONTROLS}]:not([${zs.NO_AUTOHIDE}]):not([${br.MEDIA_PAUSED}]):not([${br.MEDIA_IS_CASTING}]):not([${zs.AUDIO}])) * {\n        --media-cursor: none;\n        cursor: none;\n      }\n\n\n      ::slotted(media-control-bar)  {\n        align-self: stretch;\n      }\n\n      \n      :host(:not([${zs.AUDIO}])[${br.MEDIA_HAS_PLAYED}]) slot[name=poster] {\n        display: none;\n      }\n\n      ::slotted([role=dialog]) {\n        width: 100%;\n        height: 100%;\n        align-self: center;\n      }\n\n      ::slotted([role=menu]) {\n        align-self: end;\n      }\n    </style>\n\n    <slot name="media" part="layer media-layer"></slot>\n    <slot name="poster" part="layer poster-layer"></slot>\n    <slot name="gestures-chrome" part="layer gesture-layer">\n      <media-gesture-receiver slot="gestures-chrome">\n        <template shadowrootmode="${Fs.shadowRootOptions.mode}">\n          ${Fs.getTemplateHTML({})}\n        </template>\n      </media-gesture-receiver>\n    </slot>\n    <span part="layer vertical-layer">\n      <slot name="top-chrome" part="top chrome"></slot>\n      <slot name="middle-chrome" part="middle chrome"></slot>\n      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>\n      \n      <slot part="bottom chrome"></slot>\n    </span>\n    <slot name="dialog" part="layer dialog-layer"></slot>\n  `;
    }),
    Zr.customElements.get('media-container') || Zr.customElements.define('media-container', to);
   var no,
    io,
    ao,
    ro,
    so,
    oo,
    lo = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    uo = (e, t, n) => (lo(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    co = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    ho = (e, t, n, i) => (lo(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n);
   class mo {
    constructor(e, t, { defaultValue: n } = { defaultValue: void 0 }) {
     co(this, so), co(this, no, void 0), co(this, io, void 0), co(this, ao, void 0), co(this, ro, new Set()), ho(this, no, e), ho(this, io, t), ho(this, ao, new Set(n));
    }
    [Symbol.iterator]() {
     return uo(this, so, oo).values();
    }
    get length() {
     return uo(this, so, oo).size;
    }
    get value() {
     var e;
     return null != (e = [...uo(this, so, oo)].join(' ')) ? e : '';
    }
    set value(e) {
     var t;
     e !== this.value && (ho(this, ro, new Set()), this.add(...(null != (t = null == e ? void 0 : e.split(' ')) ? t : [])));
    }
    toString() {
     return this.value;
    }
    item(e) {
     return [...uo(this, so, oo)][e];
    }
    values() {
     return uo(this, so, oo).values();
    }
    forEach(e, t) {
     uo(this, so, oo).forEach(e, t);
    }
    add(...e) {
     var t, n;
     e.forEach((e) => uo(this, ro).add(e)), ('' !== this.value || (null == (t = uo(this, no)) ? void 0 : t.hasAttribute(`${uo(this, io)}`))) && (null == (n = uo(this, no)) || n.setAttribute(`${uo(this, io)}`, `${this.value}`));
    }
    remove(...e) {
     var t;
     e.forEach((e) => uo(this, ro).delete(e)), null == (t = uo(this, no)) || t.setAttribute(`${uo(this, io)}`, `${this.value}`);
    }
    contains(e) {
     return uo(this, so, oo).has(e);
    }
    toggle(e, t) {
     return void 0 !== t ? (t ? (this.add(e), !0) : (this.remove(e), !1)) : this.contains(e) ? (this.remove(e), !1) : (this.add(e), !0);
    }
    replace(e, t) {
     return this.remove(e), this.add(t), e === t;
    }
   }
   (no = new WeakMap()),
    (io = new WeakMap()),
    (ao = new WeakMap()),
    (ro = new WeakMap()),
    (so = new WeakSet()),
    (oo = function () {
     return uo(this, ro).size ? uo(this, ro) : uo(this, ao);
    });
   const po = (e = '') => {
     const [t, n, i] = e.split(':'),
      a = i ? decodeURIComponent(i) : void 0;
     return { kind: 'cc' === t ? fr.CAPTIONS : fr.SUBTITLES, language: n, label: a };
    },
    vo = (e = '', t = {}) =>
     ((e = '') => e.split(/\s+/))(e).map((e) => {
      const n = po(e);
      return { ...t, ...n };
     }),
    bo = (e) => (e ? (Array.isArray(e) ? e.map((e) => ('string' == typeof e ? po(e) : e)) : 'string' == typeof e ? vo(e) : [e]) : []),
    go = ({ kind: e, label: t, language: n } = { kind: 'subtitles' }) => (t ? `${'captions' === e ? 'cc' : 'sb'}:${n}:${encodeURIComponent(t)}` : n),
    Eo = (e = []) => Array.prototype.map.call(e, go).join(' '),
    fo = (e) => {
     const t = Object.entries(e).map(([e, t]) =>
      (
       (e, t) => (n) =>
        n[e] === t
      )(e, t),
     );
     return (e) => t.every((t) => t(e));
    },
    yo = (e, t = [], n = []) => {
     const i = bo(n).map(fo);
     Array.from(t)
      .filter((e) => i.some((t) => t(e)))
      .forEach((t) => {
       t.mode = e;
      });
    },
    _o = (e, t = () => !0) => {
     if (!(null == e ? void 0 : e.textTracks)) return [];
     const n = 'function' == typeof t ? t : fo(t);
     return Array.from(e.textTracks).filter(n);
    },
    To = (e) => {
     var t;
     return !!(null == (t = e.mediaSubtitlesShowing) ? void 0 : t.length) || e.hasAttribute(br.MEDIA_SUBTITLES_SHOWING);
    },
    Ao = 'exitFullscreen' in zr ? 'exitFullscreen' : 'webkitExitFullscreen' in zr ? 'webkitExitFullscreen' : 'webkitCancelFullScreen' in zr ? 'webkitCancelFullScreen' : void 0,
    ko = 'fullscreenElement' in zr ? 'fullscreenElement' : 'webkitFullscreenElement' in zr ? 'webkitFullscreenElement' : void 0,
    wo = (e) => {
     var t;
     const { media: n, documentElement: i, fullscreenElement: a = n } = e;
     if (!n || !i) return !1;
     const r = ((e) => {
      const { documentElement: t, media: n } = e,
       i = null == t ? void 0 : t[ko];
      return !i && 'webkitDisplayingFullscreen' in n && 'webkitPresentationMode' in n && n.webkitDisplayingFullscreen && n.webkitPresentationMode === Sr ? n : i;
     })(e);
     if (!r) return !1;
     if (r === a || r === n) return !0;
     if (r.localName.includes('-')) {
      let e = r.shadowRoot;
      if (!(ko in e)) return ls(r, a);
      for (; null == e ? void 0 : e[ko]; ) {
       if (e[ko] === a) return !0;
       e = null == (t = e[ko]) ? void 0 : t.shadowRoot;
      }
     }
     return !1;
    },
    Io = 'fullscreenEnabled' in zr ? 'fullscreenEnabled' : 'webkitFullscreenEnabled' in zr ? 'webkitFullscreenEnabled' : void 0;
   let So;
   const Ro = () => {
     var e, t;
     return So || ((So = null == (t = null == (e = zr) ? void 0 : e.createElement) ? void 0 : t.call(e, 'video')), So);
    },
    Co = (e, t) =>
     new Promise((n) => {
      e.addEventListener('volumechange', () => n(!0), { signal: t });
     }),
    Do = async (e, t) => {
     for (let n = 0; n < 10; n++) {
      if (e.volume === t) return !1;
      await Or(10);
     }
     return e.volume !== t;
    },
    Lo = /.*Version\/.*Safari\/.*/.test(Zr.navigator.userAgent),
    Mo = (e = Ro()) => (!Zr.matchMedia('(display-mode: standalone)').matches || !Lo) && 'function' == typeof (null == e ? void 0 : e.requestPictureInPicture),
    xo = (e = Ro()) =>
     ((e) => {
      const { documentElement: t, media: n } = e;
      return !!(null == t ? void 0 : t[Io]) || (n && 'webkitSupportsFullscreen' in n);
     })({ documentElement: zr, media: e }),
    No = xo(),
    Oo = Mo(),
    Po = !!Zr.WebKitPlaybackTargetAvailabilityEvent,
    Uo = !!Zr.chrome,
    Ho = (e) => _o(e.media, (e) => [fr.SUBTITLES, fr.CAPTIONS].includes(e.kind)).sort((e, t) => (e.kind >= t.kind ? 1 : -1)),
    Wo = (e) => _o(e.media, (e) => e.mode === _r && [fr.SUBTITLES, fr.CAPTIONS].includes(e.kind)),
    Bo = (e, t) => {
     const n = Ho(e),
      i = Wo(e),
      a = !!i.length;
     if (n.length)
      if (!1 === t || (a && !0 !== t)) yo(yr, n, i);
      else if (!0 === t || (!a && !1 !== t)) {
       let t = n[0];
       const { options: a } = e;
       if (!(null == a ? void 0 : a.noSubtitlesLangPref)) {
        const e = globalThis.localStorage.getItem('media-chrome-pref-subtitles-lang'),
         i = e ? [e, ...globalThis.navigator.languages] : globalThis.navigator.languages,
         a = n.filter((e) => i.some((t) => e.language.toLowerCase().startsWith(t.split('-')[0]))).sort((e, t) => i.findIndex((t) => e.language.toLowerCase().startsWith(t.split('-')[0])) - i.findIndex((e) => t.language.toLowerCase().startsWith(e.split('-')[0])));
        a[0] && (t = a[0]);
       }
       const { language: r, label: s, kind: o } = t;
       yo(yr, n, i), yo(_r, n, [{ language: r, label: s, kind: o }]);
      }
    },
    Vo = (e, t) => e === t || (null != e && null != t && typeof e == typeof t && (!('number' != typeof e || !Number.isNaN(e) || !Number.isNaN(t)) || ('object' == typeof e && (Array.isArray(e) ? $o(e, t) : Object.entries(e).every(([e, n]) => e in t && Vo(n, t[e])))))),
    $o = (e, t) => {
     const n = Array.isArray(e),
      i = Array.isArray(t);
     return n === i && ((!n && !i) || (e.length === t.length && e.every((e, n) => Vo(e, t[n]))));
    },
    qo = Object.values(Ir);
   let Ko;
   const Fo = (async (e = Ro()) => {
     if (!e) return !1;
     const t = e.volume;
     e.volume = t / 2 + 0.1;
     const n = new AbortController(),
      i = await Promise.race([Co(e, n.signal), Do(e, t)]);
     return n.abort(), i;
    })().then((e) => ((Ko = e), Ko)),
    Yo = new Zr.DOMParser(),
    jo = (e) => (e && Yo.parseFromString(e, 'text/html').body.textContent) || e,
    Go = {
     mediaError: {
      get(e, t) {
       const { media: n } = e;
       if ('playing' !== (null == t ? void 0 : t.type)) return null == n ? void 0 : n.error;
      },
      mediaEvents: ['emptied', 'error', 'playing'],
     },
     mediaErrorCode: {
      get(e, t) {
       var n;
       const { media: i } = e;
       if ('playing' !== (null == t ? void 0 : t.type)) return null == (n = null == i ? void 0 : i.error) ? void 0 : n.code;
      },
      mediaEvents: ['emptied', 'error', 'playing'],
     },
     mediaErrorMessage: {
      get(e, t) {
       var n, i;
       const { media: a } = e;
       if ('playing' !== (null == t ? void 0 : t.type)) return null != (i = null == (n = null == a ? void 0 : a.error) ? void 0 : n.message) ? i : '';
      },
      mediaEvents: ['emptied', 'error', 'playing'],
     },
     mediaWidth: {
      get(e) {
       var t;
       const { media: n } = e;
       return null != (t = null == n ? void 0 : n.videoWidth) ? t : 0;
      },
      mediaEvents: ['resize'],
     },
     mediaHeight: {
      get(e) {
       var t;
       const { media: n } = e;
       return null != (t = null == n ? void 0 : n.videoHeight) ? t : 0;
      },
      mediaEvents: ['resize'],
     },
     mediaPaused: {
      get(e) {
       var t;
       const { media: n } = e;
       return null == (t = null == n ? void 0 : n.paused) || t;
      },
      set(e, t) {
       var n;
       const { media: i } = t;
       i && (e ? i.pause() : null == (n = i.play()) || n.catch(() => {}));
      },
      mediaEvents: ['play', 'playing', 'pause', 'emptied'],
     },
     mediaHasPlayed: {
      get(e, t) {
       const { media: n } = e;
       return !!n && (t ? 'playing' === t.type : !n.paused);
      },
      mediaEvents: ['playing', 'emptied'],
     },
     mediaEnded: {
      get(e) {
       var t;
       const { media: n } = e;
       return null != (t = null == n ? void 0 : n.ended) && t;
      },
      mediaEvents: ['seeked', 'ended', 'emptied'],
     },
     mediaPlaybackRate: {
      get(e) {
       var t;
       const { media: n } = e;
       return null != (t = null == n ? void 0 : n.playbackRate) ? t : 1;
      },
      set(e, t) {
       const { media: n } = t;
       n && Number.isFinite(+e) && (n.playbackRate = +e);
      },
      mediaEvents: ['ratechange', 'loadstart'],
     },
     mediaMuted: {
      get(e) {
       var t;
       const { media: n } = e;
       return null != (t = null == n ? void 0 : n.muted) && t;
      },
      set(e, t) {
       const { media: n } = t;
       if (n) {
        try {
         Zr.localStorage.setItem('media-chrome-pref-muted', e ? 'true' : 'false');
        } catch (i) {
         console.debug('Error setting muted pref', i);
        }
        n.muted = e;
       }
      },
      mediaEvents: ['volumechange'],
      stateOwnersUpdateHandlers: [
       (e, t) => {
        const {
          options: { noMutedPref: n },
         } = t,
         { media: i } = t;
        if (i && !i.muted && !n)
         try {
          const n = 'true' === Zr.localStorage.getItem('media-chrome-pref-muted');
          Go.mediaMuted.set(n, t), e(n);
         } catch (a) {
          console.debug('Error getting muted pref', a);
         }
       },
      ],
     },
     mediaVolume: {
      get(e) {
       var t;
       const { media: n } = e;
       return null != (t = null == n ? void 0 : n.volume) ? t : 1;
      },
      set(e, t) {
       const { media: n } = t;
       if (n) {
        try {
         null == e ? Zr.localStorage.removeItem('media-chrome-pref-volume') : Zr.localStorage.setItem('media-chrome-pref-volume', e.toString());
        } catch (i) {
         console.debug('Error setting volume pref', i);
        }
        Number.isFinite(+e) && (n.volume = +e);
       }
      },
      mediaEvents: ['volumechange'],
      stateOwnersUpdateHandlers: [
       (e, t) => {
        const {
         options: { noVolumePref: n },
        } = t;
        if (!n)
         try {
          const { media: n } = t;
          if (!n) return;
          const i = Zr.localStorage.getItem('media-chrome-pref-volume');
          if (null == i) return;
          Go.mediaVolume.set(+i, t), e(+i);
         } catch (i) {
          console.debug('Error getting volume pref', i);
         }
       },
      ],
     },
     mediaVolumeLevel: {
      get(e) {
       const { media: t } = e;
       return void 0 === (null == t ? void 0 : t.volume) ? 'high' : t.muted || 0 === t.volume ? 'off' : t.volume < 0.5 ? 'low' : t.volume < 0.75 ? 'medium' : 'high';
      },
      mediaEvents: ['volumechange'],
     },
     mediaCurrentTime: {
      get(e) {
       var t;
       const { media: n } = e;
       return null != (t = null == n ? void 0 : n.currentTime) ? t : 0;
      },
      set(e, t) {
       const { media: n } = t;
       n && xr(e) && (n.currentTime = e);
      },
      mediaEvents: ['timeupdate', 'loadedmetadata'],
     },
     mediaDuration: {
      get(e) {
       const { media: t, options: { defaultDuration: n } = {} } = e;
       return !n || (t && t.duration && !Number.isNaN(t.duration) && Number.isFinite(t.duration)) ? (Number.isFinite(null == t ? void 0 : t.duration) ? t.duration : Number.NaN) : n;
      },
      mediaEvents: ['durationchange', 'loadedmetadata', 'emptied'],
     },
     mediaLoading: {
      get(e) {
       const { media: t } = e;
       return (null == t ? void 0 : t.readyState) < 3;
      },
      mediaEvents: ['waiting', 'playing', 'emptied'],
     },
     mediaSeekable: {
      get(e) {
       var t;
       const { media: n } = e;
       if (!(null == (t = null == n ? void 0 : n.seekable) ? void 0 : t.length)) return;
       const i = n.seekable.start(0),
        a = n.seekable.end(n.seekable.length - 1);
       return i || a ? [Number(i.toFixed(3)), Number(a.toFixed(3))] : void 0;
      },
      mediaEvents: ['loadedmetadata', 'emptied', 'progress', 'seekablechange'],
     },
     mediaBuffered: {
      get(e) {
       var t;
       const { media: n } = e,
        i = null != (t = null == n ? void 0 : n.buffered) ? t : [];
       return Array.from(i).map((e, t) => [Number(i.start(t).toFixed(3)), Number(i.end(t).toFixed(3))]);
      },
      mediaEvents: ['progress', 'emptied'],
     },
     mediaStreamType: {
      get(e) {
       const { media: t, options: { defaultStreamType: n } = {} } = e,
        i = [Ir.LIVE, Ir.ON_DEMAND].includes(n) ? n : void 0;
       if (!t) return i;
       const { streamType: a } = t;
       if (qo.includes(a)) return a === Ir.UNKNOWN ? i : a;
       const r = t.duration;
       return r === 1 / 0 ? Ir.LIVE : Number.isFinite(r) ? Ir.ON_DEMAND : i;
      },
      mediaEvents: ['emptied', 'durationchange', 'loadedmetadata', 'streamtypechange'],
     },
     mediaTargetLiveWindow: {
      get(e) {
       const { media: t } = e;
       if (!t) return Number.NaN;
       const { targetLiveWindow: n } = t,
        i = Go.mediaStreamType.get(e);
       return (null != n && !Number.isNaN(n)) || i !== Ir.LIVE ? n : 0;
      },
      mediaEvents: ['emptied', 'durationchange', 'loadedmetadata', 'streamtypechange', 'targetlivewindowchange'],
     },
     mediaTimeIsLive: {
      get(e) {
       const { media: t, options: { liveEdgeOffset: n = 10 } = {} } = e;
       if (!t) return !1;
       if ('number' == typeof t.liveEdgeStart) return !Number.isNaN(t.liveEdgeStart) && t.currentTime >= t.liveEdgeStart;
       if (!(Go.mediaStreamType.get(e) === Ir.LIVE)) return !1;
       const i = t.seekable;
       if (!i) return !0;
       if (!i.length) return !1;
       const a = i.end(i.length - 1) - n;
       return t.currentTime >= a;
      },
      mediaEvents: ['playing', 'timeupdate', 'progress', 'waiting', 'emptied'],
     },
     mediaSubtitlesList: { get: (e) => Ho(e).map(({ kind: e, label: t, language: n }) => ({ kind: e, label: t, language: n })), mediaEvents: ['loadstart'], textTracksEvents: ['addtrack', 'removetrack'] },
     mediaSubtitlesShowing: {
      get: (e) => Wo(e).map(({ kind: e, label: t, language: n }) => ({ kind: e, label: t, language: n })),
      mediaEvents: ['loadstart'],
      textTracksEvents: ['addtrack', 'removetrack', 'change'],
      stateOwnersUpdateHandlers: [
       (e, t) => {
        var n, i;
        const { media: a, options: r } = t;
        if (!a) return;
        const s = (e) => {
         var n;
         if (!r.defaultSubtitles) return;
         (e && ![fr.CAPTIONS, fr.SUBTITLES].includes(null == (n = null == e ? void 0 : e.track) ? void 0 : n.kind)) || Bo(t, !0);
        };
        return (
         a.addEventListener('loadstart', s),
         null == (n = a.textTracks) || n.addEventListener('addtrack', s),
         null == (i = a.textTracks) || i.addEventListener('removetrack', s),
         () => {
          var e, t;
          a.removeEventListener('loadstart', s), null == (e = a.textTracks) || e.removeEventListener('addtrack', s), null == (t = a.textTracks) || t.removeEventListener('removetrack', s);
         }
        );
       },
      ],
     },
     mediaChaptersCues: {
      get(e) {
       var t;
       const { media: n } = e;
       if (!n) return [];
       const [i] = _o(n, { kind: fr.CHAPTERS });
       return Array.from(null != (t = null == i ? void 0 : i.cues) ? t : []).map(({ text: e, startTime: t, endTime: n }) => ({ text: jo(e), startTime: t, endTime: n }));
      },
      mediaEvents: ['loadstart', 'loadedmetadata'],
      textTracksEvents: ['addtrack', 'removetrack', 'change'],
      stateOwnersUpdateHandlers: [
       (e, t) => {
        var n;
        const { media: i } = t;
        if (!i) return;
        const a = i.querySelector('track[kind="chapters"][default][src]'),
         r = null == (n = i.shadowRoot) ? void 0 : n.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');
        return (
         null == a || a.addEventListener('load', e),
         null == r || r.addEventListener('load', e),
         () => {
          null == a || a.removeEventListener('load', e), null == r || r.removeEventListener('load', e);
         }
        );
       },
      ],
     },
     mediaIsPip: {
      get(e) {
       var t, n;
       const { media: i, documentElement: a } = e;
       if (!i || !a) return !1;
       if (!a.pictureInPictureElement) return !1;
       if (a.pictureInPictureElement === i) return !0;
       if (a.pictureInPictureElement instanceof HTMLMediaElement) return !!(null == (t = i.localName) ? void 0 : t.includes('-')) && ls(i, a.pictureInPictureElement);
       if (a.pictureInPictureElement.localName.includes('-')) {
        let e = a.pictureInPictureElement.shadowRoot;
        for (; null == e ? void 0 : e.pictureInPictureElement; ) {
         if (e.pictureInPictureElement === i) return !0;
         e = null == (n = e.pictureInPictureElement) ? void 0 : n.shadowRoot;
        }
       }
       return !1;
      },
      set(e, t) {
       const { media: n } = t;
       if (n)
        if (e) {
         if (!zr.pictureInPictureEnabled) return void console.warn('MediaChrome: Picture-in-picture is not enabled');
         if (!n.requestPictureInPicture) return void console.warn('MediaChrome: The current media does not support picture-in-picture');
         const e = () => {
          console.warn('MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.');
         };
         n.requestPictureInPicture().catch((t) => {
          if (11 !== t.code) throw t;
          if (n.src) {
           if (0 !== n.readyState || 'none' !== n.preload) throw t;
           {
            const t = () => {
              n.removeEventListener('loadedmetadata', i), (n.preload = 'none');
             },
             i = () => {
              n.requestPictureInPicture().catch(e), t();
             };
            n.addEventListener('loadedmetadata', i),
             (n.preload = 'metadata'),
             setTimeout(() => {
              0 === n.readyState && e(), t();
             }, 1e3);
           }
          } else console.warn('MediaChrome: The media is not ready for picture-in-picture. It must have a src set.');
         });
        } else zr.pictureInPictureElement && zr.exitPictureInPicture();
      },
      mediaEvents: ['enterpictureinpicture', 'leavepictureinpicture'],
     },
     mediaRenditionList: {
      get(e) {
       var t;
       const { media: n } = e;
       return [...(null != (t = null == n ? void 0 : n.videoRenditions) ? t : [])].map((e) => ({ ...e }));
      },
      mediaEvents: ['emptied', 'loadstart'],
      videoRenditionsEvents: ['addrendition', 'removerendition'],
     },
     mediaRenditionSelected: {
      get(e) {
       var t, n, i;
       const { media: a } = e;
       return null == (i = null == (n = null == a ? void 0 : a.videoRenditions) ? void 0 : n[null == (t = a.videoRenditions) ? void 0 : t.selectedIndex]) ? void 0 : i.id;
      },
      set(e, t) {
       const { media: n } = t;
       if (!(null == n ? void 0 : n.videoRenditions)) return void console.warn('MediaController: Rendition selection not supported by this media.');
       const i = e,
        a = Array.prototype.findIndex.call(n.videoRenditions, (e) => e.id == i);
       n.videoRenditions.selectedIndex != a && (n.videoRenditions.selectedIndex = a);
      },
      mediaEvents: ['emptied'],
      videoRenditionsEvents: ['addrendition', 'removerendition', 'change'],
     },
     mediaAudioTrackList: {
      get(e) {
       var t;
       const { media: n } = e;
       return [...(null != (t = null == n ? void 0 : n.audioTracks) ? t : [])];
      },
      mediaEvents: ['emptied', 'loadstart'],
      audioTracksEvents: ['addtrack', 'removetrack'],
     },
     mediaAudioTrackEnabled: {
      get(e) {
       var t, n;
       const { media: i } = e;
       return null == (n = [...(null != (t = null == i ? void 0 : i.audioTracks) ? t : [])].find((e) => e.enabled)) ? void 0 : n.id;
      },
      set(e, t) {
       const { media: n } = t;
       if (!(null == n ? void 0 : n.audioTracks)) return void console.warn('MediaChrome: Audio track selection not supported by this media.');
       const i = e;
       for (const a of n.audioTracks) a.enabled = i == a.id;
      },
      mediaEvents: ['emptied'],
      audioTracksEvents: ['addtrack', 'removetrack', 'change'],
     },
     mediaIsFullscreen: {
      get: (e) => wo(e),
      set(e, t) {
       e
        ? ((e) => {
           var t;
           const { media: n, fullscreenElement: i } = e;
           try {
            const e = i && 'requestFullscreen' in i ? 'requestFullscreen' : i && 'webkitRequestFullScreen' in i ? 'webkitRequestFullScreen' : void 0;
            if (e) {
             const n = null == (t = i[e]) ? void 0 : t.call(i);
             if (n instanceof Promise) return n.catch(() => {});
            } else (null == n ? void 0 : n.webkitEnterFullscreen) ? n.webkitEnterFullscreen() : (null == n ? void 0 : n.requestFullscreen) && n.requestFullscreen();
           } catch (a) {
            console.error(a);
           }
          })(t)
        : ((e) => {
           var t;
           const { documentElement: n } = e;
           if (Ao) {
            const e = null == (t = null == n ? void 0 : n[Ao]) ? void 0 : t.call(n);
            if (e instanceof Promise) e.catch(() => {});
           }
          })(t);
      },
      rootEvents: ['fullscreenchange', 'webkitfullscreenchange'],
      mediaEvents: ['webkitbeginfullscreen', 'webkitendfullscreen', 'webkitpresentationmodechanged'],
     },
     mediaIsCasting: {
      get(e) {
       var t;
       const { media: n } = e;
       return !(!(null == n ? void 0 : n.remote) || 'disconnected' === (null == (t = n.remote) ? void 0 : t.state)) && !!n.remote.state;
      },
      set(e, t) {
       var n, i;
       const { media: a } = t;
       a && ((e && 'disconnected' !== (null == (n = a.remote) ? void 0 : n.state)) || ((e || 'connected' === (null == (i = a.remote) ? void 0 : i.state)) && ('function' == typeof a.remote.prompt ? a.remote.prompt().catch(() => {}) : console.warn('MediaChrome: Casting is not supported in this environment'))));
      },
      remoteEvents: ['connect', 'connecting', 'disconnect'],
     },
     mediaIsAirplaying: {
      get: () => !1,
      set(e, t) {
       const { media: n } = t;
       n && (n.webkitShowPlaybackTargetPicker && Zr.WebKitPlaybackTargetAvailabilityEvent ? n.webkitShowPlaybackTargetPicker() : console.error('MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment'));
      },
      mediaEvents: ['webkitcurrentplaybacktargetiswirelesschanged'],
     },
     mediaFullscreenUnavailable: {
      get(e) {
       const { media: t } = e;
       if (!No || !xo(t)) return wr;
      },
     },
     mediaPipUnavailable: {
      get(e) {
       const { media: t } = e;
       if (!Oo || !Mo(t)) return wr;
      },
     },
     mediaVolumeUnavailable: {
      get(e) {
       const { media: t } = e;
       if (!1 === Ko || null == (null == t ? void 0 : t.volume)) return wr;
      },
      stateOwnersUpdateHandlers: [
       (e) => {
        null == Ko && Fo.then((t) => e(t ? void 0 : wr));
       },
      ],
     },
     mediaCastUnavailable: {
      get(e, { availability: t = 'not-available' } = {}) {
       var n;
       const { media: i } = e;
       return Uo && (null == (n = null == i ? void 0 : i.remote) ? void 0 : n.state) ? (null != t && 'available' !== t ? kr : void 0) : wr;
      },
      stateOwnersUpdateHandlers: [
       (e, t) => {
        var n;
        const { media: i } = t;
        if (!i) return;
        return (
         i.disableRemotePlayback ||
          i.hasAttribute('disableremoteplayback') ||
          null == (n = null == i ? void 0 : i.remote) ||
          n
           .watchAvailability((t) => {
            e({ availability: t ? 'available' : 'not-available' });
           })
           .catch((t) => {
            'NotSupportedError' === t.name ? e({ availability: null }) : e({ availability: 'not-available' });
           }),
         () => {
          var e;
          null == (e = null == i ? void 0 : i.remote) || e.cancelWatchAvailability().catch(() => {});
         }
        );
       },
      ],
     },
     mediaAirplayUnavailable: {
      get: (e, t) => (Po ? ('not-available' === (null == t ? void 0 : t.availability) ? kr : void 0) : wr),
      mediaEvents: ['webkitplaybacktargetavailabilitychanged'],
      stateOwnersUpdateHandlers: [
       (e, t) => {
        var n;
        const { media: i } = t;
        if (!i) return;
        return (
         i.disableRemotePlayback ||
          i.hasAttribute('disableremoteplayback') ||
          null == (n = null == i ? void 0 : i.remote) ||
          n
           .watchAvailability((t) => {
            e({ availability: t ? 'available' : 'not-available' });
           })
           .catch((t) => {
            'NotSupportedError' === t.name ? e({ availability: null }) : e({ availability: 'not-available' });
           }),
         () => {
          var e;
          null == (e = null == i ? void 0 : i.remote) || e.cancelWatchAvailability().catch(() => {});
         }
        );
       },
      ],
     },
     mediaRenditionUnavailable: {
      get(e) {
       var t;
       const { media: n } = e;
       return (null == n ? void 0 : n.videoRenditions) ? ((null == (t = n.videoRenditions) ? void 0 : t.length) ? void 0 : kr) : wr;
      },
      mediaEvents: ['emptied', 'loadstart'],
      videoRenditionsEvents: ['addrendition', 'removerendition'],
     },
     mediaAudioTrackUnavailable: {
      get(e) {
       var t, n;
       const { media: i } = e;
       return (null == i ? void 0 : i.audioTracks) ? ((null != (n = null == (t = i.audioTracks) ? void 0 : t.length) ? n : 0) <= 1 ? kr : void 0) : wr;
      },
      mediaEvents: ['emptied', 'loadstart'],
      audioTracksEvents: ['addtrack', 'removetrack'],
     },
    },
    Qo = {
     [hr.MEDIA_PREVIEW_REQUEST](e, t, { detail: n }) {
      var i, a, r;
      const { media: s } = t,
       o = null != n ? n : void 0;
      let l, d;
      if (s && null != o) {
       const [e] = _o(s, { kind: fr.METADATA, label: 'thumbnails' }),
        t = Array.prototype.find.call(null != (i = null == e ? void 0 : e.cues) ? i : [], (e, t, n) => (0 === t ? e.endTime > o : t === n.length - 1 ? e.startTime <= o : e.startTime <= o && e.endTime > o));
       if (t) {
        const e = /'^(?:[a-z]+:)?\/\//i.test(t.text) || null == (a = null == s ? void 0 : s.querySelector('track[label="thumbnails"]')) ? void 0 : a.src,
         n = new URL(t.text, e);
        (d = new URLSearchParams(n.hash)
         .get('#xywh')
         .split(',')
         .map((e) => +e)),
         (l = n.href);
       }
      }
      const u = e.mediaDuration.get(t);
      let c = null == (r = e.mediaChaptersCues.get(t).find((e, t, n) => (t === n.length - 1 && u === e.endTime ? e.startTime <= o && e.endTime >= o : e.startTime <= o && e.endTime > o))) ? void 0 : r.text;
      return null != n && null == c && (c = ''), { mediaPreviewTime: o, mediaPreviewImage: l, mediaPreviewCoords: d, mediaPreviewChapter: c };
     },
     [hr.MEDIA_PAUSE_REQUEST](e, t) {
      e.mediaPaused.set(!0, t);
     },
     [hr.MEDIA_PLAY_REQUEST](e, t) {
      var n, i, a, r;
      const s = e.mediaStreamType.get(t) === Ir.LIVE,
       o = !(null == (n = t.options) ? void 0 : n.noAutoSeekToLive),
       l = e.mediaTargetLiveWindow.get(t) > 0;
      if (s && o && !l) {
       const n = null == (i = e.mediaSeekable.get(t)) ? void 0 : i[1];
       if (n) {
        const i = n - (null != (r = null == (a = t.options) ? void 0 : a.seekToLiveOffset) ? r : 0);
        e.mediaCurrentTime.set(i, t);
       }
      }
      e.mediaPaused.set(!1, t);
     },
     [hr.MEDIA_PLAYBACK_RATE_REQUEST](e, t, { detail: n }) {
      const i = n;
      e.mediaPlaybackRate.set(i, t);
     },
     [hr.MEDIA_MUTE_REQUEST](e, t) {
      e.mediaMuted.set(!0, t);
     },
     [hr.MEDIA_UNMUTE_REQUEST](e, t) {
      e.mediaVolume.get(t) || e.mediaVolume.set(0.25, t), e.mediaMuted.set(!1, t);
     },
     [hr.MEDIA_VOLUME_REQUEST](e, t, { detail: n }) {
      const i = n;
      i && e.mediaMuted.get(t) && e.mediaMuted.set(!1, t), e.mediaVolume.set(i, t);
     },
     [hr.MEDIA_SEEK_REQUEST](e, t, { detail: n }) {
      const i = n;
      e.mediaCurrentTime.set(i, t);
     },
     [hr.MEDIA_SEEK_TO_LIVE_REQUEST](e, t) {
      var n, i, a;
      const r = null == (n = e.mediaSeekable.get(t)) ? void 0 : n[1];
      if (Number.isNaN(Number(r))) return;
      const s = r - (null != (a = null == (i = t.options) ? void 0 : i.seekToLiveOffset) ? a : 0);
      e.mediaCurrentTime.set(s, t);
     },
     [hr.MEDIA_SHOW_SUBTITLES_REQUEST](e, t, { detail: n }) {
      var i;
      const { options: a } = t,
       r = Ho(t),
       s = bo(n),
       o = null == (i = s[0]) ? void 0 : i.language;
      o && !a.noSubtitlesLangPref && Zr.localStorage.setItem('media-chrome-pref-subtitles-lang', o), yo(_r, r, s);
     },
     [hr.MEDIA_DISABLE_SUBTITLES_REQUEST](e, t, { detail: n }) {
      const i = Ho(t);
      yo(yr, i, null != n ? n : []);
     },
     [hr.MEDIA_TOGGLE_SUBTITLES_REQUEST](e, t, { detail: n }) {
      Bo(t, n);
     },
     [hr.MEDIA_RENDITION_REQUEST](e, t, { detail: n }) {
      const i = n;
      e.mediaRenditionSelected.set(i, t);
     },
     [hr.MEDIA_AUDIO_TRACK_REQUEST](e, t, { detail: n }) {
      const i = n;
      e.mediaAudioTrackEnabled.set(i, t);
     },
     [hr.MEDIA_ENTER_PIP_REQUEST](e, t) {
      e.mediaIsFullscreen.get(t) && e.mediaIsFullscreen.set(!1, t), e.mediaIsPip.set(!0, t);
     },
     [hr.MEDIA_EXIT_PIP_REQUEST](e, t) {
      e.mediaIsPip.set(!1, t);
     },
     [hr.MEDIA_ENTER_FULLSCREEN_REQUEST](e, t) {
      e.mediaIsPip.get(t) && e.mediaIsPip.set(!1, t), e.mediaIsFullscreen.set(!0, t);
     },
     [hr.MEDIA_EXIT_FULLSCREEN_REQUEST](e, t) {
      e.mediaIsFullscreen.set(!1, t);
     },
     [hr.MEDIA_ENTER_CAST_REQUEST](e, t) {
      e.mediaIsFullscreen.get(t) && e.mediaIsFullscreen.set(!1, t), e.mediaIsCasting.set(!0, t);
     },
     [hr.MEDIA_EXIT_CAST_REQUEST](e, t) {
      e.mediaIsCasting.set(!1, t);
     },
     [hr.MEDIA_AIRPLAY_REQUEST](e, t) {
      e.mediaIsAirplaying.set(!0, t);
     },
    },
    Zo = ({ media: e, fullscreenElement: t, documentElement: n, stateMediator: i = Go, requestMap: a = Qo, options: r = {}, monitorStateOwnersOnlyWithSubscriptions: s = !0 }) => {
     const o = [],
      l = { options: { ...r } };
     let d = Object.freeze({ mediaPreviewTime: void 0, mediaPreviewImage: void 0, mediaPreviewCoords: void 0, mediaPreviewChapter: void 0 });
     const u = (e) => {
       null != e && (Vo(e, d) || ((d = Object.freeze({ ...d, ...e })), o.forEach((e) => e(d))));
      },
      c = () => {
       const e = Object.entries(i).reduce((e, [t, { get: n }]) => ((e[t] = n(l)), e), {});
       u(e);
      },
      h = {};
     let m;
     const p = async (e, t) => {
      var n, a, r, d, p, v, b, g, E, f, y, _, T, A, k, w;
      const I = !!m;
      if (((m = { ...l, ...(null != m ? m : {}), ...e }), I)) return;
      await (async (...e) => {
       await Promise.all(
        e
         .filter((e) => e)
         .map(async (e) => {
          if (!('localName' in e && e instanceof Zr.HTMLElement)) return;
          const t = e.localName;
          if (!t.includes('-')) return;
          const n = Zr.customElements.get(t);
          (n && e instanceof n) || (await Zr.customElements.whenDefined(t), Zr.customElements.upgrade(e));
         }),
       );
      })(...Object.values(e));
      const S = o.length > 0 && 0 === t && s,
       R = l.media !== m.media,
       C = (null == (n = l.media) ? void 0 : n.textTracks) !== (null == (a = m.media) ? void 0 : a.textTracks),
       D = (null == (r = l.media) ? void 0 : r.videoRenditions) !== (null == (d = m.media) ? void 0 : d.videoRenditions),
       L = (null == (p = l.media) ? void 0 : p.audioTracks) !== (null == (v = m.media) ? void 0 : v.audioTracks),
       M = (null == (b = l.media) ? void 0 : b.remote) !== (null == (g = m.media) ? void 0 : g.remote),
       x = l.documentElement !== m.documentElement,
       N = !!l.media && (R || S),
       O = !!(null == (E = l.media) ? void 0 : E.textTracks) && (C || S),
       P = !!(null == (f = l.media) ? void 0 : f.videoRenditions) && (D || S),
       U = !!(null == (y = l.media) ? void 0 : y.audioTracks) && (L || S),
       H = !!(null == (_ = l.media) ? void 0 : _.remote) && (M || S),
       W = !!l.documentElement && (x || S),
       B = N || O || P || U || H || W,
       V = 0 === o.length && 1 === t && s,
       $ = !!m.media && (R || V),
       q = !!(null == (T = m.media) ? void 0 : T.textTracks) && (C || V),
       K = !!(null == (A = m.media) ? void 0 : A.videoRenditions) && (D || V),
       F = !!(null == (k = m.media) ? void 0 : k.audioTracks) && (L || V),
       Y = !!(null == (w = m.media) ? void 0 : w.remote) && (M || V),
       j = !!m.documentElement && (x || V),
       G = $ || q || K || F || Y || j;
      if (!(B || G))
       return (
        Object.entries(m).forEach(([e, t]) => {
         l[e] = t;
        }),
        c(),
        void (m = void 0)
       );
      Object.entries(i).forEach(([e, { get: t, mediaEvents: n = [], textTracksEvents: i = [], videoRenditionsEvents: a = [], audioTracksEvents: r = [], remoteEvents: s = [], rootEvents: o = [], stateOwnersUpdateHandlers: d = [] }]) => {
       h[e] || (h[e] = {});
       const c = (n) => {
        const i = t(l, n);
        u({ [e]: i });
       };
       let p;
       (p = h[e].mediaEvents),
        n.forEach((t) => {
         p && N && (l.media.removeEventListener(t, p), (h[e].mediaEvents = void 0)), $ && (m.media.addEventListener(t, c), (h[e].mediaEvents = c));
        }),
        (p = h[e].textTracksEvents),
        i.forEach((t) => {
         var n, i;
         p && O && (null == (n = l.media.textTracks) || n.removeEventListener(t, p), (h[e].textTracksEvents = void 0)), q && (null == (i = m.media.textTracks) || i.addEventListener(t, c), (h[e].textTracksEvents = c));
        }),
        (p = h[e].videoRenditionsEvents),
        a.forEach((t) => {
         var n, i;
         p && P && (null == (n = l.media.videoRenditions) || n.removeEventListener(t, p), (h[e].videoRenditionsEvents = void 0)), K && (null == (i = m.media.videoRenditions) || i.addEventListener(t, c), (h[e].videoRenditionsEvents = c));
        }),
        (p = h[e].audioTracksEvents),
        r.forEach((t) => {
         var n, i;
         p && U && (null == (n = l.media.audioTracks) || n.removeEventListener(t, p), (h[e].audioTracksEvents = void 0)), F && (null == (i = m.media.audioTracks) || i.addEventListener(t, c), (h[e].audioTracksEvents = c));
        }),
        (p = h[e].remoteEvents),
        s.forEach((t) => {
         var n, i;
         p && H && (null == (n = l.media.remote) || n.removeEventListener(t, p), (h[e].remoteEvents = void 0)), Y && (null == (i = m.media.remote) || i.addEventListener(t, c), (h[e].remoteEvents = c));
        }),
        (p = h[e].rootEvents),
        o.forEach((t) => {
         p && W && (l.documentElement.removeEventListener(t, p), (h[e].rootEvents = void 0)), j && (m.documentElement.addEventListener(t, c), (h[e].rootEvents = c));
        });
       const v = h[e].stateOwnersUpdateHandlers;
       d.forEach((t) => {
        v && B && v(), G && (h[e].stateOwnersUpdateHandlers = t(c, m));
       });
      }),
       Object.entries(m).forEach(([e, t]) => {
        l[e] = t;
       }),
       c(),
       (m = void 0);
     };
     return (
      p({ media: e, fullscreenElement: t, documentElement: n, options: r }),
      {
       dispatch(e) {
        const { type: t, detail: n } = e;
        a[t] && null == d.mediaErrorCode
         ? u(a[t](i, l, e))
         : 'mediaelementchangerequest' === t
           ? p({ media: n })
           : 'fullscreenelementchangerequest' === t
             ? p({ fullscreenElement: n })
             : 'documentelementchangerequest' === t
               ? p({ documentElement: n })
               : 'optionschangerequest' === t &&
                 Object.entries(null != n ? n : {}).forEach(([e, t]) => {
                  l.options[e] = t;
                 });
       },
       getState: () => d,
       subscribe: (e) => (
        p({}, o.length + 1),
        o.push(e),
        e(d),
        () => {
         const t = o.indexOf(e);
         t >= 0 && (p({}, o.length - 1), o.splice(t, 1));
        }
       ),
      }
     );
    };
   var zo,
    Xo,
    Jo,
    el,
    tl,
    nl,
    il,
    al,
    rl,
    sl,
    ol,
    ll,
    dl = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    ul = (e, t, n) => (dl(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    cl = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    hl = (e, t, n, i) => (dl(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    ml = (e, t, n) => (dl(e, t, 'access private method'), n);
   const pl = ['ArrowLeft', 'ArrowRight', 'Enter', ' ', 'f', 'm', 'k', 'c'],
    vl = 'defaultsubtitles',
    bl = 'defaultstreamtype',
    gl = 'defaultduration',
    El = 'fullscreenelement',
    fl = 'hotkeys',
    yl = 'keysused',
    _l = 'liveedgeoffset',
    Tl = 'seektoliveoffset',
    Al = 'noautoseektolive',
    kl = 'nohotkeys',
    wl = 'novolumepref',
    Il = 'nosubtitleslangpref',
    Sl = 'nodefaultstore',
    Rl = 'keyboardforwardseekoffset',
    Cl = 'keyboardbackwardseekoffset',
    Dl = 'lang';
   class Ll extends to {
    constructor() {
     super(),
      cl(this, il),
      cl(this, rl),
      cl(this, ol),
      (this.mediaStateReceivers = []),
      (this.associatedElementSubscriptions = new Map()),
      cl(this, zo, new mo(this, fl)),
      cl(this, Xo, void 0),
      cl(this, Jo, void 0),
      cl(this, el, void 0),
      cl(this, tl, void 0),
      cl(this, nl, (e) => {
       var t;
       null == (t = ul(this, Jo)) || t.dispatch(e);
      }),
      this.associateElement(this);
     let e = {};
     hl(this, el, (t) => {
      Object.entries(t).forEach(([t, n]) => {
       if (t in e && e[t] === n) return;
       this.propagateMediaState(t, n);
       const i = t.toLowerCase(),
        a = new Zr.CustomEvent(Er[i], { composed: !0, detail: n });
       this.dispatchEvent(a);
      }),
       (e = t);
     }),
      this.enableHotkeys();
    }
    static get observedAttributes() {
     return super.observedAttributes.concat(kl, fl, bl, vl, gl, Dl);
    }
    get mediaStore() {
     return ul(this, Jo);
    }
    set mediaStore(e) {
     var t, n;
     ul(this, Jo) && (null == (t = ul(this, tl)) || t.call(this), hl(this, tl, void 0)), hl(this, Jo, e), ul(this, Jo) || this.hasAttribute(Sl) ? hl(this, tl, null == (n = ul(this, Jo)) ? void 0 : n.subscribe(ul(this, el))) : ml(this, il, al).call(this);
    }
    get fullscreenElement() {
     var e;
     return null != (e = ul(this, Xo)) ? e : this;
    }
    set fullscreenElement(e) {
     var t;
     this.hasAttribute(El) && this.removeAttribute(El), hl(this, Xo, e), null == (t = ul(this, Jo)) || t.dispatch({ type: 'fullscreenelementchangerequest', detail: this.fullscreenElement });
    }
    get defaultSubtitles() {
     return gs(this, vl);
    }
    set defaultSubtitles(e) {
     Es(this, vl, e);
    }
    get defaultStreamType() {
     return fs(this, bl);
    }
    set defaultStreamType(e) {
     ys(this, bl, e);
    }
    get defaultDuration() {
     return vs(this, gl);
    }
    set defaultDuration(e) {
     bs(this, gl, e);
    }
    get noHotkeys() {
     return gs(this, kl);
    }
    set noHotkeys(e) {
     Es(this, kl, e);
    }
    get keysUsed() {
     return fs(this, yl);
    }
    set keysUsed(e) {
     ys(this, yl, e);
    }
    get liveEdgeOffset() {
     return vs(this, _l);
    }
    set liveEdgeOffset(e) {
     bs(this, _l, e);
    }
    get noAutoSeekToLive() {
     return gs(this, Al);
    }
    set noAutoSeekToLive(e) {
     Es(this, Al, e);
    }
    get noVolumePref() {
     return gs(this, wl);
    }
    set noVolumePref(e) {
     Es(this, wl, e);
    }
    get noSubtitlesLangPref() {
     return gs(this, Il);
    }
    set noSubtitlesLangPref(e) {
     Es(this, Il, e);
    }
    get noDefaultStore() {
     return gs(this, Sl);
    }
    set noDefaultStore(e) {
     Es(this, Sl, e);
    }
    attributeChangedCallback(e, t, n) {
     var i, a, r, s, o, l, d, u;
     if ((super.attributeChangedCallback(e, t, n), e === kl)) n !== t && '' === n ? (this.hasAttribute(fl) && console.warn('Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled.'), this.disableHotkeys()) : n !== t && null === n && this.enableHotkeys();
     else if (e === fl) ul(this, zo).value = n;
     else if (e === vl && n !== t) null == (i = ul(this, Jo)) || i.dispatch({ type: 'optionschangerequest', detail: { defaultSubtitles: this.hasAttribute(vl) } });
     else if (e === bl) null == (r = ul(this, Jo)) || r.dispatch({ type: 'optionschangerequest', detail: { defaultStreamType: null != (a = this.getAttribute(bl)) ? a : void 0 } });
     else if (e === _l) null == (s = ul(this, Jo)) || s.dispatch({ type: 'optionschangerequest', detail: { liveEdgeOffset: this.hasAttribute(_l) ? +this.getAttribute(_l) : void 0, seekToLiveOffset: this.hasAttribute(Tl) ? void 0 : +this.getAttribute(_l) } });
     else if (e === Tl) null == (o = ul(this, Jo)) || o.dispatch({ type: 'optionschangerequest', detail: { seekToLiveOffset: this.hasAttribute(Tl) ? +this.getAttribute(Tl) : void 0 } });
     else if (e === Al) null == (l = ul(this, Jo)) || l.dispatch({ type: 'optionschangerequest', detail: { noAutoSeekToLive: this.hasAttribute(Al) } });
     else if (e === El) {
      const e = n ? (null == (d = this.getRootNode()) ? void 0 : d.getElementById(n)) : void 0;
      hl(this, Xo, e), null == (u = ul(this, Jo)) || u.dispatch({ type: 'fullscreenelementchangerequest', detail: this.fullscreenElement });
     } else e === Dl && n !== t && (Vr = n);
    }
    connectedCallback() {
     var e, t;
     ul(this, Jo) || this.hasAttribute(Sl) || ml(this, il, al).call(this), null == (e = ul(this, Jo)) || e.dispatch({ type: 'documentelementchangerequest', detail: zr }), super.connectedCallback(), ul(this, Jo) && !ul(this, tl) && hl(this, tl, null == (t = ul(this, Jo)) ? void 0 : t.subscribe(ul(this, el))), this.enableHotkeys();
    }
    disconnectedCallback() {
     var e, t, n, i;
     null == (e = super.disconnectedCallback) || e.call(this), ul(this, Jo) && (null == (t = ul(this, Jo)) || t.dispatch({ type: 'documentelementchangerequest', detail: void 0 }), null == (n = ul(this, Jo)) || n.dispatch({ type: hr.MEDIA_TOGGLE_SUBTITLES_REQUEST, detail: !1 })), ul(this, tl) && (null == (i = ul(this, tl)) || i.call(this), hl(this, tl, void 0));
    }
    mediaSetCallback(e) {
     var t;
     super.mediaSetCallback(e), null == (t = ul(this, Jo)) || t.dispatch({ type: 'mediaelementchangerequest', detail: e }), e.hasAttribute('tabindex') || (e.tabIndex = -1);
    }
    mediaUnsetCallback(e) {
     var t;
     super.mediaUnsetCallback(e), null == (t = ul(this, Jo)) || t.dispatch({ type: 'mediaelementchangerequest', detail: void 0 });
    }
    propagateMediaState(e, t) {
     Wl(this.mediaStateReceivers, e, t);
    }
    associateElement(e) {
     if (!e) return;
     const { associatedElementSubscriptions: t } = this;
     if (t.has(e)) return;
     const n = this.registerMediaStateReceiver.bind(this),
      i = this.unregisterMediaStateReceiver.bind(this),
      a = Bl(e, n, i);
     Object.values(hr).forEach((t) => {
      e.addEventListener(t, ul(this, nl));
     }),
      t.set(e, a);
    }
    unassociateElement(e) {
     if (!e) return;
     const { associatedElementSubscriptions: t } = this;
     if (!t.has(e)) return;
     t.get(e)(),
      t.delete(e),
      Object.values(hr).forEach((t) => {
       e.removeEventListener(t, ul(this, nl));
      });
    }
    registerMediaStateReceiver(e) {
     if (!e) return;
     const t = this.mediaStateReceivers;
     t.indexOf(e) > -1 ||
      (t.push(e),
      ul(this, Jo) &&
       Object.entries(ul(this, Jo).getState()).forEach(([t, n]) => {
        Wl([e], t, n);
       }));
    }
    unregisterMediaStateReceiver(e) {
     const t = this.mediaStateReceivers,
      n = t.indexOf(e);
     n < 0 || t.splice(n, 1);
    }
    enableHotkeys() {
     this.addEventListener('keydown', ml(this, ol, ll));
    }
    disableHotkeys() {
     this.removeEventListener('keydown', ml(this, ol, ll)), this.removeEventListener('keyup', ml(this, rl, sl));
    }
    get hotkeys() {
     return fs(this, fl);
    }
    set hotkeys(e) {
     ys(this, fl, e);
    }
    keyboardShortcutHandler(e) {
     var t, n, i, a, r;
     const s = e.target;
     if (
      (null != (i = null != (n = null == (t = s.getAttribute(yl)) ? void 0 : t.split(' ')) ? n : null == s ? void 0 : s.keysUsed) ? i : [])
       .map((e) => ('Space' === e ? ' ' : e))
       .filter(Boolean)
       .includes(e.key)
     )
      return;
     let o, l, d;
     if (!(ul(this, zo).contains(`no${e.key.toLowerCase()}`) || (' ' === e.key && ul(this, zo).contains('nospace'))))
      switch (e.key) {
       case ' ':
       case 'k':
        (o = ul(this, Jo).getState().mediaPaused ? hr.MEDIA_PLAY_REQUEST : hr.MEDIA_PAUSE_REQUEST), this.dispatchEvent(new Zr.CustomEvent(o, { composed: !0, bubbles: !0 }));
        break;
       case 'm':
        (o = 'off' === this.mediaStore.getState().mediaVolumeLevel ? hr.MEDIA_UNMUTE_REQUEST : hr.MEDIA_MUTE_REQUEST), this.dispatchEvent(new Zr.CustomEvent(o, { composed: !0, bubbles: !0 }));
        break;
       case 'f':
        (o = this.mediaStore.getState().mediaIsFullscreen ? hr.MEDIA_EXIT_FULLSCREEN_REQUEST : hr.MEDIA_ENTER_FULLSCREEN_REQUEST), this.dispatchEvent(new Zr.CustomEvent(o, { composed: !0, bubbles: !0 }));
        break;
       case 'c':
        this.dispatchEvent(new Zr.CustomEvent(hr.MEDIA_TOGGLE_SUBTITLES_REQUEST, { composed: !0, bubbles: !0 }));
        break;
       case 'ArrowLeft': {
        const e = this.hasAttribute(Cl) ? +this.getAttribute(Cl) : 10;
        (l = Math.max((null != (a = this.mediaStore.getState().mediaCurrentTime) ? a : 0) - e, 0)), (d = new Zr.CustomEvent(hr.MEDIA_SEEK_REQUEST, { composed: !0, bubbles: !0, detail: l })), this.dispatchEvent(d);
        break;
       }
       case 'ArrowRight': {
        const e = this.hasAttribute(Rl) ? +this.getAttribute(Rl) : 10;
        (l = Math.max((null != (r = this.mediaStore.getState().mediaCurrentTime) ? r : 0) + e, 0)), (d = new Zr.CustomEvent(hr.MEDIA_SEEK_REQUEST, { composed: !0, bubbles: !0, detail: l })), this.dispatchEvent(d);
        break;
       }
      }
    }
   }
   (zo = new WeakMap()),
    (Xo = new WeakMap()),
    (Jo = new WeakMap()),
    (el = new WeakMap()),
    (tl = new WeakMap()),
    (nl = new WeakMap()),
    (il = new WeakSet()),
    (al = function () {
     var e;
     this.mediaStore = Zo({ media: this.media, fullscreenElement: this.fullscreenElement, options: { defaultSubtitles: this.hasAttribute(vl), defaultDuration: this.hasAttribute(gl) ? +this.getAttribute(gl) : void 0, defaultStreamType: null != (e = this.getAttribute(bl)) ? e : void 0, liveEdgeOffset: this.hasAttribute(_l) ? +this.getAttribute(_l) : void 0, seekToLiveOffset: this.hasAttribute(Tl) ? +this.getAttribute(Tl) : this.hasAttribute(_l) ? +this.getAttribute(_l) : void 0, noAutoSeekToLive: this.hasAttribute(Al), noVolumePref: this.hasAttribute(wl), noSubtitlesLangPref: this.hasAttribute(Il) } });
    }),
    (rl = new WeakSet()),
    (sl = function (e) {
     const { key: t } = e;
     pl.includes(t) ? this.keyboardShortcutHandler(e) : this.removeEventListener('keyup', ml(this, rl, sl));
    }),
    (ol = new WeakSet()),
    (ll = function (e) {
     const { metaKey: t, altKey: n, key: i } = e;
     t || n || !pl.includes(i) ? this.removeEventListener('keyup', ml(this, rl, sl)) : ([' ', 'ArrowLeft', 'ArrowRight'].includes(i) && !(ul(this, zo).contains(`no${i.toLowerCase()}`) || (' ' === i && ul(this, zo).contains('nospace'))) && e.preventDefault(), this.addEventListener('keyup', ml(this, rl, sl), { once: !0 }));
    });
   const Ml = Object.values(br),
    xl = Object.values(pr),
    Nl = (e) => {
     var t, n, i, a;
     let { observedAttributes: r } = e.constructor;
     !r && (null == (t = e.nodeName) ? void 0 : t.includes('-')) && (Zr.customElements.upgrade(e), ({ observedAttributes: r } = e.constructor));
     const s = null == (a = null == (i = null == (n = null == e ? void 0 : e.getAttribute) ? void 0 : n.call(e, mr.MEDIA_CHROME_ATTRIBUTES)) ? void 0 : i.split) ? void 0 : a.call(i, /\s+/);
     return Array.isArray(r || s) ? (r || s).filter((e) => Ml.includes(e)) : [];
    },
    Ol = (e) =>
     ((e) => {
      var t, n;
      return !(null == (t = e.nodeName) ? void 0 : t.includes('-')) || !Zr.customElements.get(null == (n = e.nodeName) ? void 0 : n.toLowerCase()) || e instanceof Zr.customElements.get(e.nodeName.toLowerCase()) || Zr.customElements.upgrade(e), xl.some((t) => t in e);
     })(e) || !!Nl(e).length,
    Pl = (e) => {
     var t;
     return null == (t = null == e ? void 0 : e.join) ? void 0 : t.call(e, ':');
    },
    Ul = {
     [br.MEDIA_SUBTITLES_LIST]: Eo,
     [br.MEDIA_SUBTITLES_SHOWING]: Eo,
     [br.MEDIA_SEEKABLE]: Pl,
     [br.MEDIA_BUFFERED]: (e) => (null == e ? void 0 : e.map(Pl).join(' ')),
     [br.MEDIA_PREVIEW_COORDS]: (e) => (null == e ? void 0 : e.join(' ')),
     [br.MEDIA_RENDITION_LIST]: function (e) {
      return null == e ? void 0 : e.map(Rr).join(' ');
     },
     [br.MEDIA_AUDIO_TRACK_LIST]: function (e) {
      return null == e ? void 0 : e.map(Dr).join(' ');
     },
    },
    Hl = (e, t) => {
     if (
      ((e) => {
       var t;
       return !!(null == (t = e.closest) ? void 0 : t.call(e, '*[slot="media"]'));
      })(e)
     )
      return;
     const n = (e, t) => {
       var n, i;
       Ol(e) && t(e);
       const { children: a = [] } = null != e ? e : {};
       [...a, ...(null != (i = null == (n = null == e ? void 0 : e.shadowRoot) ? void 0 : n.children) ? i : [])].forEach((e) => Hl(e, t));
      },
      i = null == e ? void 0 : e.nodeName.toLowerCase();
     !i.includes('-') || Ol(e)
      ? n(e, t)
      : Zr.customElements.whenDefined(i).then(() => {
         n(e, t);
        });
    },
    Wl = (e, t, n) => {
     e.forEach((e) => {
      if (t in e) return void (e[t] = n);
      const i = Nl(e),
       a = t.toLowerCase();
      i.includes(a) &&
       (async (e, t, n) => {
        var i, a;
        if ((e.isConnected || (await Or(0)), 'boolean' == typeof n || null == n)) return Es(e, t, n);
        if ('number' == typeof n) return bs(e, t, n);
        if ('string' == typeof n) return ys(e, t, n);
        if (Array.isArray(n) && !n.length) return e.removeAttribute(t);
        const r = null != (a = null == (i = Ul[t]) ? void 0 : i.call(Ul, n)) ? a : n;
        e.setAttribute(t, r);
       })(e, a, n);
     });
    },
    Bl = (e, t, n) => {
     Hl(e, t);
     const i = (e) => {
       var n;
       const i = null != (n = null == e ? void 0 : e.composedPath()[0]) ? n : e.target;
       t(i);
      },
      a = (e) => {
       var t;
       const i = null != (t = null == e ? void 0 : e.composedPath()[0]) ? t : e.target;
       n(i);
      };
     e.addEventListener(hr.REGISTER_MEDIA_STATE_RECEIVER, i), e.addEventListener(hr.UNREGISTER_MEDIA_STATE_RECEIVER, a);
     let r = [];
     const s = (e) => {
      const i = e.target;
      'media' !== i.name && (r.forEach((e) => Hl(e, n)), (r = [...i.assignedElements({ flatten: !0 })]), r.forEach((e) => Hl(e, t)));
     };
     e.addEventListener('slotchange', s);
     const o = new MutationObserver((e) => {
      e.forEach((e) => {
       const { addedNodes: i = [], removedNodes: a = [], type: r, target: s, attributeName: o } = e;
       'childList' === r ? (Array.prototype.forEach.call(i, (e) => Hl(e, t)), Array.prototype.forEach.call(a, (e) => Hl(e, n))) : 'attributes' === r && o === mr.MEDIA_CHROME_ATTRIBUTES && (Ol(s) ? t(s) : n(s));
      });
     });
     o.observe(e, { childList: !0, attributes: !0, subtree: !0 });
     return () => {
      Hl(e, n), e.removeEventListener('slotchange', s), o.disconnect(), e.removeEventListener(hr.REGISTER_MEDIA_STATE_RECEIVER, i), e.removeEventListener(hr.UNREGISTER_MEDIA_STATE_RECEIVER, a);
     };
    };
   Zr.customElements.get('media-controller') || Zr.customElements.define('media-controller', Ll);
   var Vl = Ll;
   const $l = 'placement',
    ql = 'bounds';
   class Kl extends Zr.HTMLElement {
    constructor() {
     if (
      (super(),
      (this.updateXOffset = () => {
       var e;
       if (!hs(this, { checkOpacity: !1, checkVisibilityCSS: !1 })) return;
       const t = this.placement;
       if ('left' === t || 'right' === t) return void this.style.removeProperty('--media-tooltip-offset-x');
       const n = getComputedStyle(this),
        i = null != (e = ds(this, '#' + this.bounds)) ? e : as(this);
       if (!i) return;
       const { x: a, width: r } = i.getBoundingClientRect(),
        { x: s, width: o } = this.getBoundingClientRect(),
        l = s + o,
        d = a + r,
        u = n.getPropertyValue('--media-tooltip-offset-x'),
        c = u ? parseFloat(u.replace('px', '')) : 0,
        h = n.getPropertyValue('--media-tooltip-container-margin'),
        m = h ? parseFloat(h.replace('px', '')) : 0,
        p = s - a + c - m,
        v = l - d + c + m;
       p < 0 ? this.style.setProperty('--media-tooltip-offset-x', `${p}px`) : v > 0 ? this.style.setProperty('--media-tooltip-offset-x', `${v}px`) : this.style.removeProperty('--media-tooltip-offset-x');
      }),
      !this.shadowRoot)
     ) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
     }
     if (((this.arrowEl = this.shadowRoot.querySelector('#arrow')), Object.prototype.hasOwnProperty.call(this, 'placement'))) {
      const e = this.placement;
      delete this.placement, (this.placement = e);
     }
    }
    static get observedAttributes() {
     return [$l, ql];
    }
    get placement() {
     return fs(this, $l);
    }
    set placement(e) {
     ys(this, $l, e);
    }
    get bounds() {
     return fs(this, ql);
    }
    set bounds(e) {
     ys(this, ql, e);
    }
   }
   (Kl.shadowRootOptions = { mode: 'open' }),
    (Kl.getTemplateHTML = function (e) {
     return '\n    <style>\n      :host {\n        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));\n        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));\n        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);\n        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);\n        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));\n        position: relative;\n        pointer-events: none;\n        display: var(--media-tooltip-display, inline-flex);\n        justify-content: center;\n        align-items: center;\n        box-sizing: border-box;\n        z-index: var(--media-tooltip-z-index, 1);\n        background: var(--_tooltip-background);\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        font: var(--media-font,\n          var(--media-font-weight, 400)\n          var(--media-font-size, 13px) /\n          var(--media-text-content-height, var(--media-control-height, 18px))\n          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n        padding: var(--media-tooltip-padding, .35em .7em);\n        border: var(--media-tooltip-border, none);\n        border-radius: var(--media-tooltip-border-radius, 5px);\n        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));\n        white-space: var(--media-tooltip-white-space, nowrap);\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      img, svg {\n        display: inline-block;\n      }\n\n      #arrow {\n        position: absolute;\n        width: 0px;\n        height: 0px;\n        border-style: solid;\n        display: var(--media-tooltip-arrow-display, block);\n      }\n\n      :host(:not([placement])),\n      :host([placement="top"]) {\n        position: absolute;\n        bottom: calc(100% + var(--media-tooltip-distance, 12px));\n        left: 50%;\n        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);\n      }\n      :host(:not([placement])) #arrow,\n      :host([placement="top"]) #arrow {\n        top: 100%;\n        left: 50%;\n        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);\n        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;\n        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);\n      }\n\n      :host([placement="right"]) {\n        position: absolute;\n        left: calc(100% + var(--media-tooltip-distance, 12px));\n        top: 50%;\n        transform: translate(0, -50%);\n      }\n      :host([placement="right"]) #arrow {\n        top: 50%;\n        right: 100%;\n        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;\n        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;\n        transform: translate(0, -50%);\n      }\n\n      :host([placement="bottom"]) {\n        position: absolute;\n        top: calc(100% + var(--media-tooltip-distance, 12px));\n        left: 50%;\n        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);\n      }\n      :host([placement="bottom"]) #arrow {\n        bottom: 100%;\n        left: 50%;\n        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);\n        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;\n        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);\n      }\n\n      :host([placement="left"]) {\n        position: absolute;\n        right: calc(100% + var(--media-tooltip-distance, 12px));\n        top: 50%;\n        transform: translate(0, -50%);\n      }\n      :host([placement="left"]) #arrow {\n        top: 50%;\n        left: 100%;\n        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);\n        border-color: transparent transparent transparent var(--_tooltip-arrow-background);\n        transform: translate(0, -50%);\n      }\n      \n      :host([placement="none"]) #arrow {\n        display: none;\n      }\n    </style>\n    <slot></slot>\n    <div id="arrow"></div>\n  ';
    }),
    Zr.customElements.get('media-tooltip') || Zr.customElements.define('media-tooltip', Kl);
   var Fl,
    Yl,
    jl,
    Gl,
    Ql,
    Zl,
    zl,
    Xl = Kl,
    Jl = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    ed = (e, t, n) => (Jl(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    td = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    nd = (e, t, n, i) => (Jl(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n);
   const id = 'tooltipplacement',
    ad = 'disabled',
    rd = 'notooltip';
   class sd extends Zr.HTMLElement {
    constructor() {
     if (
      (super(),
      td(this, Zl),
      td(this, Fl, void 0),
      (this.preventClick = !1),
      (this.tooltipEl = null),
      td(this, Yl, (e) => {
       this.preventClick || this.handleClick(e), setTimeout(ed(this, jl), 0);
      }),
      td(this, jl, () => {
       var e, t;
       null == (t = null == (e = this.tooltipEl) ? void 0 : e.updateXOffset) || t.call(e);
      }),
      td(this, Gl, (e) => {
       const { key: t } = e;
       this.keysUsed.includes(t) ? this.preventClick || this.handleClick(e) : this.removeEventListener('keyup', ed(this, Gl));
      }),
      td(this, Ql, (e) => {
       const { metaKey: t, altKey: n, key: i } = e;
       t || n || !this.keysUsed.includes(i) ? this.removeEventListener('keyup', ed(this, Gl)) : this.addEventListener('keyup', ed(this, Gl), { once: !0 });
      }),
      !this.shadowRoot)
     ) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes),
       t = this.constructor.getTemplateHTML(e);
      this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(t) : (this.shadowRoot.innerHTML = t);
     }
     this.tooltipEl = this.shadowRoot.querySelector('media-tooltip');
    }
    static get observedAttributes() {
     return ['disabled', id, mr.MEDIA_CONTROLLER];
    }
    enable() {
     this.addEventListener('click', ed(this, Yl)), this.addEventListener('keydown', ed(this, Ql)), (this.tabIndex = 0);
    }
    disable() {
     this.removeEventListener('click', ed(this, Yl)), this.removeEventListener('keydown', ed(this, Ql)), this.removeEventListener('keyup', ed(this, Gl)), (this.tabIndex = -1);
    }
    attributeChangedCallback(e, t, n) {
     var i, a, r, s, o;
     e === mr.MEDIA_CONTROLLER ? (t && (null == (a = null == (i = ed(this, Fl)) ? void 0 : i.unassociateElement) || a.call(i, this), nd(this, Fl, null)), n && this.isConnected && (nd(this, Fl, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)), null == (o = null == (s = ed(this, Fl)) ? void 0 : s.associateElement) || o.call(s, this))) : 'disabled' === e && n !== t ? (null == n ? this.enable() : this.disable()) : e === id && this.tooltipEl && n !== t && (this.tooltipEl.placement = n), ed(this, jl).call(this);
    }
    connectedCallback() {
     var e, t, n;
     const { style: i } = ms(this.shadowRoot, ':host');
     i.setProperty('display', `var(--media-control-display, var(--${this.localName}-display, inline-flex))`), this.hasAttribute('disabled') ? this.disable() : this.enable(), this.setAttribute('role', 'button');
     const a = this.getAttribute(mr.MEDIA_CONTROLLER);
     a && (nd(this, Fl, null == (e = this.getRootNode()) ? void 0 : e.getElementById(a)), null == (n = null == (t = ed(this, Fl)) ? void 0 : t.associateElement) || n.call(t, this)),
      Zr.customElements.whenDefined('media-tooltip').then(() => {
       return ((e = this), (t = Zl), (n = zl), Jl(e, t, 'access private method'), n).call(this);
       var e, t, n;
      });
    }
    disconnectedCallback() {
     var e, t;
     this.disable(), null == (t = null == (e = ed(this, Fl)) ? void 0 : e.unassociateElement) || t.call(e, this), nd(this, Fl, null), this.removeEventListener('mouseenter', ed(this, jl)), this.removeEventListener('focus', ed(this, jl)), this.removeEventListener('click', ed(this, Yl));
    }
    get keysUsed() {
     return ['Enter', ' '];
    }
    get tooltipPlacement() {
     return fs(this, id);
    }
    set tooltipPlacement(e) {
     ys(this, id, e);
    }
    get mediaController() {
     return fs(this, mr.MEDIA_CONTROLLER);
    }
    set mediaController(e) {
     ys(this, mr.MEDIA_CONTROLLER, e);
    }
    get disabled() {
     return gs(this, ad);
    }
    set disabled(e) {
     Es(this, ad, e);
    }
    get noTooltip() {
     return gs(this, rd);
    }
    set noTooltip(e) {
     Es(this, rd, e);
    }
    handleClick(e) {}
   }
   (Fl = new WeakMap()),
    (Yl = new WeakMap()),
    (jl = new WeakMap()),
    (Gl = new WeakMap()),
    (Ql = new WeakMap()),
    (Zl = new WeakSet()),
    (zl = function () {
     this.addEventListener('mouseenter', ed(this, jl)), this.addEventListener('focus', ed(this, jl)), this.addEventListener('click', ed(this, Yl));
     const e = this.tooltipPlacement;
     e && this.tooltipEl && (this.tooltipEl.placement = e);
    }),
    (sd.shadowRootOptions = { mode: 'open' }),
    (sd.getTemplateHTML = function (e, t = {}) {
     return `\n    <style>\n      :host {\n        position: relative;\n        font: var(--media-font,\n          var(--media-font-weight, bold)\n          var(--media-font-size, 14px) /\n          var(--media-text-content-height, var(--media-control-height, 24px))\n          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));\n        padding: var(--media-button-padding, var(--media-control-padding, 10px));\n        justify-content: var(--media-button-justify-content, center);\n        display: inline-flex;\n        align-items: center;\n        vertical-align: middle;\n        box-sizing: border-box;\n        transition: background .15s linear;\n        pointer-events: auto;\n        cursor: var(--media-cursor, pointer);\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      \n      :host(:focus-visible) {\n        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);\n        outline: 0;\n      }\n      \n      :host(:where(:focus)) {\n        box-shadow: none;\n        outline: 0;\n      }\n\n      :host(:hover) {\n        background: var(--media-control-hover-background, rgba(50 50 70 / .7));\n      }\n\n      svg, img, ::slotted(svg), ::slotted(img) {\n        width: var(--media-button-icon-width);\n        height: var(--media-button-icon-height, var(--media-control-height, 24px));\n        transform: var(--media-button-icon-transform);\n        transition: var(--media-button-icon-transition);\n        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));\n        vertical-align: middle;\n        max-width: 100%;\n        max-height: 100%;\n        min-width: 100%;\n      }\n\n      media-tooltip {\n        \n        max-width: 0;\n        overflow-x: clip;\n        opacity: 0;\n        transition: opacity .3s, max-width 0s 9s;\n      }\n\n      :host(:hover) media-tooltip,\n      :host(:focus-visible) media-tooltip {\n        max-width: 100vw;\n        opacity: 1;\n        transition: opacity .3s;\n      }\n\n      :host([notooltip]) slot[name="tooltip"] {\n        display: none;\n      }\n    </style>\n\n    ${this.getSlotTemplateHTML(e, t)}\n\n    <slot name="tooltip">\n      <media-tooltip part="tooltip" aria-hidden="true">\n        <template shadowrootmode="${Xl.shadowRootOptions.mode}">\n          ${Xl.getTemplateHTML({})}\n        </template>\n        <slot name="tooltip-content">\n          ${this.getTooltipContentHTML(e)}\n        </slot>\n      </media-tooltip>\n    </slot>\n  `;
    }),
    (sd.getSlotTemplateHTML = function (e, t) {
     return '\n    <slot></slot>\n  ';
    }),
    (sd.getTooltipContentHTML = function () {
     return '';
    }),
    Zr.customElements.get('media-chrome-button') || Zr.customElements.define('media-chrome-button', sd);
   const od = '<svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>\n</svg>\n';
   const ld = (e) => {
    const t = e.mediaIsAirplaying ? $r('stop airplay') : $r('start airplay');
    e.setAttribute('aria-label', t);
   };
   class dd extends sd {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_IS_AIRPLAYING, br.MEDIA_AIRPLAY_UNAVAILABLE];
    }
    connectedCallback() {
     super.connectedCallback(), ld(this);
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_IS_AIRPLAYING && ld(this);
    }
    get mediaIsAirplaying() {
     return gs(this, br.MEDIA_IS_AIRPLAYING);
    }
    set mediaIsAirplaying(e) {
     Es(this, br.MEDIA_IS_AIRPLAYING, e);
    }
    get mediaAirplayUnavailable() {
     return fs(this, br.MEDIA_AIRPLAY_UNAVAILABLE);
    }
    set mediaAirplayUnavailable(e) {
     ys(this, br.MEDIA_AIRPLAY_UNAVAILABLE, e);
    }
    handleClick() {
     const e = new Zr.CustomEvent(hr.MEDIA_AIRPLAY_REQUEST, { composed: !0, bubbles: !0 });
     this.dispatchEvent(e);
    }
   }
   (dd.getSlotTemplateHTML = function (e) {
    return `\n    <style>\n      :host([${br.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {\n        display: none !important;\n      }\n\n      \n      :host(:not([${br.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {\n        display: none !important;\n      }\n\n      :host([${br.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],\n      :host(:not([${br.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="enter">${od}</slot>\n      <slot name="exit">${od}</slot>\n    </slot>\n  `;
   }),
    (dd.getTooltipContentHTML = function () {
     return `\n    <slot name="tooltip-enter">${$r('start airplay')}</slot>\n    <slot name="tooltip-exit">${$r('stop airplay')}</slot>\n  `;
    }),
    Zr.customElements.get('media-airplay-button') || Zr.customElements.define('media-airplay-button', dd);
   const ud = (e) => {
    e.setAttribute('aria-checked', To(e).toString());
   };
   class cd extends sd {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_SUBTITLES_LIST, br.MEDIA_SUBTITLES_SHOWING];
    }
    connectedCallback() {
     super.connectedCallback(), this.setAttribute('role', 'switch'), this.setAttribute('aria-label', $r('closed captions')), ud(this);
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_SUBTITLES_SHOWING && ud(this);
    }
    get mediaSubtitlesList() {
     return hd(this, br.MEDIA_SUBTITLES_LIST);
    }
    set mediaSubtitlesList(e) {
     md(this, br.MEDIA_SUBTITLES_LIST, e);
    }
    get mediaSubtitlesShowing() {
     return hd(this, br.MEDIA_SUBTITLES_SHOWING);
    }
    set mediaSubtitlesShowing(e) {
     md(this, br.MEDIA_SUBTITLES_SHOWING, e);
    }
    handleClick() {
     this.dispatchEvent(new Zr.CustomEvent(hr.MEDIA_TOGGLE_SUBTITLES_REQUEST, { composed: !0, bubbles: !0 }));
    }
   }
   (cd.getSlotTemplateHTML = function (e) {
    return '\n    <style>\n      :host([aria-checked="true"]) slot[name=off] {\n        display: none !important;\n      }\n\n      \n      :host(:not([aria-checked="true"])) slot[name=on] {\n        display: none !important;\n      }\n\n      :host([aria-checked="true"]) slot[name=tooltip-enable],\n      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="on"><svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>\n</svg></slot>\n      <slot name="off"><svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>\n</svg></slot>\n    </slot>\n  ';
   }),
    (cd.getTooltipContentHTML = function () {
     return `\n    <slot name="tooltip-enable">${$r('Enable captions')}</slot>\n    <slot name="tooltip-disable">${$r('Disable captions')}</slot>\n  `;
    });
   const hd = (e, t) => {
     const n = e.getAttribute(t);
     return n ? vo(n) : [];
    },
    md = (e, t, n) => {
     if (!(null == n ? void 0 : n.length)) return void e.removeAttribute(t);
     const i = Eo(n);
     e.getAttribute(t) !== i && e.setAttribute(t, i);
    };
   Zr.customElements.get('media-captions-button') || Zr.customElements.define('media-captions-button', cd);
   const pd = (e) => {
    const t = e.mediaIsCasting ? $r('stop casting') : $r('start casting');
    e.setAttribute('aria-label', t);
   };
   class vd extends sd {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_IS_CASTING, br.MEDIA_CAST_UNAVAILABLE];
    }
    connectedCallback() {
     super.connectedCallback(), pd(this);
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_IS_CASTING && pd(this);
    }
    get mediaIsCasting() {
     return gs(this, br.MEDIA_IS_CASTING);
    }
    set mediaIsCasting(e) {
     Es(this, br.MEDIA_IS_CASTING, e);
    }
    get mediaCastUnavailable() {
     return fs(this, br.MEDIA_CAST_UNAVAILABLE);
    }
    set mediaCastUnavailable(e) {
     ys(this, br.MEDIA_CAST_UNAVAILABLE, e);
    }
    handleClick() {
     const e = this.mediaIsCasting ? hr.MEDIA_EXIT_CAST_REQUEST : hr.MEDIA_ENTER_CAST_REQUEST;
     this.dispatchEvent(new Zr.CustomEvent(e, { composed: !0, bubbles: !0 }));
    }
   }
   (vd.getSlotTemplateHTML = function (e) {
    return `\n    <style>\n      :host([${br.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {\n        display: none !important;\n      }\n\n      \n      :host(:not([${br.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {\n        display: none !important;\n      }\n\n      :host([${br.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],\n      :host(:not([${br.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>\n      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>\n    </slot>\n  `;
   }),
    (vd.getTooltipContentHTML = function () {
     return `\n    <slot name="tooltip-enter">${$r('Start casting')}</slot>\n    <slot name="tooltip-exit">${$r('Stop casting')}</slot>\n  `;
    }),
    Zr.customElements.get('media-cast-button') || Zr.customElements.define('media-cast-button', vd);
   var bd,
    gd,
    Ed,
    fd,
    yd,
    _d,
    Td,
    Ad,
    kd,
    wd,
    Id,
    Sd,
    Rd,
    Cd,
    Dd,
    Ld = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    Md = (e, t, n) => (Ld(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    xd = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    Nd = (e, t, n, i) => (Ld(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    Od = (e, t, n) => (Ld(e, t, 'access private method'), n);
   const Pd = 'open',
    Ud = 'anchor';
   class Hd extends Zr.HTMLElement {
    constructor() {
     super(), xd(this, fd), xd(this, _d), xd(this, Ad), xd(this, wd), xd(this, Sd), xd(this, Cd), xd(this, bd, !1), xd(this, gd, null), xd(this, Ed, null), this.addEventListener('invoke', this), this.addEventListener('focusout', this), this.addEventListener('keydown', this);
    }
    static get observedAttributes() {
     return [Pd, Ud];
    }
    get open() {
     return gs(this, Pd);
    }
    set open(e) {
     Es(this, Pd, e);
    }
    handleEvent(e) {
     switch (e.type) {
      case 'invoke':
       Od(this, wd, Id).call(this, e);
       break;
      case 'focusout':
       Od(this, Sd, Rd).call(this, e);
       break;
      case 'keydown':
       Od(this, Cd, Dd).call(this, e);
     }
    }
    connectedCallback() {
     Od(this, fd, yd).call(this), this.role || (this.role = 'dialog');
    }
    attributeChangedCallback(e, t, n) {
     Od(this, fd, yd).call(this), e === Pd && n !== t && (this.open ? Od(this, _d, Td).call(this) : Od(this, Ad, kd).call(this));
    }
    focus() {
     Nd(this, gd, us());
     const e = !this.dispatchEvent(new Event('focus', { composed: !0, cancelable: !0 })),
      t = !this.dispatchEvent(new Event('focusin', { composed: !0, bubbles: !0, cancelable: !0 }));
     if (e || t) return;
     const n = this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');
     null == n || n.focus();
    }
    get keysUsed() {
     return ['Escape', 'Tab'];
    }
   }
   (bd = new WeakMap()),
    (gd = new WeakMap()),
    (Ed = new WeakMap()),
    (fd = new WeakSet()),
    (yd = function () {
     if (!Md(this, bd) && (Nd(this, bd, !0), !this.shadowRoot)) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes);
      (this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e)),
       queueMicrotask(() => {
        const { style: e } = ms(this.shadowRoot, ':host');
        e.setProperty('transition', 'display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in');
       });
     }
    }),
    (_d = new WeakSet()),
    (Td = function () {
     var e;
     null == (e = Md(this, Ed)) || e.setAttribute('aria-expanded', 'true'), this.dispatchEvent(new Event('open', { composed: !0, bubbles: !0 })), this.addEventListener('transitionend', () => this.focus(), { once: !0 });
    }),
    (Ad = new WeakSet()),
    (kd = function () {
     var e;
     null == (e = Md(this, Ed)) || e.setAttribute('aria-expanded', 'false'), this.dispatchEvent(new Event('close', { composed: !0, bubbles: !0 }));
    }),
    (wd = new WeakSet()),
    (Id = function (e) {
     Nd(this, Ed, e.relatedTarget), ls(this, e.relatedTarget) || (this.open = !this.open);
    }),
    (Sd = new WeakSet()),
    (Rd = function (e) {
     var t;
     ls(this, e.relatedTarget) || (null == (t = Md(this, gd)) || t.focus(), Md(this, Ed) && Md(this, Ed) !== e.relatedTarget && this.open && (this.open = !1));
    }),
    (Cd = new WeakSet()),
    (Dd = function (e) {
     var t, n, i, a, r;
     const { key: s, ctrlKey: o, altKey: l, metaKey: d } = e;
     o || l || d || (this.keysUsed.includes(s) && (e.preventDefault(), e.stopPropagation(), 'Tab' === s ? (e.shiftKey ? null == (n = null == (t = this.previousElementSibling) ? void 0 : t.focus) || n.call(t) : null == (a = null == (i = this.nextElementSibling) ? void 0 : i.focus) || a.call(i), this.blur()) : 'Escape' === s && (null == (r = Md(this, gd)) || r.focus(), (this.open = !1))));
    }),
    (Hd.shadowRootOptions = { mode: 'open' }),
    (Hd.getTemplateHTML = function (e) {
     return `\n    <style>\n      :host {\n        font: var(--media-font,\n          var(--media-font-weight, normal)\n          var(--media-font-size, 14px) /\n          var(--media-text-content-height, var(--media-control-height, 24px))\n          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        display: var(--media-dialog-display, inline-flex);\n        justify-content: center;\n        align-items: center;\n        \n        transition-behavior: allow-discrete;\n        visibility: hidden;\n        opacity: 0;\n        transform: translateY(2px) scale(.99);\n        pointer-events: none;\n      }\n\n      :host([open]) {\n        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;\n        visibility: visible;\n        opacity: 1;\n        transform: translateY(0) scale(1);\n        pointer-events: auto;\n      }\n\n      #content {\n        display: flex;\n        position: relative;\n        box-sizing: border-box;\n        width: min(320px, 100%);\n        word-wrap: break-word;\n        max-height: 100%;\n        overflow: auto;\n        text-align: center;\n        line-height: 1.4;\n      }\n    </style>\n    ${this.getSlotTemplateHTML(e)}\n  `;
    }),
    (Hd.getSlotTemplateHTML = function (e) {
     return '\n    <slot id="content"></slot>\n  ';
    }),
    Zr.customElements.get('media-chrome-dialog') || Zr.customElements.define('media-chrome-dialog', Hd);
   var Wd,
    Bd,
    Vd,
    $d,
    qd,
    Kd,
    Fd,
    Yd,
    jd,
    Gd,
    Qd,
    Zd,
    zd,
    Xd,
    Jd,
    eu,
    tu,
    nu,
    iu,
    au,
    ru,
    su,
    ou,
    lu,
    du,
    uu = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    cu = (e, t, n) => (uu(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    hu = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    mu = (e, t, n, i) => (uu(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    pu = (e, t, n) => (uu(e, t, 'access private method'), n);
   class vu extends Zr.HTMLElement {
    constructor() {
     if (
      (super(),
      hu(this, Gd),
      hu(this, Zd),
      hu(this, Xd),
      hu(this, eu),
      hu(this, nu),
      hu(this, au),
      hu(this, su),
      hu(this, lu),
      hu(this, Wd, void 0),
      hu(this, Bd, void 0),
      hu(this, Vd, void 0),
      hu(this, $d, void 0),
      hu(this, qd, {}),
      hu(this, Kd, []),
      hu(this, Fd, () => {
       if (this.range.matches(':focus-visible')) {
        const { style: e } = ms(this.shadowRoot, ':host');
        e.setProperty('--_focus-visible-box-shadow', 'var(--_focus-box-shadow)');
       }
      }),
      hu(this, Yd, () => {
       const { style: e } = ms(this.shadowRoot, ':host');
       e.removeProperty('--_focus-visible-box-shadow');
      }),
      hu(this, jd, () => {
       const e = this.shadowRoot.querySelector('#segments-clipping');
       e && e.parentNode.append(e);
      }),
      !this.shadowRoot)
     ) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes),
       t = this.constructor.getTemplateHTML(e);
      this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(t) : (this.shadowRoot.innerHTML = t);
     }
     (this.container = this.shadowRoot.querySelector('#container')), mu(this, Vd, this.shadowRoot.querySelector('#startpoint')), mu(this, $d, this.shadowRoot.querySelector('#endpoint')), (this.range = this.shadowRoot.querySelector('#range')), (this.appearance = this.shadowRoot.querySelector('#appearance'));
    }
    static get observedAttributes() {
     return ['disabled', 'aria-disabled', mr.MEDIA_CONTROLLER];
    }
    attributeChangedCallback(e, t, n) {
     var i, a, r, s, o;
     e === mr.MEDIA_CONTROLLER ? (t && (null == (a = null == (i = cu(this, Wd)) ? void 0 : i.unassociateElement) || a.call(i, this), mu(this, Wd, null)), n && this.isConnected && (mu(this, Wd, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)), null == (o = null == (s = cu(this, Wd)) ? void 0 : s.associateElement) || o.call(s, this))) : ('disabled' === e || ('aria-disabled' === e && t !== n)) && (null == n ? (this.range.removeAttribute(e), pu(this, Zd, zd).call(this)) : (this.range.setAttribute(e, n), pu(this, Xd, Jd).call(this)));
    }
    connectedCallback() {
     var e, t, n;
     const { style: i } = ms(this.shadowRoot, ':host');
     i.setProperty('display', `var(--media-control-display, var(--${this.localName}-display, inline-flex))`), (cu(this, qd).pointer = ms(this.shadowRoot, '#pointer')), (cu(this, qd).progress = ms(this.shadowRoot, '#progress')), (cu(this, qd).thumb = ms(this.shadowRoot, '#thumb, ::slotted([slot="thumb"])')), (cu(this, qd).activeSegment = ms(this.shadowRoot, '#segments-clipping rect:nth-child(0)'));
     const a = this.getAttribute(mr.MEDIA_CONTROLLER);
     a && (mu(this, Wd, null == (e = this.getRootNode()) ? void 0 : e.getElementById(a)), null == (n = null == (t = cu(this, Wd)) ? void 0 : t.associateElement) || n.call(t, this)), this.updateBar(), this.shadowRoot.addEventListener('focusin', cu(this, Fd)), this.shadowRoot.addEventListener('focusout', cu(this, Yd)), pu(this, Zd, zd).call(this), ts(this.container, cu(this, jd));
    }
    disconnectedCallback() {
     var e, t;
     pu(this, Xd, Jd).call(this), null == (t = null == (e = cu(this, Wd)) ? void 0 : e.unassociateElement) || t.call(e, this), mu(this, Wd, null), this.shadowRoot.removeEventListener('focusin', cu(this, Fd)), this.shadowRoot.removeEventListener('focusout', cu(this, Yd)), ns(this.container, cu(this, jd));
    }
    updatePointerBar(e) {
     var t;
     null == (t = cu(this, qd).pointer) || t.style.setProperty('width', 100 * this.getPointerRatio(e) + '%');
    }
    updateBar() {
     var e, t;
     const n = 100 * this.range.valueAsNumber;
     null == (e = cu(this, qd).progress) || e.style.setProperty('width', `${n}%`), null == (t = cu(this, qd).thumb) || t.style.setProperty('left', `${n}%`);
    }
    updateSegments(e) {
     const t = this.shadowRoot.querySelector('#segments-clipping');
     if (((t.textContent = ''), this.container.classList.toggle('segments', !!(null == e ? void 0 : e.length)), !(null == e ? void 0 : e.length))) return;
     const n = [...new Set([+this.range.min, ...e.flatMap((e) => [e.start, e.end]), +this.range.max])];
     mu(this, Kd, [...n]);
     const i = n.pop();
     for (const [a, r] of n.entries()) {
      const [e, s] = [0 === a, a === n.length - 1],
       o = e ? 'calc(var(--segments-gap) / -1)' : 100 * r + '%',
       l = `calc(${100 * ((s ? i : n[a + 1]) - r)}%${e || s ? '' : ' - var(--segments-gap)'})`,
       d = zr.createElementNS('http://www.w3.org/2000/svg', 'rect'),
       u = ms(this.shadowRoot, `#segments-clipping rect:nth-child(${a + 1})`);
      u.style.setProperty('x', o), u.style.setProperty('width', l), t.append(d);
     }
    }
    getPointerRatio(e) {
     return (function (e, t, n, i) {
      const a = i.x - n.x,
       r = i.y - n.y,
       s = a * a + r * r;
      if (0 === s) return 0;
      const o = ((e - n.x) * a + (t - n.y) * r) / s;
      return Math.max(0, Math.min(1, o));
     })(e.clientX, e.clientY, cu(this, Vd).getBoundingClientRect(), cu(this, $d).getBoundingClientRect());
    }
    get dragging() {
     return this.hasAttribute('dragging');
    }
    handleEvent(e) {
     switch (e.type) {
      case 'pointermove':
       pu(this, lu, du).call(this, e);
       break;
      case 'input':
       this.updateBar();
       break;
      case 'pointerenter':
       pu(this, nu, iu).call(this, e);
       break;
      case 'pointerdown':
       pu(this, eu, tu).call(this, e);
       break;
      case 'pointerup':
       pu(this, au, ru).call(this);
       break;
      case 'pointerleave':
       pu(this, su, ou).call(this);
     }
    }
    get keysUsed() {
     return ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
    }
   }
   (Wd = new WeakMap()),
    (Bd = new WeakMap()),
    (Vd = new WeakMap()),
    ($d = new WeakMap()),
    (qd = new WeakMap()),
    (Kd = new WeakMap()),
    (Fd = new WeakMap()),
    (Yd = new WeakMap()),
    (jd = new WeakMap()),
    (Gd = new WeakSet()),
    (Qd = function (e) {
     const t = cu(this, qd).activeSegment;
     if (!t) return;
     const n = this.getPointerRatio(e),
      i = cu(this, Kd).findIndex((e, t, i) => {
       const a = i[t + 1];
       return null != a && n >= e && n <= a;
      }),
      a = `#segments-clipping rect:nth-child(${i + 1})`;
     (t.selectorText == a && t.style.transform) || ((t.selectorText = a), t.style.setProperty('transform', 'var(--media-range-segment-hover-transform, scaleY(2))'));
    }),
    (Zd = new WeakSet()),
    (zd = function () {
     this.hasAttribute('disabled') || (this.addEventListener('input', this), this.addEventListener('pointerdown', this), this.addEventListener('pointerenter', this));
    }),
    (Xd = new WeakSet()),
    (Jd = function () {
     var e, t;
     this.removeEventListener('input', this), this.removeEventListener('pointerdown', this), this.removeEventListener('pointerenter', this), null == (e = Zr.window) || e.removeEventListener('pointerup', this), null == (t = Zr.window) || t.removeEventListener('pointermove', this);
    }),
    (eu = new WeakSet()),
    (tu = function (e) {
     var t;
     mu(this, Bd, e.composedPath().includes(this.range)), null == (t = Zr.window) || t.addEventListener('pointerup', this);
    }),
    (nu = new WeakSet()),
    (iu = function (e) {
     var t;
     'mouse' !== e.pointerType && pu(this, eu, tu).call(this, e), this.addEventListener('pointerleave', this), null == (t = Zr.window) || t.addEventListener('pointermove', this);
    }),
    (au = new WeakSet()),
    (ru = function () {
     var e;
     null == (e = Zr.window) || e.removeEventListener('pointerup', this), this.toggleAttribute('dragging', !1), (this.range.disabled = this.hasAttribute('disabled'));
    }),
    (su = new WeakSet()),
    (ou = function () {
     var e, t;
     this.removeEventListener('pointerleave', this), null == (e = Zr.window) || e.removeEventListener('pointermove', this), this.toggleAttribute('dragging', !1), (this.range.disabled = this.hasAttribute('disabled')), null == (t = cu(this, qd).activeSegment) || t.style.removeProperty('transform');
    }),
    (lu = new WeakSet()),
    (du = function (e) {
     this.toggleAttribute('dragging', 1 === e.buttons || 'mouse' !== e.pointerType), this.updatePointerBar(e), pu(this, Gd, Qd).call(this, e), !this.dragging || ('mouse' === e.pointerType && cu(this, Bd)) || ((this.range.disabled = !0), (this.range.valueAsNumber = this.getPointerRatio(e)), this.range.dispatchEvent(new Event('input', { bubbles: !0, composed: !0 })));
    }),
    (vu.shadowRootOptions = { mode: 'open' }),
    (vu.getTemplateHTML = function (e) {
     return '\n    <style>\n      :host {\n        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));\n        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));\n\n        box-shadow: var(--_focus-visible-box-shadow, none);\n        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));\n        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));\n        display: inline-flex;\n        align-items: center;\n        \n        vertical-align: middle;\n        box-sizing: border-box;\n        position: relative;\n        width: 100px;\n        transition: background .15s linear;\n        cursor: var(--media-cursor, pointer);\n        pointer-events: auto;\n        touch-action: none; \n      }\n\n      \n      input[type=range]:focus {\n        outline: 0;\n      }\n      input[type=range]:focus::-webkit-slider-runnable-track {\n        outline: 0;\n      }\n\n      :host(:hover) {\n        background: var(--media-control-hover-background, rgb(50 50 70 / .7));\n      }\n\n      #leftgap {\n        padding-left: var(--media-range-padding-left, var(--_media-range-padding));\n      }\n\n      #rightgap {\n        padding-right: var(--media-range-padding-right, var(--_media-range-padding));\n      }\n\n      #startpoint,\n      #endpoint {\n        position: absolute;\n      }\n\n      #endpoint {\n        right: 0;\n      }\n\n      #container {\n        \n        width: var(--media-range-track-width, 100%);\n        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));\n        position: relative;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        min-width: 40px;\n      }\n\n      #range {\n        \n        display: var(--media-time-range-hover-display, block);\n        bottom: var(--media-time-range-hover-bottom, -7px);\n        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));\n        width: 100%;\n        position: absolute;\n        cursor: var(--media-cursor, pointer);\n\n        -webkit-appearance: none; \n        -webkit-tap-highlight-color: transparent;\n        background: transparent; \n        margin: 0;\n        z-index: 1;\n      }\n\n      @media (hover: hover) {\n        #range {\n          bottom: var(--media-time-range-hover-bottom, -5px);\n          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));\n        }\n      }\n\n      \n      \n      #range::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        background: transparent;\n        width: .1px;\n        height: .1px;\n      }\n\n      \n      #range::-moz-range-thumb {\n        background: transparent;\n        border: transparent;\n        width: .1px;\n        height: .1px;\n      }\n\n      #appearance {\n        height: var(--media-range-track-height, 4px);\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        width: 100%;\n        position: absolute;\n        \n        will-change: transform;\n      }\n\n      #track {\n        background: var(--media-range-track-background, rgb(255 255 255 / .2));\n        border-radius: var(--media-range-track-border-radius, 1px);\n        border: var(--media-range-track-border, none);\n        outline: var(--media-range-track-outline);\n        outline-offset: var(--media-range-track-outline-offset);\n        backdrop-filter: var(--media-range-track-backdrop-filter);\n        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);\n        box-shadow: var(--media-range-track-box-shadow, none);\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      #progress,\n      #pointer {\n        position: absolute;\n        height: 100%;\n        will-change: width;\n      }\n\n      #progress {\n        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));\n        transition: var(--media-range-track-transition);\n      }\n\n      #pointer {\n        background: var(--media-range-track-pointer-background);\n        border-right: var(--media-range-track-pointer-border-right);\n        transition: visibility .25s, opacity .25s;\n        visibility: hidden;\n        opacity: 0;\n      }\n\n      @media (hover: hover) {\n        :host(:hover) #pointer {\n          transition: visibility .5s, opacity .5s;\n          visibility: visible;\n          opacity: 1;\n        }\n      }\n\n      #thumb,\n      ::slotted([slot=thumb]) {\n        width: var(--media-range-thumb-width, 10px);\n        height: var(--media-range-thumb-height, 10px);\n        transition: var(--media-range-thumb-transition);\n        transform: var(--media-range-thumb-transform, none);\n        opacity: var(--media-range-thumb-opacity, 1);\n        translate: -50%;\n        position: absolute;\n        left: 0;\n        cursor: var(--media-cursor, pointer);\n      }\n\n      #thumb {\n        border-radius: var(--media-range-thumb-border-radius, 10px);\n        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));\n        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);\n        border: var(--media-range-thumb-border, none);\n      }\n\n      :host([disabled]) #thumb {\n        background-color: #777;\n      }\n\n      .segments #appearance {\n        height: var(--media-range-segment-hover-height, 7px);\n      }\n\n      #track {\n        clip-path: url(#segments-clipping);\n      }\n\n      #segments {\n        --segments-gap: var(--media-range-segments-gap, 2px);\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n\n      #segments-clipping {\n        transform: translateX(calc(var(--segments-gap) / 2));\n      }\n\n      #segments-clipping:empty {\n        display: none;\n      }\n\n      #segments-clipping rect {\n        height: var(--media-range-track-height, 4px);\n        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);\n        transition: var(--media-range-segment-transition, transform .1s ease-in-out);\n        transform: var(--media-range-segment-transform, scaleY(1));\n        transform-origin: center;\n      }\n    </style>\n    <div id="leftgap"></div>\n    <div id="container">\n      <div id="startpoint"></div>\n      <div id="endpoint"></div>\n      <div id="appearance">\n        <div id="track" part="track">\n          <div id="pointer"></div>\n          <div id="progress" part="progress"></div>\n        </div>\n        <slot name="thumb">\n          <div id="thumb" part="thumb"></div>\n        </slot>\n        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>\n      </div>\n      <input id="range" type="range" min="0" max="1" step="any" value="0">\n    </div>\n    <div id="rightgap"></div>\n  ';
    }),
    Zr.customElements.get('media-chrome-range') || Zr.customElements.define('media-chrome-range', vu);
   var bu,
    gu = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    Eu = (e, t, n) => (gu(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    fu = (e, t, n, i) => (gu(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n);
   class yu extends Zr.HTMLElement {
    constructor() {
     if (
      (super(),
      ((e, t, n) => {
       if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
       t instanceof WeakSet ? t.add(e) : t.set(e, n);
      })(this, bu, void 0),
      !this.shadowRoot)
     ) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
     }
    }
    static get observedAttributes() {
     return [mr.MEDIA_CONTROLLER];
    }
    attributeChangedCallback(e, t, n) {
     var i, a, r, s, o;
     e === mr.MEDIA_CONTROLLER && (t && (null == (a = null == (i = Eu(this, bu)) ? void 0 : i.unassociateElement) || a.call(i, this), fu(this, bu, null)), n && this.isConnected && (fu(this, bu, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)), null == (o = null == (s = Eu(this, bu)) ? void 0 : s.associateElement) || o.call(s, this)));
    }
    connectedCallback() {
     var e, t, n;
     const i = this.getAttribute(mr.MEDIA_CONTROLLER);
     i && (fu(this, bu, null == (e = this.getRootNode()) ? void 0 : e.getElementById(i)), null == (n = null == (t = Eu(this, bu)) ? void 0 : t.associateElement) || n.call(t, this));
    }
    disconnectedCallback() {
     var e, t;
     null == (t = null == (e = Eu(this, bu)) ? void 0 : e.unassociateElement) || t.call(e, this), fu(this, bu, null);
    }
   }
   (bu = new WeakMap()),
    (yu.shadowRootOptions = { mode: 'open' }),
    (yu.getTemplateHTML = function (e) {
     return '\n    <style>\n      :host {\n        \n        box-sizing: border-box;\n        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        --media-loading-indicator-icon-height: 44px;\n      }\n\n      ::slotted(media-time-range),\n      ::slotted(media-volume-range) {\n        min-height: 100%;\n      }\n\n      ::slotted(media-time-range),\n      ::slotted(media-clip-selector) {\n        flex-grow: 1;\n      }\n\n      ::slotted([role="menu"]) {\n        position: absolute;\n      }\n    </style>\n\n    <slot></slot>\n  ';
    }),
    Zr.customElements.get('media-control-bar') || Zr.customElements.define('media-control-bar', yu);
   var _u,
    Tu = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    Au = (e, t, n) => (Tu(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    ku = (e, t, n, i) => (Tu(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n);
   class wu extends Zr.HTMLElement {
    constructor() {
     if (
      (super(),
      ((e, t, n) => {
       if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
       t instanceof WeakSet ? t.add(e) : t.set(e, n);
      })(this, _u, void 0),
      !this.shadowRoot)
     ) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
     }
    }
    static get observedAttributes() {
     return [mr.MEDIA_CONTROLLER];
    }
    attributeChangedCallback(e, t, n) {
     var i, a, r, s, o;
     e === mr.MEDIA_CONTROLLER && (t && (null == (a = null == (i = Au(this, _u)) ? void 0 : i.unassociateElement) || a.call(i, this), ku(this, _u, null)), n && this.isConnected && (ku(this, _u, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)), null == (o = null == (s = Au(this, _u)) ? void 0 : s.associateElement) || o.call(s, this)));
    }
    connectedCallback() {
     var e, t, n;
     const { style: i } = ms(this.shadowRoot, ':host');
     i.setProperty('display', `var(--media-control-display, var(--${this.localName}-display, inline-flex))`);
     const a = this.getAttribute(mr.MEDIA_CONTROLLER);
     a && (ku(this, _u, null == (e = this.getRootNode()) ? void 0 : e.getElementById(a)), null == (n = null == (t = Au(this, _u)) ? void 0 : t.associateElement) || n.call(t, this));
    }
    disconnectedCallback() {
     var e, t;
     null == (t = null == (e = Au(this, _u)) ? void 0 : e.unassociateElement) || t.call(e, this), ku(this, _u, null);
    }
   }
   (_u = new WeakMap()),
    (wu.shadowRootOptions = { mode: 'open' }),
    (wu.getTemplateHTML = function (e, t = {}) {
     return `\n    <style>\n      :host {\n        font: var(--media-font,\n          var(--media-font-weight, normal)\n          var(--media-font-size, 14px) /\n          var(--media-text-content-height, var(--media-control-height, 24px))\n          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));\n        padding: var(--media-control-padding, 10px);\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        vertical-align: middle;\n        box-sizing: border-box;\n        text-align: center;\n        pointer-events: auto;\n      }\n\n      \n      :host(:focus-visible) {\n        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);\n        outline: 0;\n      }\n\n      \n      :host(:where(:focus)) {\n        box-shadow: none;\n        outline: 0;\n      }\n    </style>\n\n    ${this.getSlotTemplateHTML(e, t)}\n  `;
    }),
    (wu.getSlotTemplateHTML = function (e, t) {
     return '\n    <slot></slot>\n  ';
    }),
    Zr.customElements.get('media-text-display') || Zr.customElements.define('media-text-display', wu);
   var Iu,
    Su = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    Ru = (e, t, n) => (Su(e, t, 'read from private field'), n ? n.call(e) : t.get(e));
   class Cu extends wu {
    constructor() {
     var e, t, n, i, a;
     super(),
      ((e, t, n) => {
       if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
       t instanceof WeakSet ? t.add(e) : t.set(e, n);
      })(this, Iu, void 0),
      (t = this),
      (n = Iu),
      (i = this.shadowRoot.querySelector('slot')),
      Su(t, n, 'write to private field'),
      a ? a.call(t, i) : n.set(t, i),
      (Ru(this, Iu).textContent = Hr(null != (e = this.mediaDuration) ? e : 0));
    }
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_DURATION];
    }
    attributeChangedCallback(e, t, n) {
     e === br.MEDIA_DURATION && (Ru(this, Iu).textContent = Hr(+n)), super.attributeChangedCallback(e, t, n);
    }
    get mediaDuration() {
     return vs(this, br.MEDIA_DURATION);
    }
    set mediaDuration(e) {
     bs(this, br.MEDIA_DURATION, e);
    }
   }
   (Iu = new WeakMap()),
    (Cu.getSlotTemplateHTML = function (e, t) {
     return `\n    <slot>${Hr(t.mediaDuration)}</slot>\n  `;
    }),
    Zr.customElements.get('media-duration-display') || Zr.customElements.define('media-duration-display', Cu);
   const Du = { 2: $r('Network Error'), 3: $r('Decode Error'), 4: $r('Source Not Supported'), 5: $r('Encryption Error') },
    Lu = { 2: $r('A network error caused the media download to fail.'), 3: $r('A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.'), 4: $r('An unsupported error occurred. The server or network failed, or your browser does not support this format.'), 5: $r('The media is encrypted and there are no keys to decrypt it.') },
    Mu = (e) => {
     var t, n;
     return 1 === e.code ? null : { title: null != (t = Du[e.code]) ? t : `Error ${e.code}`, message: null != (n = Lu[e.code]) ? n : e.message };
    };
   var xu,
    Nu = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    };
   function Ou(e) {
    var t;
    const { title: n, message: i } = null != (t = Mu(e)) ? t : {};
    let a = '';
    return n && (a += `<slot name="error-${e.code}-title"><h3>${n}</h3></slot>`), i && (a += `<slot name="error-${e.code}-message"><p>${i}</p></slot>`), a;
   }
   const Pu = [br.MEDIA_ERROR_CODE, br.MEDIA_ERROR_MESSAGE];
   class Uu extends Hd {
    constructor() {
     super(...arguments),
      ((e, t, n) => {
       if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
       t instanceof WeakSet ? t.add(e) : t.set(e, n);
      })(this, xu, null);
    }
    static get observedAttributes() {
     return [...super.observedAttributes, ...Pu];
    }
    formatErrorMessage(e) {
     return this.constructor.formatErrorMessage(e);
    }
    attributeChangedCallback(e, t, n) {
     var i;
     if ((super.attributeChangedCallback(e, t, n), !Pu.includes(e))) return;
     const a = null != (i = this.mediaError) ? i : { code: this.mediaErrorCode, message: this.mediaErrorMessage };
     var r;
     (this.open = (r = a).code && null !== Mu(r)), this.open && ((this.shadowRoot.querySelector('slot').name = `error-${this.mediaErrorCode}`), (this.shadowRoot.querySelector('#content').innerHTML = this.formatErrorMessage(a)));
    }
    get mediaError() {
     return Nu((e = this), (t = xu), 'read from private field'), n ? n.call(e) : t.get(e);
     var e, t, n;
    }
    set mediaError(e) {
     ((e, t, n, i) => {
      Nu(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n);
     })(this, xu, e);
    }
    get mediaErrorCode() {
     return vs(this, 'mediaerrorcode');
    }
    set mediaErrorCode(e) {
     bs(this, 'mediaerrorcode', e);
    }
    get mediaErrorMessage() {
     return fs(this, 'mediaerrormessage');
    }
    set mediaErrorMessage(e) {
     ys(this, 'mediaerrormessage', e);
    }
   }
   (xu = new WeakMap()),
    (Uu.getSlotTemplateHTML = function (e) {
     return `\n    <style>\n      :host {\n        background: rgb(20 20 30 / .8);\n      }\n\n      #content {\n        display: block;\n        padding: 1.2em 1.5em;\n      }\n\n      h3,\n      p {\n        margin-block: 0 .3em;\n      }\n    </style>\n    <slot name="error-${e.mediaerrorcode}" id="content">\n      ${Ou({ code: +e.mediaerrorcode, message: e.mediaerrormessage })}\n    </slot>\n  `;
    }),
    (Uu.formatErrorMessage = Ou),
    Zr.customElements.get('media-error-dialog') || Zr.customElements.define('media-error-dialog', Uu);
   var Hu = Uu;
   const Wu = (e) => {
    const t = e.mediaIsFullscreen ? $r('exit fullscreen mode') : $r('enter fullscreen mode');
    e.setAttribute('aria-label', t);
   };
   class Bu extends sd {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_IS_FULLSCREEN, br.MEDIA_FULLSCREEN_UNAVAILABLE];
    }
    connectedCallback() {
     super.connectedCallback(), Wu(this);
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_IS_FULLSCREEN && Wu(this);
    }
    get mediaFullscreenUnavailable() {
     return fs(this, br.MEDIA_FULLSCREEN_UNAVAILABLE);
    }
    set mediaFullscreenUnavailable(e) {
     ys(this, br.MEDIA_FULLSCREEN_UNAVAILABLE, e);
    }
    get mediaIsFullscreen() {
     return gs(this, br.MEDIA_IS_FULLSCREEN);
    }
    set mediaIsFullscreen(e) {
     Es(this, br.MEDIA_IS_FULLSCREEN, e);
    }
    handleClick() {
     const e = this.mediaIsFullscreen ? hr.MEDIA_EXIT_FULLSCREEN_REQUEST : hr.MEDIA_ENTER_FULLSCREEN_REQUEST;
     this.dispatchEvent(new Zr.CustomEvent(e, { composed: !0, bubbles: !0 }));
    }
   }
   (Bu.getSlotTemplateHTML = function (e) {
    return `\n    <style>\n      :host([${br.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {\n        display: none !important;\n      }\n\n      \n      :host(:not([${br.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {\n        display: none !important;\n      }\n\n      :host([${br.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],\n      :host(:not([${br.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>\n</svg></slot>\n      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>\n</svg></slot>\n    </slot>\n  `;
   }),
    (Bu.getTooltipContentHTML = function () {
     return `\n    <slot name="tooltip-enter">${$r('Enter fullscreen mode')}</slot>\n    <slot name="tooltip-exit">${$r('Exit fullscreen mode')}</slot>\n  `;
    }),
    Zr.customElements.get('media-fullscreen-button') || Zr.customElements.define('media-fullscreen-button', Bu);
   const { MEDIA_TIME_IS_LIVE: Vu, MEDIA_PAUSED: $u } = br,
    { MEDIA_SEEK_TO_LIVE_REQUEST: qu, MEDIA_PLAY_REQUEST: Ku } = hr;
   const Fu = (e) => {
    const t = e.mediaPaused || !e.mediaTimeIsLive,
     n = $r(t ? 'seek to live' : 'playing live');
    e.setAttribute('aria-label', n), t ? e.removeAttribute('aria-disabled') : e.setAttribute('aria-disabled', 'true');
   };
   class Yu extends sd {
    static get observedAttributes() {
     return [...super.observedAttributes, Vu, $u];
    }
    connectedCallback() {
     super.connectedCallback(), Fu(this);
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), Fu(this);
    }
    get mediaPaused() {
     return gs(this, br.MEDIA_PAUSED);
    }
    set mediaPaused(e) {
     Es(this, br.MEDIA_PAUSED, e);
    }
    get mediaTimeIsLive() {
     return gs(this, br.MEDIA_TIME_IS_LIVE);
    }
    set mediaTimeIsLive(e) {
     Es(this, br.MEDIA_TIME_IS_LIVE, e);
    }
    handleClick() {
     (!this.mediaPaused && this.mediaTimeIsLive) || (this.dispatchEvent(new Zr.CustomEvent(qu, { composed: !0, bubbles: !0 })), this.hasAttribute($u) && this.dispatchEvent(new Zr.CustomEvent(Ku, { composed: !0, bubbles: !0 })));
    }
   }
   (Yu.getSlotTemplateHTML = function (e) {
    return `\n    <style>\n      :host { --media-tooltip-display: none; }\n      \n      slot[name=indicator] > *,\n      :host ::slotted([slot=indicator]) {\n        \n        min-width: auto;\n        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));\n        color: var(--media-live-button-icon-color, rgb(140, 140, 140));\n      }\n\n      :host([${Vu}]:not([${$u}])) slot[name=indicator] > *,\n      :host([${Vu}]:not([${$u}])) ::slotted([slot=indicator]) {\n        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));\n        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));\n      }\n\n      :host([${Vu}]:not([${$u}])) {\n        cursor: var(--media-cursor, not-allowed);\n      }\n\n      slot[name=text]{\n        text-transform: uppercase;\n      }\n\n    </style>\n\n    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>\n    \n    <slot name="spacer">&nbsp;</slot><slot name="text">${$r('live')}</slot>\n  `;
   }),
    Zr.customElements.get('media-live-button') || Zr.customElements.define('media-live-button', Yu);
   var ju,
    Gu,
    Qu = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    Zu = (e, t, n) => (Qu(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    zu = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    Xu = (e, t, n, i) => (Qu(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n);
   const Ju = 'loadingdelay',
    ec = 'noautohide';
   class tc extends Zr.HTMLElement {
    constructor() {
     if ((super(), zu(this, ju, void 0), zu(this, Gu, 500), !this.shadowRoot)) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
     }
    }
    static get observedAttributes() {
     return [mr.MEDIA_CONTROLLER, br.MEDIA_PAUSED, br.MEDIA_LOADING, Ju];
    }
    attributeChangedCallback(e, t, n) {
     var i, a, r, s, o;
     e === Ju && t !== n ? (this.loadingDelay = Number(n)) : e === mr.MEDIA_CONTROLLER && (t && (null == (a = null == (i = Zu(this, ju)) ? void 0 : i.unassociateElement) || a.call(i, this), Xu(this, ju, null)), n && this.isConnected && (Xu(this, ju, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)), null == (o = null == (s = Zu(this, ju)) ? void 0 : s.associateElement) || o.call(s, this)));
    }
    connectedCallback() {
     var e, t, n;
     const i = this.getAttribute(mr.MEDIA_CONTROLLER);
     i && (Xu(this, ju, null == (e = this.getRootNode()) ? void 0 : e.getElementById(i)), null == (n = null == (t = Zu(this, ju)) ? void 0 : t.associateElement) || n.call(t, this));
    }
    disconnectedCallback() {
     var e, t;
     null == (t = null == (e = Zu(this, ju)) ? void 0 : e.unassociateElement) || t.call(e, this), Xu(this, ju, null);
    }
    get loadingDelay() {
     return Zu(this, Gu);
    }
    set loadingDelay(e) {
     Xu(this, Gu, e);
     const { style: t } = ms(this.shadowRoot, ':host');
     t.setProperty('--_loading-indicator-delay', `var(--media-loading-indicator-transition-delay, ${e}ms)`);
    }
    get mediaPaused() {
     return gs(this, br.MEDIA_PAUSED);
    }
    set mediaPaused(e) {
     Es(this, br.MEDIA_PAUSED, e);
    }
    get mediaLoading() {
     return gs(this, br.MEDIA_LOADING);
    }
    set mediaLoading(e) {
     Es(this, br.MEDIA_LOADING, e);
    }
    get mediaController() {
     return fs(this, mr.MEDIA_CONTROLLER);
    }
    set mediaController(e) {
     ys(this, mr.MEDIA_CONTROLLER, e);
    }
    get noAutohide() {
     return gs(this, ec);
    }
    set noAutohide(e) {
     Es(this, ec, e);
    }
   }
   (ju = new WeakMap()),
    (Gu = new WeakMap()),
    (tc.shadowRootOptions = { mode: 'open' }),
    (tc.getTemplateHTML = function (e) {
     return `\n    <style>\n      :host {\n        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));\n        vertical-align: middle;\n        box-sizing: border-box;\n        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);\n      }\n\n      #status {\n        color: rgba(0,0,0,0);\n        width: 0px;\n        height: 0px;\n      }\n\n      :host slot[name=icon] > *,\n      :host ::slotted([slot=icon]) {\n        opacity: var(--media-loading-indicator-opacity, 0);\n        transition: opacity 0.15s;\n      }\n\n      :host([${br.MEDIA_LOADING}]:not([${br.MEDIA_PAUSED}])) slot[name=icon] > *,\n      :host([${br.MEDIA_LOADING}]:not([${br.MEDIA_PAUSED}])) ::slotted([slot=icon]) {\n        opacity: var(--media-loading-indicator-opacity, 1);\n        transition: opacity 0.15s var(--_loading-indicator-delay);\n      }\n\n      :host #status {\n        visibility: var(--media-loading-indicator-opacity, hidden);\n        transition: visibility 0.15s;\n      }\n\n      :host([${br.MEDIA_LOADING}]:not([${br.MEDIA_PAUSED}])) #status {\n        visibility: var(--media-loading-indicator-opacity, visible);\n        transition: visibility 0.15s var(--_loading-indicator-delay);\n      }\n\n      svg, img, ::slotted(svg), ::slotted(img) {\n        width: var(--media-loading-indicator-icon-width);\n        height: var(--media-loading-indicator-icon-height, 100px);\n        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));\n        vertical-align: middle;\n      }\n    </style>\n\n    <slot name="icon">\n<svg aria-hidden="true" viewBox="0 0 100 100">\n  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">\n    <animateTransform\n       attributeName="transform"\n       attributeType="XML"\n       type="rotate"\n       dur="1s"\n       from="0 50 50"\n       to="360 50 50"\n       repeatCount="indefinite" />\n  </path>\n</svg>\n</slot>\n    <div id="status" role="status" aria-live="polite">${$r('media loading')}</div>\n  `;
    }),
    Zr.customElements.get('media-loading-indicator') || Zr.customElements.define('media-loading-indicator', tc);
   const nc = '<svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>\n</svg>';
   const ic = (e) => {
    const t = 'off' === e.mediaVolumeLevel,
     n = $r(t ? 'unmute' : 'mute');
    e.setAttribute('aria-label', n);
   };
   class ac extends sd {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_VOLUME_LEVEL];
    }
    connectedCallback() {
     super.connectedCallback(), ic(this);
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_VOLUME_LEVEL && ic(this);
    }
    get mediaVolumeLevel() {
     return fs(this, br.MEDIA_VOLUME_LEVEL);
    }
    set mediaVolumeLevel(e) {
     ys(this, br.MEDIA_VOLUME_LEVEL, e);
    }
    handleClick() {
     const e = 'off' === this.mediaVolumeLevel ? hr.MEDIA_UNMUTE_REQUEST : hr.MEDIA_MUTE_REQUEST;
     this.dispatchEvent(new Zr.CustomEvent(e, { composed: !0, bubbles: !0 }));
    }
   }
   (ac.getSlotTemplateHTML = function (e) {
    return `\n    <style>\n      :host(:not([${br.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),\n      :host([${br.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {\n        display: none !important;\n      }\n\n      :host([${br.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {\n        display: none !important;\n      }\n\n      :host([${br.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {\n        display: none !important;\n      }\n\n      :host([${br.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {\n        display: none !important;\n      }\n\n      :host(:not([${br.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],\n      :host([${br.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="off"><svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>\n</svg></slot>\n      <slot name="low">${nc}</slot>\n      <slot name="medium">${nc}</slot>\n      <slot name="high"><svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>\n</svg></slot>\n    </slot>\n  `;
   }),
    (ac.getTooltipContentHTML = function () {
     return `\n    <slot name="tooltip-mute">${$r('Mute')}</slot>\n    <slot name="tooltip-unmute">${$r('Unmute')}</slot>\n  `;
    }),
    Zr.customElements.get('media-mute-button') || Zr.customElements.define('media-mute-button', ac);
   const rc = '<svg aria-hidden="true" viewBox="0 0 28 24">\n  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>\n</svg>';
   const sc = (e) => {
    const t = e.mediaIsPip ? $r('exit picture in picture mode') : $r('enter picture in picture mode');
    e.setAttribute('aria-label', t);
   };
   class oc extends sd {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_IS_PIP, br.MEDIA_PIP_UNAVAILABLE];
    }
    connectedCallback() {
     super.connectedCallback(), sc(this);
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_IS_PIP && sc(this);
    }
    get mediaPipUnavailable() {
     return fs(this, br.MEDIA_PIP_UNAVAILABLE);
    }
    set mediaPipUnavailable(e) {
     ys(this, br.MEDIA_PIP_UNAVAILABLE, e);
    }
    get mediaIsPip() {
     return gs(this, br.MEDIA_IS_PIP);
    }
    set mediaIsPip(e) {
     Es(this, br.MEDIA_IS_PIP, e);
    }
    handleClick() {
     const e = this.mediaIsPip ? hr.MEDIA_EXIT_PIP_REQUEST : hr.MEDIA_ENTER_PIP_REQUEST;
     this.dispatchEvent(new Zr.CustomEvent(e, { composed: !0, bubbles: !0 }));
    }
   }
   (oc.getSlotTemplateHTML = function (e) {
    return `\n    <style>\n      :host([${br.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {\n        display: none !important;\n      }\n\n      :host(:not([${br.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {\n        display: none !important;\n      }\n\n      :host([${br.MEDIA_IS_PIP}]) slot[name=tooltip-enter],\n      :host(:not([${br.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="enter">${rc}</slot>\n      <slot name="exit">${rc}</slot>\n    </slot>\n  `;
   }),
    (oc.getTooltipContentHTML = function () {
     return `\n    <slot name="tooltip-enter">${$r('Enter picture in picture mode')}</slot>\n    <slot name="tooltip-exit">${$r('Exit picture in picture mode')}</slot>\n  `;
    }),
    Zr.customElements.get('media-pip-button') || Zr.customElements.define('media-pip-button', oc);
   var lc,
    dc = (e, t, n) => (
     ((e, t, n) => {
      if (!t.has(e)) throw TypeError('Cannot ' + n);
     })(e, t, 'read from private field'),
     n ? n.call(e) : t.get(e)
    );
   const uc = 'rates',
    cc = [1, 1.2, 1.5, 1.7, 2];
   class hc extends sd {
    constructor() {
     var e;
     super(),
      ((e, t, n) => {
       if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
       t instanceof WeakSet ? t.add(e) : t.set(e, n);
      })(this, lc, new mo(this, uc, { defaultValue: cc })),
      (this.container = this.shadowRoot.querySelector('slot[name="icon"]')),
      (this.container.innerHTML = `${null != (e = this.mediaPlaybackRate) ? e : 1}x`);
    }
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_PLAYBACK_RATE, uc];
    }
    attributeChangedCallback(e, t, n) {
     if ((super.attributeChangedCallback(e, t, n), e === uc && (dc(this, lc).value = n), e === br.MEDIA_PLAYBACK_RATE)) {
      const e = n ? +n : Number.NaN,
       t = Number.isNaN(e) ? 1 : e;
      (this.container.innerHTML = `${t}x`), this.setAttribute('aria-label', $r('Playback rate {playbackRate}', { playbackRate: t }));
     }
    }
    get rates() {
     return dc(this, lc);
    }
    set rates(e) {
     e ? (Array.isArray(e) ? (dc(this, lc).value = e.join(' ')) : 'string' == typeof e && (dc(this, lc).value = e)) : (dc(this, lc).value = '');
    }
    get mediaPlaybackRate() {
     return vs(this, br.MEDIA_PLAYBACK_RATE, 1);
    }
    set mediaPlaybackRate(e) {
     bs(this, br.MEDIA_PLAYBACK_RATE, e);
    }
    handleClick() {
     var e, t;
     const n = Array.from(dc(this, lc).values(), (e) => +e).sort((e, t) => e - t),
      i = null != (t = null != (e = n.find((e) => e > this.mediaPlaybackRate)) ? e : n[0]) ? t : 1,
      a = new Zr.CustomEvent(hr.MEDIA_PLAYBACK_RATE_REQUEST, { composed: !0, bubbles: !0, detail: i });
     this.dispatchEvent(a);
    }
   }
   (lc = new WeakMap()),
    (hc.getSlotTemplateHTML = function (e) {
     return `\n    <style>\n      :host {\n        min-width: 5ch;\n        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));\n      }\n    </style>\n    <slot name="icon">${e.mediaplaybackrate || 1}x</slot>\n  `;
    }),
    (hc.getTooltipContentHTML = function () {
     return $r('Playback rate');
    }),
    Zr.customElements.get('media-playback-rate-button') || Zr.customElements.define('media-playback-rate-button', hc);
   const mc = (e) => {
    const t = e.mediaPaused ? $r('play') : $r('pause');
    e.setAttribute('aria-label', t);
   };
   class pc extends sd {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_PAUSED, br.MEDIA_ENDED];
    }
    connectedCallback() {
     super.connectedCallback(), mc(this);
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_PAUSED && mc(this);
    }
    get mediaPaused() {
     return gs(this, br.MEDIA_PAUSED);
    }
    set mediaPaused(e) {
     Es(this, br.MEDIA_PAUSED, e);
    }
    handleClick() {
     const e = this.mediaPaused ? hr.MEDIA_PLAY_REQUEST : hr.MEDIA_PAUSE_REQUEST;
     this.dispatchEvent(new Zr.CustomEvent(e, { composed: !0, bubbles: !0 }));
    }
   }
   (pc.getSlotTemplateHTML = function (e) {
    return `\n    <style>\n      :host([${br.MEDIA_PAUSED}]) slot[name=pause],\n      :host(:not([${br.MEDIA_PAUSED}])) slot[name=play] {\n        display: none !important;\n      }\n\n      :host([${br.MEDIA_PAUSED}]) slot[name=tooltip-pause],\n      :host(:not([${br.MEDIA_PAUSED}])) slot[name=tooltip-play] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="play"><svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="m6 21 15-9L6 3v18Z"/>\n</svg></slot>\n      <slot name="pause"><svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>\n</svg></slot>\n    </slot>\n  `;
   }),
    (pc.getTooltipContentHTML = function () {
     return `\n    <slot name="tooltip-play">${$r('Play')}</slot>\n    <slot name="tooltip-pause">${$r('Pause')}</slot>\n  `;
    }),
    Zr.customElements.get('media-play-button') || Zr.customElements.define('media-play-button', pc);
   const vc = 'placeholdersrc',
    bc = 'src';
   class gc extends Zr.HTMLElement {
    static get observedAttributes() {
     return [vc, bc];
    }
    constructor() {
     if ((super(), !this.shadowRoot)) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
     }
     this.image = this.shadowRoot.querySelector('#image');
    }
    attributeChangedCallback(e, t, n) {
     e === bc && (null == n ? this.image.removeAttribute(bc) : this.image.setAttribute(bc, n)),
      e === vc &&
       (null == n
        ? this.image.style.removeProperty('background-image')
        : ((e, t) => {
           e.style['background-image'] = `url('${t}')`;
          })(this.image, n));
    }
    get placeholderSrc() {
     return fs(this, vc);
    }
    set placeholderSrc(e) {
     ys(this, bc, e);
    }
    get src() {
     return fs(this, bc);
    }
    set src(e) {
     ys(this, bc, e);
    }
   }
   (gc.shadowRootOptions = { mode: 'open' }),
    (gc.getTemplateHTML = function (e) {
     return '\n    <style>\n      :host {\n        pointer-events: none;\n        display: var(--media-poster-image-display, inline-block);\n        box-sizing: border-box;\n      }\n\n      img {\n        max-width: 100%;\n        max-height: 100%;\n        min-width: 100%;\n        min-height: 100%;\n        background-repeat: no-repeat;\n        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));\n        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));\n        object-fit: var(--media-object-fit, contain);\n        object-position: var(--media-object-position, center);\n      }\n    </style>\n\n    <img part="poster img" aria-hidden="true" id="image"/>\n  ';
    }),
    Zr.customElements.get('media-poster-image') || Zr.customElements.define('media-poster-image', gc);
   var Ec,
    fc = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    };
   class yc extends wu {
    constructor() {
     var e, t, n, i;
     super(),
      ((e, t, n) => {
       if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
       t instanceof WeakSet ? t.add(e) : t.set(e, n);
      })(this, Ec, void 0),
      (e = this),
      (t = Ec),
      (n = this.shadowRoot.querySelector('slot')),
      fc(e, t, 'write to private field'),
      i ? i.call(e, n) : t.set(e, n);
    }
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_PREVIEW_CHAPTER];
    }
    attributeChangedCallback(e, t, n) {
     var i, a, r;
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_PREVIEW_CHAPTER && n !== t && null != n && ((((i = this), (a = Ec), fc(i, a, 'read from private field'), r ? r.call(i) : a.get(i)).textContent = n), '' !== n ? this.setAttribute('aria-valuetext', `chapter: ${n}`) : this.removeAttribute('aria-valuetext'));
    }
    get mediaPreviewChapter() {
     return fs(this, br.MEDIA_PREVIEW_CHAPTER);
    }
    set mediaPreviewChapter(e) {
     ys(this, br.MEDIA_PREVIEW_CHAPTER, e);
    }
   }
   (Ec = new WeakMap()), Zr.customElements.get('media-preview-chapter-display') || Zr.customElements.define('media-preview-chapter-display', yc);
   var _c,
    Tc = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    Ac = (e, t, n) => (Tc(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    kc = (e, t, n, i) => (Tc(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n);
   class wc extends Zr.HTMLElement {
    constructor() {
     if (
      (super(),
      ((e, t, n) => {
       if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
       t instanceof WeakSet ? t.add(e) : t.set(e, n);
      })(this, _c, void 0),
      !this.shadowRoot)
     ) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
     }
    }
    static get observedAttributes() {
     return [mr.MEDIA_CONTROLLER, br.MEDIA_PREVIEW_IMAGE, br.MEDIA_PREVIEW_COORDS];
    }
    connectedCallback() {
     var e, t, n;
     const i = this.getAttribute(mr.MEDIA_CONTROLLER);
     i && (kc(this, _c, null == (e = this.getRootNode()) ? void 0 : e.getElementById(i)), null == (n = null == (t = Ac(this, _c)) ? void 0 : t.associateElement) || n.call(t, this));
    }
    disconnectedCallback() {
     var e, t;
     null == (t = null == (e = Ac(this, _c)) ? void 0 : e.unassociateElement) || t.call(e, this), kc(this, _c, null);
    }
    attributeChangedCallback(e, t, n) {
     var i, a, r, s, o;
     [br.MEDIA_PREVIEW_IMAGE, br.MEDIA_PREVIEW_COORDS].includes(e) && this.update(), e === mr.MEDIA_CONTROLLER && (t && (null == (a = null == (i = Ac(this, _c)) ? void 0 : i.unassociateElement) || a.call(i, this), kc(this, _c, null)), n && this.isConnected && (kc(this, _c, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)), null == (o = null == (s = Ac(this, _c)) ? void 0 : s.associateElement) || o.call(s, this)));
    }
    get mediaPreviewImage() {
     return fs(this, br.MEDIA_PREVIEW_IMAGE);
    }
    set mediaPreviewImage(e) {
     ys(this, br.MEDIA_PREVIEW_IMAGE, e);
    }
    get mediaPreviewCoords() {
     const e = this.getAttribute(br.MEDIA_PREVIEW_COORDS);
     if (e) return e.split(/\s+/).map((e) => +e);
    }
    set mediaPreviewCoords(e) {
     e ? this.setAttribute(br.MEDIA_PREVIEW_COORDS, e.join(' ')) : this.removeAttribute(br.MEDIA_PREVIEW_COORDS);
    }
    update() {
     const e = this.mediaPreviewCoords,
      t = this.mediaPreviewImage;
     if (!e || !t) return;
     const [n, i, a, r] = e,
      s = t.split('#')[0],
      o = getComputedStyle(this),
      { maxWidth: l, maxHeight: d, minWidth: u, minHeight: c } = o,
      h = Math.min(parseInt(l) / a, parseInt(d) / r),
      m = Math.max(parseInt(u) / a, parseInt(c) / r),
      p = h < 1,
      v = p ? h : m > 1 ? m : 1,
      { style: b } = ms(this.shadowRoot, ':host'),
      g = ms(this.shadowRoot, 'img').style,
      E = this.shadowRoot.querySelector('img'),
      f = p ? 'min' : 'max';
     b.setProperty(`${f}-width`, 'initial', 'important'), b.setProperty(`${f}-height`, 'initial', 'important'), (b.width = a * v + 'px'), (b.height = r * v + 'px');
     const y = () => {
      (g.width = this.imgWidth * v + 'px'), (g.height = this.imgHeight * v + 'px'), (g.display = 'block');
     };
     E.src !== s &&
      ((E.onload = () => {
       (this.imgWidth = E.naturalWidth), (this.imgHeight = E.naturalHeight), y();
      }),
      (E.src = s),
      y()),
      y(),
      (g.transform = `translate(-${n * v}px, -${i * v}px)`);
    }
   }
   (_c = new WeakMap()),
    (wc.shadowRootOptions = { mode: 'open' }),
    (wc.getTemplateHTML = function (e) {
     return '\n    <style>\n      :host {\n        box-sizing: border-box;\n        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));\n        overflow: hidden;\n      }\n\n      img {\n        display: none;\n        position: relative;\n      }\n    </style>\n    <img crossorigin loading="eager" decoding="async">\n  ';
    }),
    Zr.customElements.get('media-preview-thumbnail') || Zr.customElements.define('media-preview-thumbnail', wc);
   var Ic,
    Sc = wc,
    Rc = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    Cc = (e, t, n) => (Rc(e, t, 'read from private field'), n ? n.call(e) : t.get(e));
   class Dc extends wu {
    constructor() {
     var e, t, n, i;
     super(),
      ((e, t, n) => {
       if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
       t instanceof WeakSet ? t.add(e) : t.set(e, n);
      })(this, Ic, void 0),
      (e = this),
      (t = Ic),
      (n = this.shadowRoot.querySelector('slot')),
      Rc(e, t, 'write to private field'),
      i ? i.call(e, n) : t.set(e, n),
      (Cc(this, Ic).textContent = Hr(0));
    }
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_PREVIEW_TIME];
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_PREVIEW_TIME && null != n && (Cc(this, Ic).textContent = Hr(parseFloat(n)));
    }
    get mediaPreviewTime() {
     return vs(this, br.MEDIA_PREVIEW_TIME);
    }
    set mediaPreviewTime(e) {
     bs(this, br.MEDIA_PREVIEW_TIME, e);
    }
   }
   (Ic = new WeakMap()), Zr.customElements.get('media-preview-time-display') || Zr.customElements.define('media-preview-time-display', Dc);
   const Lc = 'seekoffset';
   class Mc extends sd {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_CURRENT_TIME, Lc];
    }
    connectedCallback() {
     super.connectedCallback(), (this.seekOffset = vs(this, Lc, 30));
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === Lc && (this.seekOffset = vs(this, Lc, 30));
    }
    get seekOffset() {
     return vs(this, Lc, 30);
    }
    set seekOffset(e) {
     bs(this, Lc, e), this.setAttribute('aria-label', $r('seek back {seekOffset} seconds', { seekOffset: this.seekOffset })), ss(os(this, 'icon'), this.seekOffset);
    }
    get mediaCurrentTime() {
     return vs(this, br.MEDIA_CURRENT_TIME, 0);
    }
    set mediaCurrentTime(e) {
     bs(this, br.MEDIA_CURRENT_TIME, e);
    }
    handleClick() {
     const e = Math.max(this.mediaCurrentTime - this.seekOffset, 0),
      t = new Zr.CustomEvent(hr.MEDIA_SEEK_REQUEST, { composed: !0, bubbles: !0, detail: e });
     this.dispatchEvent(t);
    }
   }
   (Mc.getSlotTemplateHTML = function (e, t) {
    return `\n    <slot name="icon">${((n = t.seekOffset), `\n  <svg aria-hidden="true" viewBox="0 0 20 24">\n    <defs>\n      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>\n    </defs>\n    <text class="text value" transform="translate(2.18 19.87)">${n}</text>\n    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>\n  </svg>`)}</slot>\n  `;
    var n;
   }),
    (Mc.getTooltipContentHTML = function () {
     return $r('Seek backward');
    }),
    Zr.customElements.get('media-seek-backward-button') || Zr.customElements.define('media-seek-backward-button', Mc);
   const xc = 'seekoffset';
   class Nc extends sd {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_CURRENT_TIME, xc];
    }
    connectedCallback() {
     super.connectedCallback(), (this.seekOffset = vs(this, xc, 30));
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === xc && (this.seekOffset = vs(this, xc, 30));
    }
    get seekOffset() {
     return vs(this, xc, 30);
    }
    set seekOffset(e) {
     bs(this, xc, e), this.setAttribute('aria-label', $r('seek forward {seekOffset} seconds', { seekOffset: this.seekOffset })), ss(os(this, 'icon'), this.seekOffset);
    }
    get mediaCurrentTime() {
     return vs(this, br.MEDIA_CURRENT_TIME, 0);
    }
    set mediaCurrentTime(e) {
     bs(this, br.MEDIA_CURRENT_TIME, e);
    }
    handleClick() {
     const e = this.mediaCurrentTime + this.seekOffset,
      t = new Zr.CustomEvent(hr.MEDIA_SEEK_REQUEST, { composed: !0, bubbles: !0, detail: e });
     this.dispatchEvent(t);
    }
   }
   (Nc.getSlotTemplateHTML = function (e, t) {
    return `\n    <slot name="icon">${((n = t.seekOffset), `\n  <svg aria-hidden="true" viewBox="0 0 20 24">\n    <defs>\n      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>\n    </defs>\n    <text class="text value" transform="translate(8.9 19.87)">${n}</text>\n    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>\n  </svg>`)}</slot>\n  `;
    var n;
   }),
    (Nc.getTooltipContentHTML = function () {
     return $r('Seek forward');
    }),
    Zr.customElements.get('media-seek-forward-button') || Zr.customElements.define('media-seek-forward-button', Nc);
   var Oc,
    Pc = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    Uc = (e, t, n) => (Pc(e, t, 'read from private field'), n ? n.call(e) : t.get(e));
   const Hc = { REMAINING: 'remaining', SHOW_DURATION: 'showduration', NO_TOGGLE: 'notoggle' },
    Wc = [...Object.values(Hc), br.MEDIA_CURRENT_TIME, br.MEDIA_DURATION, br.MEDIA_SEEKABLE],
    Bc = ['Enter', ' '],
    Vc = (e, { timesSep: t = '&nbsp;/&nbsp;' } = {}) => {
     var n, i;
     const a = null != (n = e.mediaCurrentTime) ? n : 0,
      [, r] = null != (i = e.mediaSeekable) ? i : [];
     let s = 0;
     Number.isFinite(e.mediaDuration) ? (s = e.mediaDuration) : Number.isFinite(r) && (s = r);
     const o = e.remaining ? Hr(0 - (s - a)) : Hr(a);
     return e.showDuration ? `${o}${t}${Hr(s)}` : o;
    };
   class $c extends wu {
    constructor() {
     var e, t, n, i;
     super(),
      ((e, t, n) => {
       if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
       t instanceof WeakSet ? t.add(e) : t.set(e, n);
      })(this, Oc, void 0),
      (e = this),
      (t = Oc),
      (n = this.shadowRoot.querySelector('slot')),
      Pc(e, t, 'write to private field'),
      i ? i.call(e, n) : t.set(e, n),
      (Uc(this, Oc).innerHTML = `${Vc(this)}`);
    }
    static get observedAttributes() {
     return [...super.observedAttributes, ...Wc, 'disabled'];
    }
    connectedCallback() {
     const { style: e } = ms(this.shadowRoot, ':host(:hover:not([notoggle]))');
     e.setProperty('cursor', 'var(--media-cursor, pointer)'), e.setProperty('background', 'var(--media-control-hover-background, rgba(50 50 70 / .7))'), this.hasAttribute('disabled') || this.enable(), this.setAttribute('role', 'progressbar'), this.setAttribute('aria-label', $r('playback time'));
     const t = (e) => {
      const { key: n } = e;
      Bc.includes(n) ? this.toggleTimeDisplay() : this.removeEventListener('keyup', t);
     };
     this.addEventListener('keydown', (e) => {
      const { metaKey: n, altKey: i, key: a } = e;
      n || i || !Bc.includes(a) ? this.removeEventListener('keyup', t) : this.addEventListener('keyup', t);
     }),
      this.addEventListener('click', this.toggleTimeDisplay),
      super.connectedCallback();
    }
    toggleTimeDisplay() {
     this.noToggle || (this.hasAttribute('remaining') ? this.removeAttribute('remaining') : this.setAttribute('remaining', ''));
    }
    disconnectedCallback() {
     this.disable(), super.disconnectedCallback();
    }
    attributeChangedCallback(e, t, n) {
     Wc.includes(e) ? this.update() : 'disabled' === e && n !== t && (null == n ? this.enable() : this.disable()), super.attributeChangedCallback(e, t, n);
    }
    enable() {
     this.tabIndex = 0;
    }
    disable() {
     this.tabIndex = -1;
    }
    get remaining() {
     return gs(this, Hc.REMAINING);
    }
    set remaining(e) {
     Es(this, Hc.REMAINING, e);
    }
    get showDuration() {
     return gs(this, Hc.SHOW_DURATION);
    }
    set showDuration(e) {
     Es(this, Hc.SHOW_DURATION, e);
    }
    get noToggle() {
     return gs(this, Hc.NO_TOGGLE);
    }
    set noToggle(e) {
     Es(this, Hc.NO_TOGGLE, e);
    }
    get mediaDuration() {
     return vs(this, br.MEDIA_DURATION);
    }
    set mediaDuration(e) {
     bs(this, br.MEDIA_DURATION, e);
    }
    get mediaCurrentTime() {
     return vs(this, br.MEDIA_CURRENT_TIME);
    }
    set mediaCurrentTime(e) {
     bs(this, br.MEDIA_CURRENT_TIME, e);
    }
    get mediaSeekable() {
     const e = this.getAttribute(br.MEDIA_SEEKABLE);
     if (e) return e.split(':').map((e) => +e);
    }
    set mediaSeekable(e) {
     null != e ? this.setAttribute(br.MEDIA_SEEKABLE, e.join(':')) : this.removeAttribute(br.MEDIA_SEEKABLE);
    }
    update() {
     const e = Vc(this);
     ((e) => {
      var t;
      const n = e.mediaCurrentTime,
       [, i] = null != (t = e.mediaSeekable) ? t : [];
      let a = null;
      if ((Number.isFinite(e.mediaDuration) ? (a = e.mediaDuration) : Number.isFinite(i) && (a = i), null == n || null === a)) return void e.setAttribute('aria-valuetext', 'video not loaded, unknown time.');
      const r = e.remaining ? Ur(0 - (a - n)) : Ur(n);
      if (!e.showDuration) return void e.setAttribute('aria-valuetext', r);
      const s = `${r} of ${Ur(a)}`;
      e.setAttribute('aria-valuetext', s);
     })(this),
      e !== Uc(this, Oc).innerHTML && (Uc(this, Oc).innerHTML = e);
    }
   }
   (Oc = new WeakMap()),
    ($c.getSlotTemplateHTML = function (e, t) {
     return `\n    <slot>${Vc(t)}</slot>\n  `;
    }),
    Zr.customElements.get('media-time-display') || Zr.customElements.define('media-time-display', $c);
   var qc,
    Kc,
    Fc,
    Yc,
    jc,
    Gc,
    Qc,
    Zc,
    zc,
    Xc,
    Jc = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    eh = (e, t, n) => (Jc(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    th = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    nh = (e, t, n, i) => (Jc(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n);
   class ih {
    constructor(e, t, n) {
     th(this, qc, void 0),
      th(this, Kc, void 0),
      th(this, Fc, void 0),
      th(this, Yc, void 0),
      th(this, jc, void 0),
      th(this, Gc, void 0),
      th(this, Qc, void 0),
      th(this, Zc, void 0),
      th(this, zc, 0),
      th(this, Xc, (e = performance.now()) => {
       nh(this, zc, requestAnimationFrame(eh(this, Xc))), nh(this, Yc, performance.now() - eh(this, Fc));
       const t = 1e3 / this.fps;
       if (eh(this, Yc) > t) {
        nh(this, Fc, e - (eh(this, Yc) % t));
        const s =
          1e3 /
          ((e - eh(this, Kc)) /
           ++((n = this),
           (i = jc),
           {
            set _(e) {
             nh(n, i, e, a);
            },
            get _() {
             return eh(n, i, r);
            },
           })._),
         o = (e - eh(this, Gc)) / 1e3 / this.duration;
        let l = eh(this, Qc) + o * this.playbackRate;
        l - eh(this, qc).valueAsNumber > 0 ? nh(this, Zc, this.playbackRate / this.duration / s) : (nh(this, Zc, 0.995 * eh(this, Zc)), (l = eh(this, qc).valueAsNumber + eh(this, Zc))), this.callback(l);
       }
       var n, i, a, r;
      }),
      nh(this, qc, e),
      (this.callback = t),
      (this.fps = n);
    }
    start() {
     0 === eh(this, zc) && (nh(this, Fc, performance.now()), nh(this, Kc, eh(this, Fc)), nh(this, jc, 0), eh(this, Xc).call(this));
    }
    stop() {
     0 !== eh(this, zc) && (cancelAnimationFrame(eh(this, zc)), nh(this, zc, 0));
    }
    update({ start: e, duration: t, playbackRate: n }) {
     const i = e - eh(this, qc).valueAsNumber,
      a = Math.abs(t - this.duration);
     (i > 0 || i < -0.03 || a >= 0.5) && this.callback(e), nh(this, Qc, e), nh(this, Gc, performance.now()), (this.duration = t), (this.playbackRate = n);
    }
   }
   (qc = new WeakMap()), (Kc = new WeakMap()), (Fc = new WeakMap()), (Yc = new WeakMap()), (jc = new WeakMap()), (Gc = new WeakMap()), (Qc = new WeakMap()), (Zc = new WeakMap()), (zc = new WeakMap()), (Xc = new WeakMap());
   var ah,
    rh,
    sh,
    oh,
    lh,
    dh,
    uh,
    ch,
    hh,
    mh,
    ph,
    vh,
    bh,
    gh,
    Eh,
    fh,
    yh,
    _h,
    Th,
    Ah,
    kh,
    wh,
    Ih,
    Sh,
    Rh,
    Ch,
    Dh = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    Lh = (e, t, n) => (Dh(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    Mh = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    xh = (e, t, n, i) => (Dh(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    Nh = (e, t, n) => (Dh(e, t, 'access private method'), n);
   const Oh = (e, t = e.mediaCurrentTime) => {
     const n = Number.isFinite(e.mediaSeekableStart) ? e.mediaSeekableStart : 0,
      i = Number.isFinite(e.mediaDuration) ? e.mediaDuration : e.mediaSeekableEnd;
     if (Number.isNaN(i)) return 0;
     const a = (t - n) / (i - n);
     return Math.max(0, Math.min(a, 1));
    },
    Ph = (e, t = e.range.valueAsNumber) => {
     const n = Number.isFinite(e.mediaSeekableStart) ? e.mediaSeekableStart : 0,
      i = Number.isFinite(e.mediaDuration) ? e.mediaDuration : e.mediaSeekableEnd;
     return Number.isNaN(i) ? 0 : t * (i - n) + n;
    };
   class Uh extends vu {
    constructor() {
     super(),
      Mh(this, mh),
      Mh(this, vh),
      Mh(this, Eh),
      Mh(this, yh),
      Mh(this, Th),
      Mh(this, kh),
      Mh(this, Ih),
      Mh(this, Rh),
      Mh(this, ah, void 0),
      Mh(this, rh, void 0),
      Mh(this, sh, void 0),
      Mh(this, oh, void 0),
      Mh(this, lh, void 0),
      Mh(this, dh, void 0),
      Mh(this, uh, void 0),
      Mh(this, ch, void 0),
      Mh(this, hh, void 0),
      Mh(this, gh, (e) => {
       this.dragging || (xr(e) && (this.range.valueAsNumber = e), this.updateBar());
      });
     this.shadowRoot.querySelector('#track').insertAdjacentHTML('afterbegin', '<div id="buffered" part="buffered"></div>'), xh(this, sh, this.shadowRoot.querySelectorAll('[part~="box"]')), xh(this, lh, this.shadowRoot.querySelector('[part~="preview-box"]')), xh(this, dh, this.shadowRoot.querySelector('[part~="current-box"]'));
     const e = getComputedStyle(this);
     xh(this, uh, parseInt(e.getPropertyValue('--media-box-padding-left'))), xh(this, ch, parseInt(e.getPropertyValue('--media-box-padding-right'))), xh(this, rh, new ih(this.range, Lh(this, gh), 60));
    }
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_PAUSED, br.MEDIA_DURATION, br.MEDIA_SEEKABLE, br.MEDIA_CURRENT_TIME, br.MEDIA_PREVIEW_IMAGE, br.MEDIA_PREVIEW_TIME, br.MEDIA_PREVIEW_CHAPTER, br.MEDIA_BUFFERED, br.MEDIA_PLAYBACK_RATE, br.MEDIA_LOADING, br.MEDIA_ENDED];
    }
    connectedCallback() {
     var e;
     super.connectedCallback(), this.range.setAttribute('aria-label', $r('seek')), Nh(this, mh, ph).call(this), xh(this, ah, this.getRootNode()), null == (e = Lh(this, ah)) || e.addEventListener('transitionstart', this);
    }
    disconnectedCallback() {
     var e;
     super.disconnectedCallback(), Nh(this, mh, ph).call(this), null == (e = Lh(this, ah)) || e.removeEventListener('transitionstart', this), xh(this, ah, null);
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n),
      t != n &&
       (e === br.MEDIA_CURRENT_TIME || e === br.MEDIA_PAUSED || e === br.MEDIA_ENDED || e === br.MEDIA_LOADING || e === br.MEDIA_DURATION || e === br.MEDIA_SEEKABLE
        ? (Lh(this, rh).update({ start: Oh(this), duration: this.mediaSeekableEnd - this.mediaSeekableStart, playbackRate: this.mediaPlaybackRate }),
          Nh(this, mh, ph).call(this),
          ((e) => {
           const t = e.range,
            n = Ur(+Ph(e)),
            i = Ur(+e.mediaSeekableEnd),
            a = n && i ? `${n} of ${i}` : 'video not loaded, unknown time.';
           t.setAttribute('aria-valuetext', a);
          })(this))
        : e === br.MEDIA_BUFFERED && this.updateBufferedBar(),
       (e !== br.MEDIA_DURATION && e !== br.MEDIA_SEEKABLE) || ((this.mediaChaptersCues = Lh(this, hh)), this.updateBar()));
    }
    get mediaChaptersCues() {
     return Lh(this, hh);
    }
    set mediaChaptersCues(e) {
     var t;
     xh(this, hh, e), this.updateSegments(null == (t = Lh(this, hh)) ? void 0 : t.map((e) => ({ start: Oh(this, e.startTime), end: Oh(this, e.endTime) })));
    }
    get mediaPaused() {
     return gs(this, br.MEDIA_PAUSED);
    }
    set mediaPaused(e) {
     Es(this, br.MEDIA_PAUSED, e);
    }
    get mediaLoading() {
     return gs(this, br.MEDIA_LOADING);
    }
    set mediaLoading(e) {
     Es(this, br.MEDIA_LOADING, e);
    }
    get mediaDuration() {
     return vs(this, br.MEDIA_DURATION);
    }
    set mediaDuration(e) {
     bs(this, br.MEDIA_DURATION, e);
    }
    get mediaCurrentTime() {
     return vs(this, br.MEDIA_CURRENT_TIME);
    }
    set mediaCurrentTime(e) {
     bs(this, br.MEDIA_CURRENT_TIME, e);
    }
    get mediaPlaybackRate() {
     return vs(this, br.MEDIA_PLAYBACK_RATE, 1);
    }
    set mediaPlaybackRate(e) {
     bs(this, br.MEDIA_PLAYBACK_RATE, e);
    }
    get mediaBuffered() {
     const e = this.getAttribute(br.MEDIA_BUFFERED);
     return e ? e.split(' ').map((e) => e.split(':').map((e) => +e)) : [];
    }
    set mediaBuffered(e) {
     if (!e) return void this.removeAttribute(br.MEDIA_BUFFERED);
     const t = e.map((e) => e.join(':')).join(' ');
     this.setAttribute(br.MEDIA_BUFFERED, t);
    }
    get mediaSeekable() {
     const e = this.getAttribute(br.MEDIA_SEEKABLE);
     if (e) return e.split(':').map((e) => +e);
    }
    set mediaSeekable(e) {
     null != e ? this.setAttribute(br.MEDIA_SEEKABLE, e.join(':')) : this.removeAttribute(br.MEDIA_SEEKABLE);
    }
    get mediaSeekableEnd() {
     var e;
     const [, t = this.mediaDuration] = null != (e = this.mediaSeekable) ? e : [];
     return t;
    }
    get mediaSeekableStart() {
     var e;
     const [t = 0] = null != (e = this.mediaSeekable) ? e : [];
     return t;
    }
    get mediaPreviewImage() {
     return fs(this, br.MEDIA_PREVIEW_IMAGE);
    }
    set mediaPreviewImage(e) {
     ys(this, br.MEDIA_PREVIEW_IMAGE, e);
    }
    get mediaPreviewTime() {
     return vs(this, br.MEDIA_PREVIEW_TIME);
    }
    set mediaPreviewTime(e) {
     bs(this, br.MEDIA_PREVIEW_TIME, e);
    }
    get mediaEnded() {
     return gs(this, br.MEDIA_ENDED);
    }
    set mediaEnded(e) {
     Es(this, br.MEDIA_ENDED, e);
    }
    updateBar() {
     super.updateBar(), this.updateBufferedBar(), this.updateCurrentBox();
    }
    updateBufferedBar() {
     var e;
     const t = this.mediaBuffered;
     if (!t.length) return;
     let n;
     if (this.mediaEnded) n = 1;
     else {
      const i = this.mediaCurrentTime,
       [, a = this.mediaSeekableStart] = null != (e = t.find(([e, t]) => e <= i && i <= t)) ? e : [];
      n = Oh(this, a);
     }
     const { style: i } = ms(this.shadowRoot, '#buffered');
     i.setProperty('width', 100 * n + '%');
    }
    updateCurrentBox() {
     if (!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length) return;
     const e = ms(this.shadowRoot, '#current-rail'),
      t = ms(this.shadowRoot, '[part~="current-box"]'),
      n = Nh(this, Eh, fh).call(this, Lh(this, dh)),
      i = Nh(this, yh, _h).call(this, n, this.range.valueAsNumber),
      a = Nh(this, Th, Ah).call(this, n, this.range.valueAsNumber);
     (e.style.transform = `translateX(${i})`), e.style.setProperty('--_range-width', `${n.range.width}`), t.style.setProperty('--_box-shift', `${a}`), t.style.setProperty('--_box-width', `${n.box.width}px`), t.style.setProperty('visibility', 'initial');
    }
    handleEvent(e) {
     switch ((super.handleEvent(e), e.type)) {
      case 'input':
       Nh(this, Rh, Ch).call(this);
       break;
      case 'pointermove':
       Nh(this, kh, wh).call(this, e);
       break;
      case 'pointerup':
      case 'pointerleave':
       Nh(this, Ih, Sh).call(this, null);
       break;
      case 'transitionstart':
       ls(e.target, this) && setTimeout(() => Nh(this, mh, ph).call(this), 0);
     }
    }
   }
   (ah = new WeakMap()),
    (rh = new WeakMap()),
    (sh = new WeakMap()),
    (oh = new WeakMap()),
    (lh = new WeakMap()),
    (dh = new WeakMap()),
    (uh = new WeakMap()),
    (ch = new WeakMap()),
    (hh = new WeakMap()),
    (mh = new WeakSet()),
    (ph = function () {
     Nh(this, vh, bh).call(this) ? Lh(this, rh).start() : Lh(this, rh).stop();
    }),
    (vh = new WeakSet()),
    (bh = function () {
     return this.isConnected && !this.mediaPaused && !this.mediaLoading && !this.mediaEnded && this.mediaSeekableEnd > 0 && hs(this);
    }),
    (gh = new WeakMap()),
    (Eh = new WeakSet()),
    (fh = function (e) {
     var t;
     const n = (null != (t = this.getAttribute('bounds') ? ds(this, `#${this.getAttribute('bounds')}`) : this.parentElement) ? t : this).getBoundingClientRect(),
      i = this.range.getBoundingClientRect(),
      a = e.offsetWidth;
     return { box: { width: a, min: -(i.left - n.left - a / 2), max: n.right - i.left - a / 2 }, bounds: n, range: i };
    }),
    (yh = new WeakSet()),
    (_h = function (e, t) {
     let n = 100 * t + '%';
     const { width: i, min: a, max: r } = e.box;
     if (!i) return n;
     if (!Number.isNaN(a)) {
      n = `max(${`calc(1 / var(--_range-width) * 100 * ${a}% + ${'var(--media-box-padding-left)'})`}, ${n})`;
     }
     if (!Number.isNaN(r)) {
      n = `min(${n}, ${`calc(1 / var(--_range-width) * 100 * ${r}% - ${'var(--media-box-padding-right)'})`})`;
     }
     return n;
    }),
    (Th = new WeakSet()),
    (Ah = function (e, t) {
     const { width: n, min: i, max: a } = e.box,
      r = t * e.range.width;
     if (r < i + Lh(this, uh)) {
      return `${r - n / 2 + (e.range.left - e.bounds.left - Lh(this, uh))}px`;
     }
     if (r > a - Lh(this, ch)) {
      return r + n / 2 - (e.bounds.right - e.range.right - Lh(this, ch)) - e.range.width + 'px';
     }
     return 0;
    }),
    (kh = new WeakSet()),
    (wh = function (e) {
     const t = [...Lh(this, sh)].some((t) => e.composedPath().includes(t));
     if (!this.dragging && (t || !e.composedPath().includes(this))) return void Nh(this, Ih, Sh).call(this, null);
     const n = this.mediaSeekableEnd;
     if (!n) return;
     const i = ms(this.shadowRoot, '#preview-rail'),
      a = ms(this.shadowRoot, '[part~="preview-box"]'),
      r = Nh(this, Eh, fh).call(this, Lh(this, lh));
     let s = (e.clientX - r.range.left) / r.range.width;
     s = Math.max(0, Math.min(1, s));
     const o = Nh(this, yh, _h).call(this, r, s),
      l = Nh(this, Th, Ah).call(this, r, s);
     (i.style.transform = `translateX(${o})`), i.style.setProperty('--_range-width', `${r.range.width}`), a.style.setProperty('--_box-shift', `${l}`), a.style.setProperty('--_box-width', `${r.box.width}px`);
     const d = Math.round(Lh(this, oh)) - Math.round(s * n);
     (Math.abs(d) < 1 && s > 0.01 && s < 0.99) || (xh(this, oh, s * n), Nh(this, Ih, Sh).call(this, Lh(this, oh)));
    }),
    (Ih = new WeakSet()),
    (Sh = function (e) {
     this.dispatchEvent(new Zr.CustomEvent(hr.MEDIA_PREVIEW_REQUEST, { composed: !0, bubbles: !0, detail: e }));
    }),
    (Rh = new WeakSet()),
    (Ch = function () {
     Lh(this, rh).stop();
     const e = Ph(this);
     this.dispatchEvent(new Zr.CustomEvent(hr.MEDIA_SEEK_REQUEST, { composed: !0, bubbles: !0, detail: e }));
    }),
    (Uh.shadowRootOptions = { mode: 'open' }),
    (Uh.getTemplateHTML = function (e) {
     return `\n    ${vu.getTemplateHTML(e)}\n    <style>\n      :host {\n        --media-box-border-radius: 4px;\n        --media-box-padding-left: 10px;\n        --media-box-padding-right: 10px;\n        --media-preview-border-radius: var(--media-box-border-radius);\n        --media-box-arrow-offset: var(--media-box-border-radius);\n        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));\n        --_preview-background: var(--media-preview-background, var(--_control-background));\n\n        \n        contain: layout;\n      }\n\n      #buffered {\n        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));\n        position: absolute;\n        height: 100%;\n        will-change: width;\n      }\n\n      #preview-rail,\n      #current-rail {\n        width: 100%;\n        position: absolute;\n        left: 0;\n        bottom: 100%;\n        pointer-events: none;\n        will-change: transform;\n      }\n\n      [part~="box"] {\n        width: min-content;\n        \n        position: absolute;\n        bottom: 100%;\n        flex-direction: column;\n        align-items: center;\n        transform: translateX(-50%);\n      }\n\n      [part~="current-box"] {\n        display: var(--media-current-box-display, var(--media-box-display, flex));\n        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));\n        visibility: hidden;\n      }\n\n      [part~="preview-box"] {\n        display: var(--media-preview-box-display, var(--media-box-display, flex));\n        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));\n        transition-property: var(--media-preview-transition-property, visibility, opacity);\n        transition-duration: var(--media-preview-transition-duration-out, .25s);\n        transition-delay: var(--media-preview-transition-delay-out, 0s);\n        visibility: hidden;\n        opacity: 0;\n      }\n\n      :host(:is([${br.MEDIA_PREVIEW_IMAGE}], [${br.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {\n        transition-duration: var(--media-preview-transition-duration-in, .5s);\n        transition-delay: var(--media-preview-transition-delay-in, .25s);\n        visibility: visible;\n        opacity: 1;\n      }\n\n      @media (hover: hover) {\n        :host(:is([${br.MEDIA_PREVIEW_IMAGE}], [${br.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {\n          transition-duration: var(--media-preview-transition-duration-in, .5s);\n          transition-delay: var(--media-preview-transition-delay-in, .25s);\n          visibility: visible;\n          opacity: 1;\n        }\n      }\n\n      media-preview-thumbnail,\n      ::slotted(media-preview-thumbnail) {\n        visibility: hidden;\n        \n        transition: visibility 0s .25s;\n        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));\n        background: var(--media-preview-thumbnail-background, var(--_preview-background));\n        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));\n        max-width: var(--media-preview-thumbnail-max-width, 180px);\n        max-height: var(--media-preview-thumbnail-max-height, 160px);\n        min-width: var(--media-preview-thumbnail-min-width, 120px);\n        min-height: var(--media-preview-thumbnail-min-height, 80px);\n        border: var(--media-preview-thumbnail-border);\n        border-radius: var(--media-preview-thumbnail-border-radius,\n          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);\n      }\n\n      :host([${br.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,\n      :host([${br.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {\n        transition-delay: var(--media-preview-transition-delay-in, .25s);\n        visibility: visible;\n      }\n\n      @media (hover: hover) {\n        :host([${br.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,\n        :host([${br.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {\n          transition-delay: var(--media-preview-transition-delay-in, .25s);\n          visibility: visible;\n        }\n\n        :host([${br.MEDIA_PREVIEW_TIME}]:hover) {\n          --media-time-range-hover-display: block;\n        }\n      }\n\n      media-preview-chapter-display,\n      ::slotted(media-preview-chapter-display) {\n        font-size: var(--media-font-size, 13px);\n        line-height: 17px;\n        min-width: 0;\n        visibility: hidden;\n        \n        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;\n        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));\n        background: var(--media-preview-chapter-background, var(--_preview-background));\n        border-radius: var(--media-preview-chapter-border-radius,\n          var(--media-preview-border-radius) var(--media-preview-border-radius)\n          var(--media-preview-border-radius) var(--media-preview-border-radius));\n        padding: var(--media-preview-chapter-padding, 3.5px 9px);\n        margin: var(--media-preview-chapter-margin, 0 0 5px);\n        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));\n      }\n\n      :host([${br.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,\n      :host([${br.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {\n        transition-delay: var(--media-preview-transition-delay-in, .25s);\n        border-radius: var(--media-preview-chapter-border-radius, 0);\n        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);\n        margin: var(--media-preview-chapter-margin, 0);\n        min-width: 100%;\n      }\n\n      media-preview-chapter-display[${br.MEDIA_PREVIEW_CHAPTER}],\n      ::slotted(media-preview-chapter-display[${br.MEDIA_PREVIEW_CHAPTER}]) {\n        visibility: visible;\n      }\n\n      media-preview-chapter-display:not([aria-valuetext]),\n      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {\n        display: none;\n      }\n\n      media-preview-time-display,\n      ::slotted(media-preview-time-display),\n      media-time-display,\n      ::slotted(media-time-display) {\n        font-size: var(--media-font-size, 13px);\n        line-height: 17px;\n        min-width: 0;\n        \n        transition: min-width 0s, border-radius 0s;\n        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));\n        background: var(--media-preview-time-background, var(--_preview-background));\n        border-radius: var(--media-preview-time-border-radius,\n          var(--media-preview-border-radius) var(--media-preview-border-radius)\n          var(--media-preview-border-radius) var(--media-preview-border-radius));\n        padding: var(--media-preview-time-padding, 3.5px 9px);\n        margin: var(--media-preview-time-margin, 0);\n        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));\n        transform: translateX(min(\n          max(calc(50% - var(--_box-width) / 2),\n          calc(var(--_box-shift, 0))),\n          calc(var(--_box-width) / 2 - 50%)\n        ));\n      }\n\n      :host([${br.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,\n      :host([${br.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {\n        transition-delay: var(--media-preview-transition-delay-in, .25s);\n        border-radius: var(--media-preview-time-border-radius,\n          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));\n        min-width: 100%;\n      }\n\n      :host([${br.MEDIA_PREVIEW_TIME}]:hover) {\n        --media-time-range-hover-display: block;\n      }\n\n      [part~="arrow"],\n      ::slotted([part~="arrow"]) {\n        display: var(--media-box-arrow-display, inline-block);\n        transform: translateX(min(\n          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),\n          calc(var(--_box-shift, 0))),\n          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))\n        ));\n        \n        border-color: transparent;\n        border-top-color: var(--media-box-arrow-background, var(--_control-background));\n        border-width: var(--media-box-arrow-border-width,\n          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);\n        border-style: solid;\n        justify-content: center;\n        height: 0;\n      }\n    </style>\n    <div id="preview-rail">\n      <slot name="preview" part="box preview-box">\n        <media-preview-thumbnail>\n          <template shadowrootmode="${Sc.shadowRootOptions.mode}">\n            ${Sc.getTemplateHTML({})}\n          </template>\n        </media-preview-thumbnail>\n        <media-preview-chapter-display></media-preview-chapter-display>\n        <media-preview-time-display></media-preview-time-display>\n        <slot name="preview-arrow"><div part="arrow"></div></slot>\n      </slot>\n    </div>\n    <div id="current-rail">\n      <slot name="current" part="box current-box">\n        \n      </slot>\n    </div>\n  `;
    }),
    Zr.customElements.get('media-time-range') || Zr.customElements.define('media-time-range', Uh);
   class Hh extends vu {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_VOLUME, br.MEDIA_MUTED, br.MEDIA_VOLUME_UNAVAILABLE];
    }
    constructor() {
     super(),
      this.range.addEventListener('input', () => {
       const e = this.range.value,
        t = new Zr.CustomEvent(hr.MEDIA_VOLUME_REQUEST, { composed: !0, bubbles: !0, detail: e });
       this.dispatchEvent(t);
      });
    }
    connectedCallback() {
     super.connectedCallback(), this.range.setAttribute('aria-label', $r('volume'));
    }
    attributeChangedCallback(e, t, n) {
     var i, a;
     super.attributeChangedCallback(e, t, n), (e !== br.MEDIA_VOLUME && e !== br.MEDIA_MUTED) || ((this.range.valueAsNumber = (a = this).mediaMuted ? 0 : a.mediaVolume), this.range.setAttribute('aria-valuetext', ((i = this.range.valueAsNumber), `${Math.round(100 * i)}%`)), this.updateBar());
    }
    get mediaVolume() {
     return vs(this, br.MEDIA_VOLUME, 1);
    }
    set mediaVolume(e) {
     bs(this, br.MEDIA_VOLUME, e);
    }
    get mediaMuted() {
     return gs(this, br.MEDIA_MUTED);
    }
    set mediaMuted(e) {
     Es(this, br.MEDIA_MUTED, e);
    }
    get mediaVolumeUnavailable() {
     return fs(this, br.MEDIA_VOLUME_UNAVAILABLE);
    }
    set mediaVolumeUnavailable(e) {
     ys(this, br.MEDIA_VOLUME_UNAVAILABLE, e);
    }
   }
   Zr.customElements.get('media-volume-range') || Zr.customElements.define('media-volume-range', Hh);
   var Wh,
    Bh,
    Vh,
    $h,
    qh,
    Kh,
    Fh,
    Yh,
    jh,
    Gh,
    Qh,
    Zh = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    zh = (e, t, n) => (Zh(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    Xh = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    Jh = (e, t, n, i) => (Zh(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n);
   const em = {
    processCallback(e, t, n) {
     if (n)
      for (const [i, a] of t)
       if (i in n) {
        const e = n[i];
        'boolean' == typeof e && a instanceof lm && 'boolean' == typeof a.element[a.attributeName] ? (a.booleanValue = e) : 'function' == typeof e && a instanceof lm ? (a.element[a.attributeName] = e) : (a.value = e);
       }
    },
   };
   class tm extends Zr.DocumentFragment {
    constructor(e, t, n = em) {
     var i;
     super(), Xh(this, Wh, void 0), Xh(this, Bh, void 0), this.append(e.content.cloneNode(!0)), Jh(this, Wh, nm(this)), Jh(this, Bh, n), null == (i = n.createCallback) || i.call(n, this, zh(this, Wh), t), n.processCallback(this, zh(this, Wh), t);
    }
    update(e) {
     zh(this, Bh).processCallback(this, zh(this, Wh), e);
    }
   }
   (Wh = new WeakMap()), (Bh = new WeakMap());
   const nm = (e, t = []) => {
     let n, i;
     for (const a of e.attributes || [])
      if (a.value.includes('{{')) {
       const r = new om();
       for ([n, i] of am(a.value))
        if (n) {
         const n = new lm(e, a.name, a.namespaceURI);
         r.append(n), t.push([i, n]);
        } else r.append(i);
       a.value = r.toString();
      }
     for (const a of e.childNodes)
      if (1 !== a.nodeType || a instanceof HTMLTemplateElement) {
       const r = a.data;
       if (1 === a.nodeType || r.includes('{{')) {
        const s = [];
        if (r)
         for ([n, i] of am(r))
          if (n) {
           const n = new dm(e);
           s.push(n), t.push([i, n]);
          } else s.push(new Text(i));
        else if (a instanceof HTMLTemplateElement) {
         const n = new um(e, a);
         s.push(n), t.push([n.expression, n]);
        }
        a.replaceWith(...s.flatMap((e) => e.replacementNodes || [e]));
       }
      } else nm(a, t);
     return t;
    },
    im = {},
    am = (e) => {
     let t,
      n = '',
      i = 0,
      a = im[e],
      r = 0;
     if (a) return a;
     for (a = []; (t = e[r]); r++) '{' === t && '{' === e[r + 1] && '\\' !== e[r - 1] && e[r + 2] && 1 == ++i ? (n && a.push([0, n]), (n = ''), r++) : '}' !== t || '}' !== e[r + 1] || '\\' === e[r - 1] || --i ? (n += t || '') : (a.push([1, n.trim()]), (n = ''), r++);
     return n && a.push([0, (i > 0 ? '{{' : '') + n]), (im[e] = a);
    };
   class rm {
    get value() {
     return '';
    }
    set value(e) {}
    toString() {
     return this.value;
    }
   }
   const sm = new WeakMap();
   class om {
    constructor() {
     Xh(this, Vh, []);
    }
    [Symbol.iterator]() {
     return zh(this, Vh).values();
    }
    get length() {
     return zh(this, Vh).length;
    }
    item(e) {
     return zh(this, Vh)[e];
    }
    append(...e) {
     for (const t of e) t instanceof lm && sm.set(t, this), zh(this, Vh).push(t);
    }
    toString() {
     return zh(this, Vh).join('');
    }
   }
   Vh = new WeakMap();
   class lm extends rm {
    constructor(e, t, n) {
     super(), Xh(this, Yh), Xh(this, $h, ''), Xh(this, qh, void 0), Xh(this, Kh, void 0), Xh(this, Fh, void 0), Jh(this, qh, e), Jh(this, Kh, t), Jh(this, Fh, n);
    }
    get attributeName() {
     return zh(this, Kh);
    }
    get attributeNamespace() {
     return zh(this, Fh);
    }
    get element() {
     return zh(this, qh);
    }
    get value() {
     return zh(this, $h);
    }
    set value(e) {
     zh(this, $h) !== e && (Jh(this, $h, e), zh(this, Yh, jh) && 1 !== zh(this, Yh, jh).length ? zh(this, qh).setAttributeNS(zh(this, Fh), zh(this, Kh), zh(this, Yh, jh).toString()) : null == e ? zh(this, qh).removeAttributeNS(zh(this, Fh), zh(this, Kh)) : zh(this, qh).setAttributeNS(zh(this, Fh), zh(this, Kh), e));
    }
    get booleanValue() {
     return zh(this, qh).hasAttributeNS(zh(this, Fh), zh(this, Kh));
    }
    set booleanValue(e) {
     if (zh(this, Yh, jh) && 1 !== zh(this, Yh, jh).length) throw new DOMException('Value is not fully templatized');
     this.value = e ? '' : null;
    }
   }
   ($h = new WeakMap()),
    (qh = new WeakMap()),
    (Kh = new WeakMap()),
    (Fh = new WeakMap()),
    (Yh = new WeakSet()),
    (jh = function () {
     return sm.get(this);
    });
   class dm extends rm {
    constructor(e, t) {
     super(), Xh(this, Gh, void 0), Xh(this, Qh, void 0), Jh(this, Gh, e), Jh(this, Qh, t ? [...t] : [new Text()]);
    }
    get replacementNodes() {
     return zh(this, Qh);
    }
    get parentNode() {
     return zh(this, Gh);
    }
    get nextSibling() {
     return zh(this, Qh)[zh(this, Qh).length - 1].nextSibling;
    }
    get previousSibling() {
     return zh(this, Qh)[0].previousSibling;
    }
    get value() {
     return zh(this, Qh)
      .map((e) => e.textContent)
      .join('');
    }
    set value(e) {
     this.replace(e);
    }
    replace(...e) {
     const t = e.flat().flatMap((e) => (null == e ? [new Text()] : e.forEach ? [...e] : 11 === e.nodeType ? [...e.childNodes] : e.nodeType ? [e] : [new Text(e)]));
     t.length || t.push(new Text()),
      Jh(
       this,
       Qh,
       (function (e, t, n, i = null) {
        let a,
         r,
         s,
         o = 0,
         l = n.length,
         d = t.length;
        for (; o < l && o < d && t[o] == n[o]; ) o++;
        for (; o < l && o < d && n[l - 1] == t[d - 1]; ) i = n[(--d, --l)];
        if (o == d) for (; o < l; ) e.insertBefore(n[o++], i);
        if (o == l) for (; o < d; ) e.removeChild(t[o++]);
        else {
         for (a = t[o]; o < l; ) (s = n[o++]), (r = a ? a.nextSibling : i), a == s ? (a = r) : o < l && n[o] == r ? (e.replaceChild(s, a), (a = r)) : e.insertBefore(s, a);
         for (; a != i; ) (r = a.nextSibling), e.removeChild(a), (a = r);
        }
        return n;
       })(zh(this, Qh)[0].parentNode, zh(this, Qh), t, this.nextSibling),
      );
    }
   }
   (Gh = new WeakMap()), (Qh = new WeakMap());
   class um extends dm {
    constructor(e, t) {
     const n = t.getAttribute('directive') || t.getAttribute('type');
     let i = t.getAttribute('expression') || t.getAttribute(n) || '';
     i.startsWith('{{') && (i = i.trim().slice(2, -2).trim()), super(e), (this.expression = i), (this.template = t), (this.directive = n);
    }
   }
   const cm = { string: (e) => String(e) };
   class hm {
    constructor(e) {
     (this.template = e), (this.state = void 0);
    }
   }
   const mm = new WeakMap(),
    pm = new WeakMap(),
    vm = {
     partial: (e, t) => {
      t[e.expression] = new hm(e.template);
     },
     if: (e, t) => {
      var n;
      if (fm(e.expression, t))
       if (mm.get(e) !== e.template) {
        mm.set(e, e.template);
        const n = new tm(e.template, t, gm);
        e.replace(n), pm.set(e, n);
       } else null == (n = pm.get(e)) || n.update(t);
      else e.replace(''), mm.delete(e), pm.delete(e);
     },
    },
    bm = Object.keys(vm),
    gm = {
     processCallback(e, t, n) {
      var i, a;
      if (n)
       for (const [r, s] of t) {
        if (s instanceof um) {
         if (!s.directive) {
          const e = bm.find((e) => s.template.hasAttribute(e));
          e && ((s.directive = e), (s.expression = s.template.getAttribute(e)));
         }
         null == (i = vm[s.directive]) || i.call(vm, s, n);
         continue;
        }
        let e = fm(r, n);
        e instanceof hm ? (mm.get(s) !== e.template ? (mm.set(s, e.template), (e = new tm(e.template, e.state, gm)), (s.value = e), pm.set(s, e)) : null == (a = pm.get(s)) || a.update(e.state)) : e ? (s instanceof lm && s.attributeName.startsWith('aria-') && (e = String(e)), s instanceof lm ? ('boolean' == typeof e ? (s.booleanValue = e) : 'function' == typeof e ? (s.element[s.attributeName] = e) : (s.value = e)) : ((s.value = e), mm.delete(s), pm.delete(s))) : s instanceof lm ? (s.value = void 0) : ((s.value = void 0), mm.delete(s), pm.delete(s));
       }
     },
    },
    Em = {
     '!': (e) => !e,
     '!!': (e) => !!e,
     '==': (e, t) => e == t,
     '!=': (e, t) => e != t,
     '>': (e, t) => e > t,
     '>=': (e, t) => e >= t,
     '<': (e, t) => e < t,
     '<=': (e, t) => e <= t,
     '??': (e, t) => (null != e ? e : t),
     '|': (e, t) => {
      var n;
      return null == (n = cm[t]) ? void 0 : n.call(cm, e);
     },
    };
   function fm(e, t = {}) {
    var n, i, a, r, s, o, l;
    const d = (function (e) {
     return (function (e, t) {
      let n, i, a;
      const r = [];
      for (; e; ) {
       (a = null), (n = e.length);
       for (const r in t) (i = t[r].exec(e)), i && i.index < n && ((a = { token: i[0], type: r, matches: i.slice(1) }), (n = i.index));
       n && r.push({ token: e.substr(0, n), type: void 0 }), a && r.push(a), (e = e.substr(n + (a ? a.token.length : 0)));
      }
      return r;
     })(e, { boolean: /true|false/, number: /-?\d+\.?\d*/, string: /(["'])((?:\\.|[^\\])*?)\1/, operator: /[!=><][=!]?|\?\?|\|/, ws: /\s+/, param: /[$a-z_][$\w]*/i }).filter(({ type: e }) => 'ws' !== e);
    })(e);
    if (0 === d.length || d.some(({ type: e }) => !e)) return ym(e);
    if ('>' === (null == (n = d[0]) ? void 0 : n.token)) {
     const n = t[null == (i = d[1]) ? void 0 : i.token];
     if (!n) return ym(e);
     const o = { ...t };
     n.state = o;
     const l = d.slice(2);
     for (let e = 0; e < l.length; e += 3) {
      const n = null == (a = l[e]) ? void 0 : a.token,
       i = null == (r = l[e + 1]) ? void 0 : r.token,
       d = null == (s = l[e + 2]) ? void 0 : s.token;
      n && '=' === i && (o[n] = Tm(d, t));
     }
     return n;
    }
    if (1 === d.length) return _m(d[0]) ? Tm(d[0].token, t) : ym(e);
    if (2 === d.length) {
     const n = null == (o = d[0]) ? void 0 : o.token,
      i = Em[n];
     if (!i || !_m(d[1])) return ym(e);
     return i(Tm(d[1].token, t));
    }
    if (3 === d.length) {
     const n = null == (l = d[1]) ? void 0 : l.token,
      i = Em[n];
     if (!i || !_m(d[0]) || !_m(d[2])) return ym(e);
     const a = Tm(d[0].token, t);
     if ('|' === n) return i(a, d[2].token);
     return i(a, Tm(d[2].token, t));
    }
   }
   function ym(e) {
    return console.warn(`Warning: invalid expression \`${e}\``), !1;
   }
   function _m({ type: e }) {
    return ['number', 'boolean', 'string', 'param'].includes(e);
   }
   function Tm(e, t) {
    const n = e[0],
     i = e.slice(-1);
    return 'true' === e || 'false' === e ? 'true' === e : n === i && ["'", '"'].includes(n) ? e.slice(1, -1) : Nr(e) ? parseFloat(e) : t[e];
   }
   var Am,
    km,
    wm,
    Im,
    Sm,
    Rm,
    Cm,
    Dm = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    Lm = (e, t, n) => (Dm(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    Mm = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    xm = (e, t, n, i) => (Dm(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    Nm = (e, t, n) => (Dm(e, t, 'access private method'), n);
   const Om = { mediatargetlivewindow: 'targetlivewindow', mediastreamtype: 'streamtype' },
    Pm = zr.createElement('template');
   Pm.innerHTML = '\n  <style>\n    :host {\n      display: inline-block;\n      line-height: 0;\n    }\n\n    media-controller {\n      width: 100%;\n      height: 100%;\n    }\n\n    media-captions-button:not([mediasubtitleslist]),\n    media-captions-menu:not([mediasubtitleslist]),\n    media-captions-menu-button:not([mediasubtitleslist]),\n    media-audio-track-menu[mediaaudiotrackunavailable],\n    media-audio-track-menu-button[mediaaudiotrackunavailable],\n    media-rendition-menu[mediarenditionunavailable],\n    media-rendition-menu-button[mediarenditionunavailable],\n    media-volume-range[mediavolumeunavailable],\n    media-airplay-button[mediaairplayunavailable],\n    media-fullscreen-button[mediafullscreenunavailable],\n    media-cast-button[mediacastunavailable],\n    media-pip-button[mediapipunavailable] {\n      display: none;\n    }\n  </style>\n';
   class Um extends Zr.HTMLElement {
    constructor() {
     super(), Mm(this, Im), Mm(this, Rm), Mm(this, Am, void 0), Mm(this, km, void 0), Mm(this, wm, void 0), this.shadowRoot ? (this.renderRoot = this.shadowRoot) : ((this.renderRoot = this.attachShadow({ mode: 'open' })), this.createRenderer());
     const e = new MutationObserver((e) => {
      var t;
      (this.mediaController && !(null == (t = this.mediaController) ? void 0 : t.breakpointsComputed)) ||
       (e.some((e) => {
        const t = e.target;
        return t === this || ('media-controller' === t.localName && (!!Om[e.attributeName] || !!e.attributeName.startsWith('breakpoint')));
       }) &&
        this.render());
     });
     e.observe(this, { attributes: !0 }), e.observe(this.renderRoot, { attributes: !0, subtree: !0 }), this.addEventListener(gr.BREAKPOINTS_COMPUTED, this.render), Nm(this, Im, Sm).call(this, 'template');
    }
    get mediaController() {
     return this.renderRoot.querySelector('media-controller');
    }
    get template() {
     var e;
     return null != (e = Lm(this, Am)) ? e : this.constructor.template;
    }
    set template(e) {
     xm(this, wm, null), xm(this, Am, e), this.createRenderer();
    }
    get props() {
     var e, t, n;
     const i = [...Array.from(null != (t = null == (e = this.mediaController) ? void 0 : e.attributes) ? t : []).filter(({ name: e }) => Om[e] || e.startsWith('breakpoint')), ...Array.from(this.attributes)],
      a = {};
     for (const r of i) {
      const e = null != (n = Om[r.name]) ? n : Mr(r.name);
      let { value: t } = r;
      null != t ? (Nr(t) && (t = parseFloat(t)), (a[e] = '' === t || t)) : (a[e] = !1);
     }
     return a;
    }
    attributeChangedCallback(e, t, n) {
     'template' === e && t != n && Nm(this, Rm, Cm).call(this);
    }
    connectedCallback() {
     Nm(this, Rm, Cm).call(this);
    }
    createRenderer() {
     this.template && this.template !== Lm(this, km) && (xm(this, km, this.template), (this.renderer = new tm(this.template, this.props, this.constructor.processor)), (this.renderRoot.textContent = ''), this.renderRoot.append(Pm.content.cloneNode(!0), this.renderer));
    }
    render() {
     var e;
     null == (e = this.renderer) || e.update(this.props);
    }
   }
   function Hm({ anchor: e, floating: t, placement: n }) {
    const i = (function ({ anchor: e, floating: t }) {
      return { anchor: Wm(e, t.offsetParent), floating: { x: 0, y: 0, width: t.offsetWidth, height: t.offsetHeight } };
     })({ anchor: e, floating: t }),
     { x: a, y: r } = (function ({ anchor: e, floating: t }, n) {
      const i =
        'x' ===
        (function (e) {
         return ['top', 'bottom'].includes(Bm(e)) ? 'y' : 'x';
        })(n)
         ? 'y'
         : 'x',
       a = 'y' === i ? 'height' : 'width',
       r = Bm(n),
       s = e.x + e.width / 2 - t.width / 2,
       o = e.y + e.height / 2 - t.height / 2,
       l = e[a] / 2 - t[a] / 2;
      let d;
      switch (r) {
       case 'top':
        d = { x: s, y: e.y - t.height };
        break;
       case 'bottom':
        d = { x: s, y: e.y + e.height };
        break;
       case 'right':
        d = { x: e.x + e.width, y: o };
        break;
       case 'left':
        d = { x: e.x - t.width, y: o };
        break;
       default:
        d = { x: e.x, y: e.y };
      }
      switch (n.split('-')[1]) {
       case 'start':
        d[i] -= l;
        break;
       case 'end':
        d[i] += l;
      }
      return d;
     })(i, n);
    return { x: a, y: r };
   }
   function Wm(e, t) {
    var n;
    const i = e.getBoundingClientRect(),
     a = null != (n = null == t ? void 0 : t.getBoundingClientRect()) ? n : { x: 0, y: 0 };
    return { x: i.x - a.x, y: i.y - a.y, width: i.width, height: i.height };
   }
   function Bm(e) {
    return e.split('-')[0];
   }
   (Am = new WeakMap()),
    (km = new WeakMap()),
    (wm = new WeakMap()),
    (Im = new WeakSet()),
    (Sm = function (e) {
     if (Object.prototype.hasOwnProperty.call(this, e)) {
      const t = this[e];
      delete this[e], (this[e] = t);
     }
    }),
    (Rm = new WeakSet()),
    (Cm = function () {
     var e;
     const t = this.getAttribute('template');
     if (!t || t === Lm(this, wm)) return;
     const n = this.getRootNode(),
      i = null == (e = null == n ? void 0 : n.getElementById) ? void 0 : e.call(n, t);
     if (i) return xm(this, wm, t), xm(this, Am, i), void this.createRenderer();
     (function (e) {
      if (!/^(\/|\.\/|https?:\/\/)/.test(e)) return !1;
      const t = /^https?:\/\//.test(e) ? void 0 : location.origin;
      try {
       new URL(e, t);
      } catch (n) {
       return !1;
      }
      return !0;
     })(t) &&
      (xm(this, wm, t),
      (async function (e) {
       const t = await fetch(e);
       if (200 !== t.status) throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);
       return t.text();
      })(t)
       .then((e) => {
        const t = zr.createElement('template');
        (t.innerHTML = e), xm(this, Am, t), this.createRenderer();
       })
       .catch(console.error));
    }),
    (Um.observedAttributes = ['template']),
    (Um.processor = gm),
    Zr.customElements.get('media-theme') || Zr.customElements.define('media-theme', Um);
   class Vm extends Event {
    constructor({ action: e = 'auto', relatedTarget: t, ...n }) {
     super('invoke', n), (this.action = e), (this.relatedTarget = t);
    }
   }
   class $m extends Event {
    constructor({ newState: e, oldState: t, ...n }) {
     super('toggle', n), (this.newState = e), (this.oldState = t);
    }
   }
   var qm,
    Km,
    Fm,
    Ym,
    jm,
    Gm,
    Qm,
    Zm,
    zm,
    Xm,
    Jm,
    ep,
    tp,
    np,
    ip,
    ap,
    rp,
    sp,
    op,
    lp,
    dp,
    up,
    cp,
    hp,
    mp,
    pp,
    vp,
    bp,
    gp,
    Ep,
    fp,
    yp,
    _p,
    Tp,
    Ap,
    kp,
    wp,
    Ip,
    Sp,
    Rp,
    Cp,
    Dp,
    Lp,
    Mp,
    xp = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    Np = (e, t, n) => (xp(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    Op = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    Pp = (e, t, n, i) => (xp(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    Up = (e, t, n) => (xp(e, t, 'access private method'), n);
   function Hp({ type: e, text: t, value: n, checked: i }) {
    const a = zr.createElement('media-chrome-menu-item');
    (a.type = null != e ? e : ''), a.part.add('menu-item'), e && a.part.add(e), (a.value = n), (a.checked = i);
    const r = zr.createElement('span');
    return (r.textContent = t), a.append(r), a;
   }
   function Wp(e, t) {
    let n = e.querySelector(`:scope > [slot="${t}"]`);
    if (('SLOT' == (null == n ? void 0 : n.nodeName) && (n = n.assignedElements({ flatten: !0 })[0]), n)) return (n = n.cloneNode(!0)), n;
    const i = e.shadowRoot.querySelector(`[name="${t}"] > svg`);
    return i ? i.cloneNode(!0) : '';
   }
   const Bp = 'style',
    Vp = 'hidden',
    $p = 'disabled',
    qp = 'anchor';
   class Kp extends Zr.HTMLElement {
    constructor() {
     if (
      (super(),
      Op(this, Zm),
      Op(this, Jm),
      Op(this, tp),
      Op(this, ip),
      Op(this, rp),
      Op(this, dp),
      Op(this, cp),
      Op(this, mp),
      Op(this, vp),
      Op(this, gp),
      Op(this, fp),
      Op(this, _p),
      Op(this, Ap),
      Op(this, wp),
      Op(this, Sp),
      Op(this, Cp),
      Op(this, Lp),
      Op(this, qm, null),
      Op(this, Km, null),
      Op(this, Fm, null),
      Op(this, Ym, new Set()),
      Op(this, jm, void 0),
      Op(this, Gm, !1),
      Op(this, Qm, null),
      Op(this, Xm, () => {
       const e = Np(this, Ym),
        t = new Set(this.items);
       for (const n of e) t.has(n) || this.dispatchEvent(new CustomEvent('removemenuitem', { detail: n }));
       for (const n of t) e.has(n) || this.dispatchEvent(new CustomEvent('addmenuitem', { detail: n }));
       Pp(this, Ym, t);
      }),
      Op(this, op, () => {
       Up(this, dp, up).call(this), Up(this, cp, hp).call(this, !1);
      }),
      Op(this, lp, () => {
       Up(this, dp, up).call(this);
      }),
      !this.shadowRoot)
     ) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
     }
     (this.container = this.shadowRoot.querySelector('#container')), (this.defaultSlot = this.shadowRoot.querySelector('slot:not([name])')), this.shadowRoot.addEventListener('slotchange', this), Pp(this, jm, new MutationObserver(Np(this, Xm))), Np(this, jm).observe(this.defaultSlot, { childList: !0 });
    }
    static get observedAttributes() {
     return [$p, Vp, Bp, qp, mr.MEDIA_CONTROLLER];
    }
    static formatMenuItemText(e, t) {
     return e;
    }
    enable() {
     this.addEventListener('click', this), this.addEventListener('focusout', this), this.addEventListener('keydown', this), this.addEventListener('invoke', this), this.addEventListener('toggle', this);
    }
    disable() {
     this.removeEventListener('click', this), this.removeEventListener('focusout', this), this.removeEventListener('keyup', this), this.removeEventListener('invoke', this), this.removeEventListener('toggle', this);
    }
    handleEvent(e) {
     switch (e.type) {
      case 'slotchange':
       Up(this, Zm, zm).call(this, e);
       break;
      case 'invoke':
       Up(this, tp, np).call(this, e);
       break;
      case 'click':
       Up(this, mp, pp).call(this, e);
       break;
      case 'toggle':
       Up(this, gp, Ep).call(this, e);
       break;
      case 'focusout':
       Up(this, _p, Tp).call(this, e);
       break;
      case 'keydown':
       Up(this, Ap, kp).call(this, e);
     }
    }
    connectedCallback() {
     var e, t;
     Pp(this, Qm, ps(this.shadowRoot, ':host')), Up(this, Jm, ep).call(this), this.hasAttribute('disabled') || this.enable(), this.role || (this.role = 'menu'), Pp(this, qm, rs(this)), null == (t = null == (e = Np(this, qm)) ? void 0 : e.associateElement) || t.call(e, this), this.hidden || (ts(Yp(this), Np(this, op)), ts(this, Np(this, lp)));
    }
    disconnectedCallback() {
     var e, t;
     ns(Yp(this), Np(this, op)), ns(this, Np(this, lp)), this.disable(), null == (t = null == (e = Np(this, qm)) ? void 0 : e.unassociateElement) || t.call(e, this), Pp(this, qm, null);
    }
    attributeChangedCallback(e, t, n) {
     var i, a, r, s;
     e === Vp && n !== t ? (Np(this, Gm) || Pp(this, Gm, !0), this.hidden ? Up(this, rp, sp).call(this) : Up(this, ip, ap).call(this), this.dispatchEvent(new $m({ oldState: this.hidden ? 'open' : 'closed', newState: this.hidden ? 'closed' : 'open', bubbles: !0 }))) : e === mr.MEDIA_CONTROLLER ? (t && (null == (a = null == (i = Np(this, qm)) ? void 0 : i.unassociateElement) || a.call(i, this), Pp(this, qm, null)), n && this.isConnected && (Pp(this, qm, rs(this)), null == (s = null == (r = Np(this, qm)) ? void 0 : r.associateElement) || s.call(r, this))) : e === $p && n !== t ? (null == n ? this.enable() : this.disable()) : e === Bp && n !== t && Up(this, Jm, ep).call(this);
    }
    formatMenuItemText(e, t) {
     return this.constructor.formatMenuItemText(e, t);
    }
    get anchor() {
     return this.getAttribute('anchor');
    }
    set anchor(e) {
     this.setAttribute('anchor', `${e}`);
    }
    get anchorElement() {
     var e;
     return this.anchor ? (null == (e = cs(this)) ? void 0 : e.querySelector(`#${this.anchor}`)) : null;
    }
    get items() {
     return this.defaultSlot.assignedElements({ flatten: !0 }).filter(Fp);
    }
    get radioGroupItems() {
     return this.items.filter((e) => 'menuitemradio' === e.role);
    }
    get checkedItems() {
     return this.items.filter((e) => e.checked);
    }
    get value() {
     var e, t;
     return null != (t = null == (e = this.checkedItems[0]) ? void 0 : e.value) ? t : '';
    }
    set value(e) {
     const t = this.items.find((t) => t.value === e);
     t && Up(this, Lp, Mp).call(this, t);
    }
    focus() {
     if ((Pp(this, Km, us()), this.items.length)) return Up(this, Cp, Dp).call(this, this.items[0]), void this.items[0].focus();
     const e = this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');
     null == e || e.focus();
    }
    handleSelect(e) {
     var t;
     const n = Up(this, wp, Ip).call(this, e);
     n && (Up(this, Lp, Mp).call(this, n, 'checkbox' === n.type), Np(this, Fm) && !this.hidden && (null == (t = Np(this, Km)) || t.focus(), (this.hidden = !0)));
    }
    get keysUsed() {
     return ['Enter', 'Escape', 'Tab', ' ', 'ArrowDown', 'ArrowUp', 'Home', 'End'];
    }
    handleMove(e) {
     var t, n;
     const { key: i } = e,
      a = this.items,
      r = null != (n = null != (t = Up(this, wp, Ip).call(this, e)) ? t : Up(this, Sp, Rp).call(this)) ? n : a[0],
      s = a.indexOf(r);
     let o = Math.max(0, s);
     'ArrowDown' === i ? o++ : 'ArrowUp' === i ? o-- : 'Home' === e.key ? (o = 0) : 'End' === e.key && (o = a.length - 1), o < 0 && (o = a.length - 1), o > a.length - 1 && (o = 0), Up(this, Cp, Dp).call(this, a[o]), a[o].focus();
    }
   }
   function Fp(e) {
    return ['menuitem', 'menuitemradio', 'menuitemcheckbox'].includes(null == e ? void 0 : e.role);
   }
   function Yp(e) {
    var t;
    return null != (t = e.getAttribute('bounds') ? ds(e, `#${e.getAttribute('bounds')}`) : as(e) || e.parentElement) ? t : e;
   }
   (qm = new WeakMap()),
    (Km = new WeakMap()),
    (Fm = new WeakMap()),
    (Ym = new WeakMap()),
    (jm = new WeakMap()),
    (Gm = new WeakMap()),
    (Qm = new WeakMap()),
    (Zm = new WeakSet()),
    (zm = function (e) {
     const t = e.target;
     for (const n of t.assignedNodes({ flatten: !0 })) 3 === n.nodeType && '' === n.textContent.trim() && n.remove();
     if (['header', 'title'].includes(t.name)) {
      this.shadowRoot.querySelector('slot[name="header"]').hidden = 0 === t.assignedNodes().length;
     }
     t.name || Np(this, Xm).call(this);
    }),
    (Xm = new WeakMap()),
    (Jm = new WeakSet()),
    (ep = function () {
     var e;
     const t = this.shadowRoot.querySelector('#layout-row'),
      n = null == (e = getComputedStyle(this).getPropertyValue('--media-menu-layout')) ? void 0 : e.trim();
     t.setAttribute('media', 'row' === n ? '' : 'width:0');
    }),
    (tp = new WeakSet()),
    (np = function (e) {
     Pp(this, Fm, e.relatedTarget), ls(this, e.relatedTarget) || (this.hidden = !this.hidden);
    }),
    (ip = new WeakSet()),
    (ap = function () {
     var e;
     null == (e = Np(this, Fm)) || e.setAttribute('aria-expanded', 'true'), this.addEventListener('transitionend', () => this.focus(), { once: !0 }), ts(Yp(this), Np(this, op)), ts(this, Np(this, lp));
    }),
    (rp = new WeakSet()),
    (sp = function () {
     var e;
     null == (e = Np(this, Fm)) || e.setAttribute('aria-expanded', 'false'), ns(Yp(this), Np(this, op)), ns(this, Np(this, lp));
    }),
    (op = new WeakMap()),
    (lp = new WeakMap()),
    (dp = new WeakSet()),
    (up = function (e) {
     if (this.hasAttribute('mediacontroller') && !this.anchor) return;
     if (this.hidden || !this.anchorElement) return;
     const { x: t, y: n } = Hm({ anchor: this.anchorElement, floating: this, placement: 'top-start' });
     null != e || (e = this.offsetWidth);
     const i = Yp(this).getBoundingClientRect(),
      a = i.width - t - e,
      r = i.height - n - this.offsetHeight,
      { style: s } = Np(this, Qm);
     s.setProperty('position', 'absolute'), s.setProperty('right', `${Math.max(0, a)}px`), s.setProperty('--_menu-bottom', `${r}px`);
     const o = getComputedStyle(this),
      l = s.getPropertyValue('--_menu-bottom') === o.bottom ? r : parseFloat(o.bottom),
      d = i.height - l - parseFloat(o.marginBottom);
     this.style.setProperty('--_menu-max-height', `${d}px`);
    }),
    (cp = new WeakSet()),
    (hp = function (e) {
     const t = this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),
      n = null == t ? void 0 : t.querySelector('[role="menu"]'),
      { style: i } = Np(this, Qm);
     if ((e || i.setProperty('--media-menu-transition-in', 'none'), n)) {
      const e = n.offsetHeight,
       i = Math.max(n.offsetWidth, t.offsetWidth);
      this.style.setProperty('min-width', `${i}px`), this.style.setProperty('min-height', `${e}px`), Up(this, dp, up).call(this, i);
     } else this.style.removeProperty('min-width'), this.style.removeProperty('min-height'), Up(this, dp, up).call(this);
     i.removeProperty('--media-menu-transition-in');
    }),
    (mp = new WeakSet()),
    (pp = function (e) {
     var t;
     if ((e.stopPropagation(), e.composedPath().includes(Np(this, vp, bp)))) return null == (t = Np(this, Km)) || t.focus(), void (this.hidden = !0);
     const n = Up(this, wp, Ip).call(this, e);
     n && !n.hasAttribute('disabled') && (Up(this, Cp, Dp).call(this, n), this.handleSelect(e));
    }),
    (vp = new WeakSet()),
    (bp = function () {
     var e;
     return null == (e = this.shadowRoot.querySelector('slot[name="header"]').assignedElements({ flatten: !0 })) ? void 0 : e.find((e) => e.matches('button[part~="back"]'));
    }),
    (gp = new WeakSet()),
    (Ep = function (e) {
     if (e.target === this) return;
     Up(this, fp, yp).call(this);
     const t = Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));
     for (const n of t) n.invokeTargetElement != e.target && ('open' != e.newState || 'true' != n.getAttribute('aria-expanded') || n.invokeTargetElement.hidden || n.invokeTargetElement.dispatchEvent(new Vm({ relatedTarget: n })));
     for (const n of t) n.setAttribute('aria-expanded', `${!n.submenuElement.hidden}`);
     Up(this, cp, hp).call(this, !0);
    }),
    (fp = new WeakSet()),
    (yp = function () {
     const e = this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');
     this.container.classList.toggle('has-expanded', !!e);
    }),
    (_p = new WeakSet()),
    (Tp = function (e) {
     var t;
     ls(this, e.relatedTarget) || (Np(this, Gm) && (null == (t = Np(this, Km)) || t.focus()), Np(this, Fm) && Np(this, Fm) !== e.relatedTarget && !this.hidden && (this.hidden = !0));
    }),
    (Ap = new WeakSet()),
    (kp = function (e) {
     var t, n, i, a, r;
     const { key: s, ctrlKey: o, altKey: l, metaKey: d } = e;
     if (!(o || l || d) && this.keysUsed.includes(s))
      if ((e.preventDefault(), e.stopPropagation(), 'Tab' === s)) {
       if (Np(this, Gm)) return void (this.hidden = !0);
       e.shiftKey ? null == (n = null == (t = this.previousElementSibling) ? void 0 : t.focus) || n.call(t) : null == (a = null == (i = this.nextElementSibling) ? void 0 : i.focus) || a.call(i), this.blur();
      } else 'Escape' === s ? (null == (r = Np(this, Km)) || r.focus(), Np(this, Gm) && (this.hidden = !0)) : 'Enter' === s || ' ' === s ? this.handleSelect(e) : this.handleMove(e);
    }),
    (wp = new WeakSet()),
    (Ip = function (e) {
     return e.composedPath().find((e) => ['menuitemradio', 'menuitemcheckbox'].includes(e.role));
    }),
    (Sp = new WeakSet()),
    (Rp = function () {
     return this.items.find((e) => 0 === e.tabIndex);
    }),
    (Cp = new WeakSet()),
    (Dp = function (e) {
     for (const t of this.items) t.tabIndex = t === e ? 0 : -1;
    }),
    (Lp = new WeakSet()),
    (Mp = function (e, t) {
     const n = [...this.checkedItems];
     'radio' === e.type && this.radioGroupItems.forEach((e) => (e.checked = !1)), (e.checked = !t || !e.checked), this.checkedItems.some((e, t) => e != n[t]) && this.dispatchEvent(new Event('change', { bubbles: !0, composed: !0 }));
    }),
    (Kp.shadowRootOptions = { mode: 'open' }),
    (Kp.getTemplateHTML = function (e) {
     return '\n    <style>\n      :host {\n        font: var(--media-font,\n          var(--media-font-weight, normal)\n          var(--media-font-size, 14px) /\n          var(--media-text-content-height, var(--media-control-height, 24px))\n          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        --_menu-bg: rgb(20 20 30 / .8);\n        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));\n        border-radius: var(--media-menu-border-radius);\n        border: var(--media-menu-border, none);\n        display: var(--media-menu-display, inline-flex);\n        transition: var(--media-menu-transition-in,\n          visibility 0s,\n          opacity .2s ease-out,\n          transform .15s ease-out,\n          left .2s ease-in-out,\n          min-width .2s ease-in-out,\n          min-height .2s ease-in-out\n        ) !important;\n        \n        visibility: var(--media-menu-visibility, visible);\n        opacity: var(--media-menu-opacity, 1);\n        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));\n        transform: var(--media-menu-transform-in, translateY(0) scale(1));\n        flex-direction: column;\n        \n        min-height: 0;\n        position: relative;\n        bottom: var(--_menu-bottom);\n        box-sizing: border-box;\n      } \n\n      @-moz-document url-prefix() {\n        :host{\n          --_menu-bg: rgb(20 20 30);\n        }\n      }\n\n      :host([hidden]) {\n        transition: var(--media-menu-transition-out,\n          visibility .15s ease-in,\n          opacity .15s ease-in,\n          transform .15s ease-in\n        ) !important;\n        visibility: var(--media-menu-hidden-visibility, hidden);\n        opacity: var(--media-menu-hidden-opacity, 0);\n        max-height: var(--media-menu-hidden-max-height,\n          var(--media-menu-max-height, var(--_menu-max-height, 300px)));\n        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));\n        pointer-events: none;\n      }\n\n      :host([slot="submenu"]) {\n        background: none;\n        width: 100%;\n        min-height: 100%;\n        position: absolute;\n        bottom: 0;\n        right: -100%;\n      }\n\n      #container {\n        display: flex;\n        flex-direction: column;\n        min-height: 0;\n        transition: transform .2s ease-out;\n        transform: translate(0, 0);\n      }\n\n      #container.has-expanded {\n        transition: transform .2s ease-in;\n        transform: translate(-100%, 0);\n      }\n\n      button {\n        background: none;\n        color: inherit;\n        border: none;\n        padding: 0;\n        font: inherit;\n        outline: inherit;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      slot[name="header"][hidden] {\n        display: none;\n      }\n\n      slot[name="header"] > *,\n      slot[name="header"]::slotted(*) {\n        padding: .4em .7em;\n        border-bottom: 1px solid rgb(255 255 255 / .25);\n        cursor: var(--media-cursor, default);\n      }\n\n      slot[name="header"] > button[part~="back"],\n      slot[name="header"]::slotted(button[part~="back"]) {\n        cursor: var(--media-cursor, pointer);\n      }\n\n      svg[part~="back"] {\n        height: var(--media-menu-icon-height, var(--media-control-height, 24px));\n        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));\n        display: block;\n        margin-right: .5ch;\n      }\n\n      slot:not([name]) {\n        gap: var(--media-menu-gap);\n        flex-direction: var(--media-menu-flex-direction, column);\n        overflow: var(--media-menu-overflow, hidden auto);\n        display: flex;\n        min-height: 0;\n      }\n\n      :host([role="menu"]) slot:not([name]) {\n        padding-block: .4em;\n      }\n\n      slot:not([name])::slotted([role="menu"]) {\n        background: none;\n      }\n\n      media-chrome-menu-item > span {\n        margin-right: .5ch;\n        max-width: var(--media-menu-item-max-width);\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n    </style>\n    <style id="layout-row" media="width:0">\n\n      slot[name="header"] > *,\n      slot[name="header"]::slotted(*) {\n        padding: .4em .5em;\n      }\n\n      slot:not([name]) {\n        gap: var(--media-menu-gap, .25em);\n        flex-direction: var(--media-menu-flex-direction, row);\n        padding-inline: .5em;\n      }\n\n      media-chrome-menu-item {\n        padding: .3em .5em;\n      }\n\n      media-chrome-menu-item[aria-checked="true"] {\n        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));\n      }\n\n      \n      media-chrome-menu-item::part(checked-indicator) {\n        display: var(--media-menu-item-checked-indicator-display, none);\n      }\n    </style>\n    <div id="container">\n      <slot name="header" hidden>\n        <button part="back button" aria-label="Back to previous menu">\n          <slot name="back-icon">\n            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">\n              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>\n            </svg>\n          </slot>\n          <slot name="title"></slot>\n        </button>\n      </slot>\n      <slot></slot>\n    </div>\n    <slot name="checked-indicator" hidden></slot>\n  ';
    }),
    Zr.customElements.get('media-chrome-menu') || Zr.customElements.define('media-chrome-menu', Kp);
   var jp,
    Gp,
    Qp,
    Zp,
    zp,
    Xp,
    Jp,
    ev,
    tv,
    nv,
    iv,
    av,
    rv,
    sv,
    ov,
    lv = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    dv = (e, t, n) => (lv(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    uv = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    cv = (e, t, n, i) => (lv(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    hv = (e, t, n) => (lv(e, t, 'access private method'), n);
   const mv = 'type',
    pv = 'value',
    vv = 'checked',
    bv = 'disabled';
   class gv extends Zr.HTMLElement {
    constructor() {
     if (
      (super(),
      uv(this, Qp),
      uv(this, zp),
      uv(this, Jp),
      uv(this, nv),
      uv(this, av),
      uv(this, sv),
      uv(this, jp, !1),
      uv(this, Gp, void 0),
      uv(this, tv, () => {
       var e, t;
       this.setAttribute('submenusize', `${this.submenuElement.items.length}`);
       const n = this.shadowRoot.querySelector('slot[name="description"]'),
        i = null == (e = this.submenuElement.checkedItems) ? void 0 : e[0],
        a = null != (t = null == i ? void 0 : i.dataset.description) ? t : null == i ? void 0 : i.text,
        r = zr.createElement('span');
       (r.textContent = null != a ? a : ''), n.replaceChildren(r);
      }),
      !this.shadowRoot)
     ) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const e = is(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(e);
     }
     this.shadowRoot.addEventListener('slotchange', this);
    }
    static get observedAttributes() {
     return [mv, bv, vv, pv];
    }
    enable() {
     this.hasAttribute('tabindex') || this.setAttribute('tabindex', '-1'), Ev(this) && !this.hasAttribute('aria-checked') && this.setAttribute('aria-checked', 'false'), this.addEventListener('click', this), this.addEventListener('keydown', this);
    }
    disable() {
     this.removeAttribute('tabindex'), this.removeEventListener('click', this), this.removeEventListener('keydown', this), this.removeEventListener('keyup', this);
    }
    handleEvent(e) {
     switch (e.type) {
      case 'slotchange':
       hv(this, Qp, Zp).call(this, e);
       break;
      case 'click':
       this.handleClick(e);
       break;
      case 'keydown':
       hv(this, av, rv).call(this, e);
       break;
      case 'keyup':
       hv(this, nv, iv).call(this, e);
     }
    }
    attributeChangedCallback(e, t, n) {
     e === vv && Ev(this) && !dv(this, jp) ? this.setAttribute('aria-checked', null != n ? 'true' : 'false') : e === mv && n !== t ? (this.role = 'menuitem' + n) : e === bv && n !== t && (null == n ? this.enable() : this.disable());
    }
    connectedCallback() {
     this.hasAttribute(bv) || this.enable(), (this.role = 'menuitem' + this.type), cv(this, Gp, fv(this, this.parentNode)), hv(this, sv, ov).call(this);
    }
    disconnectedCallback() {
     this.disable(), hv(this, sv, ov).call(this), cv(this, Gp, null);
    }
    get invokeTarget() {
     return this.getAttribute('invoketarget');
    }
    set invokeTarget(e) {
     this.setAttribute('invoketarget', `${e}`);
    }
    get invokeTargetElement() {
     var e;
     return this.invokeTarget ? (null == (e = cs(this)) ? void 0 : e.querySelector(`#${this.invokeTarget}`)) : this.submenuElement;
    }
    get submenuElement() {
     return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({ flatten: !0 })[0];
    }
    get type() {
     var e;
     return null != (e = this.getAttribute(mv)) ? e : '';
    }
    set type(e) {
     this.setAttribute(mv, `${e}`);
    }
    get value() {
     var e;
     return null != (e = this.getAttribute(pv)) ? e : this.text;
    }
    set value(e) {
     this.setAttribute(pv, e);
    }
    get text() {
     var e;
     return (null != (e = this.textContent) ? e : '').trim();
    }
    get checked() {
     if (Ev(this)) return 'true' === this.getAttribute('aria-checked');
    }
    set checked(e) {
     Ev(this) && (cv(this, jp, !0), this.setAttribute('aria-checked', e ? 'true' : 'false'), e ? this.part.add('checked') : this.part.remove('checked'));
    }
    handleClick(e) {
     Ev(this) || (this.invokeTargetElement && ls(this, e.target) && this.invokeTargetElement.dispatchEvent(new Vm({ relatedTarget: this })));
    }
    get keysUsed() {
     return ['Enter', ' '];
    }
   }
   function Ev(e) {
    return 'radio' === e.type || 'checkbox' === e.type;
   }
   function fv(e, t) {
    if (!e) return null;
    const { host: n } = e.getRootNode();
    return !t && n ? fv(e, n) : (null == t ? void 0 : t.items) ? t : fv(t, null == t ? void 0 : t.parentNode);
   }
   (jp = new WeakMap()),
    (Gp = new WeakMap()),
    (Qp = new WeakSet()),
    (Zp = function (e) {
     const t = e.target;
     if (!(null == t ? void 0 : t.name)) for (const n of t.assignedNodes({ flatten: !0 })) n instanceof Text && '' === n.textContent.trim() && n.remove();
     'submenu' === t.name && (this.submenuElement ? hv(this, zp, Xp).call(this) : hv(this, Jp, ev).call(this));
    }),
    (zp = new WeakSet()),
    (Xp = async function () {
     this.setAttribute('aria-haspopup', 'menu'), this.setAttribute('aria-expanded', `${!this.submenuElement.hidden}`), this.submenuElement.addEventListener('change', dv(this, tv)), this.submenuElement.addEventListener('addmenuitem', dv(this, tv)), this.submenuElement.addEventListener('removemenuitem', dv(this, tv)), dv(this, tv).call(this);
    }),
    (Jp = new WeakSet()),
    (ev = function () {
     this.removeAttribute('aria-haspopup'), this.removeAttribute('aria-expanded'), this.submenuElement.removeEventListener('change', dv(this, tv)), this.submenuElement.removeEventListener('addmenuitem', dv(this, tv)), this.submenuElement.removeEventListener('removemenuitem', dv(this, tv)), dv(this, tv).call(this);
    }),
    (tv = new WeakMap()),
    (nv = new WeakSet()),
    (iv = function (e) {
     const { key: t } = e;
     this.keysUsed.includes(t) ? this.handleClick(e) : this.removeEventListener('keyup', hv(this, nv, iv));
    }),
    (av = new WeakSet()),
    (rv = function (e) {
     const { metaKey: t, altKey: n, key: i } = e;
     t || n || !this.keysUsed.includes(i) ? this.removeEventListener('keyup', hv(this, nv, iv)) : this.addEventListener('keyup', hv(this, nv, iv), { once: !0 });
    }),
    (sv = new WeakSet()),
    (ov = function () {
     var e;
     const t = null == (e = dv(this, Gp)) ? void 0 : e.radioGroupItems;
     if (!t) return;
     let n = t.filter((e) => 'true' === e.getAttribute('aria-checked')).pop();
     n || (n = t[0]);
     for (const i of t) i.setAttribute('aria-checked', 'false');
     null == n || n.setAttribute('aria-checked', 'true');
    }),
    (gv.shadowRootOptions = { mode: 'open' }),
    (gv.getTemplateHTML = function (e) {
     return `\n    <style>\n      :host {\n        transition: var(--media-menu-item-transition,\n          background .15s linear,\n          opacity .2s ease-in-out\n        );\n        outline: var(--media-menu-item-outline, 0);\n        outline-offset: var(--media-menu-item-outline-offset, -1px);\n        cursor: var(--media-cursor, pointer);\n        display: flex;\n        align-items: center;\n        align-self: stretch;\n        justify-self: stretch;\n        white-space: nowrap;\n        white-space-collapse: collapse;\n        text-wrap: nowrap;\n        padding: .4em .8em .4em 1em;\n      }\n\n      :host(:focus-visible) {\n        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));\n        outline: var(--media-menu-item-hover-outline, 0);\n        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));\n      }\n\n      :host(:hover) {\n        cursor: var(--media-cursor, pointer);\n        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));\n        outline: var(--media-menu-item-hover-outline);\n        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));\n      }\n\n      :host([aria-checked="true"]) {\n        background: var(--media-menu-item-checked-background);\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        color: rgba(255, 255, 255, .3);\n      }\n\n      slot:not([name]) {\n        width: 100%;\n      }\n\n      slot:not([name="submenu"]) {\n        display: inline-flex;\n        align-items: center;\n        transition: inherit;\n        opacity: var(--media-menu-item-opacity, 1);\n      }\n\n      slot[name="description"] {\n        justify-content: end;\n      }\n\n      slot[name="description"] > span {\n        display: inline-block;\n        margin-inline: 1em .2em;\n        max-width: var(--media-menu-item-description-max-width, 100px);\n        text-overflow: ellipsis;\n        overflow: hidden;\n        font-size: .8em;\n        font-weight: 400;\n        text-align: right;\n        position: relative;\n        top: .04em;\n      }\n\n      slot[name="checked-indicator"] {\n        display: none;\n      }\n\n      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {\n        display: var(--media-menu-item-checked-indicator-display, inline-block);\n      }\n\n      \n      svg, img, ::slotted(svg), ::slotted(img) {\n        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));\n        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));\n        display: block;\n      }\n\n      \n      [part~="indicator"],\n      ::slotted([part~="indicator"]) {\n        fill: var(--media-menu-item-indicator-fill,\n          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));\n        height: var(--media-menu-item-indicator-height, 1.25em);\n        margin-right: .5ch;\n      }\n\n      [part~="checked-indicator"] {\n        visibility: hidden;\n      }\n\n      :host([aria-checked="true"]) [part~="checked-indicator"] {\n        visibility: visible;\n      }\n    </style>\n    <slot name="checked-indicator">\n      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">\n        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>\n      </svg>\n    </slot>\n    <slot name="prefix"></slot>\n    <slot></slot>\n    <slot name="description"></slot>\n    <slot name="suffix">\n      ${this.getSuffixSlotInnerHTML(e)}\n    </slot>\n    <slot name="submenu"></slot>\n  `;
    }),
    (gv.getSuffixSlotInnerHTML = function (e) {
     return '';
    }),
    Zr.customElements.get('media-chrome-menu-item') || Zr.customElements.define('media-chrome-menu-item', gv);
   class yv extends Kp {
    get anchorElement() {
     return 'auto' !== this.anchor ? super.anchorElement : as(this).querySelector('media-settings-menu-button');
    }
   }
   (yv.getTemplateHTML = function (e) {
    return `\n    ${Kp.getTemplateHTML(e)}\n    <style>\n      :host {\n        --_menu-bg: rgb(20 20 30 / .8);\n        background: var(--media-settings-menu-background,\n            var(--media-menu-background,\n              var(--media-control-background,\n                var(--media-secondary-color, var(--_menu-bg)))));\n        min-width: var(--media-settings-menu-min-width, 170px);\n        border-radius: 2px 2px 0 0;\n        overflow: hidden;\n      }\n\n      @-moz-document url-prefix() {\n        :host{\n          --_menu-bg: rgb(20 20 30);\n        }\n      }\n\n      :host([role="menu"]) {\n        \n        justify-content: end;\n      }\n\n      slot:not([name]) {\n        justify-content: var(--media-settings-menu-justify-content);\n        flex-direction: var(--media-settings-menu-flex-direction, column);\n        overflow: visible;\n      }\n\n      #container.has-expanded {\n        --media-settings-menu-item-opacity: 0;\n      }\n    </style>\n  `;
   }),
    Zr.customElements.get('media-settings-menu') || Zr.customElements.define('media-settings-menu', yv);
   class _v extends gv {}
   (_v.shadowRootOptions = { mode: 'open' }),
    (_v.getTemplateHTML = function (e) {
     return `\n    ${gv.getTemplateHTML.call(this, e)}\n    <style>\n      slot:not([name="submenu"]) {\n        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));\n      }\n\n      :host([aria-expanded="true"]:hover) {\n        background: transparent;\n      }\n    </style>\n  `;
    }),
    (_v.getSuffixSlotInnerHTML = function (e) {
     return '\n    <svg aria-hidden="true" viewBox="0 0 20 24">\n      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>\n    </svg>\n  ';
    }),
    Zr.customElements.get('media-settings-menu-item') || Zr.customElements.define('media-settings-menu-item', _v);
   class Tv extends sd {
    connectedCallback() {
     super.connectedCallback(), this.invokeTargetElement && this.setAttribute('aria-haspopup', 'menu');
    }
    get invokeTarget() {
     return this.getAttribute('invoketarget');
    }
    set invokeTarget(e) {
     this.setAttribute('invoketarget', `${e}`);
    }
    get invokeTargetElement() {
     var e;
     return this.invokeTarget ? (null == (e = cs(this)) ? void 0 : e.querySelector(`#${this.invokeTarget}`)) : null;
    }
    handleClick() {
     var e;
     null == (e = this.invokeTargetElement) || e.dispatchEvent(new Vm({ relatedTarget: this }));
    }
   }
   Zr.customElements.get('media-chrome-menu-button') || Zr.customElements.define('media-chrome-menu-button', Tv);
   class Av extends Tv {
    static get observedAttributes() {
     return [...super.observedAttributes, 'target'];
    }
    connectedCallback() {
     super.connectedCallback(), this.setAttribute('aria-label', $r('settings'));
    }
    get invokeTargetElement() {
     return null != this.invokeTarget ? super.invokeTargetElement : as(this).querySelector('media-settings-menu');
    }
   }
   (Av.getSlotTemplateHTML = function () {
    return '\n    <style>\n      :host([aria-expanded="true"]) slot[name=tooltip] {\n        display: none;\n      }\n    </style>\n    <slot name="icon">\n      <svg aria-hidden="true" viewBox="0 0 24 24">\n        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>\n      </svg>\n    </slot>\n  ';
   }),
    (Av.getTooltipContentHTML = function () {
     return $r('Settings');
    }),
    Zr.customElements.get('media-settings-menu-button') || Zr.customElements.define('media-settings-menu-button', Av);
   var kv,
    wv,
    Iv,
    Sv,
    Rv,
    Cv,
    Dv = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    Lv = (e, t, n) => (Dv(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    Mv = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    xv = (e, t, n, i) => (Dv(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    Nv = (e, t, n) => (Dv(e, t, 'access private method'), n);
   class Ov extends Kp {
    constructor() {
     super(...arguments), Mv(this, Iv), Mv(this, Rv), Mv(this, kv, []), Mv(this, wv, void 0);
    }
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_AUDIO_TRACK_LIST, br.MEDIA_AUDIO_TRACK_ENABLED, br.MEDIA_AUDIO_TRACK_UNAVAILABLE];
    }
    attributeChangedCallback(e, t, n) {
     var i;
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_AUDIO_TRACK_ENABLED && t !== n ? (this.value = n) : e === br.MEDIA_AUDIO_TRACK_LIST && t !== n && (xv(this, kv, null == (i = null != n ? n : '') ? void 0 : i.split(/\s+/).map(Lr)), Nv(this, Iv, Sv).call(this));
    }
    connectedCallback() {
     super.connectedCallback(), this.addEventListener('change', Nv(this, Rv, Cv));
    }
    disconnectedCallback() {
     super.disconnectedCallback(), this.removeEventListener('change', Nv(this, Rv, Cv));
    }
    get anchorElement() {
     var e;
     return 'auto' !== this.anchor ? super.anchorElement : null == (e = as(this)) ? void 0 : e.querySelector('media-audio-track-menu-button');
    }
    get mediaAudioTrackList() {
     return Lv(this, kv);
    }
    set mediaAudioTrackList(e) {
     xv(this, kv, e), Nv(this, Iv, Sv).call(this);
    }
    get mediaAudioTrackEnabled() {
     var e;
     return null != (e = fs(this, br.MEDIA_AUDIO_TRACK_ENABLED)) ? e : '';
    }
    set mediaAudioTrackEnabled(e) {
     ys(this, br.MEDIA_AUDIO_TRACK_ENABLED, e);
    }
   }
   (kv = new WeakMap()),
    (wv = new WeakMap()),
    (Iv = new WeakSet()),
    (Sv = function () {
     if (Lv(this, wv) === JSON.stringify(this.mediaAudioTrackList)) return;
     xv(this, wv, JSON.stringify(this.mediaAudioTrackList));
     const e = this.mediaAudioTrackList;
     this.defaultSlot.textContent = '';
     for (const t of e) {
      const e = Hp({ type: 'radio', text: this.formatMenuItemText(t.label, t), value: `${t.id}`, checked: t.enabled });
      e.prepend(Wp(this, 'checked-indicator')), this.defaultSlot.append(e);
     }
    }),
    (Rv = new WeakSet()),
    (Cv = function () {
     if (null == this.value) return;
     const e = new Zr.CustomEvent(hr.MEDIA_AUDIO_TRACK_REQUEST, { composed: !0, bubbles: !0, detail: this.value });
     this.dispatchEvent(e);
    }),
    Zr.customElements.get('media-audio-track-menu') || Zr.customElements.define('media-audio-track-menu', Ov);
   class Pv extends Tv {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_AUDIO_TRACK_ENABLED, br.MEDIA_AUDIO_TRACK_UNAVAILABLE];
    }
    connectedCallback() {
     super.connectedCallback(), this.setAttribute('aria-label', $r('Audio'));
    }
    get invokeTargetElement() {
     var e;
     return null != this.invokeTarget ? super.invokeTargetElement : null == (e = as(this)) ? void 0 : e.querySelector('media-audio-track-menu');
    }
    get mediaAudioTrackEnabled() {
     var e;
     return null != (e = fs(this, br.MEDIA_AUDIO_TRACK_ENABLED)) ? e : '';
    }
    set mediaAudioTrackEnabled(e) {
     ys(this, br.MEDIA_AUDIO_TRACK_ENABLED, e);
    }
   }
   (Pv.getSlotTemplateHTML = function () {
    return '\n    <style>\n      :host([aria-expanded="true"]) slot[name=tooltip] {\n        display: none;\n      }\n    </style>\n    <slot name="icon"><svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>\n  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>\n</svg></slot>\n  ';
   }),
    (Pv.getTooltipContentHTML = function () {
     return $r('Audio');
    }),
    Zr.customElements.get('media-audio-track-menu-button') || Zr.customElements.define('media-audio-track-menu-button', Pv);
   var Uv,
    Hv,
    Wv,
    Bv,
    Vv,
    $v = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    qv = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    Kv = (e, t, n) => ($v(e, t, 'access private method'), n);
   class Fv extends Kp {
    constructor() {
     super(...arguments), qv(this, Hv), qv(this, Bv), qv(this, Uv, void 0);
    }
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_SUBTITLES_LIST, br.MEDIA_SUBTITLES_SHOWING];
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_SUBTITLES_LIST && t !== n ? Kv(this, Hv, Wv).call(this) : e === br.MEDIA_SUBTITLES_SHOWING && t !== n && (this.value = n);
    }
    connectedCallback() {
     super.connectedCallback(), this.addEventListener('change', Kv(this, Bv, Vv));
    }
    disconnectedCallback() {
     super.disconnectedCallback(), this.removeEventListener('change', Kv(this, Bv, Vv));
    }
    get anchorElement() {
     return 'auto' !== this.anchor ? super.anchorElement : as(this).querySelector('media-captions-menu-button');
    }
    get mediaSubtitlesList() {
     return Yv(this, br.MEDIA_SUBTITLES_LIST);
    }
    set mediaSubtitlesList(e) {
     jv(this, br.MEDIA_SUBTITLES_LIST, e);
    }
    get mediaSubtitlesShowing() {
     return Yv(this, br.MEDIA_SUBTITLES_SHOWING);
    }
    set mediaSubtitlesShowing(e) {
     jv(this, br.MEDIA_SUBTITLES_SHOWING, e);
    }
   }
   (Uv = new WeakMap()),
    (Hv = new WeakSet()),
    (Wv = function () {
     var e, t, n, i;
     if (($v((t = this), (n = Uv), 'read from private field'), (i ? i.call(t) : n.get(t)) === JSON.stringify(this.mediaSubtitlesList))) return;
     ((e, t, n, i) => {
      $v(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n);
     })(this, Uv, JSON.stringify(this.mediaSubtitlesList)),
      (this.defaultSlot.textContent = '');
     const a = !this.value,
      r = Hp({ type: 'radio', text: this.formatMenuItemText($r('Off')), value: 'off', checked: a });
     r.prepend(Wp(this, 'checked-indicator')), this.defaultSlot.append(r);
     const s = this.mediaSubtitlesList;
     for (const o of s) {
      const t = Hp({ type: 'radio', text: this.formatMenuItemText(o.label, o), value: go(o), checked: this.value == go(o) });
      t.prepend(Wp(this, 'checked-indicator'));
      'captions' === (null != (e = o.kind) ? e : 'subs') && t.append(Wp(this, 'captions-indicator')), this.defaultSlot.append(t);
     }
    }),
    (Bv = new WeakSet()),
    (Vv = function () {
     const e = this.mediaSubtitlesShowing,
      t = this.getAttribute(br.MEDIA_SUBTITLES_SHOWING),
      n = this.value !== t;
     if (((null == e ? void 0 : e.length) && n && this.dispatchEvent(new Zr.CustomEvent(hr.MEDIA_DISABLE_SUBTITLES_REQUEST, { composed: !0, bubbles: !0, detail: e })), !this.value || !n)) return;
     const i = new Zr.CustomEvent(hr.MEDIA_SHOW_SUBTITLES_REQUEST, { composed: !0, bubbles: !0, detail: this.value });
     this.dispatchEvent(i);
    }),
    (Fv.getTemplateHTML = function (e) {
     return `\n    ${Kp.getTemplateHTML(e)}\n    <slot name="captions-indicator" hidden>\n  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">\n    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>\n  </svg></slot>\n  `;
    });
   const Yv = (e, t) => {
     const n = e.getAttribute(t);
     return n ? vo(n) : [];
    },
    jv = (e, t, n) => {
     if (!(null == n ? void 0 : n.length)) return void e.removeAttribute(t);
     const i = Eo(n);
     e.getAttribute(t) !== i && e.setAttribute(t, i);
    };
   Zr.customElements.get('media-captions-menu') || Zr.customElements.define('media-captions-menu', Fv);
   const Gv = (e) => {
    e.setAttribute('aria-checked', To(e).toString());
   };
   class Qv extends Tv {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_SUBTITLES_LIST, br.MEDIA_SUBTITLES_SHOWING];
    }
    connectedCallback() {
     super.connectedCallback(), this.setAttribute('aria-label', $r('closed captions')), Gv(this);
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_SUBTITLES_SHOWING && Gv(this);
    }
    get invokeTargetElement() {
     var e;
     return null != this.invokeTarget ? super.invokeTargetElement : null == (e = as(this)) ? void 0 : e.querySelector('media-captions-menu');
    }
    get mediaSubtitlesList() {
     return Zv(this, br.MEDIA_SUBTITLES_LIST);
    }
    set mediaSubtitlesList(e) {
     zv(this, br.MEDIA_SUBTITLES_LIST, e);
    }
    get mediaSubtitlesShowing() {
     return Zv(this, br.MEDIA_SUBTITLES_SHOWING);
    }
    set mediaSubtitlesShowing(e) {
     zv(this, br.MEDIA_SUBTITLES_SHOWING, e);
    }
   }
   (Qv.getSlotTemplateHTML = function () {
    return '\n    <style>\n      :host([aria-checked="true"]) slot[name=off] {\n        display: none !important;\n      }\n\n      \n      :host(:not([aria-checked="true"])) slot[name=on] {\n        display: none !important;\n      }\n\n      :host([aria-expanded="true"]) slot[name=tooltip] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="on"><svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>\n</svg></slot>\n      <slot name="off"><svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>\n</svg></slot>\n    </slot>\n  ';
   }),
    (Qv.getTooltipContentHTML = function () {
     return $r('Captions');
    });
   const Zv = (e, t) => {
     const n = e.getAttribute(t);
     return n ? vo(n) : [];
    },
    zv = (e, t, n) => {
     if (!(null == n ? void 0 : n.length)) return void e.removeAttribute(t);
     const i = Eo(n);
     e.getAttribute(t) !== i && e.setAttribute(t, i);
    };
   Zr.customElements.get('media-captions-menu-button') || Zr.customElements.define('media-captions-menu-button', Qv);
   var Xv,
    Jv,
    eb,
    tb,
    nb,
    ib = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    ab = (e, t, n) => (ib(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    rb = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    sb = (e, t, n) => (ib(e, t, 'access private method'), n);
   const ob = 'rates';
   class lb extends Kp {
    constructor() {
     super(), rb(this, Jv), rb(this, tb), rb(this, Xv, new mo(this, ob, { defaultValue: cc })), sb(this, Jv, eb).call(this);
    }
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_PLAYBACK_RATE, ob];
    }
    attributeChangedCallback(e, t, n) {
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_PLAYBACK_RATE && t != n ? (this.value = n) : e === ob && t != n && ((ab(this, Xv).value = n), sb(this, Jv, eb).call(this));
    }
    connectedCallback() {
     super.connectedCallback(), this.addEventListener('change', sb(this, tb, nb));
    }
    disconnectedCallback() {
     super.disconnectedCallback(), this.removeEventListener('change', sb(this, tb, nb));
    }
    get anchorElement() {
     return 'auto' !== this.anchor ? super.anchorElement : as(this).querySelector('media-playback-rate-menu-button');
    }
    get rates() {
     return ab(this, Xv);
    }
    set rates(e) {
     e ? (Array.isArray(e) ? (ab(this, Xv).value = e.join(' ')) : 'string' == typeof e && (ab(this, Xv).value = e)) : (ab(this, Xv).value = ''), sb(this, Jv, eb).call(this);
    }
    get mediaPlaybackRate() {
     return vs(this, br.MEDIA_PLAYBACK_RATE, 1);
    }
    set mediaPlaybackRate(e) {
     bs(this, br.MEDIA_PLAYBACK_RATE, e);
    }
   }
   (Xv = new WeakMap()),
    (Jv = new WeakSet()),
    (eb = function () {
     this.defaultSlot.textContent = '';
     for (const e of ab(this, Xv)) {
      const t = Hp({ type: 'radio', text: this.formatMenuItemText(`${e}x`, e), value: e, checked: this.mediaPlaybackRate === Number(e) });
      t.prepend(Wp(this, 'checked-indicator')), this.defaultSlot.append(t);
     }
    }),
    (tb = new WeakSet()),
    (nb = function () {
     if (!this.value) return;
     const e = new Zr.CustomEvent(hr.MEDIA_PLAYBACK_RATE_REQUEST, { composed: !0, bubbles: !0, detail: this.value });
     this.dispatchEvent(e);
    }),
    Zr.customElements.get('media-playback-rate-menu') || Zr.customElements.define('media-playback-rate-menu', lb);
   class db extends Tv {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_PLAYBACK_RATE];
    }
    constructor() {
     var e;
     super(), (this.container = this.shadowRoot.querySelector('slot[name="icon"]')), (this.container.innerHTML = `${null != (e = this.mediaPlaybackRate) ? e : 1}x`);
    }
    attributeChangedCallback(e, t, n) {
     if ((super.attributeChangedCallback(e, t, n), e === br.MEDIA_PLAYBACK_RATE)) {
      const e = n ? +n : Number.NaN,
       t = Number.isNaN(e) ? 1 : e;
      (this.container.innerHTML = `${t}x`), this.setAttribute('aria-label', $r('Playback rate {playbackRate}', { playbackRate: t }));
     }
    }
    get invokeTargetElement() {
     return null != this.invokeTarget ? super.invokeTargetElement : as(this).querySelector('media-playback-rate-menu');
    }
    get mediaPlaybackRate() {
     return vs(this, br.MEDIA_PLAYBACK_RATE, 1);
    }
    set mediaPlaybackRate(e) {
     bs(this, br.MEDIA_PLAYBACK_RATE, e);
    }
   }
   (db.getSlotTemplateHTML = function (e) {
    return `\n    <style>\n      :host {\n        min-width: 5ch;\n        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));\n      }\n      \n      :host([aria-expanded="true"]) slot[name=tooltip] {\n        display: none;\n      }\n    </style>\n    <slot name="icon">${e.mediaplaybackrate || 1}x</slot>\n  `;
   }),
    (db.getTooltipContentHTML = function () {
     return $r('Playback rate');
    }),
    Zr.customElements.get('media-playback-rate-menu-button') || Zr.customElements.define('media-playback-rate-menu-button', db);
   var ub,
    cb,
    hb,
    mb,
    pb,
    vb,
    bb = (e, t, n) => {
     if (!t.has(e)) throw TypeError('Cannot ' + n);
    },
    gb = (e, t, n) => (bb(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    Eb = (e, t, n) => {
     if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
     t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    fb = (e, t, n, i) => (bb(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    yb = (e, t, n) => (bb(e, t, 'access private method'), n);
   class _b extends Kp {
    constructor() {
     super(...arguments), Eb(this, hb), Eb(this, pb), Eb(this, ub, []), Eb(this, cb, {});
    }
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_RENDITION_LIST, br.MEDIA_RENDITION_SELECTED, br.MEDIA_RENDITION_UNAVAILABLE, br.MEDIA_HEIGHT];
    }
    attributeChangedCallback(e, t, n) {
     var i;
     super.attributeChangedCallback(e, t, n), e === br.MEDIA_RENDITION_SELECTED && t !== n ? ((this.value = null != n ? n : 'auto'), yb(this, hb, mb).call(this)) : e === br.MEDIA_RENDITION_LIST && t !== n ? (fb(this, ub, null == (i = n) ? void 0 : i.split(/\s+/).map(Cr)), yb(this, hb, mb).call(this)) : e === br.MEDIA_HEIGHT && t !== n && yb(this, hb, mb).call(this);
    }
    connectedCallback() {
     super.connectedCallback(), this.addEventListener('change', yb(this, pb, vb));
    }
    disconnectedCallback() {
     super.disconnectedCallback(), this.removeEventListener('change', yb(this, pb, vb));
    }
    get anchorElement() {
     return 'auto' !== this.anchor ? super.anchorElement : as(this).querySelector('media-rendition-menu-button');
    }
    get mediaRenditionList() {
     return gb(this, ub);
    }
    set mediaRenditionList(e) {
     fb(this, ub, e), yb(this, hb, mb).call(this);
    }
    get mediaRenditionSelected() {
     return fs(this, br.MEDIA_RENDITION_SELECTED);
    }
    set mediaRenditionSelected(e) {
     ys(this, br.MEDIA_RENDITION_SELECTED, e);
    }
    get mediaHeight() {
     return vs(this, br.MEDIA_HEIGHT);
    }
    set mediaHeight(e) {
     bs(this, br.MEDIA_HEIGHT, e);
    }
   }
   (ub = new WeakMap()),
    (cb = new WeakMap()),
    (hb = new WeakSet()),
    (mb = function () {
     if (gb(this, cb).mediaRenditionList === JSON.stringify(this.mediaRenditionList) && gb(this, cb).mediaHeight === this.mediaHeight) return;
     (gb(this, cb).mediaRenditionList = JSON.stringify(this.mediaRenditionList)), (gb(this, cb).mediaHeight = this.mediaHeight);
     const e = this.mediaRenditionList.sort((e, t) => t.height - e.height);
     for (const a of e) a.selected = a.id === this.mediaRenditionSelected;
     this.defaultSlot.textContent = '';
     const t = !this.mediaRenditionSelected;
     for (const a of e) {
      const e = Hp({ type: 'radio', text: this.formatMenuItemText(`${Math.min(a.width, a.height)}p`, a), value: `${a.id}`, checked: a.selected && !t });
      e.prepend(Wp(this, 'checked-indicator')), this.defaultSlot.append(e);
     }
     const n = Hp({ type: 'radio', text: t ? this.formatMenuItemText(`${$r('Auto')} (${this.mediaHeight}p)`) : this.formatMenuItemText($r('Auto')), value: 'auto', checked: t }),
      i = this.mediaHeight > 0 ? `${$r('Auto')} (${this.mediaHeight}p)` : $r('Auto');
     (n.dataset.description = i), n.prepend(Wp(this, 'checked-indicator')), this.defaultSlot.append(n);
    }),
    (pb = new WeakSet()),
    (vb = function () {
     if (null == this.value) return;
     const e = new Zr.CustomEvent(hr.MEDIA_RENDITION_REQUEST, { composed: !0, bubbles: !0, detail: this.value });
     this.dispatchEvent(e);
    }),
    Zr.customElements.get('media-rendition-menu') || Zr.customElements.define('media-rendition-menu', _b);
   class Tb extends Tv {
    static get observedAttributes() {
     return [...super.observedAttributes, br.MEDIA_RENDITION_SELECTED, br.MEDIA_RENDITION_UNAVAILABLE, br.MEDIA_HEIGHT];
    }
    connectedCallback() {
     super.connectedCallback(), this.setAttribute('aria-label', $r('quality'));
    }
    get invokeTargetElement() {
     return null != this.invokeTarget ? super.invokeTargetElement : as(this).querySelector('media-rendition-menu');
    }
    get mediaRenditionSelected() {
     return fs(this, br.MEDIA_RENDITION_SELECTED);
    }
    set mediaRenditionSelected(e) {
     ys(this, br.MEDIA_RENDITION_SELECTED, e);
    }
    get mediaHeight() {
     return vs(this, br.MEDIA_HEIGHT);
    }
    set mediaHeight(e) {
     bs(this, br.MEDIA_HEIGHT, e);
    }
   }
   (Tb.getSlotTemplateHTML = function () {
    return '\n    <style>\n      :host([aria-expanded="true"]) slot[name=tooltip] {\n        display: none;\n      }\n    </style>\n    <slot name="icon"><svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />\n</svg></slot>\n  ';
   }),
    (Tb.getTooltipContentHTML = function () {
     return $r('Quality');
    }),
    Zr.customElements.get('media-rendition-menu-button') || Zr.customElements.define('media-rendition-menu-button', Tb);
   var Ab = (e) => {
     throw TypeError(e);
    },
    kb = (e, t, n) => t.has(e) || Ab('Cannot ' + n),
    wb = (e, t, n) => (kb(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
    Ib = (e, t, n) => (t.has(e) ? Ab('Cannot add the same private member more than once') : t instanceof WeakSet ? t.add(e) : t.set(e, n)),
    Sb = (e, t, n, i) => (kb(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n), n),
    Rb = (e, t, n) => (kb(e, t, 'access private method'), n),
    Cb = class {
     addEventListener() {}
     removeEventListener() {}
     dispatchEvent(e) {
      return !0;
     }
    };
   if ('undefined' == typeof DocumentFragment) {
    class e extends Cb {}
    globalThis.DocumentFragment = e;
   }
   var Db,
    Lb = class extends Cb {},
    Mb = { get(e) {}, define(e, t, n) {}, getName: (e) => null, upgrade(e) {}, whenDefined: (e) => Promise.resolve(Lb) };
   Db = new WeakMap();
   var xb = {
     document: {
      createElement: function (e, t) {
       return new Lb();
      },
     },
     DocumentFragment: DocumentFragment,
     customElements: Mb,
     CustomEvent: class {
      constructor(e, t = {}) {
       Ib(this, Db), Sb(this, Db, null == t ? void 0 : t.detail);
      }
      get detail() {
       return wb(this, Db);
      }
      initCustomEvent() {}
     },
     EventTarget: Cb,
     HTMLElement: Lb,
     HTMLVideoElement: class extends Cb {},
    },
    Nb = 'undefined' == typeof window || void 0 === globalThis.customElements,
    Ob = Nb ? xb : globalThis,
    Pb = Nb ? xb.document : globalThis.document;
   function Ub(e) {
    return e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
   }
   function Hb(e) {
    return e.replace(/[-_]([a-z])/g, (e, t) => t.toUpperCase());
   }
   function Wb(e) {
    if (null == e) return;
    let t = +e;
    return Number.isNaN(t) ? void 0 : t;
   }
   function Bb(e) {
    let t = (function (e) {
     let t = {};
     for (let n in e) null != e[n] && (t[n] = e[n]);
     return new URLSearchParams(t);
    })(e).toString();
    return t ? '?' + t : '';
   }
   var Vb = (e, t) => !(!e || !t) && (!!e.contains(t) || Vb(e, t.getRootNode().host)),
    $b = 'mux.com',
    qb = (() => {
     try {
      return '3.5.3';
     } catch {}
     return 'UNKNOWN';
    })(),
    Kb = () => qb,
    Fb = (e) => {
     if (e) {
      if ([fn.LIVE, fn.ON_DEMAND].includes(e)) return e;
      if (null != e && e.includes('live')) return fn.LIVE;
     }
    },
    Yb = { crossorigin: 'crossOrigin', playsinline: 'playsInline' };
   function jb(e) {
    var t;
    return null != (t = Yb[e]) ? t : Hb(e);
   }
   var Gb,
    Qb,
    Zb,
    zb = class {
     constructor(e, t) {
      Ib(this, Gb), Ib(this, Qb), Ib(this, Zb, []), Sb(this, Gb, e), Sb(this, Qb, t);
     }
     [Symbol.iterator]() {
      return wb(this, Zb).values();
     }
     get length() {
      return wb(this, Zb).length;
     }
     get value() {
      var e;
      return null != (e = wb(this, Zb).join(' ')) ? e : '';
     }
     set value(e) {
      var t;
      e !== this.value && (Sb(this, Zb, []), this.add(...(null != (t = null == e ? void 0 : e.split(' ')) ? t : [])));
     }
     toString() {
      return this.value;
     }
     item(e) {
      return wb(this, Zb)[e];
     }
     values() {
      return wb(this, Zb).values();
     }
     keys() {
      return wb(this, Zb).keys();
     }
     forEach(e) {
      wb(this, Zb).forEach(e);
     }
     add(...e) {
      var t, n;
      e.forEach((e) => {
       this.contains(e) || wb(this, Zb).push(e);
      }),
       ('' !== this.value || (null != (t = wb(this, Gb)) && t.hasAttribute(`${wb(this, Qb)}`))) && (null == (n = wb(this, Gb)) || n.setAttribute(`${wb(this, Qb)}`, `${this.value}`));
     }
     remove(...e) {
      var t;
      e.forEach((e) => {
       wb(this, Zb).splice(wb(this, Zb).indexOf(e), 1);
      }),
       null == (t = wb(this, Gb)) || t.setAttribute(`${wb(this, Qb)}`, `${this.value}`);
     }
     contains(e) {
      return wb(this, Zb).includes(e);
     }
     toggle(e, t) {
      return void 0 !== t ? (t ? (this.add(e), !0) : (this.remove(e), !1)) : this.contains(e) ? (this.remove(e), !1) : (this.add(e), !0);
     }
     replace(e, t) {
      this.remove(e), this.add(t);
     }
    };
   (Gb = new WeakMap()), (Qb = new WeakMap()), (Zb = new WeakMap());
   var Xb = `[mux-player ${Kb()}]`;
   function Jb(...e) {
    console.warn(Xb, ...e);
   }
   function eg(...e) {
    console.error(Xb, ...e);
   }
   function tg(e) {
    var t;
    let n = null != (t = e.message) ? t : '';
    e.context && (n += ` ${e.context}`), e.file && (n += ` ${Wn('Read more: ')}\nhttps://github.com/muxinc/elements/blob/main/errors/${e.file}`), Jb(n);
   }
   var ng = { AUTOPLAY: 'autoplay', CROSSORIGIN: 'crossorigin', LOOP: 'loop', MUTED: 'muted', PLAYSINLINE: 'playsinline', PRELOAD: 'preload' },
    ig = { VOLUME: 'volume', PLAYBACKRATE: 'playbackrate', MUTED: 'muted' },
    ag = Object.freeze({
     length: 0,
     start(e) {
      let t = e >>> 0;
      if (t >= this.length) throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);
      return 0;
     },
     end(e) {
      let t = e >>> 0;
      if (t >= this.length) throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);
      return 0;
     },
    }),
    rg = Object.values(ng).filter((e) => ng.PLAYSINLINE !== e),
    sg = [...rg, ...Object.values(ig)],
    og = class extends Ob.HTMLElement {
     static get observedAttributes() {
      return sg;
     }
     constructor() {
      super();
     }
     attributeChangedCallback(e, t, n) {
      var i, a;
      switch (e) {
       case ig.MUTED:
        return void (this.media && ((this.media.muted = null != n), (this.media.defaultMuted = null != n)));
       case ig.VOLUME: {
        let e = null != (i = Wb(n)) ? i : 1;
        return void (this.media && (this.media.volume = e));
       }
       case ig.PLAYBACKRATE: {
        let e = null != (a = Wb(n)) ? a : 1;
        return void (this.media && ((this.media.playbackRate = e), (this.media.defaultPlaybackRate = e)));
       }
      }
     }
     play() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.play()) ? t : Promise.reject();
     }
     pause() {
      var e;
      null == (e = this.media) || e.pause();
     }
     load() {
      var e;
      null == (e = this.media) || e.load();
     }
     get media() {
      var e;
      return null == (e = this.shadowRoot) ? void 0 : e.querySelector('mux-video');
     }
     get audioTracks() {
      return this.media.audioTracks;
     }
     get videoTracks() {
      return this.media.videoTracks;
     }
     get audioRenditions() {
      return this.media.audioRenditions;
     }
     get videoRenditions() {
      return this.media.videoRenditions;
     }
     get paused() {
      var e, t;
      return null == (t = null == (e = this.media) ? void 0 : e.paused) || t;
     }
     get duration() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.duration) ? t : NaN;
     }
     get ended() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.ended) && t;
     }
     get buffered() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.buffered) ? t : ag;
     }
     get seekable() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.seekable) ? t : ag;
     }
     get readyState() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.readyState) ? t : 0;
     }
     get videoWidth() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.videoWidth) ? t : 0;
     }
     get videoHeight() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.videoHeight) ? t : 0;
     }
     get currentSrc() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.currentSrc) ? t : '';
     }
     get currentTime() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.currentTime) ? t : 0;
     }
     set currentTime(e) {
      this.media && (this.media.currentTime = Number(e));
     }
     get volume() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.volume) ? t : 1;
     }
     set volume(e) {
      this.media && (this.media.volume = Number(e));
     }
     get playbackRate() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.playbackRate) ? t : 1;
     }
     set playbackRate(e) {
      this.media && (this.media.playbackRate = Number(e));
     }
     get defaultPlaybackRate() {
      var e;
      return null != (e = Wb(this.getAttribute(ig.PLAYBACKRATE))) ? e : 1;
     }
     set defaultPlaybackRate(e) {
      null != e ? this.setAttribute(ig.PLAYBACKRATE, `${e}`) : this.removeAttribute(ig.PLAYBACKRATE);
     }
     get crossOrigin() {
      return lg(this, ng.CROSSORIGIN);
     }
     set crossOrigin(e) {
      this.setAttribute(ng.CROSSORIGIN, `${e}`);
     }
     get autoplay() {
      return null != lg(this, ng.AUTOPLAY);
     }
     set autoplay(e) {
      e ? this.setAttribute(ng.AUTOPLAY, 'string' == typeof e ? e : '') : this.removeAttribute(ng.AUTOPLAY);
     }
     get loop() {
      return null != lg(this, ng.LOOP);
     }
     set loop(e) {
      e ? this.setAttribute(ng.LOOP, '') : this.removeAttribute(ng.LOOP);
     }
     get muted() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.muted) && t;
     }
     set muted(e) {
      this.media && (this.media.muted = !!e);
     }
     get defaultMuted() {
      return null != lg(this, ng.MUTED);
     }
     set defaultMuted(e) {
      e ? this.setAttribute(ng.MUTED, '') : this.removeAttribute(ng.MUTED);
     }
     get playsInline() {
      return null != lg(this, ng.PLAYSINLINE);
     }
     set playsInline(e) {
      eg('playsInline is set to true by default and is not currently supported as a setter.');
     }
     get preload() {
      return this.media ? this.media.preload : this.getAttribute('preload');
     }
     set preload(e) {
      ['', 'none', 'metadata', 'auto'].includes(e) ? this.setAttribute(ng.PRELOAD, e) : this.removeAttribute(ng.PRELOAD);
     }
    };
   function lg(e, t) {
    return e.media ? e.media.getAttribute(t) : e.getAttribute(t);
   }
   var dg = og,
    ug = new WeakMap(),
    cg = class e {
     constructor(e, t) {
      (this.element = e), (this.type = t), this.element.addEventListener(this.type, this);
      let n = ug.get(this.element);
      n && n.set(this.type, this);
     }
     set(e) {
      if ('function' == typeof e) this.handleEvent = e.bind(this.element);
      else if ('object' == typeof e && 'function' == typeof e.handleEvent) this.handleEvent = e.handleEvent.bind(e);
      else {
       this.element.removeEventListener(this.type, this);
       let e = ug.get(this.element);
       e && e.delete(this.type);
      }
     }
     static for(t) {
      ug.has(t.element) || ug.set(t.element, new Map());
      let n = t.attributeName.slice(2),
       i = ug.get(t.element);
      return i && i.has(n) ? i.get(n) : new e(t.element, n);
     }
    };
   function hg(e, t) {
    (function (e, t) {
     if (e instanceof lm && t instanceof Element) {
      let n = e.element;
      return n[e.attributeName] !== t && (e.element.removeAttributeNS(e.attributeNamespace, e.attributeName), (n[e.attributeName] = t)), !0;
     }
     return !1;
    })(e, t) ||
     (function (e, t) {
      if ('boolean' == typeof t && e instanceof lm) {
       let n = e.attributeNamespace;
       return t !== e.element.hasAttributeNS(n, e.attributeName) && (e.booleanValue = t), !0;
      }
      return !1;
     })(e, t) ||
     (function (e, t) {
      return !!(e instanceof lm && e.attributeName.startsWith('on')) && (cg.for(e).set(t), e.element.removeAttributeNS(e.attributeNamespace, e.attributeName), !0);
     })(e, t) ||
     (function (e, t) {
      return !1 === t && e instanceof dm && (e.replace(''), !0);
     })(e, t) ||
     (function (e, t) {
      return t instanceof bg && e instanceof dm && (t.renderInto(e), !0);
     })(e, t) ||
     (function (e, t) {
      return t instanceof DocumentFragment && e instanceof dm && (t.childNodes.length && e.replace(...t.childNodes), !0);
     })(e, t) ||
     (function (e, t) {
      if (e instanceof lm) {
       let n = e.attributeNamespace,
        i = e.element.getAttributeNS(n, e.attributeName);
       return String(t) !== i && (e.value = String(t)), !0;
      }
      e.value = String(t);
     })(e, t);
   }
   var mg = new Map(),
    pg = new WeakMap(),
    vg = new WeakMap(),
    bg = class {
     constructor(e, t, n) {
      (this.strings = e), (this.values = t), (this.processor = n), (this.stringsKey = this.strings.join('\x01'));
     }
     get template() {
      if (mg.has(this.stringsKey)) return mg.get(this.stringsKey);
      {
       let e = Pb.createElement('template'),
        t = this.strings.length - 1;
       return (e.innerHTML = this.strings.reduce((e, n, i) => e + n + (i < t ? `{{ ${i} }}` : ''), '')), mg.set(this.stringsKey, e), e;
      }
     }
     renderInto(e) {
      var t;
      let n = this.template;
      if (pg.get(e) !== n) {
       pg.set(e, n);
       let t = new tm(n, this.values, this.processor);
       return vg.set(e, t), void (e instanceof dm ? e.replace(...t.children) : e.appendChild(t));
      }
      let i = vg.get(e);
      null == (t = null == i ? void 0 : i.update) || t.call(i, this.values);
     }
    },
    gg = {
     processCallback(e, t, n) {
      var i;
      if (n)
       for (let [a, r] of t)
        if (a in n) {
         hg(r, null != (i = n[a]) ? i : '');
        }
     },
    };
   function Eg(e, ...t) {
    return new bg(e, t, gg);
   }
   var fg = Object.values({ TOP: 'top', CENTER: 'center', BOTTOM: 'bottom', LAYER: 'layer', MEDIA_LAYER: 'media-layer', POSTER_LAYER: 'poster-layer', VERTICAL_LAYER: 'vertical-layer', CENTERED_LAYER: 'centered-layer', GESTURE_LAYER: 'gesture-layer', CONTROLLER_LAYER: 'controller', BUTTON: 'button', RANGE: 'range', DISPLAY: 'display', CONTROL_BAR: 'control-bar', MENU_BUTTON: 'menu-button', MENU: 'menu', OPTION: 'option', POSTER: 'poster', LIVE: 'live', PLAY: 'play', PRE_PLAY: 'pre-play', SEEK_BACKWARD: 'seek-backward', SEEK_FORWARD: 'seek-forward', MUTE: 'mute', CAPTIONS: 'captions', AIRPLAY: 'airplay', PIP: 'pip', FULLSCREEN: 'fullscreen', CAST: 'cast', PLAYBACK_RATE: 'playback-rate', VOLUME: 'volume', TIME: 'time', TITLE: 'title', AUDIO_TRACK: 'audio-track', RENDITION: 'rendition' }).join(', '),
    yg = (e) => {
     var t, n, i, a, r, s, o, l, d, u, c, h, m, p, v, b, g, E, f, y, _, T, A, k, w, I, S, R, C, D, L, M, x, N, O;
     return Eg`
  <media-theme
    template="${e.themeTemplate || !1}"
    defaultstreamtype="${null != (t = e.defaultStreamType) && t}"
    hotkeys="${
     ((e) => {
      let t = e.hotKeys ? `${e.hotKeys}` : '';
      return 'live' === Fb(e.streamType) && (t += ' noarrowleft noarrowright'), t;
     })(e) || !1
    }"
    nohotkeys="${e.noHotKeys || !e.hasSrc || !1}"
    noautoseektolive="${!(null == (n = e.streamType) || !n.includes(fn.LIVE)) && 0 !== e.targetLiveWindow}"
    novolumepref="${e.novolumepref || !1}"
    disabled="${!e.hasSrc || e.isDialogOpen}"
    audio="${null != (i = e.audio) && i}"
    style="${
     null !=
      (a = (function (e) {
       let t = '';
       return (
        Object.entries(e).forEach(([e, n]) => {
         null != n && (t += `${Ub(e)}: ${n}; `);
        }),
        t ? t.trim() : void 0
       );
      })({ '--media-primary-color': e.primaryColor, '--media-secondary-color': e.secondaryColor, '--media-accent-color': e.accentColor })) && a
    }"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null != (r = e.forwardSeekOffset) && r}"
    backwardseekoffset="${null != (s = e.backwardSeekOffset) && s}"
    playbackrates="${null != (o = e.playbackRates) && o}"
    defaultshowremainingtime="${null != (l = e.defaultShowRemainingTime) && l}"
    defaultduration="${null != (d = e.defaultDuration) && d}"
    hideduration="${null != (u = e.hideDuration) && u}"
    title="${null != (c = e.title) && c}"
    videotitle="${null != (h = e.videoTitle) && h}"
    proudlydisplaymuxbadge="${null != (m = e.proudlyDisplayMuxBadge) && m}"
    exportparts="${fg}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      target-live-window="${null != (p = e.targetLiveWindow) && p}"
      stream-type="${null != (v = Fb(e.streamType)) && v}"
      crossorigin="${null != (b = e.crossOrigin) ? b : ''}"
      playsinline
      autoplay="${null != (g = e.autoplay) && g}"
      muted="${null != (E = e.muted) && E}"
      loop="${null != (f = e.loop) && f}"
      preload="${null != (y = e.preload) && y}"
      debug="${null != (_ = e.debug) && _}"
      prefer-cmcd="${null != (T = e.preferCmcd) && T}"
      disable-tracking="${null != (A = e.disableTracking) && A}"
      disable-cookies="${null != (k = e.disableCookies) && k}"
      prefer-playback="${null != (w = e.preferPlayback) && w}"
      start-time="${null != e.startTime && e.startTime}"
      beacon-collection-domain="${null != (I = e.beaconCollectionDomain) && I}"
      player-init-time="${null != (S = e.playerInitTime) && S}"
      player-software-name="${null != (R = e.playerSoftwareName) && R}"
      player-software-version="${null != (C = e.playerSoftwareVersion) && C}"
      env-key="${null != (D = e.envKey) && D}"
      custom-domain="${null != (L = e.customDomain) && L}"
      src="${e.src ? e.src : !!e.playbackId && Wi(e)}"
      cast-src="${e.src ? e.src : !!e.playbackId && Wi(e)}"
      cast-receiver="${null != (M = e.castReceiver) && M}"
      drm-token="${null != (N = null == (x = e.tokens) ? void 0 : x.drm) && N}"
      exportparts="video"
    >
      ${e.storyboard ? Eg`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />` : Eg``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!e.poster && e.poster}"
        placeholdersrc="${null != (O = e.placeholder) && O}"
      ></media-poster-image>
    </slot>
  </media-theme>
`;
    },
    _g = (e) => e.charAt(0).toUpperCase() + e.slice(1),
    Tg = (e, t = !1) => {
     let n = ((e, t = !1) => {
       var n, i;
       if (e.muxCode) {
        let a = _g(null != (n = e.errorCategory) ? n : 'video'),
         r = pn(null != (i = e.errorCategory) ? i : cn);
        if (e.muxCode === mn.NETWORK_OFFLINE) return Wn('Your device appears to be offline', t);
        if (e.muxCode === mn.NETWORK_TOKEN_EXPIRED) return Wn('{category} URL has expired', t).format({ category: a });
        if ([mn.NETWORK_TOKEN_SUB_MISMATCH, mn.NETWORK_TOKEN_AUD_MISMATCH, mn.NETWORK_TOKEN_AUD_MISSING, mn.NETWORK_TOKEN_MALFORMED].includes(e.muxCode)) return Wn('{category} URL is formatted incorrectly', t).format({ category: a });
        if (e.muxCode === mn.NETWORK_TOKEN_MISSING) return Wn('Invalid {categoryName} URL', t).format({ categoryName: r });
        if (e.muxCode === mn.NETWORK_NOT_FOUND) return Wn('{category} does not exist', t).format({ category: a });
        if (e.muxCode === mn.NETWORK_NOT_READY) {
         let n = 'live' === e.streamType ? 'Live stream' : 'Video';
         return Wn('{mediaType} is not currently available', t).format({ mediaType: n });
        }
       }
       if (e.code) {
        if (e.code === bn.MEDIA_ERR_NETWORK) return Wn('Network Error', t);
        if (e.code === bn.MEDIA_ERR_DECODE) return Wn('Media Error', t);
        if (e.code === bn.MEDIA_ERR_SRC_NOT_SUPPORTED) return Wn('Source Not Supported', t);
       }
       return Wn('Error', t);
      })(e, t).toString(),
      i = ((e, t = !1) => {
       var n, i;
       if (e.muxCode) {
        let a = _g(null != (n = e.errorCategory) ? n : 'video'),
         r = pn(null != (i = e.errorCategory) ? i : cn);
        return e.muxCode === mn.NETWORK_OFFLINE ? Wn('Check your internet connection and try reloading this video.', t) : e.muxCode === mn.NETWORK_TOKEN_EXPIRED ? Wn('The video\u2019s secured {tokenNamePrefix}-token has expired.', t).format({ tokenNamePrefix: r }) : e.muxCode === mn.NETWORK_TOKEN_SUB_MISMATCH ? Wn('The video\u2019s playback ID does not match the one encoded in the {tokenNamePrefix}-token.', t).format({ tokenNamePrefix: r }) : e.muxCode === mn.NETWORK_TOKEN_MALFORMED ? Wn('{category} URL is formatted incorrectly', t).format({ category: a }) : [mn.NETWORK_TOKEN_AUD_MISMATCH, mn.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode) ? Wn('The {tokenNamePrefix}-token is formatted with incorrect information.', t).format({ tokenNamePrefix: r }) : [mn.NETWORK_TOKEN_MISSING, mn.NETWORK_INVALID_URL].includes(e.muxCode) ? Wn('The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.', t).format({ tokenNamePrefix: r }) : e.muxCode === mn.NETWORK_NOT_FOUND ? '' : e.message;
       }
       return e.code && (e.code === bn.MEDIA_ERR_NETWORK || e.code === bn.MEDIA_ERR_DECODE || (e.code, bn.MEDIA_ERR_SRC_NOT_SUPPORTED)), e.message;
      })(e, t).toString();
     return { title: n, message: i };
    },
    Ag = (e, t) => {
     let n = ((e) => {
      if (e.muxCode) {
       if (e.muxCode === mn.NETWORK_TOKEN_EXPIRED) return '403-expired-token.md';
       if (e.muxCode === mn.NETWORK_TOKEN_MALFORMED) return '403-malformatted-token.md';
       if ([mn.NETWORK_TOKEN_AUD_MISMATCH, mn.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)) return '403-incorrect-aud-value.md';
       if (e.muxCode === mn.NETWORK_TOKEN_SUB_MISMATCH) return '403-playback-id-mismatch.md';
       if (e.muxCode === mn.NETWORK_TOKEN_MISSING) return 'missing-signed-tokens.md';
       if (e.muxCode === mn.NETWORK_NOT_FOUND) return '404-not-found.md';
       if (e.muxCode === mn.NETWORK_NOT_READY) return '412-not-playable.md';
      }
      if (e.code) {
       if (e.code === bn.MEDIA_ERR_NETWORK) return '';
       if (e.code === bn.MEDIA_ERR_DECODE) return 'media-decode-error.md';
       if (e.code === bn.MEDIA_ERR_SRC_NOT_SUPPORTED) return 'media-src-not-supported.md';
      }
      return '';
     })(e);
     return { message: e.message, context: e.context, file: n };
    },
    kg = Pb.createElement('template');
   'innerHTML' in kg && (kg.innerHTML = '<template id="media-theme-gerwig">\n  <style>\n    @keyframes pre-play-hide {\n      0% {\n        transform: scale(1);\n        opacity: 1;\n      }\n\n      30% {\n        transform: scale(0.7);\n      }\n\n      100% {\n        transform: scale(1.5);\n        opacity: 0;\n      }\n    }\n\n    :host {\n      --_primary-color: var(--media-primary-color, #fff);\n      --_secondary-color: var(--media-secondary-color, transparent);\n      --_accent-color: var(--media-accent-color, #fa50b5);\n      --_text-color: var(--media-text-color, #000);\n\n      --media-icon-color: var(--_primary-color);\n      --media-control-background: var(--_secondary-color);\n      --media-control-hover-background: var(--_accent-color);\n      --media-time-buffered-color: rgba(255, 255, 255, 0.4);\n      --media-preview-time-text-shadow: none;\n      --media-control-height: 14px;\n      --media-control-padding: 6px;\n      --media-tooltip-container-margin: 6px;\n      --media-tooltip-distance: 18px;\n\n      color: var(--_primary-color);\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n    }\n\n    :host([audio]) {\n      --_secondary-color: var(--media-secondary-color, black);\n      --media-preview-time-text-shadow: none;\n    }\n\n    :host([audio]) ::slotted([slot=\'media\']) {\n      height: 0px;\n    }\n\n    :host([audio]) media-loading-indicator {\n      display: none;\n    }\n\n    :host([audio]) media-controller {\n      background: transparent;\n    }\n\n    :host([audio]) media-controller::part(vertical-layer) {\n      background: transparent;\n    }\n\n    :host([audio]) media-control-bar {\n      width: 100%;\n      background-color: var(--media-control-background);\n    }\n\n    /*\n     * 0.433s is the transition duration for VTT Regions.\n     * Borrowed here, so the captions don\'t move too fast.\n     */\n    media-controller {\n      --media-webkit-text-track-transform: translateY(0) scale(0.98);\n      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;\n    }\n    media-controller:is([mediapaused], :not([userinactive])) {\n      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);\n      --media-webkit-text-track-transition: transform 0.15s ease;\n    }\n\n    /*\n     * CSS specific to iOS devices.\n     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757\n     */\n    @supports (-webkit-touch-callout: none) {\n      /* Disable subtitle adjusting for iOS Safari */\n      media-controller[mediaisfullscreen] {\n        --media-webkit-text-track-transform: unset;\n        --media-webkit-text-track-transition: unset;\n      }\n    }\n\n    media-time-range {\n      --media-box-padding-left: 6px;\n      --media-box-padding-right: 6px;\n      --media-range-bar-color: var(--_accent-color);\n      --media-time-range-buffered-color: var(--_primary-color);\n      --media-range-track-color: transparent;\n      --media-range-track-background: rgba(255, 255, 255, 0.4);\n      --media-range-thumb-background: radial-gradient(\n        circle,\n        #000 0%,\n        #000 25%,\n        var(--_accent-color) 25%,\n        var(--_accent-color)\n      );\n      --media-range-thumb-width: 12px;\n      --media-range-thumb-height: 12px;\n      --media-range-thumb-transform: scale(0);\n      --media-range-thumb-transition: transform 0.3s;\n      --media-range-thumb-opacity: 1;\n      --media-preview-background: var(--_primary-color);\n      --media-box-arrow-background: var(--_primary-color);\n      --media-preview-thumbnail-border: 5px solid var(--_primary-color);\n      --media-preview-border-radius: 5px;\n      --media-text-color: var(--_text-color);\n      --media-control-hover-background: transparent;\n      --media-preview-chapter-text-shadow: none;\n      color: var(--_accent-color);\n      padding: 0 6px;\n    }\n\n    :host([audio]) media-time-range {\n      --media-preview-time-padding: 1.5px 6px;\n      --media-preview-box-margin: 0 0 -5px;\n    }\n\n    media-time-range:hover {\n      --media-range-thumb-transform: scale(1);\n    }\n\n    media-preview-thumbnail {\n      border-bottom-width: 0;\n    }\n\n    [part~=\'menu\'] {\n      border-radius: 2px;\n      border: 1px solid rgba(0, 0, 0, 0.1);\n      bottom: 50px;\n      padding: 2.5px 10px;\n    }\n\n    [part~=\'menu\']::part(indicator) {\n      fill: var(--_accent-color);\n    }\n\n    [part~=\'menu\']::part(menu-item) {\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      padding: 6px 10px;\n      min-height: 34px;\n    }\n\n    [part~=\'menu\']::part(checked) {\n      font-weight: 700;\n    }\n\n    media-captions-menu,\n    media-rendition-menu,\n    media-audio-track-menu,\n    media-playback-rate-menu {\n      position: absolute; /* ensure they don\'t take up space in DOM on load */\n      --media-menu-background: var(--_primary-color);\n      --media-menu-item-checked-background: transparent;\n      --media-text-color: var(--_text-color);\n      --media-menu-item-hover-background: transparent;\n      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;\n    }\n\n    media-rendition-menu {\n      min-width: 140px;\n    }\n\n    /* The icon is a circle so make it 16px high instead of 14px for more balance. */\n    media-audio-track-menu-button {\n      --media-control-padding: 5px;\n      --media-control-height: 16px;\n    }\n\n    media-playback-rate-menu-button {\n      --media-control-padding: 6px 3px;\n      min-width: 4.4ch;\n    }\n\n    media-playback-rate-menu {\n      --media-menu-flex-direction: row;\n      --media-menu-item-checked-background: var(--_accent-color);\n      --media-menu-item-checked-indicator-display: none;\n      margin-right: 6px;\n      padding: 0;\n      --media-menu-gap: 0.25em;\n    }\n\n    media-playback-rate-menu[part~=\'menu\']::part(menu-item) {\n      padding: 6px 6px 6px 8px;\n    }\n\n    media-playback-rate-menu[part~=\'menu\']::part(checked) {\n      color: #fff;\n    }\n\n    :host(:not([audio])) media-time-range {\n      /* Adding px is required here for calc() */\n      --media-range-padding: 0px;\n      background: transparent;\n      z-index: 10;\n      height: 10px;\n      bottom: -3px;\n      width: 100%;\n    }\n\n    media-control-bar :is([role=\'button\'], [role=\'switch\'], button) {\n      line-height: 0;\n    }\n\n    media-control-bar :is([part*=\'button\'], [part*=\'range\'], [part*=\'display\']) {\n      border-radius: 3px;\n    }\n\n    .spacer {\n      flex-grow: 1;\n      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));\n    }\n\n    media-control-bar[slot~=\'top-chrome\'] {\n      min-height: 42px;\n      pointer-events: none;\n    }\n\n    media-control-bar {\n      --gradient-steps:\n        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,\n        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,\n        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,\n        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;\n    }\n\n    :host([title]:not([audio])) media-control-bar[slot=\'top-chrome\']::before {\n      content: \'\';\n      position: absolute;\n      width: 100%;\n      padding-bottom: min(100px, 25%);\n      background: linear-gradient(to top, var(--gradient-steps));\n      opacity: 0.8;\n      pointer-events: none;\n    }\n\n    :host(:not([audio])) media-control-bar[part~=\'bottom\']::before {\n      content: \'\';\n      position: absolute;\n      width: 100%;\n      bottom: 0;\n      left: 0;\n      padding-bottom: min(100px, 25%);\n      background: linear-gradient(to bottom, var(--gradient-steps));\n      opacity: 0.8;\n      z-index: 1;\n      pointer-events: none;\n    }\n\n    media-control-bar[part~=\'bottom\'] > * {\n      z-index: 20;\n    }\n\n    media-control-bar[part~=\'bottom\'] {\n      padding: 6px 6px;\n    }\n\n    media-control-bar[slot~=\'top-chrome\'] > * {\n      --media-control-background: transparent;\n      --media-control-hover-background: transparent;\n      position: relative;\n    }\n\n    media-controller::part(vertical-layer) {\n      transition: background-color 1s;\n    }\n\n    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {\n      background-color: var(--controls-backdrop-color, var(--controls, transparent));\n      transition: background-color 0.25s;\n    }\n\n    .center-controls {\n      --media-button-icon-width: 100%;\n      --media-button-icon-height: auto;\n      --media-tooltip-display: none;\n      pointer-events: none;\n      width: 100%;\n      display: flex;\n      flex-flow: row;\n      align-items: center;\n      justify-content: center;\n      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));\n      paint-order: stroke;\n      stroke: rgba(102, 102, 102, 1);\n      stroke-width: 0.3px;\n      text-shadow:\n        0 0 2px rgb(0 0 0 / 0.25),\n        0 0 6px rgb(0 0 0 / 0.25);\n    }\n\n    .center-controls media-play-button {\n      --media-control-background: transparent;\n      --media-control-hover-background: transparent;\n      --media-control-padding: 0;\n      width: 40px;\n    }\n\n    [breakpointsm] .center-controls media-play-button {\n      width: 90px;\n      height: 90px;\n      border-radius: 50%;\n      transition: background 0.4s;\n      padding: 24px;\n      --media-control-background: #000;\n      --media-control-hover-background: var(--_accent-color);\n    }\n\n    .center-controls media-seek-backward-button,\n    .center-controls media-seek-forward-button {\n      --media-control-background: transparent;\n      --media-control-hover-background: transparent;\n      padding: 0;\n      margin: 0 20px;\n      width: max(33px, min(8%, 40px));\n    }\n\n    [breakpointsm]:not([audio]) .center-controls.pre-playback {\n      display: grid;\n      align-items: initial;\n      justify-content: initial;\n      height: 100%;\n      overflow: hidden;\n    }\n\n    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {\n      place-self: var(--_pre-playback-place, center);\n      grid-area: 1 / 1;\n      margin: 16px;\n    }\n\n    /* Show and hide controls or pre-playback state */\n\n    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])\n      .center-controls.pre-playback\n      media-play-button {\n      /* Using `forwards` would lead to a laggy UI after the animation got in the end state */\n      animation: 0.3s linear pre-play-hide;\n      opacity: 0;\n      pointer-events: none;\n    }\n\n    .autoplay-unmute {\n      --media-control-hover-background: transparent;\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));\n    }\n\n    .autoplay-unmute-btn {\n      --media-control-height: 16px;\n      border-radius: 8px;\n      background: #000;\n      color: var(--_primary-color);\n      display: flex;\n      align-items: center;\n      padding: 8px 16px;\n      font-size: 18px;\n      font-weight: 500;\n      cursor: pointer;\n    }\n\n    .autoplay-unmute-btn:hover {\n      background: var(--_accent-color);\n    }\n\n    [breakpointsm] .autoplay-unmute-btn {\n      --media-control-height: 30px;\n      padding: 14px 24px;\n      font-size: 26px;\n    }\n\n    .autoplay-unmute-btn svg {\n      margin: 0 6px 0 0;\n    }\n\n    [breakpointsm] .autoplay-unmute-btn svg {\n      margin: 0 10px 0 0;\n    }\n\n    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {\n      display: none;\n    }\n\n    media-error-dialog:not([mediaerrorcode]) {\n      opacity: 0;\n    }\n\n    media-loading-indicator {\n      --media-loading-icon-width: 100%;\n      --media-button-icon-height: auto;\n      display: var(--media-control-display, var(--media-loading-indicator-display, flex));\n      pointer-events: none;\n      position: absolute;\n      width: min(15%, 150px);\n      flex-flow: row;\n      align-items: center;\n      justify-content: center;\n    }\n\n    /* Intentionally don\'t target the div for transition but the children\n     of the div. Prevents messing with media-chrome\'s autohide feature. */\n    media-loading-indicator + div * {\n      transition: opacity 0.15s;\n      opacity: 1;\n    }\n\n    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {\n      opacity: 0;\n      transition-delay: 400ms;\n    }\n\n    media-volume-range {\n      width: min(100%, 100px);\n      --media-range-padding-left: 10px;\n      --media-range-padding-right: 10px;\n      --media-range-thumb-width: 12px;\n      --media-range-thumb-height: 12px;\n      --media-range-thumb-background: radial-gradient(\n        circle,\n        #000 0%,\n        #000 25%,\n        var(--_primary-color) 25%,\n        var(--_primary-color)\n      );\n      --media-control-hover-background: none;\n    }\n\n    media-time-display {\n      white-space: nowrap;\n    }\n\n    /* Generic style for explicitly disabled controls */\n    media-control-bar[part~=\'bottom\'] [disabled],\n    media-control-bar[part~=\'bottom\'] [aria-disabled=\'true\'] {\n      opacity: 60%;\n      cursor: not-allowed;\n    }\n\n    media-text-display {\n      --media-font-size: 16px;\n      --media-control-padding: 14px;\n      font-weight: 500;\n    }\n\n    media-play-button.animated *:is(g, path) {\n      transition: all 0.3s;\n    }\n\n    media-play-button.animated[mediapaused] .pause-icon-pt1 {\n      opacity: 0;\n    }\n\n    media-play-button.animated[mediapaused] .pause-icon-pt2 {\n      transform-origin: center center;\n      transform: scaleY(0);\n    }\n\n    media-play-button.animated[mediapaused] .play-icon {\n      clip-path: inset(0 0 0 0);\n    }\n\n    media-play-button.animated:not([mediapaused]) .play-icon {\n      clip-path: inset(0 0 0 100%);\n    }\n\n    media-seek-forward-button,\n    media-seek-backward-button {\n      --media-font-weight: 400;\n    }\n\n    .mute-icon {\n      display: inline-block;\n    }\n\n    .mute-icon :is(path, g) {\n      transition: opacity 0.5s;\n    }\n\n    .muted {\n      opacity: 0;\n    }\n\n    media-mute-button[mediavolumelevel=\'low\'] :is(.volume-medium, .volume-high),\n    media-mute-button[mediavolumelevel=\'medium\'] :is(.volume-high) {\n      opacity: 0;\n    }\n\n    media-mute-button[mediavolumelevel=\'off\'] .unmuted {\n      opacity: 0;\n    }\n\n    media-mute-button[mediavolumelevel=\'off\'] .muted {\n      opacity: 1;\n    }\n\n    /**\n     * Our defaults for these buttons are to hide them at small sizes\n     * users can override this with CSS\n     */\n    media-controller:not([breakpointsm]):not([audio]) {\n      --bottom-play-button: none;\n      --bottom-seek-backward-button: none;\n      --bottom-seek-forward-button: none;\n      --bottom-time-display: none;\n      --bottom-playback-rate-menu-button: none;\n      --bottom-pip-button: none;\n    }\n\n    [part=\'mux-badge\'] {\n      position: absolute;\n      bottom: 10px;\n      right: 10px;\n      z-index: 2;\n      opacity: 0.6;\n      transition:\n        opacity 0.2s ease-in-out,\n        bottom 0.2s ease-in-out;\n    }\n\n    [part=\'mux-badge\']:hover {\n      opacity: 1;\n    }\n\n    [part=\'mux-badge\'] a {\n      font-size: 14px;\n      font-family: var(--_font-family);\n      color: var(--_primary-color);\n      text-decoration: none;\n      display: flex;\n      align-items: center;\n      gap: 5px;\n    }\n\n    [part=\'mux-badge\'] .mux-badge-text {\n      transition: opacity 0.5s ease-in-out;\n      opacity: 0;\n    }\n\n    [part=\'mux-badge\'] .mux-badge-logo {\n      width: 40px;\n      height: auto;\n      display: inline-block;\n    }\n\n    [part=\'mux-badge\'] .mux-badge-logo svg {\n      width: 100%;\n      height: 100%;\n      fill: white;\n    }\n\n    media-controller:not([userinactive]):not([mediahasplayed]) [part=\'mux-badge\'],\n    media-controller:not([userinactive]) [part=\'mux-badge\'],\n    media-controller[mediahasplayed][mediapaused] [part=\'mux-badge\'] {\n      transition: bottom 0.1s ease-in-out;\n    }\n\n    media-controller[userinactive]:not([mediapaused]) [part=\'mux-badge\'] {\n      transition: bottom 0.2s ease-in-out 0.62s;\n    }\n\n    media-controller:not([userinactive]) [part=\'mux-badge\'] .mux-badge-text,\n    media-controller[mediahasplayed][mediapaused] [part=\'mux-badge\'] .mux-badge-text {\n      opacity: 1;\n    }\n\n    media-controller[userinactive]:not([mediapaused]) [part=\'mux-badge\'] .mux-badge-text {\n      opacity: 0;\n    }\n\n    media-controller[userinactive]:not([mediapaused]) [part=\'mux-badge\'] {\n      bottom: 10px;\n    }\n\n    media-controller:not([userinactive]):not([mediahasplayed]) [part=\'mux-badge\'] {\n      bottom: 10px;\n    }\n\n    media-controller:not([userinactive])[mediahasplayed] [part=\'mux-badge\'],\n    media-controller[mediahasplayed][mediapaused] [part=\'mux-badge\'] {\n      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);\n    }\n  </style>\n\n  <template partial="TitleDisplay">\n    <template if="videotitle">\n      <template if="videotitle != true">\n        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>\n      </template>\n    </template>\n    <template if="!videotitle">\n      <template if="title">\n        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>\n      </template>\n    </template>\n  </template>\n\n  <template partial="PlayButton">\n    <media-play-button\n      part="{{section ?? \'bottom\'}} play button"\n      disabled="{{disabled}}"\n      aria-disabled="{{disabled}}"\n      class="animated"\n    >\n      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">\n        <g class="play-icon">\n          <path\n            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"\n          />\n        </g>\n        <g class="pause-icon">\n          <path\n            class="pause-icon-pt1"\n            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"\n          />\n          <path\n            class="pause-icon-pt2"\n            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"\n          />\n        </g>\n      </svg>\n    </media-play-button>\n  </template>\n\n  <template partial="PrePlayButton">\n    <media-play-button\n      part="{{section ?? \'center\'}} play button pre-play"\n      disabled="{{disabled}}"\n      aria-disabled="{{disabled}}"\n    >\n      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">\n        <path\n          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"\n        />\n      </svg>\n    </media-play-button>\n  </template>\n\n  <template partial="SeekBackwardButton">\n    <media-seek-backward-button\n      seekoffset="{{backwardseekoffset}}"\n      part="{{section ?? \'bottom\'}} seek-backward button"\n      disabled="{{disabled}}"\n      aria-disabled="{{disabled}}"\n    >\n      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">\n        <path\n          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"\n        />\n        <text transform="translate(6 12)" style="font-size: 14px; font-family: \'ArialMT\', \'Arial\'">\n          {{backwardseekoffset}}\n        </text>\n      </svg>\n    </media-seek-backward-button>\n  </template>\n\n  <template partial="SeekForwardButton">\n    <media-seek-forward-button\n      seekoffset="{{forwardseekoffset}}"\n      part="{{section ?? \'bottom\'}} seek-forward button"\n      disabled="{{disabled}}"\n      aria-disabled="{{disabled}}"\n    >\n      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">\n        <g>\n          <text transform="translate(-1 12)" style="font-size: 14px; font-family: \'ArialMT\', \'Arial\'">\n            {{forwardseekoffset}}\n          </text>\n          <path\n            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"\n          />\n        </g>\n      </svg>\n    </media-seek-forward-button>\n  </template>\n\n  <template partial="MuteButton">\n    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">\n      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">\n        <g class="unmuted">\n          <path\n            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"\n          />\n          <path\n            class="volume-low"\n            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"\n          />\n          <path\n            class="volume-medium"\n            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"\n          />\n          <path\n            class="volume-high"\n            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"\n          />\n        </g>\n        <g class="muted">\n          <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"\n          />\n          <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"\n          />\n        </g>\n      </svg>\n    </media-mute-button>\n  </template>\n\n  <template partial="PipButton">\n    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">\n      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">\n        <path\n          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"\n        />\n        <path\n          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"\n        />\n      </svg>\n    </media-pip-button>\n  </template>\n\n  <template partial="CaptionsMenu">\n    <media-captions-menu-button part="bottom captions button">\n      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">\n        <path\n          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"\n        />\n      </svg>\n      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">\n        <path\n          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"\n        />\n        <path\n          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"\n        />\n        <path\n          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"\n        />\n      </svg>\n    </media-captions-menu-button>\n    <media-captions-menu\n      hidden\n      anchor="auto"\n      part="bottom captions menu"\n      disabled="{{disabled}}"\n      aria-disabled="{{disabled}}"\n      exportparts="menu-item"\n    >\n      <div slot="checked-indicator">\n        <style>\n          .indicator {\n            position: relative;\n            top: 1px;\n            width: 0.9em;\n            height: auto;\n            fill: var(--_accent-color);\n            margin-right: 5px;\n          }\n\n          [aria-checked=\'false\'] .indicator {\n            display: none;\n          }\n        </style>\n        <svg viewBox="0 0 14 18" class="indicator">\n          <path\n            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"\n            fill-rule="evenodd"\n          />\n        </svg></div\n    ></media-captions-menu>\n  </template>\n\n  <template partial="AirplayButton">\n    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">\n      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">\n        <path\n          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"\n        />\n        <path\n          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"\n        />\n      </svg>\n    </media-airplay-button>\n  </template>\n\n  <template partial="FullscreenButton">\n    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">\n      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">\n        <path\n          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"\n        />\n        <path\n          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"\n        />\n        <path\n          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"\n        />\n        <path\n          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"\n        />\n      </svg>\n      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">\n        <path\n          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"\n        />\n        <path\n          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"\n        />\n        <path\n          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"\n        />\n        <path\n          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"\n        />\n      </svg>\n    </media-fullscreen-button>\n  </template>\n\n  <template partial="CastButton">\n    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">\n      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">\n        <path\n          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"\n        />\n      </svg>\n      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">\n        <path\n          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"\n        />\n        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />\n      </svg>\n    </media-cast-button>\n  </template>\n\n  <template partial="LiveButton">\n    <media-live-button part="{{section ?? \'top\'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">\n      <span slot="text">Live</span>\n    </media-live-button>\n  </template>\n\n  <template partial="PlaybackRateMenu">\n    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>\n    <media-playback-rate-menu\n      hidden\n      anchor="auto"\n      rates="{{playbackrates}}"\n      exportparts="menu-item"\n      part="bottom playback-rate menu"\n      disabled="{{disabled}}"\n      aria-disabled="{{disabled}}"\n    ></media-playback-rate-menu>\n  </template>\n\n  <template partial="VolumeRange">\n    <media-volume-range\n      part="bottom volume range"\n      disabled="{{disabled}}"\n      aria-disabled="{{disabled}}"\n    ></media-volume-range>\n  </template>\n\n  <template partial="TimeDisplay">\n    <media-time-display\n      remaining="{{defaultshowremainingtime}}"\n      showduration="{{!hideduration}}"\n      part="bottom time display"\n      disabled="{{disabled}}"\n      aria-disabled="{{disabled}}"\n    ></media-time-display>\n  </template>\n\n  <template partial="TimeRange">\n    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">\n      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>\n      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>\n      <media-preview-time-display slot="preview"></media-preview-time-display>\n      <div slot="preview" part="arrow"></div>\n    </media-time-range>\n  </template>\n\n  <template partial="AudioTrackMenu">\n    <media-audio-track-menu-button part="bottom audio-track button">\n      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">\n        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />\n        <path\n          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"\n        />\n      </svg>\n    </media-audio-track-menu-button>\n    <media-audio-track-menu\n      hidden\n      anchor="auto"\n      part="bottom audio-track menu"\n      disabled="{{disabled}}"\n      aria-disabled="{{disabled}}"\n      exportparts="menu-item"\n    >\n      <div slot="checked-indicator">\n        <style>\n          .indicator {\n            position: relative;\n            top: 1px;\n            width: 0.9em;\n            height: auto;\n            fill: var(--_accent-color);\n            margin-right: 5px;\n          }\n\n          [aria-checked=\'false\'] .indicator {\n            display: none;\n          }\n        </style>\n        <svg viewBox="0 0 14 18" class="indicator">\n          <path\n            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"\n            fill-rule="evenodd"\n          />\n        </svg>\n      </div>\n    </media-audio-track-menu>\n  </template>\n\n  <template partial="RenditionMenu">\n    <media-rendition-menu-button part="bottom rendition button">\n      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">\n        <path\n          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"\n        />\n      </svg>\n    </media-rendition-menu-button>\n    <media-rendition-menu\n      hidden\n      anchor="auto"\n      part="bottom rendition menu"\n      disabled="{{disabled}}"\n      aria-disabled="{{disabled}}"\n    >\n      <div slot="checked-indicator">\n        <style>\n          .indicator {\n            position: relative;\n            top: 1px;\n            width: 0.9em;\n            height: auto;\n            fill: var(--_accent-color);\n            margin-right: 5px;\n          }\n\n          [aria-checked=\'false\'] .indicator {\n            opacity: 0;\n          }\n        </style>\n        <svg viewBox="0 0 14 18" class="indicator">\n          <path\n            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"\n            fill-rule="evenodd"\n          />\n        </svg>\n      </div>\n    </media-rendition-menu>\n  </template>\n\n  <template partial="MuxBadge">\n    <div part="mux-badge">\n      <a href="https://www.mux.com/player" target="_blank">\n        <span class="mux-badge-text">Powered by</span>\n        <div class="mux-badge-logo">\n          <svg\n            viewBox="0 0 1600 500"\n            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"\n          >\n            <g>\n              <path\n                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"\n                style="fill-rule: nonzero"\n              ></path>\n              <path\n                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"\n                style="fill-rule: nonzero"\n              ></path>\n              <path\n                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"\n                style="fill-rule: nonzero"\n              ></path>\n            </g>\n          </svg>\n        </div>\n      </a>\n    </div>\n  </template>\n\n  <media-controller\n    part="controller"\n    defaultstreamtype="{{defaultstreamtype ?? \'on-demand\'}}"\n    breakpoints="sm:470"\n    gesturesdisabled="{{disabled}}"\n    hotkeys="{{hotkeys}}"\n    nohotkeys="{{nohotkeys}}"\n    novolumepref="{{novolumepref}}"\n    audio="{{audio}}"\n    noautoseektolive="{{noautoseektolive}}"\n    defaultsubtitles="{{defaultsubtitles}}"\n    defaultduration="{{defaultduration ?? false}}"\n    keyboardforwardseekoffset="{{forwardseekoffset}}"\n    keyboardbackwardseekoffset="{{backwardseekoffset}}"\n    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"\n    style="--_pre-playback-place:{{preplaybackplace ?? \'center\'}}"\n  >\n    <slot name="media" slot="media"></slot>\n    <slot name="poster" slot="poster"></slot>\n\n    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>\n    <media-error-dialog slot="dialog" noautohide></media-error-dialog>\n\n    <template if="!audio">\n      \x3c!-- Pre-playback UI --\x3e\n      \x3c!-- same for both on-demand and live --\x3e\n      <div slot="centered-chrome" class="center-controls pre-playback">\n        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>\n        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>\n      </div>\n\n      \x3c!-- Mux Badge --\x3e\n      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>\n\n      \x3c!-- Autoplay centered unmute button --\x3e\n      \x3c!--\n        todo: figure out how show this with available state variables\n        needs to show when:\n        - autoplay is enabled\n        - playback has been successful\n        - audio is muted\n        - in place / instead of the pre-plaback play button\n        - not to show again after user has interacted with this button\n          - OR user has interacted with the mute button in the control bar\n      --\x3e\n      \x3c!--\n        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug\n        makes it appear even if commented out in the markup, add it back when code is un-commented\n      --\x3e\n      \x3c!-- <div slot="centered-chrome" class="autoplay-unmute">\n        <div role="button" class="autoplay-unmute-btn">Unmute</div>\n      </div> --\x3e\n\n      <template if="streamtype == \'on-demand\'">\n        <template if="breakpointsm">\n          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>\n        </template>\n        {{>TimeRange}}\n        <media-control-bar part="control-bar bottom">\n          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}\n          {{>VolumeRange}}\n          <div class="spacer"></div>\n          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}\n          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}\n        </media-control-bar>\n      </template>\n\n      <template if="streamtype == \'live\'">\n        <media-control-bar part="control-bar top" slot="top-chrome">\n          {{>LiveButton}}\n          <template if="breakpointsm"> {{>TitleDisplay}} </template>\n        </media-control-bar>\n        <template if="targetlivewindow > 0">{{>TimeRange}}</template>\n        <media-control-bar part="control-bar bottom">\n          {{>PlayButton}}\n          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>\n          {{>MuteButton}} {{>VolumeRange}}\n          <div class="spacer"></div>\n          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}\n          {{>FullscreenButton}}\n        </media-control-bar>\n      </template>\n    </template>\n\n    <template if="audio">\n      <template if="streamtype == \'on-demand\'">\n        <template if="title">\n          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>\n        </template>\n        <media-control-bar part="control-bar bottom">\n          {{>PlayButton}}\n          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>\n          {{>MuteButton}}\n          <template if="breakpointsm">{{>VolumeRange}}</template>\n          {{>TimeDisplay}} {{>TimeRange}}\n          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>\n          {{>AirplayButton}} {{>CastButton}}\n        </media-control-bar>\n      </template>\n\n      <template if="streamtype == \'live\'">\n        <template if="title">\n          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>\n        </template>\n        <media-control-bar part="control-bar bottom">\n          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}\n          <template if="breakpointsm">\n            {{>VolumeRange}}\n            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>\n          </template>\n          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>\n          <template if="!targetlivewindow"><div class="spacer"></div></template>\n          {{>AirplayButton}} {{>CastButton}}\n        </media-control-bar>\n      </template>\n    </template>\n\n    <slot></slot>\n  </media-controller>\n</template>\n');
   var wg,
    Ig,
    Sg = class extends Um {};
   (Sg.template = null == (Ig = null == (wg = kg.content) ? void 0 : wg.children) ? void 0 : Ig[0]), Ob.customElements.get('media-theme-gerwig') || Ob.customElements.define('media-theme-gerwig', Sg);
   var Rg = { SRC: 'src', POSTER: 'poster' },
    Cg = { STYLE: 'style', DEFAULT_HIDDEN_CAPTIONS: 'default-hidden-captions', PRIMARY_COLOR: 'primary-color', SECONDARY_COLOR: 'secondary-color', ACCENT_COLOR: 'accent-color', FORWARD_SEEK_OFFSET: 'forward-seek-offset', BACKWARD_SEEK_OFFSET: 'backward-seek-offset', PLAYBACK_TOKEN: 'playback-token', THUMBNAIL_TOKEN: 'thumbnail-token', STORYBOARD_TOKEN: 'storyboard-token', DRM_TOKEN: 'drm-token', STORYBOARD_SRC: 'storyboard-src', THUMBNAIL_TIME: 'thumbnail-time', AUDIO: 'audio', NOHOTKEYS: 'nohotkeys', HOTKEYS: 'hotkeys', PLAYBACK_RATES: 'playbackrates', DEFAULT_SHOW_REMAINING_TIME: 'default-show-remaining-time', DEFAULT_DURATION: 'default-duration', TITLE: 'title', VIDEO_TITLE: 'video-title', PLACEHOLDER: 'placeholder', THEME: 'theme', DEFAULT_STREAM_TYPE: 'default-stream-type', TARGET_LIVE_WINDOW: 'target-live-window', EXTRA_SOURCE_PARAMS: 'extra-source-params', NO_VOLUME_PREF: 'no-volume-pref', CAST_RECEIVER: 'cast-receiver', NO_TOOLTIPS: 'no-tooltips', PROUDLY_DISPLAY_MUX_BADGE: 'proudly-display-mux-badge' },
    Dg = ['audio', 'backwardseekoffset', 'defaultduration', 'defaultshowremainingtime', 'defaultsubtitles', 'noautoseektolive', 'disabled', 'exportparts', 'forwardseekoffset', 'hideduration', 'hotkeys', 'nohotkeys', 'playbackrates', 'defaultstreamtype', 'streamtype', 'style', 'targetlivewindow', 'template', 'title', 'videotitle', 'novolumepref', 'proudlydisplaymuxbadge'];
   var Lg = Hu.formatErrorMessage;
   function Mg(e) {
    var t, n;
    let i = e.theme;
    if (i) {
     let a = null == (n = null == (t = e.getRootNode()) ? void 0 : t.getElementById) ? void 0 : n.call(t, i);
     if (a && a instanceof HTMLTemplateElement) return a;
     i.startsWith('media-theme-') || (i = `media-theme-${i}`);
     let r = Ob.customElements.get(i);
     if (null != r && r.template) return r.template;
    }
   }
   function xg(e) {
    var t;
    let n = null == (t = e.mediaController) ? void 0 : t.querySelector('media-time-display');
    return n && 'none' === getComputedStyle(n).getPropertyValue('--media-duration-display-display').trim();
   }
   function Ng(e) {
    let t = e.videoTitle ? { video_title: e.videoTitle } : {};
    return e
     .getAttributeNames()
     .filter((e) => e.startsWith('metadata-'))
     .reduce((t, n) => {
      let i = e.getAttribute(n);
      return null !== i && (t[n.replace(/^metadata-/, '').replace(/-/g, '_')] = i), t;
     }, t);
   }
   Hu.formatErrorMessage = (e) => {
    var t, n;
    if (e instanceof bn) {
     let i = Tg(e, !1);
     return `\n      ${null != i && i.title ? `<h3>${i.title}</h3>` : ''}\n      ${(null != i && i.message) || (null != i && i.linkUrl) ? `<p>\n        ${null == i ? void 0 : i.message}\n        ${null != i && i.linkUrl ? `<a\n              href="${i.linkUrl}"\n              target="_blank"\n              rel="external noopener"\n              aria-label="${null != (t = i.linkText) ? t : ''} ${Wn('(opens in a new window)')}"\n              >${null != (n = i.linkText) ? n : i.linkUrl}</a\n            >` : ''}\n      </p>` : ''}\n    `;
    }
    return Lg(e);
   };
   var Og,
    Pg,
    Ug,
    Hg,
    Wg,
    Bg,
    Vg,
    $g,
    qg,
    Kg,
    Fg,
    Yg,
    jg,
    Gg,
    Qg,
    Zg = Object.values(La),
    zg = Object.values(Rg),
    Xg = Object.values(Cg),
    Jg = Kb(),
    eE = 'mux-player',
    tE = { isDialogOpen: !1 },
    nE = { redundant_streams: !0 };
   function iE(e, t) {
    return e.media ? e.media.getAttribute(t) : e.getAttribute(t);
   }
   (Og = new WeakMap()),
    (Pg = new WeakMap()),
    (Ug = new WeakMap()),
    (Hg = new WeakMap()),
    (Wg = new WeakMap()),
    (Bg = new WeakMap()),
    (Vg = new WeakSet()),
    ($g = function () {
     var e, t, n, i;
     if (!wb(this, Pg)) {
      Sb(this, Pg, !0), Rb(this, Vg, Fg).call(this);
      try {
       if ((customElements.upgrade(this.mediaTheme), !(this.mediaTheme instanceof Ob.HTMLElement))) throw '';
      } catch {
       eg('<media-theme> failed to upgrade!');
      }
      try {
       customElements.upgrade(this.media);
      } catch {
       eg('underlying media element failed to upgrade!');
      }
      try {
       if ((customElements.upgrade(this.mediaController), !(this.mediaController instanceof Vl))) throw '';
      } catch {
       eg('<media-controller> failed to upgrade!');
      }
      Rb(this, Vg, Yg).call(this), Rb(this, Vg, jg).call(this), Rb(this, Vg, Gg).call(this), Sb(this, Hg, null == (t = null == (e = this.mediaController) ? void 0 : e.hasAttribute(zs.USER_INACTIVE)) || t), Rb(this, Vg, Qg).call(this), null == (n = this.media) || n.addEventListener('streamtypechange', () => Rb(this, Vg, Fg).call(this)), null == (i = this.media) || i.addEventListener('loadstart', () => Rb(this, Vg, Fg).call(this));
     }
    }),
    (qg = function () {
     var e, t;
     try {
      null == (e = null == window ? void 0 : window.CSS) || e.registerProperty({ name: '--media-primary-color', syntax: '<color>', inherits: !0 }), null == (t = null == window ? void 0 : window.CSS) || t.registerProperty({ name: '--media-secondary-color', syntax: '<color>', inherits: !0 });
     } catch {}
    }),
    (Kg = function (e) {
     Object.assign(wb(this, Bg), e), Rb(this, Vg, Fg).call(this);
    }),
    (Fg = function (e = {}) {
     !(function (e, t) {
      e.renderInto(t);
     })(
      ((e) => Eg`
  <style>
    ${((e) => {
     let { tokens: t } = e;
     return t.drm ? ':host(:not([cast-receiver])) { --_cast-button-drm-display: none; }' : '';
    })(e)}
    ${":host {\n  --media-control-display: var(--controls);\n  --media-loading-indicator-display: var(--loading-indicator);\n  --media-dialog-display: var(--dialog);\n  --media-play-button-display: var(--play-button);\n  --media-live-button-display: var(--live-button);\n  --media-seek-backward-button-display: var(--seek-backward-button);\n  --media-seek-forward-button-display: var(--seek-forward-button);\n  --media-mute-button-display: var(--mute-button);\n  --media-captions-button-display: var(--captions-button);\n  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));\n  --media-rendition-menu-button-display: var(--rendition-menu-button);\n  --media-audio-track-menu-button-display: var(--audio-track-menu-button);\n  --media-airplay-button-display: var(--airplay-button);\n  --media-pip-button-display: var(--pip-button);\n  --media-fullscreen-button-display: var(--fullscreen-button);\n  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));\n  --media-playback-rate-button-display: var(--playback-rate-button);\n  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);\n  --media-volume-range-display: var(--volume-range);\n  --media-time-range-display: var(--time-range);\n  --media-time-display-display: var(--time-display);\n  --media-duration-display-display: var(--duration-display);\n  --media-title-display-display: var(--title-display);\n\n  display: inline-block;\n  line-height: 0;\n  width: 100%;\n}\n\na {\n  color: #fff;\n  font-size: 0.9em;\n  text-decoration: underline;\n}\n\nmedia-theme {\n  display: inline-block;\n  line-height: 0;\n  width: 100%;\n  height: 100%;\n  direction: ltr;\n}\n\nmedia-poster-image {\n  display: inline-block;\n  line-height: 0;\n  width: 100%;\n  height: 100%;\n}\n\nmedia-poster-image:not([src]):not([placeholdersrc]) {\n  display: none;\n}\n\n::part(top),\n[part~='top'] {\n  --media-control-display: var(--controls, var(--top-controls));\n  --media-play-button-display: var(--play-button, var(--top-play-button));\n  --media-live-button-display: var(--live-button, var(--top-live-button));\n  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));\n  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));\n  --media-mute-button-display: var(--mute-button, var(--top-mute-button));\n  --media-captions-button-display: var(--captions-button, var(--top-captions-button));\n  --media-captions-menu-button-display: var(\n    --captions-menu-button,\n    var(--media-captions-button-display, var(--top-captions-menu-button))\n  );\n  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));\n  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));\n  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));\n  --media-pip-button-display: var(--pip-button, var(--top-pip-button));\n  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));\n  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));\n  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));\n  --media-playback-rate-menu-button-display: var(\n    --captions-menu-button,\n    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))\n  );\n  --media-volume-range-display: var(--volume-range, var(--top-volume-range));\n  --media-time-range-display: var(--time-range, var(--top-time-range));\n  --media-time-display-display: var(--time-display, var(--top-time-display));\n  --media-duration-display-display: var(--duration-display, var(--top-duration-display));\n  --media-title-display-display: var(--title-display, var(--top-title-display));\n}\n\n::part(center),\n[part~='center'] {\n  --media-control-display: var(--controls, var(--center-controls));\n  --media-play-button-display: var(--play-button, var(--center-play-button));\n  --media-live-button-display: var(--live-button, var(--center-live-button));\n  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));\n  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));\n  --media-mute-button-display: var(--mute-button, var(--center-mute-button));\n  --media-captions-button-display: var(--captions-button, var(--center-captions-button));\n  --media-captions-menu-button-display: var(\n    --captions-menu-button,\n    var(--media-captions-button-display, var(--center-captions-menu-button))\n  );\n  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));\n  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));\n  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));\n  --media-pip-button-display: var(--pip-button, var(--center-pip-button));\n  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));\n  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));\n  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));\n  --media-playback-rate-menu-button-display: var(\n    --playback-rate-menu-button,\n    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))\n  );\n  --media-volume-range-display: var(--volume-range, var(--center-volume-range));\n  --media-time-range-display: var(--time-range, var(--center-time-range));\n  --media-time-display-display: var(--time-display, var(--center-time-display));\n  --media-duration-display-display: var(--duration-display, var(--center-duration-display));\n}\n\n::part(bottom),\n[part~='bottom'] {\n  --media-control-display: var(--controls, var(--bottom-controls));\n  --media-play-button-display: var(--play-button, var(--bottom-play-button));\n  --media-live-button-display: var(--live-button, var(--bottom-live-button));\n  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));\n  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));\n  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));\n  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));\n  --media-captions-menu-button-display: var(\n    --captions-menu-button,\n    var(--media-captions-button-display, var(--bottom-captions-menu-button))\n  );\n  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));\n  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));\n  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));\n  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));\n  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));\n  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));\n  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));\n  --media-playback-rate-menu-button-display: var(\n    --playback-rate-menu-button,\n    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))\n  );\n  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));\n  --media-time-range-display: var(--time-range, var(--bottom-time-range));\n  --media-time-display-display: var(--time-display, var(--bottom-time-display));\n  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));\n  --media-title-display-display: var(--title-display, var(--bottom-title-display));\n}\n\n:host([no-tooltips]) {\n  --media-tooltip-display: none;\n}\n"}
  </style>
  ${yg(e)}
`)(
       (function (e, t) {
        var n, i;
        return { src: !e.playbackId && e.src, playbackId: e.playbackId, hasSrc: !!e.playbackId || !!e.src || !!e.currentSrc, poster: e.poster, storyboard: e.storyboard, storyboardSrc: e.getAttribute(Cg.STORYBOARD_SRC), placeholder: e.getAttribute('placeholder'), themeTemplate: Mg(e), thumbnailTime: !e.tokens.thumbnail && e.thumbnailTime, autoplay: e.autoplay, crossOrigin: e.crossOrigin, loop: e.loop, noHotKeys: e.hasAttribute(Cg.NOHOTKEYS), hotKeys: e.getAttribute(Cg.HOTKEYS), muted: e.muted, paused: e.paused, preload: e.preload, envKey: e.envKey, preferCmcd: e.preferCmcd, debug: e.debug, disableTracking: e.disableTracking, disableCookies: e.disableCookies, tokens: e.tokens, beaconCollectionDomain: e.beaconCollectionDomain, maxResolution: e.maxResolution, minResolution: e.minResolution, programStartTime: e.programStartTime, programEndTime: e.programEndTime, assetStartTime: e.assetStartTime, assetEndTime: e.assetEndTime, renditionOrder: e.renditionOrder, metadata: e.metadata, playerInitTime: e.playerInitTime, playerSoftwareName: e.playerSoftwareName, playerSoftwareVersion: e.playerSoftwareVersion, startTime: e.startTime, preferPlayback: e.preferPlayback, audio: e.audio, defaultStreamType: e.defaultStreamType, targetLiveWindow: e.getAttribute(La.TARGET_LIVE_WINDOW), streamType: Fb(e.getAttribute(La.STREAM_TYPE)), primaryColor: e.getAttribute(Cg.PRIMARY_COLOR), secondaryColor: e.getAttribute(Cg.SECONDARY_COLOR), accentColor: e.getAttribute(Cg.ACCENT_COLOR), forwardSeekOffset: e.forwardSeekOffset, backwardSeekOffset: e.backwardSeekOffset, defaultHiddenCaptions: e.defaultHiddenCaptions, defaultDuration: e.defaultDuration, defaultShowRemainingTime: e.defaultShowRemainingTime, hideDuration: xg(e), playbackRates: e.getAttribute(Cg.PLAYBACK_RATES), customDomain: null != (n = e.getAttribute(La.CUSTOM_DOMAIN)) ? n : void 0, title: e.getAttribute(Cg.TITLE), videoTitle: null != (i = e.getAttribute(Cg.VIDEO_TITLE)) ? i : e.getAttribute(Cg.TITLE), novolumepref: e.hasAttribute(Cg.NO_VOLUME_PREF), proudlyDisplayMuxBadge: e.hasAttribute(Cg.PROUDLY_DISPLAY_MUX_BADGE), castReceiver: e.castReceiver, ...t, extraSourceParams: e.extraSourceParams };
       })(this, { ...wb(this, Bg), ...e }),
      ),
      this.shadowRoot,
     );
    }),
    (Yg = function () {
     let e = (e) => {
      var t, n;
      if (null == e || !e.startsWith('theme-')) return;
      let i = e.replace(/^theme-/, '');
      if (Dg.includes(i)) return;
      let a = this.getAttribute(e);
      null != a ? null == (t = this.mediaTheme) || t.setAttribute(i, a) : null == (n = this.mediaTheme) || n.removeAttribute(i);
     };
     new MutationObserver((t) => {
      for (let { attributeName: n } of t) e(n);
     }).observe(this, { attributes: !0 }),
      this.getAttributeNames().forEach(e);
    }),
    (jg = function () {
     this.addEventListener('error', (e) => {
      var t;
      let n = null == (t = this.media) ? void 0 : t.error;
      if (!(n instanceof bn)) {
       let { message: e, code: t } = null != n ? n : {};
       n = new bn(e, t);
      }
      if (null == n || !n.fatal) return Jb(n), void (n.data && Jb(`${n.name} data:`, n.data));
      let i = Ag(n);
      i.message && tg(i), eg(n), n.data && eg(`${n.name} data:`, n.data), Rb(this, Vg, Kg).call(this, { isDialogOpen: !0 });
     }),
      this.media &&
       (this.media.errorTranslator = (e = {}) => {
        var t, n, i;
        if (!((null == (t = this.media) ? void 0 : t.error) instanceof bn)) return e;
        let a = Ag(null == (n = this.media) ? void 0 : n.error);
        return { player_error_code: null == (i = this.media) ? void 0 : i.error.code, player_error_message: a.message ? String(a.message) : e.player_error_message, player_error_context: a.context ? String(a.context) : e.player_error_context };
       });
    }),
    (Gg = function () {
     var e, t, n, i;
     let a = () => Rb(this, Vg, Fg).call(this);
     null == (t = null == (e = this.media) ? void 0 : e.textTracks) || t.addEventListener('addtrack', a), null == (i = null == (n = this.media) ? void 0 : n.textTracks) || i.addEventListener('removetrack', a);
    }),
    (Qg = function () {
     var e, t;
     if (!/Firefox/i.test(navigator.userAgent)) return;
     let n,
      i = new WeakMap(),
      a = () => this.streamType === fn.LIVE && !this.secondaryColor && this.offsetWidth >= 800,
      r = (e, t, n = !1) => {
       a() ||
        Array.from((e && e.activeCues) || []).forEach((e) => {
         if (!(!e.snapToLines || e.line < -5 || (e.line >= 0 && e.line < 10)))
          if (!t || this.paused) {
           let t = e.text.split('\n').length,
            a = -3;
           this.streamType === fn.LIVE && (a = -2);
           let r = a - t;
           if (e.line === r && !n) return;
           i.has(e) || i.set(e, e.line), (e.line = r);
          } else
           setTimeout(() => {
            e.line = i.get(e) || 'auto';
           }, 500);
        });
      },
      s = () => {
       var e, t;
       r(n, null != (t = null == (e = this.mediaController) ? void 0 : e.hasAttribute(zs.USER_INACTIVE)) && t);
      },
      o = () => {
       var e, t;
       let i = Array.from((null == (t = null == (e = this.mediaController) ? void 0 : e.media) ? void 0 : t.textTracks) || []).filter((e) => ['subtitles', 'captions'].includes(e.kind) && 'showing' === e.mode)[0];
       i !== n && (null == n || n.removeEventListener('cuechange', s)), (n = i), null == n || n.addEventListener('cuechange', s), r(n, wb(this, Hg));
      };
     o(),
      null == (e = this.textTracks) || e.addEventListener('change', o),
      null == (t = this.textTracks) || t.addEventListener('addtrack', o),
      this.addEventListener('userinactivechange', () => {
       var e, t;
       let i = null == (t = null == (e = this.mediaController) ? void 0 : e.hasAttribute(zs.USER_INACTIVE)) || t;
       wb(this, Hg) !== i && (Sb(this, Hg, i), r(n, wb(this, Hg)));
      });
    });
   var aE = class extends dg {
     constructor() {
      super(),
       Ib(this, Vg),
       Ib(this, Og),
       Ib(this, Pg, !1),
       Ib(this, Ug, {}),
       Ib(this, Hg, !0),
       Ib(this, Wg, new zb(this, 'hotkeys')),
       Ib(this, Bg, {
        ...tE,
        onCloseErrorDialog: (e) => {
         var t;
         'media-error-dialog' === (null == (t = e.composedPath()[0]) ? void 0 : t.localName) && Rb(this, Vg, Kg).call(this, { isDialogOpen: !1 });
        },
        onFocusInErrorDialog: (e) => {
         var t;
         'media-error-dialog' === (null == (t = e.composedPath()[0]) ? void 0 : t.localName) && (Vb(this, Pb.activeElement) || e.preventDefault());
        },
       }),
       Sb(this, Og, Ui()),
       this.attachShadow({ mode: 'open' }),
       Rb(this, Vg, qg).call(this),
       this.isConnected && Rb(this, Vg, $g).call(this);
     }
     static get NAME() {
      return eE;
     }
     static get VERSION() {
      return Jg;
     }
     static get observedAttributes() {
      var e;
      return [...(null != (e = dg.observedAttributes) ? e : []), ...zg, ...Zg, ...Xg];
     }
     get mediaTheme() {
      var e;
      return null == (e = this.shadowRoot) ? void 0 : e.querySelector('media-theme');
     }
     get mediaController() {
      var e, t;
      return null == (t = null == (e = this.mediaTheme) ? void 0 : e.shadowRoot) ? void 0 : t.querySelector('media-controller');
     }
     connectedCallback() {
      let e = this.media;
      e && (e.metadata = Ng(this));
     }
     attributeChangedCallback(e, t, n) {
      switch ((Rb(this, Vg, $g).call(this), super.attributeChangedCallback(e, t, n), e)) {
       case Cg.HOTKEYS:
        wb(this, Wg).value = n;
        break;
       case Cg.THUMBNAIL_TIME:
        null != n && this.tokens.thumbnail && Jb(Wn('Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.').toString());
        break;
       case Cg.THUMBNAIL_TOKEN:
        if (n) {
         let e = Un(n);
         if (e) {
          let { aud: t } = e,
           n = si;
          t !== n && Jb(Wn('The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.').format({ aud: t, expectedAud: n, tokenNamePrefix: 'thumbnail' }));
         }
        }
        break;
       case Cg.STORYBOARD_TOKEN:
        if (n) {
         let e = Un(n);
         if (e) {
          let { aud: t } = e,
           n = oi;
          t !== n && Jb(Wn('The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.').format({ aud: t, expectedAud: n, tokenNamePrefix: 'storyboard' }));
         }
        }
        break;
       case Cg.DRM_TOKEN:
        if (n) {
         let e = Un(n);
         if (e) {
          let { aud: t } = e,
           n = li;
          t !== n && Jb(Wn('The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.').format({ aud: t, expectedAud: n, tokenNamePrefix: 'drm' }));
         }
        }
        break;
       case La.PLAYBACK_ID:
        null != n && n.includes('?token') && eg(Wn('The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.').format({ playbackId: n }));
        break;
       case La.STREAM_TYPE:
        n && ![fn.LIVE, fn.ON_DEMAND, fn.UNKNOWN].includes(n) ? (['ll-live', 'live:dvr', 'll-live:dvr'].includes(this.streamType) ? (this.targetLiveWindow = n.includes('dvr') ? Number.POSITIVE_INFINITY : 0) : tg({ file: 'invalid-stream-type.md', message: Wn('Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`').format({ streamType: this.streamType }) })) : n === fn.LIVE ? null == this.getAttribute(Cg.TARGET_LIVE_WINDOW) && (this.targetLiveWindow = 0) : (this.targetLiveWindow = Number.NaN);
      }
      [La.PLAYBACK_ID, Rg.SRC, Cg.PLAYBACK_TOKEN].includes(e) && t !== n && Sb(this, Bg, { ...wb(this, Bg), ...tE }), Rb(this, Vg, Fg).call(this, { [jb(e)]: n });
     }
     async requestFullscreen(e) {
      var t;
      if (this.mediaController && !this.mediaController.hasAttribute(br.MEDIA_IS_FULLSCREEN))
       return (
        null == (t = this.mediaController) || t.dispatchEvent(new Ob.CustomEvent(hr.MEDIA_ENTER_FULLSCREEN_REQUEST, { composed: !0, bubbles: !0 })),
        new Promise((e, t) => {
         var n;
         null == (n = this.mediaController) || n.addEventListener(gr.MEDIA_IS_FULLSCREEN, () => e(), { once: !0 });
        })
       );
     }
     async exitFullscreen() {
      var e;
      if (this.mediaController && this.mediaController.hasAttribute(br.MEDIA_IS_FULLSCREEN))
       return (
        null == (e = this.mediaController) || e.dispatchEvent(new Ob.CustomEvent(hr.MEDIA_EXIT_FULLSCREEN_REQUEST, { composed: !0, bubbles: !0 })),
        new Promise((e, t) => {
         var n;
         null == (n = this.mediaController) || n.addEventListener(gr.MEDIA_IS_FULLSCREEN, () => e(), { once: !0 });
        })
       );
     }
     get preferCmcd() {
      var e;
      return null != (e = this.getAttribute(La.PREFER_CMCD)) ? e : void 0;
     }
     set preferCmcd(e) {
      e !== this.preferCmcd && (e ? (An.includes(e) ? this.setAttribute(La.PREFER_CMCD, e) : Jb(`Invalid value for preferCmcd. Must be one of ${An.join()}`)) : this.removeAttribute(La.PREFER_CMCD));
     }
     get hasPlayed() {
      var e, t;
      return null != (t = null == (e = this.mediaController) ? void 0 : e.hasAttribute(br.MEDIA_HAS_PLAYED)) && t;
     }
     get inLiveWindow() {
      var e;
      return null == (e = this.mediaController) ? void 0 : e.hasAttribute(br.MEDIA_TIME_IS_LIVE);
     }
     get _hls() {
      var e;
      return null == (e = this.media) ? void 0 : e._hls;
     }
     get mux() {
      var e;
      return null == (e = this.media) ? void 0 : e.mux;
     }
     get theme() {
      var e;
      return null != (e = this.getAttribute(Cg.THEME)) ? e : 'gerwig';
     }
     set theme(e) {
      this.setAttribute(Cg.THEME, `${e}`);
     }
     get themeProps() {
      let e = this.mediaTheme;
      if (!e) return;
      let t = {};
      for (let n of e.getAttributeNames()) {
       if (Dg.includes(n)) continue;
       let i = e.getAttribute(n);
       t[Hb(n)] = '' === i || i;
      }
      return t;
     }
     set themeProps(e) {
      var t, n;
      Rb(this, Vg, $g).call(this);
      let i = { ...this.themeProps, ...e };
      for (let a in i) {
       if (Dg.includes(a)) continue;
       let i = null == e ? void 0 : e[a];
       'boolean' == typeof i || null == i ? null == (t = this.mediaTheme) || t.toggleAttribute(Ub(a), !!i) : null == (n = this.mediaTheme) || n.setAttribute(Ub(a), i);
      }
     }
     get playbackId() {
      var e;
      return null != (e = this.getAttribute(La.PLAYBACK_ID)) ? e : void 0;
     }
     set playbackId(e) {
      e ? this.setAttribute(La.PLAYBACK_ID, e) : this.removeAttribute(La.PLAYBACK_ID);
     }
     get src() {
      var e, t;
      return this.playbackId ? (null != (e = iE(this, Rg.SRC)) ? e : void 0) : null != (t = this.getAttribute(Rg.SRC)) ? t : void 0;
     }
     set src(e) {
      e ? this.setAttribute(Rg.SRC, e) : this.removeAttribute(Rg.SRC);
     }
     get poster() {
      var e;
      let t = this.getAttribute(Rg.POSTER);
      if (null != t) return t;
      let { tokens: n } = this;
      if (!n.playback || n.thumbnail)
       return this.playbackId && !this.audio
        ? ((e, { token: t, customDomain: n = $b, thumbnailTime: i, programTime: a } = {}) => {
           var r;
           let s = null == t ? i : void 0,
            { aud: o } = null != (r = Un(t)) ? r : {};
           if (!t || 't' === o) return `https://image.${n}/${e}/thumbnail.webp${Bb({ token: t, time: s, program_time: a })}`;
          })(this.playbackId, { customDomain: this.customDomain, thumbnailTime: null != (e = this.thumbnailTime) ? e : this.startTime, programTime: this.programStartTime, token: n.thumbnail })
        : void 0;
      Jb('Missing expected thumbnail token. No poster image will be shown');
     }
     set poster(e) {
      e || '' === e ? this.setAttribute(Rg.POSTER, e) : this.removeAttribute(Rg.POSTER);
     }
     get storyboardSrc() {
      var e;
      return null != (e = this.getAttribute(Cg.STORYBOARD_SRC)) ? e : void 0;
     }
     set storyboardSrc(e) {
      e ? this.setAttribute(Cg.STORYBOARD_SRC, e) : this.removeAttribute(Cg.STORYBOARD_SRC);
     }
     get storyboard() {
      let { tokens: e } = this;
      return this.storyboardSrc && !e.storyboard
       ? this.storyboardSrc
       : this.audio || !this.playbackId || !this.streamType || [fn.LIVE, fn.UNKNOWN].includes(this.streamType) || (e.playback && !e.storyboard)
         ? void 0
         : ((e, { token: t, customDomain: n = $b, programStartTime: i, programEndTime: a } = {}) => {
            var r;
            let { aud: s } = null != (r = Un(t)) ? r : {};
            if (!t || 's' === s) return `https://image.${n}/${e}/storyboard.vtt${Bb({ token: t, format: 'webp', program_start_time: i, program_end_time: a })}`;
           })(this.playbackId, { customDomain: this.customDomain, token: e.storyboard, programStartTime: this.programStartTime, programEndTime: this.programEndTime });
     }
     get audio() {
      return this.hasAttribute(Cg.AUDIO);
     }
     set audio(e) {
      e ? this.setAttribute(Cg.AUDIO, '') : this.removeAttribute(Cg.AUDIO);
     }
     get hotkeys() {
      return wb(this, Wg);
     }
     get nohotkeys() {
      return this.hasAttribute(Cg.NOHOTKEYS);
     }
     set nohotkeys(e) {
      e ? this.setAttribute(Cg.NOHOTKEYS, '') : this.removeAttribute(Cg.NOHOTKEYS);
     }
     get thumbnailTime() {
      return Wb(this.getAttribute(Cg.THUMBNAIL_TIME));
     }
     set thumbnailTime(e) {
      this.setAttribute(Cg.THUMBNAIL_TIME, `${e}`);
     }
     get videoTitle() {
      var e, t;
      return null != (t = null != (e = this.getAttribute(Cg.VIDEO_TITLE)) ? e : this.getAttribute(Cg.TITLE)) ? t : '';
     }
     set videoTitle(e) {
      e !== this.videoTitle && (e ? this.setAttribute(Cg.VIDEO_TITLE, e) : this.removeAttribute(Cg.VIDEO_TITLE));
     }
     get placeholder() {
      var e;
      return null != (e = iE(this, Cg.PLACEHOLDER)) ? e : '';
     }
     set placeholder(e) {
      this.setAttribute(Cg.PLACEHOLDER, `${e}`);
     }
     get primaryColor() {
      var e, t;
      let n = this.getAttribute(Cg.PRIMARY_COLOR);
      if (null != n || (this.mediaTheme && ((n = null == (t = null == (e = Ob.getComputedStyle(this.mediaTheme)) ? void 0 : e.getPropertyValue('--_primary-color')) ? void 0 : t.trim()), n))) return n;
     }
     set primaryColor(e) {
      this.setAttribute(Cg.PRIMARY_COLOR, `${e}`);
     }
     get secondaryColor() {
      var e, t;
      let n = this.getAttribute(Cg.SECONDARY_COLOR);
      if (null != n || (this.mediaTheme && ((n = null == (t = null == (e = Ob.getComputedStyle(this.mediaTheme)) ? void 0 : e.getPropertyValue('--_secondary-color')) ? void 0 : t.trim()), n))) return n;
     }
     set secondaryColor(e) {
      this.setAttribute(Cg.SECONDARY_COLOR, `${e}`);
     }
     get accentColor() {
      var e, t;
      let n = this.getAttribute(Cg.ACCENT_COLOR);
      if (null != n || (this.mediaTheme && ((n = null == (t = null == (e = Ob.getComputedStyle(this.mediaTheme)) ? void 0 : e.getPropertyValue('--_accent-color')) ? void 0 : t.trim()), n))) return n;
     }
     set accentColor(e) {
      this.setAttribute(Cg.ACCENT_COLOR, `${e}`);
     }
     get defaultShowRemainingTime() {
      return this.hasAttribute(Cg.DEFAULT_SHOW_REMAINING_TIME);
     }
     set defaultShowRemainingTime(e) {
      e ? this.setAttribute(Cg.DEFAULT_SHOW_REMAINING_TIME, '') : this.removeAttribute(Cg.DEFAULT_SHOW_REMAINING_TIME);
     }
     get playbackRates() {
      if (this.hasAttribute(Cg.PLAYBACK_RATES))
       return this.getAttribute(Cg.PLAYBACK_RATES)
        .trim()
        .split(/\s*,?\s+/)
        .map((e) => Number(e))
        .filter((e) => !Number.isNaN(e))
        .sort((e, t) => e - t);
     }
     set playbackRates(e) {
      e ? this.setAttribute(Cg.PLAYBACK_RATES, e.join(' ')) : this.removeAttribute(Cg.PLAYBACK_RATES);
     }
     get forwardSeekOffset() {
      var e;
      return null != (e = Wb(this.getAttribute(Cg.FORWARD_SEEK_OFFSET))) ? e : 10;
     }
     set forwardSeekOffset(e) {
      this.setAttribute(Cg.FORWARD_SEEK_OFFSET, `${e}`);
     }
     get backwardSeekOffset() {
      var e;
      return null != (e = Wb(this.getAttribute(Cg.BACKWARD_SEEK_OFFSET))) ? e : 10;
     }
     set backwardSeekOffset(e) {
      this.setAttribute(Cg.BACKWARD_SEEK_OFFSET, `${e}`);
     }
     get defaultHiddenCaptions() {
      return this.hasAttribute(Cg.DEFAULT_HIDDEN_CAPTIONS);
     }
     set defaultHiddenCaptions(e) {
      e ? this.setAttribute(Cg.DEFAULT_HIDDEN_CAPTIONS, '') : this.removeAttribute(Cg.DEFAULT_HIDDEN_CAPTIONS);
     }
     get defaultDuration() {
      return Wb(this.getAttribute(Cg.DEFAULT_DURATION));
     }
     set defaultDuration(e) {
      null == e ? this.removeAttribute(Cg.DEFAULT_DURATION) : this.setAttribute(Cg.DEFAULT_DURATION, `${e}`);
     }
     get playerInitTime() {
      return this.hasAttribute(La.PLAYER_INIT_TIME) ? Wb(this.getAttribute(La.PLAYER_INIT_TIME)) : wb(this, Og);
     }
     set playerInitTime(e) {
      e != this.playerInitTime && (null == e ? this.removeAttribute(La.PLAYER_INIT_TIME) : this.setAttribute(La.PLAYER_INIT_TIME, '' + +e));
     }
     get playerSoftwareName() {
      var e;
      return null != (e = this.getAttribute(La.PLAYER_SOFTWARE_NAME)) ? e : eE;
     }
     get playerSoftwareVersion() {
      var e;
      return null != (e = this.getAttribute(La.PLAYER_SOFTWARE_VERSION)) ? e : Jg;
     }
     get beaconCollectionDomain() {
      var e;
      return null != (e = this.getAttribute(La.BEACON_COLLECTION_DOMAIN)) ? e : void 0;
     }
     set beaconCollectionDomain(e) {
      e !== this.beaconCollectionDomain && (e ? this.setAttribute(La.BEACON_COLLECTION_DOMAIN, e) : this.removeAttribute(La.BEACON_COLLECTION_DOMAIN));
     }
     get maxResolution() {
      var e;
      return null != (e = this.getAttribute(La.MAX_RESOLUTION)) ? e : void 0;
     }
     set maxResolution(e) {
      e !== this.maxResolution && (e ? this.setAttribute(La.MAX_RESOLUTION, e) : this.removeAttribute(La.MAX_RESOLUTION));
     }
     get minResolution() {
      var e;
      return null != (e = this.getAttribute(La.MIN_RESOLUTION)) ? e : void 0;
     }
     set minResolution(e) {
      e !== this.minResolution && (e ? this.setAttribute(La.MIN_RESOLUTION, e) : this.removeAttribute(La.MIN_RESOLUTION));
     }
     get renditionOrder() {
      var e;
      return null != (e = this.getAttribute(La.RENDITION_ORDER)) ? e : void 0;
     }
     set renditionOrder(e) {
      e !== this.renditionOrder && (e ? this.setAttribute(La.RENDITION_ORDER, e) : this.removeAttribute(La.RENDITION_ORDER));
     }
     get programStartTime() {
      return Wb(this.getAttribute(La.PROGRAM_START_TIME));
     }
     set programStartTime(e) {
      null == e ? this.removeAttribute(La.PROGRAM_START_TIME) : this.setAttribute(La.PROGRAM_START_TIME, `${e}`);
     }
     get programEndTime() {
      return Wb(this.getAttribute(La.PROGRAM_END_TIME));
     }
     set programEndTime(e) {
      null == e ? this.removeAttribute(La.PROGRAM_END_TIME) : this.setAttribute(La.PROGRAM_END_TIME, `${e}`);
     }
     get assetStartTime() {
      return Wb(this.getAttribute(La.ASSET_START_TIME));
     }
     set assetStartTime(e) {
      null == e ? this.removeAttribute(La.ASSET_START_TIME) : this.setAttribute(La.ASSET_START_TIME, `${e}`);
     }
     get assetEndTime() {
      return Wb(this.getAttribute(La.ASSET_END_TIME));
     }
     set assetEndTime(e) {
      null == e ? this.removeAttribute(La.ASSET_END_TIME) : this.setAttribute(La.ASSET_END_TIME, `${e}`);
     }
     get extraSourceParams() {
      return this.hasAttribute(Cg.EXTRA_SOURCE_PARAMS) ? [...new URLSearchParams(this.getAttribute(Cg.EXTRA_SOURCE_PARAMS)).entries()].reduce((e, [t, n]) => ((e[t] = n), e), {}) : nE;
     }
     set extraSourceParams(e) {
      null == e ? this.removeAttribute(Cg.EXTRA_SOURCE_PARAMS) : this.setAttribute(Cg.EXTRA_SOURCE_PARAMS, new URLSearchParams(e).toString());
     }
     get customDomain() {
      var e;
      return null != (e = this.getAttribute(La.CUSTOM_DOMAIN)) ? e : void 0;
     }
     set customDomain(e) {
      e !== this.customDomain && (e ? this.setAttribute(La.CUSTOM_DOMAIN, e) : this.removeAttribute(La.CUSTOM_DOMAIN));
     }
     get envKey() {
      var e;
      return null != (e = iE(this, La.ENV_KEY)) ? e : void 0;
     }
     set envKey(e) {
      this.setAttribute(La.ENV_KEY, `${e}`);
     }
     get noVolumePref() {
      return this.hasAttribute(Cg.NO_VOLUME_PREF);
     }
     set noVolumePref(e) {
      e ? this.setAttribute(Cg.NO_VOLUME_PREF, '') : this.removeAttribute(Cg.NO_VOLUME_PREF);
     }
     get debug() {
      return null != iE(this, La.DEBUG);
     }
     set debug(e) {
      e ? this.setAttribute(La.DEBUG, '') : this.removeAttribute(La.DEBUG);
     }
     get disableTracking() {
      return null != iE(this, La.DISABLE_TRACKING);
     }
     set disableTracking(e) {
      this.toggleAttribute(La.DISABLE_TRACKING, !!e);
     }
     get disableCookies() {
      return null != iE(this, La.DISABLE_COOKIES);
     }
     set disableCookies(e) {
      e ? this.setAttribute(La.DISABLE_COOKIES, '') : this.removeAttribute(La.DISABLE_COOKIES);
     }
     get streamType() {
      var e, t, n;
      return null != (n = null != (t = this.getAttribute(La.STREAM_TYPE)) ? t : null == (e = this.media) ? void 0 : e.streamType) ? n : fn.UNKNOWN;
     }
     set streamType(e) {
      this.setAttribute(La.STREAM_TYPE, `${e}`);
     }
     get defaultStreamType() {
      var e, t, n;
      return null != (n = null != (t = this.getAttribute(Cg.DEFAULT_STREAM_TYPE)) ? t : null == (e = this.mediaController) ? void 0 : e.getAttribute(Cg.DEFAULT_STREAM_TYPE)) ? n : fn.ON_DEMAND;
     }
     set defaultStreamType(e) {
      e ? this.setAttribute(Cg.DEFAULT_STREAM_TYPE, e) : this.removeAttribute(Cg.DEFAULT_STREAM_TYPE);
     }
     get targetLiveWindow() {
      var e, t;
      return this.hasAttribute(Cg.TARGET_LIVE_WINDOW) ? +this.getAttribute(Cg.TARGET_LIVE_WINDOW) : null != (t = null == (e = this.media) ? void 0 : e.targetLiveWindow) ? t : Number.NaN;
     }
     set targetLiveWindow(e) {
      e == this.targetLiveWindow || (Number.isNaN(e) && Number.isNaN(this.targetLiveWindow)) || (null == e ? this.removeAttribute(Cg.TARGET_LIVE_WINDOW) : this.setAttribute(Cg.TARGET_LIVE_WINDOW, '' + +e));
     }
     get liveEdgeStart() {
      var e;
      return null == (e = this.media) ? void 0 : e.liveEdgeStart;
     }
     get startTime() {
      return Wb(iE(this, La.START_TIME));
     }
     set startTime(e) {
      this.setAttribute(La.START_TIME, `${e}`);
     }
     get preferPlayback() {
      let e = this.getAttribute(La.PREFER_PLAYBACK);
      if (e === yn || e === _n) return e;
     }
     set preferPlayback(e) {
      e !== this.preferPlayback && (e === yn || e === _n ? this.setAttribute(La.PREFER_PLAYBACK, e) : this.removeAttribute(La.PREFER_PLAYBACK));
     }
     get metadata() {
      var e;
      return null == (e = this.media) ? void 0 : e.metadata;
     }
     set metadata(e) {
      Rb(this, Vg, $g).call(this), this.media ? (this.media.metadata = { ...Ng(this), ...e }) : eg('underlying media element missing when trying to set metadata. metadata will not be set.');
     }
     get _hlsConfig() {
      var e;
      return null == (e = this.media) ? void 0 : e._hlsConfig;
     }
     set _hlsConfig(e) {
      Rb(this, Vg, $g).call(this), this.media ? (this.media._hlsConfig = e) : eg('underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.');
     }
     async addCuePoints(e) {
      var t;
      if ((Rb(this, Vg, $g).call(this), this.media)) return null == (t = this.media) ? void 0 : t.addCuePoints(e);
      eg('underlying media element missing when trying to addCuePoints. cuePoints will not be added.');
     }
     get activeCuePoint() {
      var e;
      return null == (e = this.media) ? void 0 : e.activeCuePoint;
     }
     get cuePoints() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.cuePoints) ? t : [];
     }
     addChapters(e) {
      var t;
      if ((Rb(this, Vg, $g).call(this), this.media)) return null == (t = this.media) ? void 0 : t.addChapters(e);
      eg('underlying media element missing when trying to addChapters. chapters will not be added.');
     }
     get activeChapter() {
      var e;
      return null == (e = this.media) ? void 0 : e.activeChapter;
     }
     get chapters() {
      var e, t;
      return null != (t = null == (e = this.media) ? void 0 : e.chapters) ? t : [];
     }
     getStartDate() {
      var e;
      return null == (e = this.media) ? void 0 : e.getStartDate();
     }
     get currentPdt() {
      var e;
      return null == (e = this.media) ? void 0 : e.currentPdt;
     }
     get tokens() {
      let e = this.getAttribute(Cg.PLAYBACK_TOKEN),
       t = this.getAttribute(Cg.DRM_TOKEN),
       n = this.getAttribute(Cg.THUMBNAIL_TOKEN),
       i = this.getAttribute(Cg.STORYBOARD_TOKEN);
      return { ...wb(this, Ug), ...(null != e ? { playback: e } : {}), ...(null != t ? { drm: t } : {}), ...(null != n ? { thumbnail: n } : {}), ...(null != i ? { storyboard: i } : {}) };
     }
     set tokens(e) {
      Sb(this, Ug, null != e ? e : {});
     }
     get playbackToken() {
      var e;
      return null != (e = this.getAttribute(Cg.PLAYBACK_TOKEN)) ? e : void 0;
     }
     set playbackToken(e) {
      this.setAttribute(Cg.PLAYBACK_TOKEN, `${e}`);
     }
     get drmToken() {
      var e;
      return null != (e = this.getAttribute(Cg.DRM_TOKEN)) ? e : void 0;
     }
     set drmToken(e) {
      this.setAttribute(Cg.DRM_TOKEN, `${e}`);
     }
     get thumbnailToken() {
      var e;
      return null != (e = this.getAttribute(Cg.THUMBNAIL_TOKEN)) ? e : void 0;
     }
     set thumbnailToken(e) {
      this.setAttribute(Cg.THUMBNAIL_TOKEN, `${e}`);
     }
     get storyboardToken() {
      var e;
      return null != (e = this.getAttribute(Cg.STORYBOARD_TOKEN)) ? e : void 0;
     }
     set storyboardToken(e) {
      this.setAttribute(Cg.STORYBOARD_TOKEN, `${e}`);
     }
     addTextTrack(e, t, n, i) {
      var a;
      let r = null == (a = this.media) ? void 0 : a.nativeEl;
      if (r) return Yn(r, e, t, n, i);
     }
     removeTextTrack(e) {
      var t;
      let n = null == (t = this.media) ? void 0 : t.nativeEl;
      if (n)
       return (function (e, t) {
        let n = Array.prototype.find.call(e.querySelectorAll('track'), (e) => e.track === t);
        null == n || n.remove();
       })(n, e);
     }
     get textTracks() {
      var e;
      return null == (e = this.media) ? void 0 : e.textTracks;
     }
     get castReceiver() {
      var e;
      return null != (e = this.getAttribute(Cg.CAST_RECEIVER)) ? e : void 0;
     }
     set castReceiver(e) {
      e !== this.castReceiver && (e ? this.setAttribute(Cg.CAST_RECEIVER, e) : this.removeAttribute(Cg.CAST_RECEIVER));
     }
     get castCustomData() {
      var e;
      return null == (e = this.media) ? void 0 : e.castCustomData;
     }
     set castCustomData(e) {
      this.media ? (this.media.castCustomData = e) : eg('underlying media element missing when trying to set castCustomData. castCustomData will not be set.');
     }
     get noTooltips() {
      return this.hasAttribute(Cg.NO_TOOLTIPS);
     }
     set noTooltips(e) {
      e ? this.setAttribute(Cg.NO_TOOLTIPS, '') : this.removeAttribute(Cg.NO_TOOLTIPS);
     }
     get proudlyDisplayMuxBadge() {
      return this.hasAttribute(Cg.PROUDLY_DISPLAY_MUX_BADGE);
     }
     set proudlyDisplayMuxBadge(e) {
      e ? this.setAttribute(Cg.PROUDLY_DISPLAY_MUX_BADGE, '') : this.removeAttribute(Cg.PROUDLY_DISPLAY_MUX_BADGE);
     }
    },
    rE = (e) => {
     throw TypeError(e);
    },
    sE = (e, t, n) => t.has(e) || rE('Cannot ' + n),
    oE = class {
     addEventListener() {}
     removeEventListener() {}
     dispatchEvent(e) {
      return !0;
     }
    };
   if ('undefined' == typeof DocumentFragment) {
    class e extends oE {}
    globalThis.DocumentFragment = e;
   }
   var lE,
    dE = class extends oE {},
    uE = { get(e) {}, define(e, t, n) {}, getName: (e) => null, upgrade(e) {}, whenDefined: (e) => Promise.resolve(dE) };
   lE = new WeakMap();
   var cE = {
     document: {
      createElement: function (e, t) {
       return new dE();
      },
     },
     DocumentFragment: DocumentFragment,
     customElements: uE,
     CustomEvent: class {
      constructor(e, t = {}) {
       ((e, t, n) => {
        t.has(e) ? rE('Cannot add the same private member more than once') : t instanceof WeakSet ? t.add(e) : t.set(e, n);
       })(this, lE),
        ((e, t, n, i) => {
         sE(e, t, 'write to private field'), i ? i.call(e, n) : t.set(e, n);
        })(this, lE, null == t ? void 0 : t.detail);
      }
      get detail() {
       return ((e, t, n) => (sE(e, t, 'read from private field'), n ? n.call(e) : t.get(e)))(this, lE);
      }
      initCustomEvent() {}
     },
     EventTarget: oE,
     HTMLElement: dE,
     HTMLVideoElement: class extends oE {},
    },
    hE = 'undefined' == typeof window || void 0 === globalThis.customElements,
    mE = hE ? cE : globalThis;
   hE || globalThis.document;
   mE.customElements.get('mux-player') || (mE.customElements.define('mux-player', aE), (mE.MuxPlayerElement = aE));
   var pE = parseInt(i.version) >= 19,
    vE = { className: 'class', classname: 'class', htmlFor: 'for', crossOrigin: 'crossorigin', viewBox: 'viewBox', playsInline: 'playsinline', autoPlay: 'autoplay', playbackRate: 'playbackrate' },
    bE = (e = {}) => {
     let { ref: t, ...n } = e;
     return Object.entries(n).reduce((e, [t, n]) => {
      let i = ((e, t) => {
       if (pE || 'boolean' != typeof t || t) {
        if (((e, t) => !((e) => null == e)(t) && e in t)(e, vE)) return vE[e];
        if (void 0 !== t) return /[A-Z]/.test(e) ? ((e) => e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`))(e) : e;
       }
      })(t, n);
      if (!i) return e;
      let a = ((e, t) => (pE || 'boolean' != typeof e ? e : ''))(n);
      return (e[i] = a), e;
     }, {});
    };
   function gE(e, t) {
    if ('function' == typeof e) return e(t);
    null != e && (e.current = t);
   }
   function EE(...e) {
    return i.useCallback(
     (function (...e) {
      return (t) => {
       let n = !1,
        i = e.map((e) => {
         let i = gE(e, t);
         return !n && 'function' == typeof i && (n = !0), i;
        });
       if (n)
        return () => {
         for (let t = 0; t < i.length; t++) {
          let n = i[t];
          'function' == typeof n ? n() : gE(e[t], null);
         }
        };
      };
     })(...e),
     e,
    );
   }
   var fE = Object.prototype.hasOwnProperty,
    yE = (e, t, n) =>
     !((e, t) => {
      if (Object.is(e, t)) return !0;
      if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
      if (Array.isArray(e)) return !(!Array.isArray(t) || e.length !== t.length) && e.some((e, n) => t[n] === e);
      let n = Object.keys(e),
       i = Object.keys(t);
      if (n.length !== i.length) return !1;
      for (let a = 0; a < n.length; a++) if (!fE.call(t, n[a]) || !Object.is(e[n[a]], t[n[a]])) return !1;
      return !0;
     })(t, e[n]),
    _E = (e, t, n) => {
     e[n] = t;
    },
    TE = (e, t, n, a = _E, r = yE) =>
     (0, i.useEffect)(() => {
      let i = null == n ? void 0 : n.current;
      i && r(i, t, e) && a(i, t, e);
     }, [null == n ? void 0 : n.current, t]),
    AE = (() => {
     try {
      return '3.5.3';
     } catch {}
     return 'UNKNOWN';
    })(),
    kE = (e, t, n) =>
     (0, i.useEffect)(() => {
      let i = null == t ? void 0 : t.current;
      if (!i || !n) return;
      let a = e,
       r = n;
      return (
       i.addEventListener(a, r),
       () => {
        i.removeEventListener(a, r);
       }
      );
     }, [null == t ? void 0 : t.current, n, e]),
    wE = i.forwardRef(({ children: e, ...t }, n) => i.createElement('mux-player', { suppressHydrationWarning: !0, ...bE(t), ref: n }, e)),
    IE = AE,
    SE = 'mux-player-react',
    RE = i.forwardRef((e, t) => {
     var n;
     let a = (0, i.useRef)(null),
      r = EE(a, t),
      [s] = ((e, t) => {
       let { onAbort: n, onCanPlay: i, onCanPlayThrough: a, onEmptied: r, onLoadStart: s, onLoadedData: o, onLoadedMetadata: l, onProgress: d, onDurationChange: u, onVolumeChange: c, onRateChange: h, onResize: m, onWaiting: p, onPlay: v, onPlaying: b, onTimeUpdate: g, onPause: E, onSeeking: f, onSeeked: y, onStalled: _, onSuspend: T, onEnded: A, onError: k, onCuePointChange: w, onChapterChange: I, metadata: S, tokens: R, paused: C, playbackId: D, playbackRates: L, currentTime: M, themeProps: x, extraSourceParams: N, castCustomData: O, _hlsConfig: P, ...U } = t;
       return (
        TE('tokens', R, e),
        TE('playbackId', D, e),
        TE('playbackRates', L, e),
        TE('metadata', S, e),
        TE('extraSourceParams', N, e),
        TE('_hlsConfig', P, e),
        TE('themeProps', x, e),
        TE('castCustomData', O, e),
        TE(
         'paused',
         C,
         e,
         (e, t) => {
          null != t && (t ? e.pause() : e.play());
         },
         (e, t, n) => !(e.hasAttribute('autoplay') && !e.hasPlayed) && yE(e, t, n),
        ),
        TE('currentTime', M, e, (e, t) => {
         null != t && (e.currentTime = t);
        }),
        kE('abort', e, n),
        kE('canplay', e, i),
        kE('canplaythrough', e, a),
        kE('emptied', e, r),
        kE('loadstart', e, s),
        kE('loadeddata', e, o),
        kE('loadedmetadata', e, l),
        kE('progress', e, d),
        kE('durationchange', e, u),
        kE('volumechange', e, c),
        kE('ratechange', e, h),
        kE('resize', e, m),
        kE('waiting', e, p),
        kE('play', e, v),
        kE('playing', e, b),
        kE('timeupdate', e, g),
        kE('pause', e, E),
        kE('seeking', e, f),
        kE('seeked', e, y),
        kE('stalled', e, _),
        kE('suspend', e, T),
        kE('ended', e, A),
        kE('error', e, k),
        kE('cuepointchange', e, w),
        kE('chapterchange', e, I),
        [U]
       );
      })(a, e),
      [o] = (0, i.useState)(null != (n = e.playerInitTime) ? n : Ui());
     return i.createElement(wE, { ref: r, defaultHiddenCaptions: e.defaultHiddenCaptions, playerSoftwareName: SE, playerSoftwareVersion: IE, playerInitTime: o, ...s });
    }),
    CE = RE;
  },
 },
]);
