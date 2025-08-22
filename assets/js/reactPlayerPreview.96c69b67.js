'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [87664],
 {
  79240: (e, r, t) => {
   t.r(r), t.d(r, { default: () => n });
   var a = t(75271);
   const l = '64px',
    i = {};
   var n = ({ src: e, light: r, oEmbedUrl: t, onClickPreview: n, playIcon: s, previewTabIndex: o, previewAriaLabel: c }) => {
    const [d, p] = (0, a.useState)(null);
    (0, a.useEffect)(() => {
     e && r && t && u({ src: e, light: r, oEmbedUrl: t });
    }, [e, r, t]);
    const u = async ({ src: e, light: r, oEmbedUrl: t }) => {
      if (a.isValidElement(r)) return;
      if ('string' == typeof r) return void p(r);
      if (i[e]) return void p(i[e]);
      p(null);
      const l = await fetch(t.replace('{url}', e)),
       n = await l.json();
      if (n.thumbnail_url) {
       const r = n.thumbnail_url.replace('height=100', 'height=480').replace('-d_295x166', '-d_640');
       p(r), (i[e] = r);
      }
     },
     b = a.isValidElement(r),
     h = { display: 'flex', alignItems: 'center', justifyContent: 'center' },
     g = { preview: { width: '100%', height: '100%', backgroundImage: d && !b ? `url(${d})` : void 0, backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'pointer', ...h }, shadow: { background: 'radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)', borderRadius: l, width: l, height: l, position: b ? 'absolute' : void 0, ...h }, playIcon: { borderStyle: 'solid', borderWidth: '16px 0 16px 26px', borderColor: 'transparent transparent transparent white', marginLeft: '7px' } },
     y = a.createElement('div', { style: g.shadow, className: 'react-player__shadow' }, a.createElement('div', { style: g.playIcon, className: 'react-player__play-icon' }));
    return a.createElement(
     'div',
     {
      style: g.preview,
      className: 'react-player__preview',
      tabIndex: o,
      onClick: (e) => {
       null == n || n(e);
      },
      onKeyPress: (e) => {
       ('Enter' !== e.key && ' ' !== e.key) || null == n || n(e);
      },
      ...(c ? { 'aria-label': c } : {}),
     },
     b ? r : null,
     s || y,
    );
   };
  },
 },
]);
