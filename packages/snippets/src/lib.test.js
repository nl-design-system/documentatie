import { describe, expect, it } from 'vitest';
import { getVersion, getPackageInfo, resourceIntegrityBuffer, resourceIntegrityFile } from './lib.mjs';

describe('resourceIntegrityBuffer', () => {
  it('to return a SHA-384 hash', async () => {
    const content = new Buffer('Hello, world!\n', 'utf-8');

    expect(await resourceIntegrityBuffer(content)).toBe(
      'sha384-eaeuxwhHwkIQK4ibKYoHIIA7NAs1DNnon1dMaE1Gv7IyuS0t81b9d+TSBHxDs/ig',
    );
  });
});

describe('resourceIntegrityFile', () => {
  it('to return a SHA-384 hash', async () => {
    expect(await resourceIntegrityFile(__dirname + '/hello-world.txt')).toBe(
      'sha384-eaeuxwhHwkIQK4ibKYoHIIA7NAs1DNnon1dMaE1Gv7IyuS0t81b9d+TSBHxDs/ig',
    );
  });
});

describe('getVersion', () => {
  const cases = [
    {
      input: 'package@1.2.3',
      version: '1.2.3',
    },
    {
      input: '@organisation/package@1.2.3',
      version: '1.2.3',
    },
    {
      input: 'repo@4c586f6ef311ebebfa71f1f2ccaedb843c28f01f',
      version: '4c586f6ef311ebebfa71f1f2ccaedb843c28f01f',
    },
  ];

  cases.forEach(({ input, version }) => {
    describe(input, () => {
      it('to return the version reference after the @', async () => {
        expect(getVersion(input)).toBe(version);
      });
    });
  });

  it('to return an empty string when no version was found', async () => {
    expect(getVersion('lodash')).toBe('');
  });
});

describe('getPackageInfo', () => {
  const cases = [
    {
      url: 'https://unpkg.com/@nl-design-system-unstable/voorbeeld-design-tokens',
      info: {
        packageName: '@nl-design-system-unstable/voorbeeld-design-tokens',
        packageVersion: '',
        path: '',
      },
    },
    {
      url: 'https://unpkg.com/@nl-design-system-unstable/voorbeeld-design-tokens@9.0.0',
      info: {
        packageName: '@nl-design-system-unstable/voorbeeld-design-tokens',
        packageVersion: '9.0.0',
        path: '',
      },
    },
    {
      url: 'https://unpkg.com/@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css',
      info: {
        packageName: '@nl-design-system-unstable/voorbeeld-design-tokens',
        packageVersion: '',
        path: 'dist/theme.css',
      },
    },
    {
      url: 'https://unpkg.com/@nl-design-system-unstable/voorbeeld-design-tokens@9.0.0/dist/theme.css',
      info: {
        packageName: '@nl-design-system-unstable/voorbeeld-design-tokens',
        packageVersion: '9.0.0',
        path: 'dist/theme.css',
      },
    },
    {
      url: 'https://unpkg.com/prettier',
      info: {
        packageName: 'prettier',
        packageVersion: '',
        path: '',
      },
    },
    {
      url: 'https://unpkg.com/prettier/index.js',
      info: {
        packageName: 'prettier',
        packageVersion: '',
        path: 'index.js',
      },
    },
    {
      url: 'https://unpkg.com/prettier@3/index.js',
      info: {
        packageName: 'prettier',
        packageVersion: '3',
        path: 'index.js',
      },
    },
  ];

  cases.slice(0, 1).forEach(({ url, info }) => {
    describe(url, () => {
      it('to detect package name, version (optional) and path (optional)', () => {
        expect(getPackageInfo(url)).toStrictEqual(info);
      });
    });
  });
});
