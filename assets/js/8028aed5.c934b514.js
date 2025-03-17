'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [26806],
 {
  48475: (e, t, i) => {
   i.r(t), i.d(t, { assets: () => l, contentTitle: () => s, default: () => h, frontMatter: () => a, metadata: () => r, toc: () => c });
   var o = i(52676),
    n = i(40139);
   const a = { title: 'Privacy policy', hide_title: !0, hide_table_of_contents: !0, pagination_label: 'Privacy policy', slug: '/privacy-policy' },
    s = 'Privacy policy',
    r = { id: 'footer/privacy-policy', title: 'Privacy policy', description: 'We believe it is important to handle your personal data with care. That is why we follow the privacy policy of ICTU, of which NL Design System is a part. ICTU attaches great importance to the correct compliance with the General Data Protection Regulation (GDPR) legislation.', source: '@site/docs/footer/privacy-policy.mdx', sourceDirName: 'footer', slug: '/privacy-policy', permalink: '/privacy-policy', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/footer/privacy-policy.mdx', tags: [], version: 'current', frontMatter: { title: 'Privacy policy', hide_title: !0, hide_table_of_contents: !0, pagination_label: 'Privacy policy', slug: '/privacy-policy' } },
    l = {},
    c = [
     { value: 'What do we do with your personal information?', id: 'what-do-we-do-with-your-personal-information', level: 2 },
     { value: 'What do we do with the visitor data?', id: 'what-do-we-do-with-the-visitor-data', level: 2 },
     { value: 'Newsletter', id: 'newsletter', level: 2 },
     { value: 'Events', id: 'events', level: 2 },
     { value: 'More information', id: 'more-information', level: 2 },
    ];
   function d(e) {
    const t = { a: 'a', h1: 'h1', h2: 'h2', p: 'p', ...(0, n.a)(), ...e.components };
    return (0, o.jsxs)('div', { lang: 'en', children: [(0, o.jsx)(t.h1, { id: 'privacy-policy', children: 'Privacy policy' }), (0, o.jsx)(t.p, { children: 'We believe it is important to handle your personal data with care. That is why we follow the privacy policy of ICTU, of which NL Design System is a part. ICTU attaches great importance to the correct compliance with the General Data Protection Regulation (GDPR) legislation.' }), (0, o.jsx)(t.p, { children: 'For various activities of NL Design System you provide personal data. Below you can find what we do with this data.' }), (0, o.jsx)(t.h2, { id: 'what-do-we-do-with-your-personal-information', children: 'What do we do with your personal information?' }), (0, o.jsx)(t.p, { children: 'We do not pass on your personal data to third parties, unless we are legally obliged to do so or this is necessary for organizing activities. For example: If you sign up for the newsletter, we will only use your email address to send newsletters and to inform you about upcoming activities (and for nothing else).' }), (0, o.jsx)(t.h2, { id: 'what-do-we-do-with-the-visitor-data', children: 'What do we do with the visitor data?' }), (0, o.jsx)(t.p, { children: 'We are not currently analyzing visitor data.' }), (0, o.jsx)(t.h2, { id: 'newsletter', children: 'Newsletter' }), (0, o.jsx)(t.p, { children: 'We only use the information you provide when registering for the newsletter to send our newsletters.' }), (0, o.jsx)(t.h2, { id: 'events', children: 'Events' }), (0, o.jsx)(t.p, { children: 'The activities we organize are intended to stimulate collaboration between members of the community. We use the data you enter when registering to communicate with you about that event and to draw your attention to new relevant events. For the logistics of the event, we will use the registration data, for example to send invitations.' }), (0, o.jsx)(t.p, { children: 'For digital events we will send you an invitation as an attachment, this will not contain any email addresses of participants and this invitation will not be updated.' }), (0, o.jsx)(t.p, { children: 'For physical events, we would like to know if you are coming. In addition, we want to be able to easily let you know if a location changes or if the event is unexpectedly cancelled. That is why we think it is important to send an invitation for these types of events that we can update. In these invitations, the email addresses of all invitees will be visible.' }), (0, o.jsx)(t.p, { children: 'We believe it is important to handle your personal data with care. That is why we ask you for permission to use your email address for these invitations.' }), (0, o.jsxs)(t.p, { children: ['Good to know: of course you can unsubscribe at any time. You can do this by sending an email to ', (0, o.jsx)(t.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] }), (0, o.jsx)(t.h2, { id: 'more-information', children: 'More information' }), (0, o.jsxs)(t.p, { children: ['If you have any questions about the protection of your privacy in relation to the website nldesignsystem.nl, you can contact the core team via ', (0, o.jsx)(t.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] }), (0, o.jsxs)(t.p, { children: ['The person whose personal data is processed has the right to contact NL Design System with a request to view, correct or have delete this personal data. You can also contact the core team for this via ', (0, o.jsx)(t.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, n.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
  },
  40139: (e, t, i) => {
   i.d(t, { Z: () => r, a: () => s });
   var o = i(75271);
   const n = {},
    a = o.createContext(n);
   function s(e) {
    const t = o.useContext(a);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function r(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(n) : e.components || n) : s(e.components)), o.createElement(a.Provider, { value: t }, e.children);
   }
  },
 },
]);
