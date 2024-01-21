(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7664],
 {
  5034: (e, t, r) => {
   var a,
    n = Object.create,
    s = Object.defineProperty,
    i = Object.getOwnPropertyDescriptor,
    l = Object.getOwnPropertyNames,
    o = Object.getPrototypeOf,
    p = Object.prototype.hasOwnProperty,
    c = (e, t, r, a) => {
     if ((t && "object" == typeof t) || "function" == typeof t) for (let n of l(t)) p.call(e, n) || n === r || s(e, n, { get: () => t[n], enumerable: !(a = i(t, n)) || a.enumerable });
     return e;
    },
    d = (e, t, r) => (
     ((e, t, r) => {
      t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
     })(e, "symbol" != typeof t ? t + "" : t, r),
     r
    ),
    u = {};
   ((e, t) => {
    for (var r in t) s(e, r, { get: t[r], enumerable: !0 });
   })(u, { default: () => b }),
    (e.exports = ((a = u), c(s({}, "__esModule", { value: !0 }), a)));
   var h = ((e, t, r) => ((r = null != e ? n(o(e)) : {}), c(!t && e && e.__esModule ? r : s(r, "default", { value: e, enumerable: !0 }), e)))(r(959));
   const m = "64px",
    g = {};
   class b extends h.Component {
    constructor() {
     super(...arguments),
      d(this, "mounted", !1),
      d(this, "state", { image: null }),
      d(this, "handleKeyPress", (e) => {
       ("Enter" !== e.key && " " !== e.key) || this.props.onClick();
      });
    }
    componentDidMount() {
     (this.mounted = !0), this.fetchImage(this.props);
    }
    componentDidUpdate(e) {
     const { url: t, light: r } = this.props;
     (e.url === t && e.light === r) || this.fetchImage(this.props);
    }
    componentWillUnmount() {
     this.mounted = !1;
    }
    fetchImage({ url: e, light: t, oEmbedUrl: r }) {
     if (!h.default.isValidElement(t))
      if ("string" != typeof t) {
       if (!g[e])
        return (
         this.setState({ image: null }),
         window
          .fetch(r.replace("{url}", e))
          .then((e) => e.json())
          .then((t) => {
           if (t.thumbnail_url && this.mounted) {
            const r = t.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");
            this.setState({ image: r }), (g[e] = r);
           }
          })
        );
       this.setState({ image: g[e] });
      } else this.setState({ image: t });
    }
    render() {
     const { light: e, onClick: t, playIcon: r, previewTabIndex: a } = this.props,
      { image: n } = this.state,
      s = h.default.isValidElement(e),
      i = { display: "flex", alignItems: "center", justifyContent: "center" },
      l = { preview: { width: "100%", height: "100%", backgroundImage: n && !s ? `url(${n})` : void 0, backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer", ...i }, shadow: { background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)", borderRadius: m, width: m, height: m, position: s ? "absolute" : void 0, ...i }, playIcon: { borderStyle: "solid", borderWidth: "16px 0 16px 26px", borderColor: "transparent transparent transparent white", marginLeft: "7px" } },
      o = h.default.createElement("div", { style: l.shadow, className: "react-player__shadow" }, h.default.createElement("div", { style: l.playIcon, className: "react-player__play-icon" }));
     return h.default.createElement("div", { style: l.preview, className: "react-player__preview", onClick: t, tabIndex: a, onKeyPress: this.handleKeyPress }, s ? e : null, r || o);
    }
   }
  },
 },
]);
