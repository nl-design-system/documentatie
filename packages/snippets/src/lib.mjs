import { readFile } from 'node:fs/promises';

export const resourceIntegrityBuffer = async (buffer) => {
  const hash = await crypto.subtle.digest('SHA-384', buffer);
  const base64 = btoa(String.fromCharCode(...new Uint8Array(hash)));
  const integrity = `sha384-${base64}`;
  return integrity;
};

export const resourceIntegrityFile = async (path) => {
  const buffer = await readFile(path);
  return resourceIntegrityBuffer(buffer);
};

const VERSION_REGEXP = /@([^@]+)$/;

export const getVersion = (str) => {
  const match = VERSION_REGEXP.exec(str);
  return match ? match[1] : '';
};

export const removeVersion = (str) => str.replace(VERSION_REGEXP, '');

export const getPackageInfo = (urlString) => {
  const url = new URL(urlString);

  // Exclude the empty string path fragment, caused by the leading `/`
  const pathSegments = url.pathname.split('/').slice(1);

  let packageName, filePath, packageVersion;
  if (pathSegments.length >= 2 && pathSegments[0].charAt(0) === '@') {
    packageName = [pathSegments[0], removeVersion(pathSegments[1])].join('/');
    packageVersion = getVersion(pathSegments[1]);
    filePath = pathSegments.slice(2).join('/');
  } else if (pathSegments.length >= 1) {
    packageName = removeVersion(pathSegments[0]);
    packageVersion = getVersion(pathSegments[0]);
    filePath = pathSegments.slice(1).join('/');
  }

  return {
    packageName,
    packageVersion,
    path: filePath,
  };
};
