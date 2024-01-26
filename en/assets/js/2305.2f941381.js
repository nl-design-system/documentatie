(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2305],
 {
  5101: (t, e, r) => {
   const n = r(99419),
    o = {};
   for (const s of Object.keys(n)) o[n[s]] = s;
   const a = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
   t.exports = a;
   for (const s of Object.keys(a)) {
    if (!("channels" in a[s])) throw new Error("missing channels property: " + s);
    if (!("labels" in a[s])) throw new Error("missing channel labels property: " + s);
    if (a[s].labels.length !== a[s].channels) throw new Error("channel and label counts mismatch: " + s);
    const { channels: t, labels: e } = a[s];
    delete a[s].channels, delete a[s].labels, Object.defineProperty(a[s], "channels", { value: t }), Object.defineProperty(a[s], "labels", { value: e });
   }
   (a.rgb.hsl = function (t) {
    const e = t[0] / 255,
     r = t[1] / 255,
     n = t[2] / 255,
     o = Math.min(e, r, n),
     a = Math.max(e, r, n),
     s = a - o;
    let l, i;
    a === o ? (l = 0) : e === a ? (l = (r - n) / s) : r === a ? (l = 2 + (n - e) / s) : n === a && (l = 4 + (e - r) / s), (l = Math.min(60 * l, 360)), l < 0 && (l += 360);
    const h = (o + a) / 2;
    return (i = a === o ? 0 : h <= 0.5 ? s / (a + o) : s / (2 - a - o)), [l, 100 * i, 100 * h];
   }),
    (a.rgb.hsv = function (t) {
     let e, r, n, o, a;
     const s = t[0] / 255,
      l = t[1] / 255,
      i = t[2] / 255,
      h = Math.max(s, l, i),
      c = h - Math.min(s, l, i),
      u = function (t) {
       return (h - t) / 6 / c + 0.5;
      };
     return 0 === c ? ((o = 0), (a = 0)) : ((a = c / h), (e = u(s)), (r = u(l)), (n = u(i)), s === h ? (o = n - r) : l === h ? (o = 1 / 3 + e - n) : i === h && (o = 2 / 3 + r - e), o < 0 ? (o += 1) : o > 1 && (o -= 1)), [360 * o, 100 * a, 100 * h];
    }),
    (a.rgb.hwb = function (t) {
     const e = t[0],
      r = t[1];
     let n = t[2];
     const o = a.rgb.hsl(t)[0],
      s = (1 / 255) * Math.min(e, Math.min(r, n));
     return (n = 1 - (1 / 255) * Math.max(e, Math.max(r, n))), [o, 100 * s, 100 * n];
    }),
    (a.rgb.cmyk = function (t) {
     const e = t[0] / 255,
      r = t[1] / 255,
      n = t[2] / 255,
      o = Math.min(1 - e, 1 - r, 1 - n);
     return [100 * ((1 - e - o) / (1 - o) || 0), 100 * ((1 - r - o) / (1 - o) || 0), 100 * ((1 - n - o) / (1 - o) || 0), 100 * o];
    }),
    (a.rgb.keyword = function (t) {
     const e = o[t];
     if (e) return e;
     let r,
      a = 1 / 0;
     for (const o of Object.keys(n)) {
      const e = n[o],
       i = ((l = e), ((s = t)[0] - l[0]) ** 2 + (s[1] - l[1]) ** 2 + (s[2] - l[2]) ** 2);
      i < a && ((a = i), (r = o));
     }
     var s, l;
     return r;
    }),
    (a.keyword.rgb = function (t) {
     return n[t];
    }),
    (a.rgb.xyz = function (t) {
     let e = t[0] / 255,
      r = t[1] / 255,
      n = t[2] / 255;
     (e = e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92), (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92), (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92);
     return [100 * (0.4124 * e + 0.3576 * r + 0.1805 * n), 100 * (0.2126 * e + 0.7152 * r + 0.0722 * n), 100 * (0.0193 * e + 0.1192 * r + 0.9505 * n)];
    }),
    (a.rgb.lab = function (t) {
     const e = a.rgb.xyz(t);
     let r = e[0],
      n = e[1],
      o = e[2];
     (r /= 95.047), (n /= 100), (o /= 108.883), (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116), (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116), (o = o > 0.008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116);
     return [116 * n - 16, 500 * (r - n), 200 * (n - o)];
    }),
    (a.hsl.rgb = function (t) {
     const e = t[0] / 360,
      r = t[1] / 100,
      n = t[2] / 100;
     let o, a, s;
     if (0 === r) return (s = 255 * n), [s, s, s];
     o = n < 0.5 ? n * (1 + r) : n + r - n * r;
     const l = 2 * n - o,
      i = [0, 0, 0];
     for (let h = 0; h < 3; h++) (a = e + (1 / 3) * -(h - 1)), a < 0 && a++, a > 1 && a--, (s = 6 * a < 1 ? l + 6 * (o - l) * a : 2 * a < 1 ? o : 3 * a < 2 ? l + (o - l) * (2 / 3 - a) * 6 : l), (i[h] = 255 * s);
     return i;
    }),
    (a.hsl.hsv = function (t) {
     const e = t[0];
     let r = t[1] / 100,
      n = t[2] / 100,
      o = r;
     const a = Math.max(n, 0.01);
     (n *= 2), (r *= n <= 1 ? n : 2 - n), (o *= a <= 1 ? a : 2 - a);
     return [e, 100 * (0 === n ? (2 * o) / (a + o) : (2 * r) / (n + r)), 100 * ((n + r) / 2)];
    }),
    (a.hsv.rgb = function (t) {
     const e = t[0] / 60,
      r = t[1] / 100;
     let n = t[2] / 100;
     const o = Math.floor(e) % 6,
      a = e - Math.floor(e),
      s = 255 * n * (1 - r),
      l = 255 * n * (1 - r * a),
      i = 255 * n * (1 - r * (1 - a));
     switch (((n *= 255), o)) {
      case 0:
       return [n, i, s];
      case 1:
       return [l, n, s];
      case 2:
       return [s, n, i];
      case 3:
       return [s, l, n];
      case 4:
       return [i, s, n];
      case 5:
       return [n, s, l];
     }
    }),
    (a.hsv.hsl = function (t) {
     const e = t[0],
      r = t[1] / 100,
      n = t[2] / 100,
      o = Math.max(n, 0.01);
     let a, s;
     s = (2 - r) * n;
     const l = (2 - r) * o;
     return (a = r * o), (a /= l <= 1 ? l : 2 - l), (a = a || 0), (s /= 2), [e, 100 * a, 100 * s];
    }),
    (a.hwb.rgb = function (t) {
     const e = t[0] / 360;
     let r = t[1] / 100,
      n = t[2] / 100;
     const o = r + n;
     let a;
     o > 1 && ((r /= o), (n /= o));
     const s = Math.floor(6 * e),
      l = 1 - n;
     (a = 6 * e - s), 0 != (1 & s) && (a = 1 - a);
     const i = r + a * (l - r);
     let h, c, u;
     switch (s) {
      default:
      case 6:
      case 0:
       (h = l), (c = i), (u = r);
       break;
      case 1:
       (h = i), (c = l), (u = r);
       break;
      case 2:
       (h = r), (c = l), (u = i);
       break;
      case 3:
       (h = r), (c = i), (u = l);
       break;
      case 4:
       (h = i), (c = r), (u = l);
       break;
      case 5:
       (h = l), (c = r), (u = i);
     }
     return [255 * h, 255 * c, 255 * u];
    }),
    (a.cmyk.rgb = function (t) {
     const e = t[0] / 100,
      r = t[1] / 100,
      n = t[2] / 100,
      o = t[3] / 100;
     return [255 * (1 - Math.min(1, e * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o))];
    }),
    (a.xyz.rgb = function (t) {
     const e = t[0] / 100,
      r = t[1] / 100,
      n = t[2] / 100;
     let o, a, s;
     return (o = 3.2406 * e + -1.5372 * r + -0.4986 * n), (a = -0.9689 * e + 1.8758 * r + 0.0415 * n), (s = 0.0557 * e + -0.204 * r + 1.057 * n), (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : 12.92 * o), (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : 12.92 * a), (s = s > 0.0031308 ? 1.055 * s ** (1 / 2.4) - 0.055 : 12.92 * s), (o = Math.min(Math.max(0, o), 1)), (a = Math.min(Math.max(0, a), 1)), (s = Math.min(Math.max(0, s), 1)), [255 * o, 255 * a, 255 * s];
    }),
    (a.xyz.lab = function (t) {
     let e = t[0],
      r = t[1],
      n = t[2];
     (e /= 95.047), (r /= 100), (n /= 108.883), (e = e > 0.008856 ? e ** (1 / 3) : 7.787 * e + 16 / 116), (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116), (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116);
     return [116 * r - 16, 500 * (e - r), 200 * (r - n)];
    }),
    (a.lab.xyz = function (t) {
     let e, r, n;
     (r = (t[0] + 16) / 116), (e = t[1] / 500 + r), (n = r - t[2] / 200);
     const o = r ** 3,
      a = e ** 3,
      s = n ** 3;
     return (r = o > 0.008856 ? o : (r - 16 / 116) / 7.787), (e = a > 0.008856 ? a : (e - 16 / 116) / 7.787), (n = s > 0.008856 ? s : (n - 16 / 116) / 7.787), (e *= 95.047), (r *= 100), (n *= 108.883), [e, r, n];
    }),
    (a.lab.lch = function (t) {
     const e = t[0],
      r = t[1],
      n = t[2];
     let o;
     (o = (360 * Math.atan2(n, r)) / 2 / Math.PI), o < 0 && (o += 360);
     return [e, Math.sqrt(r * r + n * n), o];
    }),
    (a.lch.lab = function (t) {
     const e = t[0],
      r = t[1],
      n = (t[2] / 360) * 2 * Math.PI;
     return [e, r * Math.cos(n), r * Math.sin(n)];
    }),
    (a.rgb.ansi16 = function (t, e = null) {
     const [r, n, o] = t;
     let s = null === e ? a.rgb.hsv(t)[2] : e;
     if (((s = Math.round(s / 50)), 0 === s)) return 30;
     let l = 30 + ((Math.round(o / 255) << 2) | (Math.round(n / 255) << 1) | Math.round(r / 255));
     return 2 === s && (l += 60), l;
    }),
    (a.hsv.ansi16 = function (t) {
     return a.rgb.ansi16(a.hsv.rgb(t), t[2]);
    }),
    (a.rgb.ansi256 = function (t) {
     const e = t[0],
      r = t[1],
      n = t[2];
     if (e === r && r === n) return e < 8 ? 16 : e > 248 ? 231 : Math.round(((e - 8) / 247) * 24) + 232;
     return 16 + 36 * Math.round((e / 255) * 5) + 6 * Math.round((r / 255) * 5) + Math.round((n / 255) * 5);
    }),
    (a.ansi16.rgb = function (t) {
     let e = t % 10;
     if (0 === e || 7 === e) return t > 50 && (e += 3.5), (e = (e / 10.5) * 255), [e, e, e];
     const r = 0.5 * (1 + ~~(t > 50));
     return [(1 & e) * r * 255, ((e >> 1) & 1) * r * 255, ((e >> 2) & 1) * r * 255];
    }),
    (a.ansi256.rgb = function (t) {
     if (t >= 232) {
      const e = 10 * (t - 232) + 8;
      return [e, e, e];
     }
     let e;
     t -= 16;
     return [(Math.floor(t / 36) / 5) * 255, (Math.floor((e = t % 36) / 6) / 5) * 255, ((e % 6) / 5) * 255];
    }),
    (a.rgb.hex = function (t) {
     const e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
     return "000000".substring(e.length) + e;
    }),
    (a.hex.rgb = function (t) {
     const e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
     if (!e) return [0, 0, 0];
     let r = e[0];
     3 === e[0].length &&
      (r = r
       .split("")
       .map((t) => t + t)
       .join(""));
     const n = parseInt(r, 16);
     return [(n >> 16) & 255, (n >> 8) & 255, 255 & n];
    }),
    (a.rgb.hcg = function (t) {
     const e = t[0] / 255,
      r = t[1] / 255,
      n = t[2] / 255,
      o = Math.max(Math.max(e, r), n),
      a = Math.min(Math.min(e, r), n),
      s = o - a;
     let l, i;
     return (l = s < 1 ? a / (1 - s) : 0), (i = s <= 0 ? 0 : o === e ? ((r - n) / s) % 6 : o === r ? 2 + (n - e) / s : 4 + (e - r) / s), (i /= 6), (i %= 1), [360 * i, 100 * s, 100 * l];
    }),
    (a.hsl.hcg = function (t) {
     const e = t[1] / 100,
      r = t[2] / 100,
      n = r < 0.5 ? 2 * e * r : 2 * e * (1 - r);
     let o = 0;
     return n < 1 && (o = (r - 0.5 * n) / (1 - n)), [t[0], 100 * n, 100 * o];
    }),
    (a.hsv.hcg = function (t) {
     const e = t[1] / 100,
      r = t[2] / 100,
      n = e * r;
     let o = 0;
     return n < 1 && (o = (r - n) / (1 - n)), [t[0], 100 * n, 100 * o];
    }),
    (a.hcg.rgb = function (t) {
     const e = t[0] / 360,
      r = t[1] / 100,
      n = t[2] / 100;
     if (0 === r) return [255 * n, 255 * n, 255 * n];
     const o = [0, 0, 0],
      a = (e % 1) * 6,
      s = a % 1,
      l = 1 - s;
     let i = 0;
     switch (Math.floor(a)) {
      case 0:
       (o[0] = 1), (o[1] = s), (o[2] = 0);
       break;
      case 1:
       (o[0] = l), (o[1] = 1), (o[2] = 0);
       break;
      case 2:
       (o[0] = 0), (o[1] = 1), (o[2] = s);
       break;
      case 3:
       (o[0] = 0), (o[1] = l), (o[2] = 1);
       break;
      case 4:
       (o[0] = s), (o[1] = 0), (o[2] = 1);
       break;
      default:
       (o[0] = 1), (o[1] = 0), (o[2] = l);
     }
     return (i = (1 - r) * n), [255 * (r * o[0] + i), 255 * (r * o[1] + i), 255 * (r * o[2] + i)];
    }),
    (a.hcg.hsv = function (t) {
     const e = t[1] / 100,
      r = e + (t[2] / 100) * (1 - e);
     let n = 0;
     return r > 0 && (n = e / r), [t[0], 100 * n, 100 * r];
    }),
    (a.hcg.hsl = function (t) {
     const e = t[1] / 100,
      r = (t[2] / 100) * (1 - e) + 0.5 * e;
     let n = 0;
     return r > 0 && r < 0.5 ? (n = e / (2 * r)) : r >= 0.5 && r < 1 && (n = e / (2 * (1 - r))), [t[0], 100 * n, 100 * r];
    }),
    (a.hcg.hwb = function (t) {
     const e = t[1] / 100,
      r = e + (t[2] / 100) * (1 - e);
     return [t[0], 100 * (r - e), 100 * (1 - r)];
    }),
    (a.hwb.hcg = function (t) {
     const e = t[1] / 100,
      r = 1 - t[2] / 100,
      n = r - e;
     let o = 0;
     return n < 1 && (o = (r - n) / (1 - n)), [t[0], 100 * n, 100 * o];
    }),
    (a.apple.rgb = function (t) {
     return [(t[0] / 65535) * 255, (t[1] / 65535) * 255, (t[2] / 65535) * 255];
    }),
    (a.rgb.apple = function (t) {
     return [(t[0] / 255) * 65535, (t[1] / 255) * 65535, (t[2] / 255) * 65535];
    }),
    (a.gray.rgb = function (t) {
     return [(t[0] / 100) * 255, (t[0] / 100) * 255, (t[0] / 100) * 255];
    }),
    (a.gray.hsl = function (t) {
     return [0, 0, t[0]];
    }),
    (a.gray.hsv = a.gray.hsl),
    (a.gray.hwb = function (t) {
     return [0, 100, t[0]];
    }),
    (a.gray.cmyk = function (t) {
     return [0, 0, 0, t[0]];
    }),
    (a.gray.lab = function (t) {
     return [t[0], 0, 0];
    }),
    (a.gray.hex = function (t) {
     const e = 255 & Math.round((t[0] / 100) * 255),
      r = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
     return "000000".substring(r.length) + r;
    }),
    (a.rgb.gray = function (t) {
     return [((t[0] + t[1] + t[2]) / 3 / 255) * 100];
    });
  },
  2771: (t, e, r) => {
   const n = r(5101),
    o = r(3153),
    a = {};
   Object.keys(n).forEach((t) => {
    (a[t] = {}), Object.defineProperty(a[t], "channels", { value: n[t].channels }), Object.defineProperty(a[t], "labels", { value: n[t].labels });
    const e = o(t);
    Object.keys(e).forEach((r) => {
     const n = e[r];
     (a[t][r] = (function (t) {
      const e = function (...e) {
       const r = e[0];
       if (null == r) return r;
       r.length > 1 && (e = r);
       const n = t(e);
       if ("object" == typeof n) for (let t = n.length, o = 0; o < t; o++) n[o] = Math.round(n[o]);
       return n;
      };
      return "conversion" in t && (e.conversion = t.conversion), e;
     })(n)),
      (a[t][r].raw = (function (t) {
       const e = function (...e) {
        const r = e[0];
        return null == r ? r : (r.length > 1 && (e = r), t(e));
       };
       return "conversion" in t && (e.conversion = t.conversion), e;
      })(n));
    });
   }),
    (t.exports = a);
  },
  3153: (t, e, r) => {
   const n = r(5101);
   function o(t) {
    const e = (function () {
      const t = {},
       e = Object.keys(n);
      for (let r = e.length, n = 0; n < r; n++) t[e[n]] = { distance: -1, parent: null };
      return t;
     })(),
     r = [t];
    for (e[t].distance = 0; r.length; ) {
     const t = r.pop(),
      o = Object.keys(n[t]);
     for (let n = o.length, a = 0; a < n; a++) {
      const n = o[a],
       s = e[n];
      -1 === s.distance && ((s.distance = e[t].distance + 1), (s.parent = t), r.unshift(n));
     }
    }
    return e;
   }
   function a(t, e) {
    return function (r) {
     return e(t(r));
    };
   }
   function s(t, e) {
    const r = [e[t].parent, t];
    let o = n[e[t].parent][t],
     s = e[t].parent;
    for (; e[s].parent; ) r.unshift(e[s].parent), (o = a(n[e[s].parent][s], o)), (s = e[s].parent);
    return (o.conversion = r), o;
   }
   t.exports = function (t) {
    const e = o(t),
     r = {},
     n = Object.keys(e);
    for (let o = n.length, a = 0; a < o; a++) {
     const t = n[a];
     null !== e[t].parent && (r[t] = s(t, e));
    }
    return r;
   };
  },
  99419: (t) => {
   "use strict";
   t.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
  },
  2489: (t, e, r) => {
   var n = r(99419),
    o = r(27933),
    a = Object.hasOwnProperty,
    s = Object.create(null);
   for (var l in n) a.call(n, l) && (s[n[l]] = l);
   var i = (t.exports = { to: {}, get: {} });
   function h(t, e, r) {
    return Math.min(Math.max(e, t), r);
   }
   function c(t) {
    var e = Math.round(t).toString(16).toUpperCase();
    return e.length < 2 ? "0" + e : e;
   }
   (i.get = function (t) {
    var e, r;
    switch (t.substring(0, 3).toLowerCase()) {
     case "hsl":
      (e = i.get.hsl(t)), (r = "hsl");
      break;
     case "hwb":
      (e = i.get.hwb(t)), (r = "hwb");
      break;
     default:
      (e = i.get.rgb(t)), (r = "rgb");
    }
    return e ? { model: r, value: e } : null;
   }),
    (i.get.rgb = function (t) {
     if (!t) return null;
     var e,
      r,
      o,
      s = [0, 0, 0, 1];
     if ((e = t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i))) {
      for (o = e[2], e = e[1], r = 0; r < 3; r++) {
       var l = 2 * r;
       s[r] = parseInt(e.slice(l, l + 2), 16);
      }
      o && (s[3] = parseInt(o, 16) / 255);
     } else if ((e = t.match(/^#([a-f0-9]{3,4})$/i))) {
      for (o = (e = e[1])[3], r = 0; r < 3; r++) s[r] = parseInt(e[r] + e[r], 16);
      o && (s[3] = parseInt(o + o, 16) / 255);
     } else if ((e = t.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) {
      for (r = 0; r < 3; r++) s[r] = parseInt(e[r + 1], 0);
      e[4] && (e[5] ? (s[3] = 0.01 * parseFloat(e[4])) : (s[3] = parseFloat(e[4])));
     } else {
      if (!(e = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) return (e = t.match(/^(\w+)$/)) ? ("transparent" === e[1] ? [0, 0, 0, 0] : a.call(n, e[1]) ? (((s = n[e[1]])[3] = 1), s) : null) : null;
      for (r = 0; r < 3; r++) s[r] = Math.round(2.55 * parseFloat(e[r + 1]));
      e[4] && (e[5] ? (s[3] = 0.01 * parseFloat(e[4])) : (s[3] = parseFloat(e[4])));
     }
     for (r = 0; r < 3; r++) s[r] = h(s[r], 0, 255);
     return (s[3] = h(s[3], 0, 1)), s;
    }),
    (i.get.hsl = function (t) {
     if (!t) return null;
     var e = t.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
     if (e) {
      var r = parseFloat(e[4]);
      return [((parseFloat(e[1]) % 360) + 360) % 360, h(parseFloat(e[2]), 0, 100), h(parseFloat(e[3]), 0, 100), h(isNaN(r) ? 1 : r, 0, 1)];
     }
     return null;
    }),
    (i.get.hwb = function (t) {
     if (!t) return null;
     var e = t.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
     if (e) {
      var r = parseFloat(e[4]);
      return [((parseFloat(e[1]) % 360) + 360) % 360, h(parseFloat(e[2]), 0, 100), h(parseFloat(e[3]), 0, 100), h(isNaN(r) ? 1 : r, 0, 1)];
     }
     return null;
    }),
    (i.to.hex = function () {
     var t = o(arguments);
     return "#" + c(t[0]) + c(t[1]) + c(t[2]) + (t[3] < 1 ? c(Math.round(255 * t[3])) : "");
    }),
    (i.to.rgb = function () {
     var t = o(arguments);
     return t.length < 4 || 1 === t[3] ? "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")" : "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")";
    }),
    (i.to.rgb.percent = function () {
     var t = o(arguments),
      e = Math.round((t[0] / 255) * 100),
      r = Math.round((t[1] / 255) * 100),
      n = Math.round((t[2] / 255) * 100);
     return t.length < 4 || 1 === t[3] ? "rgb(" + e + "%, " + r + "%, " + n + "%)" : "rgba(" + e + "%, " + r + "%, " + n + "%, " + t[3] + ")";
    }),
    (i.to.hsl = function () {
     var t = o(arguments);
     return t.length < 4 || 1 === t[3] ? "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" : "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")";
    }),
    (i.to.hwb = function () {
     var t = o(arguments),
      e = "";
     return t.length >= 4 && 1 !== t[3] && (e = ", " + t[3]), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + e + ")";
    }),
    (i.to.keyword = function (t) {
     return s[t.slice(0, 3)];
    });
  },
  22305: (t, e, r) => {
   const n = r(2489),
    o = r(2771),
    a = ["keyword", "gray", "hex"],
    s = {};
   for (const g of Object.keys(o)) s[[...o[g].labels].sort().join("")] = g;
   const l = {};
   function i(t, e) {
    if (!(this instanceof i)) return new i(t, e);
    if ((e && e in a && (e = null), e && !(e in o))) throw new Error("Unknown model: " + e);
    let r, h;
    if (null == t) (this.model = "rgb"), (this.color = [0, 0, 0]), (this.valpha = 1);
    else if (t instanceof i) (this.model = t.model), (this.color = [...t.color]), (this.valpha = t.valpha);
    else if ("string" == typeof t) {
     const e = n.get(t);
     if (null === e) throw new Error("Unable to parse color from string: " + t);
     (this.model = e.model), (h = o[this.model].channels), (this.color = e.value.slice(0, h)), (this.valpha = "number" == typeof e.value[h] ? e.value[h] : 1);
    } else if (t.length > 0) {
     (this.model = e || "rgb"), (h = o[this.model].channels);
     const r = Array.prototype.slice.call(t, 0, h);
     (this.color = b(r, h)), (this.valpha = "number" == typeof t[h] ? t[h] : 1);
    } else if ("number" == typeof t) (this.model = "rgb"), (this.color = [(t >> 16) & 255, (t >> 8) & 255, 255 & t]), (this.valpha = 1);
    else {
     this.valpha = 1;
     const e = Object.keys(t);
     "alpha" in t && (e.splice(e.indexOf("alpha"), 1), (this.valpha = "number" == typeof t.alpha ? t.alpha : 0));
     const n = e.sort().join("");
     if (!(n in s)) throw new Error("Unable to parse color from object: " + JSON.stringify(t));
     this.model = s[n];
     const { labels: a } = o[this.model],
      l = [];
     for (r = 0; r < a.length; r++) l.push(t[a[r]]);
     this.color = b(l);
    }
    if (l[this.model])
     for (h = o[this.model].channels, r = 0; r < h; r++) {
      const t = l[this.model][r];
      t && (this.color[r] = t(this.color[r]));
     }
    (this.valpha = Math.max(0, Math.min(1, this.valpha))), Object.freeze && Object.freeze(this);
   }
   i.prototype = {
    toString() {
     return this.string();
    },
    toJSON() {
     return this[this.model]();
    },
    string(t) {
     let e = this.model in n.to ? this : this.rgb();
     e = e.round("number" == typeof t ? t : 1);
     const r = 1 === e.valpha ? e.color : [...e.color, this.valpha];
     return n.to[e.model](r);
    },
    percentString(t) {
     const e = this.rgb().round("number" == typeof t ? t : 1),
      r = 1 === e.valpha ? e.color : [...e.color, this.valpha];
     return n.to.rgb.percent(r);
    },
    array() {
     return 1 === this.valpha ? [...this.color] : [...this.color, this.valpha];
    },
    object() {
     const t = {},
      { channels: e } = o[this.model],
      { labels: r } = o[this.model];
     for (let n = 0; n < e; n++) t[r[n]] = this.color[n];
     return 1 !== this.valpha && (t.alpha = this.valpha), t;
    },
    unitArray() {
     const t = this.rgb().color;
     return (t[0] /= 255), (t[1] /= 255), (t[2] /= 255), 1 !== this.valpha && t.push(this.valpha), t;
    },
    unitObject() {
     const t = this.rgb().object();
     return (t.r /= 255), (t.g /= 255), (t.b /= 255), 1 !== this.valpha && (t.alpha = this.valpha), t;
    },
    round(t) {
     return (t = Math.max(t || 0, 0)), new i([...this.color.map(h(t)), this.valpha], this.model);
    },
    alpha(t) {
     return void 0 !== t ? new i([...this.color, Math.max(0, Math.min(1, t))], this.model) : this.valpha;
    },
    red: c("rgb", 0, u(255)),
    green: c("rgb", 1, u(255)),
    blue: c("rgb", 2, u(255)),
    hue: c(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (t) => ((t % 360) + 360) % 360),
    saturationl: c("hsl", 1, u(100)),
    lightness: c("hsl", 2, u(100)),
    saturationv: c("hsv", 1, u(100)),
    value: c("hsv", 2, u(100)),
    chroma: c("hcg", 1, u(100)),
    gray: c("hcg", 2, u(100)),
    white: c("hwb", 1, u(100)),
    wblack: c("hwb", 2, u(100)),
    cyan: c("cmyk", 0, u(100)),
    magenta: c("cmyk", 1, u(100)),
    yellow: c("cmyk", 2, u(100)),
    black: c("cmyk", 3, u(100)),
    x: c("xyz", 0, u(95.047)),
    y: c("xyz", 1, u(100)),
    z: c("xyz", 2, u(108.833)),
    l: c("lab", 0, u(100)),
    a: c("lab", 1),
    b: c("lab", 2),
    keyword(t) {
     return void 0 !== t ? new i(t) : o[this.model].keyword(this.color);
    },
    hex(t) {
     return void 0 !== t ? new i(t) : n.to.hex(this.rgb().round().color);
    },
    hexa(t) {
     if (void 0 !== t) return new i(t);
     const e = this.rgb().round().color;
     let r = Math.round(255 * this.valpha)
      .toString(16)
      .toUpperCase();
     return 1 === r.length && (r = "0" + r), n.to.hex(e) + r;
    },
    rgbNumber() {
     const t = this.rgb().color;
     return ((255 & t[0]) << 16) | ((255 & t[1]) << 8) | (255 & t[2]);
    },
    luminosity() {
     const t = this.rgb().color,
      e = [];
     for (const [r, n] of t.entries()) {
      const t = n / 255;
      e[r] = t <= 0.04045 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
     }
     return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
    },
    contrast(t) {
     const e = this.luminosity(),
      r = t.luminosity();
     return e > r ? (e + 0.05) / (r + 0.05) : (r + 0.05) / (e + 0.05);
    },
    level(t) {
     const e = this.contrast(t);
     return e >= 7 ? "AAA" : e >= 4.5 ? "AA" : "";
    },
    isDark() {
     const t = this.rgb().color;
     return (2126 * t[0] + 7152 * t[1] + 722 * t[2]) / 1e4 < 128;
    },
    isLight() {
     return !this.isDark();
    },
    negate() {
     const t = this.rgb();
     for (let e = 0; e < 3; e++) t.color[e] = 255 - t.color[e];
     return t;
    },
    lighten(t) {
     const e = this.hsl();
     return (e.color[2] += e.color[2] * t), e;
    },
    darken(t) {
     const e = this.hsl();
     return (e.color[2] -= e.color[2] * t), e;
    },
    saturate(t) {
     const e = this.hsl();
     return (e.color[1] += e.color[1] * t), e;
    },
    desaturate(t) {
     const e = this.hsl();
     return (e.color[1] -= e.color[1] * t), e;
    },
    whiten(t) {
     const e = this.hwb();
     return (e.color[1] += e.color[1] * t), e;
    },
    blacken(t) {
     const e = this.hwb();
     return (e.color[2] += e.color[2] * t), e;
    },
    grayscale() {
     const t = this.rgb().color,
      e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
     return i.rgb(e, e, e);
    },
    fade(t) {
     return this.alpha(this.valpha - this.valpha * t);
    },
    opaquer(t) {
     return this.alpha(this.valpha + this.valpha * t);
    },
    rotate(t) {
     const e = this.hsl();
     let r = e.color[0];
     return (r = (r + t) % 360), (r = r < 0 ? 360 + r : r), (e.color[0] = r), e;
    },
    mix(t, e) {
     if (!t || !t.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof t);
     const r = t.rgb(),
      n = this.rgb(),
      o = void 0 === e ? 0.5 : e,
      a = 2 * o - 1,
      s = r.alpha() - n.alpha(),
      l = ((a * s == -1 ? a : (a + s) / (1 + a * s)) + 1) / 2,
      h = 1 - l;
     return i.rgb(l * r.red() + h * n.red(), l * r.green() + h * n.green(), l * r.blue() + h * n.blue(), r.alpha() * o + n.alpha() * (1 - o));
    },
   };
   for (const g of Object.keys(o)) {
    if (a.includes(g)) continue;
    const { channels: t } = o[g];
    (i.prototype[g] = function (...t) {
     return this.model === g ? new i(this) : t.length > 0 ? new i(t, g) : new i([...((e = o[this.model][g].raw(this.color)), Array.isArray(e) ? e : [e]), this.valpha], g);
     var e;
    }),
     (i[g] = function (...e) {
      let r = e[0];
      return "number" == typeof r && (r = b(e, t)), new i(r, g);
     });
   }
   function h(t) {
    return function (e) {
     return (function (t, e) {
      return Number(t.toFixed(e));
     })(e, t);
    };
   }
   function c(t, e, r) {
    t = Array.isArray(t) ? t : [t];
    for (const n of t) (l[n] || (l[n] = []))[e] = r;
    return (
     (t = t[0]),
     function (n) {
      let o;
      return void 0 !== n ? (r && (n = r(n)), (o = this[t]()), (o.color[e] = n), o) : ((o = this[t]().color[e]), r && (o = r(o)), o);
     }
    );
   }
   function u(t) {
    return function (e) {
     return Math.max(0, Math.min(t, e));
    };
   }
   function b(t, e) {
    for (let r = 0; r < e; r++) "number" != typeof t[r] && (t[r] = 0);
    return t;
   }
   t.exports = i;
  },
  48254: (t) => {
   t.exports = function (t) {
    return !(!t || "string" == typeof t) && (t instanceof Array || Array.isArray(t) || (t.length >= 0 && (t.splice instanceof Function || (Object.getOwnPropertyDescriptor(t, t.length - 1) && "String" !== t.constructor.name))));
   };
  },
  27933: (t, e, r) => {
   "use strict";
   var n = r(48254),
    o = Array.prototype.concat,
    a = Array.prototype.slice,
    s = (t.exports = function (t) {
     for (var e = [], r = 0, s = t.length; r < s; r++) {
      var l = t[r];
      n(l) ? (e = o.call(e, a.call(l))) : e.push(l);
     }
     return e;
    });
   s.wrap = function (t) {
    return function () {
     return t(s(arguments));
    };
   };
  },
 },
]);
