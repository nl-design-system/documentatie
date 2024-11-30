export interface SiteConfig {
  baseUrl: string;
  clientCspConfig?: string;
  cspConfig?: {};
  cssStylesheets?: string[];
  encoding: string;
  favicon?: string;
  noindex?: string;
  themeClassName: string;
  themeUrl: string;
}

export const siteConfig: SiteConfig = {
  encoding: 'utf-8',
  favicon: 'favicon.ico',
  themeClassName: 'nlds-theme',
  themeUrl: '/style/theme.css',
  baseUrl: '/',
  cssStylesheets: [
    '/font/fira-sans/200-italic.css',
    '/font/fira-sans/200.css',
    '/font/fira-sans/300-italic.css',
    '/font/fira-sans/300.css',
    '/font/fira-sans/400-italic.css',
    '/font/fira-sans/400.css',
    '/font/fira-sans/400.css',
    '/font/fira-sans/500-italic.css',
    '/font/fira-sans/500.css',
    '/font/fira-sans/600-italic.css',
    '/font/fira-sans/600.css',
    '/font/fira-sans/700-italic.css',
    '/font/fira-sans/700.css',
    '/font/fira-sans/800-italic.css',
    '/font/fira-sans/800.css',
    '/font/fira-sans/900-italic.css',
    '/font/fira-sans/900.css',
    '/font/firacode/fira_code.css',
    '/font/source-sans-pro/200-italic.css',
    '/font/source-sans-pro/200.css',
    '/font/source-sans-pro/300-italic.css',
    '/font/source-sans-pro/300.css',
    '/font/source-sans-pro/400-italic.css',
    '/font/source-sans-pro/400.css',
    '/font/source-sans-pro/600-italic.css',
    '/font/source-sans-pro/600.css',
    '/font/source-sans-pro/700-italic.css',
    '/font/source-sans-pro/700.css',
    '/font/source-sans-pro/900-italic.css',
    '/font/source-sans-pro/900.css',
    '/style/body.css',
    '/style/components.css',
    '/style/custom.css',
    '/style/module.css',
    '/style/page-body.css',
    '/style/page-footer.css',
    '/style/page-layout.css',
    '/style/root.css',
  ],
};
