import { ComponentImplementation } from '../../src/types/DesignSystemComponent';
import * as fs from 'fs';
import * as path from 'path';

import { components } from '../../componentConfig';
import {
  componentPage,
  getDocumentTitle,
  getImplementationsSection,
  getImplementationTitle,
  implementationDetails,
  getAliasOverview,
  getStateDescription,
  getBacklogLink,
} from './component-page';

const DOCS_PATH = '../../docs/componenten';

const ensureDir = (directoryName) => {
  const dirPath = path.join(__dirname, DOCS_PATH, directoryName);
  if (!fs.existsSync(dirPath)) {
    try {
      fs.mkdirSync(dirPath, { recursive: true });
    } catch (_) {
      throw new Error('File could not be created');
    }
  }

  console.log(`Directory available: ${dirPath}`);

  try {
    fs.writeFileSync(`${dirPath}/.gitignore`, '**');
  } catch (_) {
    throw new Error('gitignore could not be created');
  }

  return dirPath;
};

components.forEach(({ state, id, name, aliases, implementations, backlog }) => {
  const dir = ensureDir(state);
  const fileName = `${dir}/${id}.mdx`;
  const customDocsPath = path.join(__dirname, DOCS_PATH, `_${id}.mdx`);

  try {
    fs.writeFileSync(fileName, componentPage({ name, state }));
  } catch (err) {
    console.error(err);
  }

  console.log(`File created: ${fileName}`);

  if (fs.existsSync(customDocsPath)) {
    //Include docs
    fs.appendFileSync(fileName, fs.readFileSync(customDocsPath));
  } else {
    // Include document title
    fs.appendFileSync(fileName, getDocumentTitle({ name }));
  }

  if (aliases.length) {
    fs.appendFileSync(fileName, getAliasOverview({ aliases, name }));
  }

  fs.appendFileSync(fileName, getStateDescription({ state }));

  const groupedImplementations = implementations.reduce((grouped, implementation) => {
    const group = grouped[implementation.type] || [];
    grouped[implementation.type] = [...group, implementation];
    return grouped;
  }, {} as { [key: string]: ComponentImplementation[] });

  if (implementations.length) {
    fs.appendFileSync(fileName, getImplementationsSection());
  }

  Object.keys(groupedImplementations).forEach((type) => {
    const implementations = groupedImplementations[type];
    fs.appendFileSync(fileName, getImplementationTitle({ type }));

    implementations.forEach((implementation) => {
      try {
        fs.appendFileSync(fileName, implementationDetails({ name, ...implementation }));
      } catch (err) {
        console.error(err);
      }
    });
  });

  console.log(`Implementations added: ${name}`);

  if (backlog) {
    fs.appendFileSync(fileName, getBacklogLink({ backlog, name }));
  }
});
