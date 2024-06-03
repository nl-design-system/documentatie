"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4848],
 {
  36629: (e, n, t) => {
   t.d(n, { Z: () => g });
   var i = t(40507),
    o = t.n(i),
    r = t(75271);
   function a() {
    return (
     (a =
      Object.assign ||
      function (e) {
       for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
       }
       return e;
      }),
     a.apply(this, arguments)
    );
   }
   function s(e, n) {
    if (null == e) return {};
    var t,
     i,
     o = {},
     r = Object.keys(e);
    for (i = 0; i < r.length; i++) (t = r[i]), n.indexOf(t) >= 0 || (o[t] = e[t]);
    return o;
   }
   var c,
    u,
    d =
     ((c = function (e) {
      !(function (n) {
       if ("undefined" != typeof window) {
        var t,
         i = 0,
         o = !1,
         r = !1,
         a = 7,
         s = "[iFrameSizer]",
         c = s.length,
         u = null,
         d = window.requestAnimationFrame,
         f = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 },
         l = {},
         m = null,
         g = {
          autoResize: !0,
          bodyBackground: null,
          bodyMargin: null,
          bodyMarginV1: 8,
          bodyPadding: null,
          checkOrigin: !0,
          inPageLinks: !1,
          enablePublicMethods: !0,
          heightCalculationMethod: "bodyOffset",
          id: "iFrameResizer",
          interval: 32,
          log: !1,
          maxHeight: 1 / 0,
          maxWidth: 1 / 0,
          minHeight: 0,
          minWidth: 0,
          resizeFrom: "parent",
          scrolling: !1,
          sizeHeight: !0,
          sizeWidth: !1,
          warningTimeout: 5e3,
          tolerance: 0,
          widthCalculationMethod: "scroll",
          onClose: function () {
           return !0;
          },
          onClosed: function () {},
          onInit: function () {},
          onMessage: function () {
           x("onMessage function not defined");
          },
          onMouseEnter: function () {},
          onMouseLeave: function () {},
          onResized: function () {},
          onScroll: function () {
           return !0;
          },
         },
         h = {};
        window.jQuery &&
         ((t = window.jQuery).fn
          ? t.fn.iFrameResize ||
            (t.fn.iFrameResize = function (e) {
             return this.filter("iframe")
              .each(function (n, t) {
               j(t, e);
              })
              .end();
            })
          : z("", "Unable to bind to jQuery, it is not fully loaded.")),
         "function" == typeof n && n.amd ? n([], V) : (e.exports = V()),
         (window.iFrameResize = window.iFrameResize || V());
       }
       function p() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
       }
       function w(e, n, t) {
        e.addEventListener(n, t, !1);
       }
       function b(e, n, t) {
        e.removeEventListener(n, t, !1);
       }
       function y(e) {
        return (
         s +
         "[" +
         (function (e) {
          var n = "Host page: " + e;
          return window.top !== window.self && (n = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e), n;
         })(e) +
         "]"
        );
       }
       function v(e) {
        return l[e] ? l[e].log : o;
       }
       function M(e, n) {
        k("log", e, n, v(e));
       }
       function z(e, n) {
        k("info", e, n, v(e));
       }
       function x(e, n) {
        k("warn", e, n, !0);
       }
       function k(e, n, t, i) {
        !0 === i && "object" == typeof window.console && console[e](y(n), t);
       }
       function F(e) {
        function n() {
         o("Height"),
          o("Width"),
          P(
           function () {
            H(B), T(q), y("onResized", B);
           },
           B,
           "init",
          );
        }
        function t(e) {
         return "border-box" !== e.boxSizing ? 0 : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) + (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0);
        }
        function i(e) {
         return "border-box" !== e.boxSizing ? 0 : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) + (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0);
        }
        function o(e) {
         var n = Number(l[q]["max" + e]),
          t = Number(l[q]["min" + e]),
          i = e.toLowerCase(),
          o = Number(B[i]);
         M(q, "Checking " + i + " is in range " + t + "-" + n), o < t && ((o = t), M(q, "Set " + i + " to min value")), o > n && ((o = n), M(q, "Set " + i + " to max value")), (B[i] = "" + o);
        }
        function r(e) {
         return A.substr(A.indexOf(":") + a + e);
        }
        function d(e, n) {
         var t, i, o;
         (t = function () {
          var t, i;
          S("Send Page Info", "pageInfo:" + ((t = document.body.getBoundingClientRect()), (i = B.iframe.getBoundingClientRect()), JSON.stringify({ iframeHeight: i.height, iframeWidth: i.width, clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0), clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0), offsetTop: parseInt(i.top - t.top, 10), offsetLeft: parseInt(i.left - t.left, 10), scrollTop: window.pageYOffset, scrollLeft: window.pageXOffset, documentHeight: document.documentElement.clientHeight, documentWidth: document.documentElement.clientWidth, windowHeight: window.innerHeight, windowWidth: window.innerWidth })), e, n);
         }),
          (i = 32),
          h[(o = n)] ||
           (h[o] = setTimeout(function () {
            (h[o] = null), t();
           }, i));
        }
        function f(e) {
         var n = e.getBoundingClientRect();
         return C(q), { x: Math.floor(Number(n.left) + Number(u.x)), y: Math.floor(Number(n.top) + Number(u.y)) };
        }
        function m(e) {
         var n = e ? f(B.iframe) : { x: 0, y: 0 },
          t = { x: Number(B.width) + n.x, y: Number(B.height) + n.y };
         M(q, "Reposition requested from iFrame (offset x:" + n.x + " y:" + n.y + ")"), window.top !== window.self ? (window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](t.x, t.y) : x(q, "Unable to scroll to requested position, window.parentIFrame not found")) : ((u = t), g(), M(q, "--"));
        }
        function g() {
         !1 !== y("onScroll", u) ? T(q) : E();
        }
        function p(e) {
         y(e, { iframe: B.iframe, screenX: B.width, screenY: B.height, type: B.type });
        }
        function y(e, n) {
         return R(q, e, n);
        }
        var v,
         k,
         F,
         I,
         j,
         L,
         A = e.data,
         B = {},
         q = null;
        "[iFrameResizerChild]Ready" === A
         ? (function () {
            for (var e in l) S("iFrame requested init", N(e), l[e].iframe, e);
           })()
         : s === ("" + A).substr(0, c) && A.substr(c).split(":")[0] in l
           ? ((F = A.substr(c).split(":")),
             (I = F[1] ? parseInt(F[1], 10) : 0),
             (j = l[F[0]] && l[F[0]].iframe),
             (L = getComputedStyle(j)),
             (B = { iframe: j, id: F[0], height: I + t(L) + i(L), width: F[2], type: F[3] }),
             (q = B.id),
             l[q] && (l[q].loaded = !0),
             (k = B.type in { true: 1, false: 1, undefined: 1 }) && M(q, "Ignoring init message from meta parent page"),
             !k &&
              (function (e) {
               var n = !0;
               return l[e] || ((n = !1), x(B.type + " No settings for " + e + ". Message was: " + A)), n;
              })(q) &&
              (M(q, "Received: " + A),
              (v = !0),
              null === B.iframe && (x(q, "IFrame (" + B.id + ") not found"), (v = !1)),
              v &&
               (function () {
                var n,
                 t = e.origin,
                 i = l[q] && l[q].checkOrigin;
                if (
                 i &&
                 "" + t != "null" &&
                 !(i.constructor === Array
                  ? (function () {
                     var e = 0,
                      n = !1;
                     for (M(q, "Checking connection is from allowed list of origins: " + i); e < i.length; e++)
                      if (i[e] === t) {
                       n = !0;
                       break;
                      }
                     return n;
                    })()
                  : ((n = l[q] && l[q].remoteHost), M(q, "Checking connection is from: " + n), t === n))
                )
                 throw new Error("Unexpected message received from: " + t + " for " + B.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
                return !0;
               })() &&
               (function () {
                switch ((l[q] && l[q].firstRun && l[q] && (l[q].firstRun = !1), B.type)) {
                 case "close":
                  O(B.iframe);
                  break;
                 case "message":
                  (a = r(6)), M(q, "onMessage passed: {iframe: " + B.iframe.id + ", message: " + a + "}"), y("onMessage", { iframe: B.iframe, message: JSON.parse(a) }), M(q, "--");
                  break;
                 case "mouseenter":
                  p("onMouseEnter");
                  break;
                 case "mouseleave":
                  p("onMouseLeave");
                  break;
                 case "autoResize":
                  l[q].autoResize = JSON.parse(r(9));
                  break;
                 case "scrollTo":
                  m(!1);
                  break;
                 case "scrollToOffset":
                  m(!0);
                  break;
                 case "pageInfo":
                  d(l[q] && l[q].iframe, q),
                   (function () {
                    function e(e, i) {
                     function o() {
                      l[t] ? d(l[t].iframe, t) : n();
                     }
                     ["scroll", "resize"].forEach(function (n) {
                      M(t, e + n + " listener for sendPageInfo"), i(window, n, o);
                     });
                    }
                    function n() {
                     e("Remove ", b);
                    }
                    var t = q;
                    e("Add ", w), l[t] && (l[t].stopPageInfo = n);
                   })();
                  break;
                 case "pageInfoStop":
                  l[q] && l[q].stopPageInfo && (l[q].stopPageInfo(), delete l[q].stopPageInfo);
                  break;
                 case "inPageLink":
                  (t = r(9).split("#")[1] || ""), (i = decodeURIComponent(t)), (o = document.getElementById(i) || document.getElementsByName(i)[0]) ? ((e = f(o)), M(q, "Moving to in page link (#" + t + ") at x: " + e.x + " y: " + e.y), (u = { x: e.x, y: e.y }), g(), M(q, "--")) : window.top !== window.self ? (window.parentIFrame ? window.parentIFrame.moveToAnchor(t) : M(q, "In page link #" + t + " not found and window.parentIFrame not found")) : M(q, "In page link #" + t + " not found");
                  break;
                 case "reset":
                  W(B);
                  break;
                 case "init":
                  n(), y("onInit", B.iframe);
                  break;
                 default:
                  n();
                }
                var e, t, i, o, a;
               })()))
           : z(q, "Ignored: " + A);
       }
       function R(e, n, t) {
        var i = null,
         o = null;
        if (l[e]) {
         if ("function" != typeof (i = l[e][n])) throw new TypeError(n + " on iFrame[" + e + "] is not a function");
         o = i(t);
        }
        return o;
       }
       function I(e) {
        var n = e.id;
        delete l[n];
       }
       function O(e) {
        var n = e.id;
        if (!1 !== R(n, "onClose", n)) {
         M(n, "Removing iFrame: " + n);
         try {
          e.parentNode && e.parentNode.removeChild(e);
         } catch (t) {
          x(t);
         }
         R(n, "onClosed", n), M(n, "--"), I(e);
        } else M(n, "Close iframe cancelled by onClose event");
       }
       function C(e) {
        null === u && M(e, "Get page position: " + (u = { x: window.pageXOffset !== n ? window.pageXOffset : document.documentElement.scrollLeft, y: window.pageYOffset !== n ? window.pageYOffset : document.documentElement.scrollTop }).x + "," + u.y);
       }
       function T(e) {
        null !== u && (window.scrollTo(u.x, u.y), M(e, "Set page position: " + u.x + "," + u.y), E());
       }
       function E() {
        u = null;
       }
       function W(e) {
        M(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")),
         C(e.id),
         P(
          function () {
           H(e), S("reset", "reset", e.iframe, e.id);
          },
          e,
          "reset",
         );
       }
       function H(e) {
        function n(n) {
         r ||
          "0" !== e[n] ||
          ((r = !0),
          M(i, "Hidden iFrame detected, creating visibility listener"),
          (function () {
           function e() {
            function e(e) {
             function n(n) {
              return "0px" === (l[e] && l[e].iframe.style[n]);
             }
             function t(e) {
              return null !== e.offsetParent;
             }
             l[e] && t(l[e].iframe) && (n("height") || n("width")) && S("Visibility change", "resize", l[e].iframe, e);
            }
            Object.keys(l).forEach(function (n) {
             e(n);
            });
           }
           function n(n) {
            M("window", "Mutation observed: " + n[0].target + " " + n[0].type), L(e, 16);
           }
           function t() {
            var e = document.querySelector("body"),
             t = { attributes: !0, attributeOldValue: !1, characterData: !0, characterDataOldValue: !1, childList: !0, subtree: !0 };
            new i(n).observe(e, t);
           }
           var i = p();
           i && t();
          })());
        }
        function t(t) {
         !(function (n) {
          e.id ? ((e.iframe.style[n] = e[n] + "px"), M(e.id, "IFrame (" + i + ") " + n + " set to " + e[n] + "px")) : M("undefined", "messageData id not set");
         })(t),
          n(t);
        }
        var i = e.iframe.id;
        l[i] && (l[i].sizeHeight && t("height"), l[i].sizeWidth && t("width"));
       }
       function P(e, n, t) {
        t !== n.type && d && !window.jasmine ? (M(n.id, "Requesting animation frame"), d(e)) : e();
       }
       function S(e, n, t, i, o) {
        var r,
         a = !1;
        (i = i || t.id),
         l[i] &&
          (t && "contentWindow" in t && null !== t.contentWindow ? ((r = l[i] && l[i].targetOrigin), M(i, "[" + e + "] Sending msg to iframe[" + i + "] (" + n + ") targetOrigin: " + r), t.contentWindow.postMessage(s + n, r)) : x(i, "[" + e + "] IFrame(" + i + ") not found"),
          o &&
           l[i] &&
           l[i].warningTimeout &&
           (l[i].msgTimeout = setTimeout(function () {
            !l[i] || l[i].loaded || a || ((a = !0), x(i, "IFrame has not responded within " + l[i].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."));
           }, l[i].warningTimeout)));
       }
       function N(e) {
        return e + ":" + l[e].bodyMarginV1 + ":" + l[e].sizeWidth + ":" + l[e].log + ":" + l[e].interval + ":" + l[e].enablePublicMethods + ":" + l[e].autoResize + ":" + l[e].bodyMargin + ":" + l[e].heightCalculationMethod + ":" + l[e].bodyBackground + ":" + l[e].bodyPadding + ":" + l[e].tolerance + ":" + l[e].inPageLinks + ":" + l[e].resizeFrom + ":" + l[e].widthCalculationMethod;
       }
       function j(e, t) {
        function r(e) {
         var n = e.split("Callback");
         if (2 === n.length) {
          var t = "on" + n[0].charAt(0).toUpperCase() + n[0].slice(1);
          (this[t] = this[e]), delete this[e], x(c, "Deprecated: '" + e + "' has been renamed '" + t + "'. The old method will be removed in the next major version.");
         }
        }
        var a,
         s,
         c = (function (n) {
          var r;
          return "" === n && ((e.id = ((r = (t && t.id) || g.id + i++), null !== document.getElementById(r) && (r += i++), (n = r))), (o = (t || {}).log), M(n, "Added missing iframe ID: " + n + " (" + e.src + ")")), n;
         })(e.id);
        c in l && "iFrameResizer" in e
         ? x(c, "Ignored iFrame, already setup.")
         : ((function (n) {
            var t;
            (n = n || {}),
             (l[c] = { firstRun: !0, iframe: e, remoteHost: e.src && e.src.split("/").slice(0, 3).join("/") }),
             (function (e) {
              if ("object" != typeof e) throw new TypeError("Options is not an object");
             })(n),
             Object.keys(n).forEach(r, n),
             (function (e) {
              for (var n in g) Object.prototype.hasOwnProperty.call(g, n) && (l[c][n] = Object.prototype.hasOwnProperty.call(e, n) ? e[n] : g[n]);
             })(n),
             l[c] && (l[c].targetOrigin = !0 === l[c].checkOrigin ? ("" === (t = l[c].remoteHost) || null !== t.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : t) : "*");
           })(t),
           (function () {
            switch ((M(c, "IFrame scrolling " + (l[c] && l[c].scrolling ? "enabled" : "disabled") + " for " + c), (e.style.overflow = !1 === (l[c] && l[c].scrolling) ? "hidden" : "auto"), l[c] && l[c].scrolling)) {
             case "omit":
              break;
             case !0:
              e.scrolling = "yes";
              break;
             case !1:
              e.scrolling = "no";
              break;
             default:
              e.scrolling = l[c] ? l[c].scrolling : "no";
            }
           })(),
           (function () {
            function n(n) {
             1 / 0 !== l[c][n] && 0 !== l[c][n] && ((e.style[n] = l[c][n] + "px"), M(c, "Set " + n + " = " + l[c][n] + "px"));
            }
            function t(e) {
             if (l[c]["min" + e] > l[c]["max" + e]) throw new Error("Value for min" + e + " can not be greater than max" + e);
            }
            t("Height"), t("Width"), n("maxHeight"), n("minHeight"), n("maxWidth"), n("minWidth");
           })(),
           ("number" != typeof (l[c] && l[c].bodyMargin) && "0" !== (l[c] && l[c].bodyMargin)) || ((l[c].bodyMarginV1 = l[c].bodyMargin), (l[c].bodyMargin = l[c].bodyMargin + "px")),
           (a = N(c)),
           (s = p()) &&
            (function (n) {
             e.parentNode &&
              new n(function (n) {
               n.forEach(function (n) {
                Array.prototype.slice.call(n.removedNodes).forEach(function (n) {
                 n === e && O(e);
                });
               });
              }).observe(e.parentNode, { childList: !0 });
            })(s),
           w(e, "load", function () {
            var t, i;
            S("iFrame.onload", a, e, n, !0), (t = l[c] && l[c].firstRun), (i = l[c] && l[c].heightCalculationMethod in f), !t && i && W({ iframe: e, height: 0, width: 0, type: "init" });
           }),
           S("init", a, e, n, !0),
           l[c] &&
            (l[c].iframe.iFrameResizer = {
             close: O.bind(null, l[c].iframe),
             removeListeners: I.bind(null, l[c].iframe),
             resize: S.bind(null, "Window resize", "resize", l[c].iframe),
             moveToAnchor: function (e) {
              S("Move to anchor", "moveToAnchor:" + e, l[c].iframe, c);
             },
             sendMessage: function (e) {
              S("Send Message", "message:" + (e = JSON.stringify(e)), l[c].iframe, c);
             },
            }));
       }
       function L(e, n) {
        null === m &&
         (m = setTimeout(function () {
          (m = null), e();
         }, n));
       }
       function A() {
        "hidden" !== document.visibilityState &&
         (M("document", "Trigger event: Visiblity change"),
         L(function () {
          B("Tab Visable", "resize");
         }, 16));
       }
       function B(e, n) {
        Object.keys(l).forEach(function (t) {
         (function (e) {
          return l[e] && "parent" === l[e].resizeFrom && l[e].autoResize && !l[e].firstRun;
         })(t) && S(e, n, l[t].iframe, t);
        });
       }
       function q() {
        w(window, "message", F),
         w(window, "resize", function () {
          var e;
          M("window", "Trigger event: " + (e = "resize")),
           L(function () {
            B("Window " + e, "resize");
           }, 16);
         }),
         w(document, "visibilitychange", A),
         w(document, "-webkit-visibilitychange", A);
       }
       function V() {
        function e(e, n) {
         n &&
          ((function () {
           if (!n.tagName) throw new TypeError("Object is not a valid DOM element");
           if ("IFRAME" !== n.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + n.tagName + ">");
          })(),
          j(n, e),
          t.push(n));
        }
        var t;
        return (
         (function () {
          var e,
           n = ["moz", "webkit", "o", "ms"];
          for (e = 0; e < n.length && !d; e += 1) d = window[n[e] + "RequestAnimationFrame"];
          d ? (d = d.bind(window)) : M("setup", "RequestAnimationFrame not supported");
         })(),
         q(),
         function (i, o) {
          switch (
           ((t = []),
           (function (e) {
            e && e.enablePublicMethods && x("enablePublicMethods option has been removed, public methods are now always available in the iFrame");
           })(i),
           typeof o)
          ) {
           case "undefined":
           case "string":
            Array.prototype.forEach.call(document.querySelectorAll(o || "iframe"), e.bind(n, i));
            break;
           case "object":
            e(i, o);
            break;
           default:
            throw new TypeError("Unexpected data type (" + typeof o + ")");
          }
          return t;
         }
        );
       }
      })();
     }),
     c((u = { exports: {} }), u.exports),
     u.exports),
    f = function () {},
    l = f,
    m = function (e) {
     var n = e.title,
      t = e.forwardRef,
      i = s(e, ["title", "forwardRef"]),
      o = (function (e) {
       return e.autoResize, e.bodyBackground, e.bodyMargin, e.bodyPadding, e.checkOrigin, e.inPageLinks, e.heightCalculationMethod, e.interval, e.log, e.maxHeight, e.maxWidth, e.minHeight, e.minWidth, e.resizeFrom, e.scrolling, e.sizeHeight, e.sizeWidth, e.warningTimeout, e.tolerance, e.widthCalculationMethod, e.onClosed, e.onInit, e.onMessage, e.onMouseEnter, e.onMouseLeave, e.onResized, s(e, ["autoResize", "bodyBackground", "bodyMargin", "bodyPadding", "checkOrigin", "inPageLinks", "heightCalculationMethod", "interval", "log", "maxHeight", "maxWidth", "minHeight", "minWidth", "resizeFrom", "scrolling", "sizeHeight", "sizeWidth", "warningTimeout", "tolerance", "widthCalculationMethod", "onClosed", "onInit", "onMessage", "onMouseEnter", "onMouseLeave", "onResized"]);
      })(i),
      c = (0, r.useRef)(null),
      u = function () {
       return l(!c.current, "[iframeSizerReact][" + (c && c.current && c.current.id) + "] Close event ignored, to remove the iframe update your React component"), !c.current;
      };
     return (
      (0, r.useEffect)(function () {
       var e = c.current;
       return (
        d(a({}, i, { onClose: u }), e),
        function () {
         return e.iFrameResizer && e.iFrameResizer.removeListeners();
        }
       );
      }, []),
      (0, r.useImperativeHandle)(t, function () {
       return {
        resize: function () {
         return c.current.iFrameResizer.resize();
        },
        moveToAnchor: function (e) {
         return c.current.iFrameResizer.moveToAnchor(e);
        },
        sendMessage: function (e, n) {
         c.current.iFrameResizer.sendMessage(e, n);
        },
       };
      }),
      r.createElement("iframe", a({ title: n }, o, { ref: c }))
     );
    };
   (m.defaultProps = { title: "iframe" }), (m.propTypes = { title: o().string });
   const g = m;
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => a });
   var i = t(75271);
   const o = {},
    r = i.createContext(o);
   function a(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);