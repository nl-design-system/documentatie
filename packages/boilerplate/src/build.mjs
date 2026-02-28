import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { JSDOM } from 'jsdom';
import prettier from 'prettier/index.mjs';
import prettierHtml from 'prettier/plugins/html.mjs';
import packageJSON from '../package.json' with { type: 'json' };
import { glob } from 'glob';

const resourceIntegrity = async (path) => {
  const buffer = await readFile(path);
  const hash = await crypto.subtle.digest('SHA-384', buffer);
  const base64 = btoa(String.fromCharCode(...new Uint8Array(hash)));
  const integrity = `sha384-${base64}`;
  return integrity;
};

const init = async () => {
  await mkdir('./dist/', { recursive: true });
  const files = await glob('./src/*.html');

  files.forEach(async (path) => {
    const code = await readFile(path, 'utf-8');
    const filename = basename(path);
    // console.log('xxx', code);
    const dom = new JSDOM(code);

    Array.from(dom.window.document.querySelectorAll('link[rel="stylesheet" i][href]')).forEach(async (el) => {
      const url = new URL(el.getAttribute('href'));
      /**
       * Match up until "/":
       * - bar
       * - bar@1
       * - @foo/bar
       * - @foo/bar@1
       */
      const packageRegExp = /^\/(@[^/]+\/[^@/]+|[^@/]+)(?:@([^/]+))?\/(.*)/;

      const packageMatch = packageRegExp.exec(url.pathname);

      if (packageMatch) {
        const [, packageName, filePath] = packageMatch;

        const packageJsonPath = import.meta.resolve(`${packageName}/package.json`);
        const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'));

        console.log(packageJson.version);

        const requirePath = filePath ? `${packageName}/${filePath}` : packageName;
        let localPath;
        try {
          localPath = import.meta.resolve(requirePath);
        } catch (_error) {
          console.log(`fail: ${url.pathname} = ${requirePath}`);
        }
        // console.log({ packageName, packageVersion, filePath, requirePath, localPath });

        console.log(localPath);
        const integrity = await resourceIntegrity(localPath);
        el.setAttribute('integrity', integrity);
      }
    });

    const packageName = '@nl-design-system-unstable/voorbeeld-design-tokens';
    const packageVersion = packageJSON.dependencies[packageName];

    // const signedCode = code.replace(
    //   /(href="https:\/\/unpkg.com\/)(@[^/]+\/[^/]+|[^/]+)([^"]+")/g,
    //   (_, prefix, npmPackage, suffix) => {
    //     const version = 1;
    //     return `${prefix}${npmPackage}@${version}${suffix} integrity="sha384-${base64}"`;
    //   },
    // );
    // console.log('y', signedCode);
    const signedCode = dom.serialize();
    const formattedCode = await prettier.format(signedCode, { parser: 'html', plugins: [prettierHtml] });
    await writeFile(`./dist/${filename}`, formattedCode);
  });
};

init();
