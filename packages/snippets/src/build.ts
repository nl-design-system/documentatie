import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { JSDOM } from 'jsdom';
import prettier from 'prettier';
import prettierHtml from 'prettier/plugins/html';
import { glob } from 'glob';
import { findPackageJSON } from 'node:module';
import { resolve, dirname } from 'node:path';
import { getPackageInfo, resourceIntegrityFile } from './lib.mjs';

const init = async () => {
  await mkdir('./dist/', { recursive: true });
  const files = await glob('./src/*.html');

  files.forEach(async (path) => {
    const code = await readFile(path, 'utf-8');
    const filename = basename(path);
    const dom = new JSDOM(code);

    await Promise.all(
      Array.from(dom.window.document.querySelectorAll('link[rel="stylesheet" i][href]')).map(async (el: Element) => {
        const href = el.getAttribute('href');
        const { packageName, path: filePath } = getPackageInfo(href);

        if (packageName) {
          const requirePath = filePath ? `${packageName}/${filePath}` : packageName;

          const packageJsonPath = findPackageJSON(requirePath, import.meta.url);

          if (!packageJsonPath) {
            console.error(`Could not find package.json for: ${requirePath}`);
            return;
          }
          const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'));
          const packageVersion = packageJson['version'];

          let localPath;
          try {
            localPath = filePath
              ? resolve(dirname(packageJsonPath), filePath)
              : import.meta.resolve(requirePath).replace('file://', '');
          } catch {
            console.error(`Could not resolve: ${localPath}`);
          }

          let integrity;

          try {
            integrity = await resourceIntegrityFile(localPath);
          } catch {
            console.error(`Could not find: ${localPath}`);
          }
          el.setAttribute(
            'href',
            `https://unpkg.com/${packageName}@${packageVersion}${filePath ? `/${filePath}` : ''}`,
          );
          el.setAttribute('integrity', integrity);
          el.setAttribute('crossorigin', 'anonymous');
        }
      }),
    );

    const signedCode = dom.serialize();
    const formattedCode = await prettier.format(signedCode, { parser: 'html', plugins: [prettierHtml] });
    await writeFile(`./dist/${filename}`, formattedCode);
  });
};

init();
