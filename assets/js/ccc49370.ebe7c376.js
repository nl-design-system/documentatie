'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46103],
 {
  64477: (e, t, l) => {
   l.d(t, { Z: () => d });
   l(75271);
   var n = l(40217),
    r = l(65697),
    o = l(83033),
    s = l(4814);
   const a = { iconEdit: 'iconEdit_QIdz' };
   var i = l(52676);
   function c(e) {
    let { className: t, ...l } = e;
    return (0, i.jsx)('svg', { fill: 'currentColor', height: '20', width: '20', viewBox: '0 0 40 40', className: (0, s.Z)(a.iconEdit, t), 'aria-hidden': 'true', ...l, children: (0, i.jsx)('g', { children: (0, i.jsx)('path', { d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z' }) }) });
   }
   function d(e) {
    let { editUrl: t } = e;
    return (0, i.jsxs)(o.Z, { to: t, className: r.k.common.editThisPage, children: [(0, i.jsx)(c, {}), (0, i.jsx)(n.Z, { id: 'theme.common.editThisPage', description: 'The link label to edit the current page', children: 'Edit this page' })] });
   }
  },
  49687: (e, t, l) => {
   l.d(t, { Z: () => s });
   l(75271);
   var n = l(4814),
    r = l(83033),
    o = l(52676);
   function s(e) {
    const { permalink: t, title: l, subLabel: s, isNext: a } = e;
    return (0, o.jsxs)(r.Z, { className: (0, n.Z)('pagination-nav__link', a ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: t, children: [s && (0, o.jsx)('div', { className: 'pagination-nav__sublabel', children: s }), (0, o.jsx)('div', { className: 'pagination-nav__label', children: l })] });
   }
  },
  62178: (e, t, l) => {
   l.d(t, { Z: () => c });
   l(75271);
   var n = l(4814),
    r = l(68721);
   const o = { tableOfContents: 'tableOfContents_LRQk', docItemContainer: 'docItemContainer_uBiB' };
   var s = l(52676);
   const a = 'table-of-contents__link toc-highlight',
    i = 'table-of-contents__link--active';
   function c(e) {
    let { className: t, ...l } = e;
    return (0, s.jsx)('div', { className: (0, n.Z)(o.tableOfContents, 'thin-scrollbar', t), children: (0, s.jsx)(r.Z, { ...l, linkClassName: a, linkActiveClassName: i }) });
   }
  },
  68721: (e, t, l) => {
   l.d(t, { Z: () => p });
   var n = l(75271),
    r = l(72929);
   function o(e) {
    const t = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     l = Array(7).fill(-1);
    t.forEach((e, t) => {
     const n = l.slice(2, e.level);
     (e.parentIndex = Math.max(...n)), (l[e.level] = t);
    });
    const n = [];
    return (
     t.forEach((e) => {
      const { parentIndex: l, ...r } = e;
      l >= 0 ? t[l].children.push(r) : n.push(r);
     }),
     n
    );
   }
   function s(e) {
    let { toc: t, minHeadingLevel: l, maxHeadingLevel: n } = e;
    return t.flatMap((e) => {
     const t = s({ toc: e.children, minHeadingLevel: l, maxHeadingLevel: n });
     return (function (e) {
      return e.level >= l && e.level <= n;
     })(e)
      ? [{ ...e, children: t }]
      : t;
    });
   }
   function a(e) {
    const t = e.getBoundingClientRect();
    return t.top === t.bottom ? a(e.parentNode) : t;
   }
   function i(e, t) {
    let { anchorTopOffset: l } = t;
    const n = e.find((e) => a(e).top >= l);
    if (n) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(a(n))
      ? n
      : (e[e.indexOf(n) - 1] ?? null);
    }
    return e[e.length - 1] ?? null;
   }
   function c() {
    const e = (0, n.useRef)(0),
     {
      navbar: { hideOnScroll: t },
     } = (0, r.L)();
    return (
     (0, n.useEffect)(() => {
      e.current = t ? 0 : document.querySelector('.navbar').clientHeight;
     }, [t]),
     e
    );
   }
   function d(e) {
    const t = (0, n.useRef)(void 0),
     l = c();
    (0, n.useEffect)(() => {
     if (!e) return () => {};
     const { linkClassName: n, linkActiveClassName: r, minHeadingLevel: o, maxHeadingLevel: s } = e;
     function a() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(n),
       a = (function (e) {
        let { minHeadingLevel: t, maxHeadingLevel: l } = e;
        const n = [];
        for (let r = t; r <= l; r += 1) n.push(`h${r}.anchor`);
        return Array.from(document.querySelectorAll(n.join()));
       })({ minHeadingLevel: o, maxHeadingLevel: s }),
       c = i(a, { anchorTopOffset: l.current }),
       d = e.find(
        (e) =>
         c &&
         c.id ===
          (function (e) {
           return decodeURIComponent(e.href.substring(e.href.indexOf('#') + 1));
          })(e),
       );
      e.forEach((e) => {
       !(function (e, l) {
        l ? (t.current && t.current !== e && t.current.classList.remove(r), e.classList.add(r), (t.current = e)) : e.classList.remove(r);
       })(e, e === d);
      });
     }
     return (
      document.addEventListener('scroll', a),
      document.addEventListener('resize', a),
      a(),
      () => {
       document.removeEventListener('scroll', a), document.removeEventListener('resize', a);
      }
     );
    }, [e, l]);
   }
   var m = l(83033),
    u = l(52676);
   function h(e) {
    let { toc: t, className: l, linkClassName: n, isChild: r } = e;
    return t.length ? (0, u.jsx)('ul', { className: r ? void 0 : l, children: t.map((e) => (0, u.jsxs)('li', { children: [(0, u.jsx)(m.Z, { to: `#${e.id}`, className: n ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, u.jsx)(h, { isChild: !0, toc: e.children, className: l, linkClassName: n })] }, e.id)) }) : null;
   }
   const g = n.memo(h);
   function p(e) {
    let { toc: t, className: l = 'table-of-contents table-of-contents__left-border', linkClassName: a = 'table-of-contents__link', linkActiveClassName: i, minHeadingLevel: c, maxHeadingLevel: m, ...h } = e;
    const p = (0, r.L)(),
     x = c ?? p.tableOfContents.minHeadingLevel,
     v = m ?? p.tableOfContents.maxHeadingLevel,
     b = (function (e) {
      let { toc: t, minHeadingLevel: l, maxHeadingLevel: r } = e;
      return (0, n.useMemo)(() => s({ toc: o(t), minHeadingLevel: l, maxHeadingLevel: r }), [t, l, r]);
     })({ toc: t, minHeadingLevel: x, maxHeadingLevel: v });
    return (
     d(
      (0, n.useMemo)(() => {
       if (a && i) return { linkClassName: a, linkActiveClassName: i, minHeadingLevel: x, maxHeadingLevel: v };
      }, [a, i, x, v]),
     ),
     (0, u.jsx)(g, { toc: b, className: l, linkClassName: a, ...h })
    );
   }
  },
  70923: (e, t, l) => {
   l.d(t, { Z: () => a });
   l(75271);
   var n = l(4814),
    r = l(83033);
   const o = { tag: 'tag_YSTM', tagRegular: 'tagRegular_l64o', tagWithCount: 'tagWithCount_oNQj' };
   var s = l(52676);
   function a(e) {
    let { permalink: t, label: l, count: a } = e;
    return (0, s.jsxs)(r.Z, { href: t, className: (0, n.Z)(o.tag, a ? o.tagWithCount : o.tagRegular), children: [l, a && (0, s.jsx)('span', { children: a })] });
   }
  },
  8481: (e, t, l) => {
   l.d(t, { Z: () => i });
   l(75271);
   var n = l(4814),
    r = l(40217),
    o = l(70923);
   const s = { tags: 'tags_MZhc', tag: 'tag_c2Qe' };
   var a = l(52676);
   function i(e) {
    let { tags: t } = e;
    return (0, a.jsxs)(a.Fragment, {
     children: [
      (0, a.jsx)('b', { children: (0, a.jsx)(r.Z, { id: 'theme.tags.tagsListLabel', description: 'The label alongside a tag list', children: 'Tags:' }) }),
      (0, a.jsx)('ul', {
       className: (0, n.Z)(s.tags, 'padding--none', 'margin-left--sm'),
       children: t.map((e) => {
        let { label: t, permalink: l } = e;
        return (0, a.jsx)('li', { className: s.tag, children: (0, a.jsx)(o.Z, { label: t, permalink: l }) }, l);
       }),
      }),
     ],
    });
   }
  },
  94818: (e, t, l) => {
   l.d(t, { C: () => i, n: () => a });
   var n = l(75271),
    r = l(40465),
    o = l(52676);
   const s = n.createContext(null);
   function a(e) {
    let { children: t, content: l, isBlogPostPage: r = !1 } = e;
    const a = (function (e) {
     let { content: t, isBlogPostPage: l } = e;
     return (0, n.useMemo)(() => ({ metadata: t.metadata, frontMatter: t.frontMatter, assets: t.assets, toc: t.toc, isBlogPostPage: l }), [t, l]);
    })({ content: l, isBlogPostPage: r });
    return (0, o.jsx)(s.Provider, { value: a, children: t });
   }
   function i() {
    const e = (0, n.useContext)(s);
    if (null === e) throw new r.i6('BlogPostProvider');
    return e;
   }
  },
  29513: (e, t, l) => {
   l.d(t, { c: () => c });
   var n = l(75271),
    r = l(94699);
   const o = ['zero', 'one', 'two', 'few', 'many', 'other'];
   function s(e) {
    return o.filter((t) => e.includes(t));
   }
   const a = { locale: 'en', pluralForms: s(['one', 'other']), select: (e) => (1 === e ? 'one' : 'other') };
   function i() {
    const {
     i18n: { currentLocale: e },
    } = (0, r.Z)();
    return (0, n.useMemo)(() => {
     try {
      return (function (e) {
       const t = new Intl.PluralRules(e);
       return { locale: e, pluralForms: s(t.resolvedOptions().pluralCategories), select: (e) => t.select(e) };
      })(e);
     } catch (t) {
      return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`), a;
     }
    }, [e]);
   }
   function c() {
    const e = i();
    return {
     selectMessage: (t, l) =>
      (function (e, t, l) {
       const n = e.split('|');
       if (1 === n.length) return n[0];
       n.length > l.pluralForms.length && console.error(`For locale=${l.locale}, a maximum of ${l.pluralForms.length} plural forms are expected (${l.pluralForms.join(',')}), but the message contains ${n.length}: ${e}`);
       const r = l.select(t),
        o = l.pluralForms.indexOf(r);
       return n[Math.min(o, n.length - 1)];
      })(l, t, e),
    };
   }
  },
  24009: (e, t, l) => {
   l.d(t, { Q: () => m });
   var n = l(57229),
    r = l(87573),
    o = l(92826),
    s = l(34616),
    a = l(16167),
    i = l(4814),
    c = l(75271),
    d = l(52676);
   const m = (e) => {
    let { breadcrumbs: t, ...l } = e;
    const m = (0, o.Z)('/'),
     { pathname: u } = (0, r.TH)(),
     h = [{ href: m, label: 'Home', rel: 'home' }, ...t].map((e) => {
      return { ...e, href: ((t = e.href), 'string' == typeof t && !1 === t.endsWith('/') ? `${t}/` : t) };
      var t;
     }),
     g = [...h].reverse().find((e) => e.href !== u);
    return (0, d.jsxs)(d.Fragment, {
     children: [
      (0, d.jsx)('div', {
       className: (0, i.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, d.jsx)(a.Qu, {
        ...l,
        label: 'breadcrumb',
        children: h.map((e, t, l) => {
         let { label: n, href: r, rel: o } = e,
          { length: s } = l;
         return (0, d.jsxs)(c.Fragment, { children: [(0, d.jsx)(a.yY, { href: r, current: t === s - 1, disabled: t === s - 1, rel: (0, i.Z)(o, { up: t === s - 2 }), children: n }), t < s - 1 && (0, d.jsx)(a.sc, { children: '/' })] }, t);
        }),
       }),
      }),
      g && (0, d.jsx)('div', { className: (0, i.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, d.jsx)(a.hE, { children: (0, d.jsxs)(n.r, { href: g.href, rel: g.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, d.jsx)(a.JO, { children: (0, d.jsx)(s.Z, {}) }), g.label] }) }) }),
     ],
    });
   };
  },
  41179: (e, t, l) => {
   l.d(t, { u: () => c });
   var n = l(16167),
    r = l(60648),
    o = l(75271),
    s = l(40761);
   const a = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
     { types: ['maybe-class-name'], style: { color: 'var(--nlds-code-block-maybe-class-name-color, var(--nlds-code-block-class-name-color))' } },
     { types: ['comment'], style: { color: 'var(--nlds-code-block-comment-color)', fontStyle: 'italic' } },
     { types: ['prolog'], style: { color: 'var(--nlds-code-block-prolog-color)', fontStyle: 'italic' } },
     { types: ['cdata'], style: { color: 'var(--nlds-code-block-cdata-color)', fontStyle: 'italic' } },
     { types: ['punctuation'], style: { color: 'var(--nlds-code-block-punctuation-color)' } },
     { types: ['deleted'], style: { color: 'var(--nlds-code-block-deleted-color)', fontStyle: 'italic' } },
     { types: ['symbol'], style: { color: 'var(--nlds-code-block-symbol-color)' } },
     { types: ['property'], style: { color: 'var(--nlds-code-block-property-color)' } },
     { types: ['tag'], style: { color: 'var(--nlds-code-block-tag-color)' } },
     { types: ['operator'], style: { color: 'var(--nlds-code-block-operator-color)' } },
     { types: ['keyword'], style: { color: 'var(--nlds-code-block-keyword-color)' } },
     { types: ['boolean'], style: { color: 'var(--nlds-code-block-boolean-color)' } },
     { types: ['number'], style: { color: 'var(--nlds-code-block-number-color)' } },
     { types: ['constant'], style: { color: 'var(--nlds-code-block-constant-color)' } },
     { types: ['function'], style: { color: 'var(--nlds-code-block-function-color)' } },
     { types: ['builtin'], style: { color: 'var(--nlds-code-block-builtin-color)' } },
     { types: ['char'], style: { color: 'var(--nlds-code-block-char-color)' } },
     { types: ['selector'], style: { color: 'var(--nlds-code-block-selector-color)', fontStyle: 'italic' } },
     { types: ['doctype'], style: { color: 'var(--nlds-code-block-doctype-color)', fontStyle: 'italic' } },
     { types: ['attr-name'], style: { color: 'var(--nlds-code-block-attr-name-color)', fontStyle: 'italic' } },
     { types: ['inserted'], style: { color: 'var(--nlds-code-block-inserted-color)', fontStyle: 'italic' } },
     { types: ['string'], style: { color: 'var(--nlds-code-block-string-color)' } },
     { types: ['url'], style: { color: 'var(--nlds-code-block-url-color)' } },
     { types: ['entity'], style: { color: 'var(--nlds-code-block-entity-color)' } },
     { types: ['class-name'], style: { color: 'var(--nlds-code-block-class-name-color)' } },
     { types: ['atrule'], style: { color: 'var(--nlds-code-block-atrule-color)' } },
     { types: ['attr-value'], style: { color: 'var(--nlds-code-block-attr-value-color)' } },
     { types: ['regex'], style: { color: 'var(--nlds-code-block-regex-color)' } },
     { types: ['important'], style: { color: 'var(--nlds-code-block-important-color)', fontWeight: 'bold' } },
     { types: ['variable'], style: { color: 'var(--nlds-code-block-variable-color)' } },
     { types: ['bold'], style: { fontWeight: 'bold' } },
     { types: ['italic'], style: { fontStyle: 'italic' } },
    ],
   };
   var i = l(52676);
   function c(e) {
    let { lineNumber: t, syntax: l, textContent: c, trim: d } = e,
     m = c;
    const { title: u, type: h } = (0, o.useContext)(s.n),
     g = (0, o.useId)();
    return (
     d && (m = m.trim()),
     (0, i.jsx)(r.y$, {
      theme: a,
      code: m,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: r, getLineProps: o, getTokenProps: s } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(n.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': g, style: l, children: r.map((e, l) => (0, i.jsxs)('span', { ...o({ line: e }), children: [t && (0, i.jsx)('span', { children: l + 1 }), e.map((e, t) => (0, i.jsx)('span', { ...s({ token: e }) }, t)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  40761: (e, t, l) => {
   l.d(t, { X: () => d, n: () => c });
   var n = l(69244),
    r = l(20061),
    o = l(16167),
    s = l(4814),
    a = l(75271),
    i = l(52676);
   const c = (0, a.createContext)({}),
    d = (e) => {
     let { title: t, appearance: l, description: a, children: d, figure: m } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = m ? 'figure' : 'div',
      g = m ? 'figcaption' : 'div';
     return (0, i.jsxs)(h, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof t ? t?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(n.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(o.nv, { children: t })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(o.nv, { children: t })] }), a] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: t, type: u[l] }, children: d }) })] });
    };
  },
  29450: (e, t, l) => {
   l.d(t, { Z: () => a });
   var n = l(24009),
    r = l(95360),
    o = l(4814),
    s = l(52676);
   function a(e) {
    const { sidebar: t, toc: l, breadcrumbs: a = [], children: i, ...c } = e,
     d = t && t.items.length > 0;
    return (0, s.jsx)(r.Z, { ...c, children: (0, s.jsx)('div', { className: 'container margin-vert--md', children: (0, s.jsxs)('div', { className: 'row', children: [(0, s.jsx)('div', { className: 'col col--9 col--offset-1', children: (0, s.jsx)(n.Q, { breadcrumbs: a }) }), (0, s.jsx)('main', { className: (0, o.Z)('utrecht-document', 'utrecht-html', 'col', { 'col--7': d, 'col--9 col--offset-1': !d }), itemScope: !0, itemType: 'http://schema.org/Blog', children: i }), l && (0, s.jsx)('div', { className: 'col col--2', children: l })] }) }) });
   }
  },
  41969: (e, t, l) => {
   l.r(t), l.d(t, { default: () => $ });
   var n = l(14225),
    r = l(65697),
    o = l(94818),
    s = (l(75271), l(4814)),
    a = l(92826),
    i = l(52676);
   function c(e) {
    let { children: t, className: l } = e;
    const {
      frontMatter: n,
      assets: r,
      metadata: { description: s },
     } = (0, o.C)(),
     { withBaseUrl: c } = (0, a.C)(),
     d = r.image ?? n.image,
     m = n.keywords ?? [];
    return (0, i.jsxs)('article', { className: l, itemProp: 'blogPost', itemScope: !0, itemType: 'https://schema.org/BlogPosting', children: [s && (0, i.jsx)('meta', { itemProp: 'description', content: s }), d && (0, i.jsx)('link', { itemProp: 'image', href: c(d, { absolute: !0 }) }), m.length > 0 && (0, i.jsx)('meta', { itemProp: 'keywords', content: m.join(',') }), t] });
   }
   var d = l(83033);
   const m = { title: 'title_hXf4' };
   function u(e) {
    let { className: t } = e;
    const { metadata: l, isBlogPostPage: n } = (0, o.C)(),
     { permalink: r, title: a } = l,
     c = n ? 'h1' : 'h2';
    return (0, i.jsx)(c, { className: (0, s.Z)(m.title, t), itemProp: 'headline', children: n ? a : (0, i.jsx)(d.Z, { itemProp: 'url', to: r, children: a }) });
   }
   var h = l(40217),
    g = l(29513);
   const p = { container: 'container_t8UG' };
   function x(e) {
    let { readingTime: t } = e;
    const l = (function () {
     const { selectMessage: e } = (0, g.c)();
     return (t) => {
      const l = Math.ceil(t);
      return e(l, (0, h.I)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: l }));
     };
    })();
    return (0, i.jsx)(i.Fragment, { children: l(t) });
   }
   function v(e) {
    let { date: t, formattedDate: l } = e;
    return (0, i.jsx)('time', { dateTime: t, itemProp: 'datePublished', children: l });
   }
   function b() {
    return (0, i.jsx)(i.Fragment, { children: ' \xb7 ' });
   }
   function f(e) {
    let { className: t } = e;
    const { metadata: l } = (0, o.C)(),
     { date: n, formattedDate: r, readingTime: a } = l;
    return (0, i.jsxs)('div', { className: (0, s.Z)(p.container, 'margin-vert--md', t), children: [(0, i.jsx)(v, { date: n, formattedDate: r }), void 0 !== a && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(b, {}), (0, i.jsx)(x, { readingTime: a })] })] });
   }
   function j(e) {
    return e.href ? (0, i.jsx)(d.Z, { ...e }) : (0, i.jsx)(i.Fragment, { children: e.children });
   }
   function y(e) {
    let { author: t, className: l } = e;
    const { name: n, title: r, url: o, imageURL: a, email: c } = t,
     d = o || (c && `mailto:${c}`) || void 0;
    return (0, i.jsxs)('div', { className: (0, s.Z)('avatar margin-bottom--sm', l), children: [a && (0, i.jsx)(j, { href: d, className: 'avatar__photo-link', children: (0, i.jsx)('img', { className: 'avatar__photo', src: a, alt: n, itemProp: 'image' }) }), n && (0, i.jsxs)('div', { className: 'avatar__intro', itemProp: 'author', itemScope: !0, itemType: 'https://schema.org/Person', children: [(0, i.jsx)('div', { className: 'avatar__name', children: (0, i.jsx)(j, { href: d, itemProp: 'url', children: (0, i.jsx)('span', { itemProp: 'name', children: n }) }) }), r && (0, i.jsx)('small', { className: 'avatar__subtitle', itemProp: 'description', children: r })] })] });
   }
   const k = { authorCol: 'authorCol_nwtU', imageOnlyAuthorRow: 'imageOnlyAuthorRow_uHBR', imageOnlyAuthorCol: 'imageOnlyAuthorCol_Wkpi' };
   function _(e) {
    let { className: t } = e;
    const {
     metadata: { authors: l },
     assets: n,
    } = (0, o.C)();
    if (0 === l.length) return null;
    const r = l.every((e) => {
     let { name: t } = e;
     return !t;
    });
    return (0, i.jsx)('div', { className: (0, s.Z)('margin-top--md margin-bottom--sm', r ? k.imageOnlyAuthorRow : 'row', t), children: l.map((e, t) => (0, i.jsx)('div', { className: (0, s.Z)(!r && 'col col--6', r ? k.imageOnlyAuthorCol : k.authorCol), children: (0, i.jsx)(y, { author: { ...e, imageURL: n.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function N() {
    return (0, i.jsxs)('header', { children: [(0, i.jsx)(u, {}), (0, i.jsx)(f, {}), (0, i.jsx)(_, {})] });
   }
   var Z = l(47216),
    C = l(39731);
   function P(e) {
    let { children: t, className: l } = e;
    const { isBlogPostPage: n } = (0, o.C)();
    return (0, i.jsx)('div', { id: n ? Z.blogPostContainerID : void 0, className: (0, s.Z)('markdown', l), itemProp: 'articleBody', children: (0, i.jsx)(C.Z, { children: t }) });
   }
   var L = l(64477),
    w = l(8481);
   function T() {
    return (0, i.jsx)('b', { children: (0, i.jsx)(h.Z, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read More' }) });
   }
   function H(e) {
    const { blogPostTitle: t, ...l } = e;
    return (0, i.jsx)(d.Z, { 'aria-label': (0, h.I)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...l, children: (0, i.jsx)(T, {}) });
   }
   const F = { blogPostFooterDetailsFull: 'blogPostFooterDetailsFull_c1qF' };
   function I() {
    const { metadata: e, isBlogPostPage: t } = (0, o.C)(),
     { tags: l, title: n, editUrl: r, hasTruncateMarker: a } = e,
     c = !t && a,
     d = l.length > 0;
    return d || c || r ? (0, i.jsxs)('footer', { className: (0, s.Z)('row docusaurus-mt-lg', t && F.blogPostFooterDetailsFull), children: [d && (0, i.jsx)('div', { className: (0, s.Z)('col', { 'col--9': c }), children: (0, i.jsx)(w.Z, { tags: l }) }), t && r && (0, i.jsx)('div', { className: 'col margin-top--sm', children: (0, i.jsx)(L.Z, { editUrl: r }) }), c && (0, i.jsx)('div', { className: (0, s.Z)('col text--right', { 'col--3': d }), children: (0, i.jsx)(H, { blogPostTitle: n, to: e.permalink }) })] }) : null;
   }
   function B(e) {
    let { children: t, className: l } = e;
    const n = (function () {
     const { isBlogPostPage: e } = (0, o.C)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, i.jsxs)(c, { className: (0, s.Z)(n, l), children: [(0, i.jsx)(N, {}), (0, i.jsx)(P, { children: t }), (0, i.jsx)(I, {})] });
   }
   function M() {
    const { assets: e, metadata: t } = (0, o.C)(),
     { title: l, description: r, date: s, tags: a, authors: c, frontMatter: d } = t,
     { keywords: m } = d,
     u = e.image ?? d.image;
    return (0, i.jsxs)(n.d, {
     title: l,
     description: r,
     keywords: m,
     image: u,
     children: [
      (0, i.jsx)('meta', { property: 'og:type', content: 'article' }),
      (0, i.jsx)('meta', { property: 'article:published_time', content: s }),
      c.some((e) => e.url) &&
       (0, i.jsx)('meta', {
        property: 'article:author',
        content: c
         .map((e) => e.url)
         .filter(Boolean)
         .join(','),
       }),
      a.length > 0 && (0, i.jsx)('meta', { property: 'article:tag', content: a.map((e) => e.label).join(',') }),
     ],
    });
   }
   var E = l(49687);
   function O(e) {
    const { nextItem: t, prevItem: l } = e;
    return (0, i.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, h.I)({ id: 'theme.blog.post.paginator.navAriaLabel', message: 'Blog post page navigation', description: 'The ARIA label for the blog posts pagination' }), children: [l && (0, i.jsx)(E.Z, { ...l, subLabel: (0, i.jsx)(h.Z, { id: 'theme.blog.post.paginator.newerPost', description: 'The blog post button label to navigate to the newer/previous post', children: 'Newer Post' }) }), t && (0, i.jsx)(E.Z, { ...t, subLabel: (0, i.jsx)(h.Z, { id: 'theme.blog.post.paginator.olderPost', description: 'The blog post button label to navigate to the older/next post', children: 'Older Post' }), isNext: !0 })] });
   }
   var R = l(62178),
    A = l(29450);
   function S(e) {
    let { sidebar: t, children: l } = e;
    const { metadata: n, toc: r } = (0, o.C)(),
     { nextItem: s, prevItem: a, frontMatter: c } = n,
     { hide_table_of_contents: d, toc_min_heading_level: m, toc_max_heading_level: u } = c;
    return (0, i.jsxs)(A.Z, {
     breadcrumbs: [
      { label: 'Blog', href: '/blog' },
      { label: n.title, href: '#' },
     ],
     sidebar: t,
     toc: !d && r.length > 0 ? (0, i.jsx)(R.Z, { toc: r, minHeadingLevel: m, maxHeadingLevel: u }) : void 0,
     children: [(0, i.jsx)(B, { children: l }), (s || a) && (0, i.jsx)(O, { nextItem: s, prevItem: a })],
    });
   }
   function $(e) {
    const t = e.content;
    return (0, i.jsx)(o.n, { content: e.content, isBlogPostPage: !0, children: (0, i.jsxs)(n.FG, { className: (0, s.Z)(r.k.wrapper.blogPages, r.k.page.blogPostPage), children: [(0, i.jsx)(M, {}), (0, i.jsx)(S, { sidebar: e.sidebar, children: (0, i.jsx)(t, {}) })] }) });
   }
  },
  39731: (e, t, l) => {
   l.d(t, { Z: () => h });
   var n = l(40139),
    r = l(73497),
    o = l(27583),
    s = l(75271),
    a = l(52676);
   function i(e) {
    const t = s.Children.toArray(e.children),
     l = t.find((e) => s.isValidElement(e) && 'summary' === e.props?.mdxType),
     n = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== l) });
    return (0, a.jsx)(o.Z, { ...e, summary: l, children: n });
   }
   var c = l(41179);
   function d(e) {
    let t,
     l = '';
    if ((0, s.isValidElement)(e.children)) {
     const n = e.children.props,
      r = 'string' == typeof n.className ? n.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     r && (t = r[1]), 'string' == typeof n.children && (l = n.children);
    }
    return (0, a.jsx)(c.u, { syntax: t, textContent: l, trim: !0 });
   }
   var m = l(35519),
    u = l(16167);
   function h(e) {
    let { children: t } = e;
    return (0, a.jsx)(n.Z, {
     components: {
      code: u.EK,
      a: u.rU,
      em: u.j$,
      pre: d,
      details: i,
      ul: (e) => {
       let { children: t } = e;
       return (0, a.jsx)(u.QI, { className: 'utrecht-unordered-list--html-content', children: t });
      },
      ol: (e) => {
       let { children: t } = e;
       return (0, a.jsx)(u.GS, { className: 'utrecht-ordered-list--html-content', children: t });
      },
      img: u.Ee,
      h1: u.nL,
      h2: u.XJ,
      h3: u.aC,
      h4: u.k8,
      h5: u.by,
      h6: u.Cd,
      admonition: r.Z,
      mermaid: m.Z,
     },
     children: t,
    });
   }
  },
 },
]);
