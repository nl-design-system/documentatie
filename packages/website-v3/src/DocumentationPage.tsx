import { Body } from '@utrecht/body-react/dist/index.mjs';
import { NavBar } from '@utrecht/nav-bar-react/dist/index.mjs';
import { PageBody } from '@utrecht/page-body-react/dist/index.mjs';
import { PageFooter } from '@utrecht/page-footer-react/dist/index.mjs';
import { PageHeader } from '@utrecht/page-header-react/dist/index.mjs';
import { PageLayout } from '@utrecht/page-layout-react/dist/index.mjs';
import { Root } from '@utrecht/root-react/dist/index.mjs';
import type { PropsWithChildren, ReactNode } from 'react';
import React from 'react';
import { resolveUrl } from './resolve-url';
import { SiteConfig } from './site-config';

const ogLocaleFormat = (lang: string): string => lang.trim().replace(/\W+/, '_');

export interface DocumentationPageProps {
  footerNavLinks: {
    href: string;
    children: ReactNode;
  }[];
  navBarLinks: {
    href: string;
    children: ReactNode;
  }[];
  sideNavLinks: {
    href: string;
    children: ReactNode;
  }[];
  locale: {
    titleSeparator: string;
  };
  pageConfig: {
    lang: string;
    dir: string;
    description?: string;
    pageTitle: string;
    author?: string;
    canonicalUrl?: string;
  };
  siteConfig: SiteConfig;
}

export const DocumentationPage =
  // eslint-disable-next-line react/display-name
  ({
    footerNavLinks,
    navBarLinks,
    sideNavLinks,
    locale,
    pageConfig,
    siteConfig,
    children,
  }: PropsWithChildren<DocumentationPageProps>) => {
    const PageTitle = ({ children, parts }: PropsWithChildren<{ parts?: string[] }>) => {
      const title = Array.isArray(parts) ? parts.join(locale.titleSeparator) : children;
      return (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
        </>
      );
    };

    return (
      <Root lang={pageConfig.lang} dir={pageConfig.dir} className={siteConfig.themeClassName}>
        {/* Specify the language with `lang` on the `html` element, before user generated content is included. */}
        {/* User generated content in the `head` could be: `<title>` and `<meta>` elements. */}
        <head>
          {/* Before we include any user generated content, specify the encoding. */}
          {/* The `html` and are typically only ASCII. */}
          <meta charSet={siteConfig.encoding} />
          {/* Start with the page title, so users know what page are loading. */}
          {/* When the network connection is slow, they can decide to abort loading quickly when the clicked the wrong link. */}
          <PageTitle parts={[pageConfig.pageTitle, pageConfig.author]} />
          {pageConfig.description ? <meta name="description" content={pageConfig.description} /> : null}
          {pageConfig.lang ? <meta name="og:locale" content={ogLocaleFormat(pageConfig.lang)} /> : null}
          {pageConfig.description ? <meta name="og:description" content={pageConfig.description} /> : null}
          {Array.isArray(pageConfig.keywords) ? <meta name="keywords" content={pageConfig.keywords.join(',')} /> : null}
          {/* Before loading any external resourced, specify the `Content-Security-Policy` */}
          {siteConfig.clientCspConfig ? (
            <meta httpEquiv="Content-Security-Policy" content={siteConfig.clientCspConfig} />
          ) : null}
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1" />
          {siteConfig.baseUrl ? <base href={siteConfig.baseUrl} /> : null}
          {Array.isArray(siteConfig.cssStylesheets)
            ? siteConfig.cssStylesheets.map((url, index) => <link key={index} rel="stylesheet" href={url} />)
            : null}
          {siteConfig.themeUrl ? <link rel="stylesheet" href={siteConfig.themeUrl} /> : null}
          {pageConfig.canonicalUrl ? <link rel="canonical" href={pageConfig.canonicalUrl} /> : null}
          {pageConfig.canonicalUrl ? <meta name="og:url" content={pageConfig.canonicalUrl} /> : null}
          {siteConfig.favicon ? <link rel="icon" href={resolveUrl(siteConfig.baseUrl, siteConfig.favicon)} /> : null}
          {siteConfig.noindex ? <meta name="robots" content="noindex" /> : null}
        </head>
        <Body>
          <PageLayout>
            <PageHeader>
              <div>NL Design System</div>
            </PageHeader>
            <NavBar>
              {Array.isArray(navBarLinks) ? (
                <ul>
                  {navBarLinks.map(({ href, children }, index) => (
                    <li key={index}>
                      <a href={href}>{children}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </NavBar>
            <PageBody>
              <details>
                <summary>Side Navigation</summary>
                <nav>
                  {Array.isArray(sideNavLinks) ? (
                    <ul>
                      {sideNavLinks.map(({ href, children }, index) => (
                        <li key={index}>
                          <a href={href}>{children}</a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </nav>
              </details>
              {children}
            </PageBody>
            <PageFooter>
              {Array.isArray(footerNavLinks) ? (
                <ul>
                  {footerNavLinks.map(({ href, children }, index) => (
                    <li key={index}>
                      <a href={href}>{children}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </PageFooter>
          </PageLayout>
        </Body>
      </Root>
    );
  };
