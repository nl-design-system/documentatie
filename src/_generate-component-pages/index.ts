/* eslint-env node */
import { ComponentImplementation, componentIndex } from '@nl-design-system/component-index';
import * as fs from 'fs';
import * as path from 'path';
import {
  componentPage,
  getBacklogLink,
  getImplementationsSection,
  getImplementationTitle,
  implementationDetails,
} from './component-page';

const DOCS_PATH = '../../docs/componenten';

const ensureDir = (directoryName) => {
  const dirPath = path.join(__dirname, DOCS_PATH, directoryName);

  if (fs.existsSync(dirPath)) {
    try {
      fs.rmdirSync(dirPath, { recursive: true });
    } catch (_) {
      throw new Error('Directory could not be removed');
    }
    console.log(`Directory removed: ${dirPath}`);
  }

  try {
    fs.mkdirSync(dirPath, { recursive: true });
  } catch (_) {
    throw new Error('File could not be created');
  }

  console.log(`Directory available: ${dirPath}`);

  return dirPath;
};

const dir = ensureDir('build');

componentIndex.forEach(({ state, id, name, implementations, backlog }) => {
  const fileName = `${dir}/${id}.mdx`;
  const customDocsPath = path.join(__dirname, DOCS_PATH, `_${id}.md`);

  const storyTemplate = implementations.find(({ storyTemplate }) => storyTemplate);

  const story = storyTemplate && {
    label: `https://nl-design-system.github.io/themes/`,
    href: `https://nl-design-system.github.io/themes/iframe.html?viewMode=story&id=${id}--utrecht`,
  };

  //nl-design-system.github.io/themes/iframe.html?args=appearance:primary-action-button&id=button--gemeente-utrecht&viewMode=story

  const hasCustomDoc = fs.existsSync(customDocsPath);

  try {
    fs.writeFileSync(
      fileName,
      componentPage({
        id,
        name,
        state,
        story,
        customDoc: hasCustomDoc && path.relative(dir, customDocsPath),
      }),
    );
  } catch (err) {
    console.error(err);
  }

  console.log(`File created: ${fileName}`);

  const groupedImplementations = implementations.reduce(
    (grouped, implementation) => {
      const group = grouped[implementation.type] || [];
      grouped[implementation.type] = [...group, implementation];
      return grouped;
    },
    {} as { [key: string]: ComponentImplementation[] },
  );

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
