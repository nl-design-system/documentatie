/* eslint-env node */
import { COMPONENT_STATES, ComponentImplementation, componentIndex } from '@nl-design-system/component-index';
import progress from '@nl-design-system/component-progress/dist/component-progress.json';
import projectDetails from '@nl-design-system/component-progress/dist/project-details.json';
import * as fs from 'fs';
import * as path from 'path';
import {
  componentPage,
  getBacklogLink,
  getComponentStatus,
  getImplementationsSection,
  getImplementationTitle,
  implementationDetails,
} from './component-page';
import { EXCLUDED_HELP_WANTED_CHECKS, HELP_WANTED_CHECKS } from '../utils';

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

function normalizeUrl(url) {
  return url.split('#')[0];
}

function findMatchingProgressComponent(backlogUrl, progressData) {
  const normalizedBacklogUrl = normalizeUrl(backlogUrl);
  return progressData.find((component) => normalizeUrl(component.url) === normalizedBacklogUrl);
}

function getComponentChecks(component, projectId) {
  const project = component.projects.find((project: never) => project[projectId] !== undefined);
  if (project) {
    return project[projectId].checks;
  }
  return [];
}

function findProjectDetails(projectData, projectName) {
  if (projectData[projectName] !== undefined) {
    return projectData[projectName];
  } else {
    throw new Error(`Project ${projectName} not found in project details`);
  }
}

const helpWantedProject = findProjectDetails(projectDetails, 'HELP_WANTED');

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

  const componentProgress = backlog && findMatchingProgressComponent(backlog, progress);

  if (componentProgress && [COMPONENT_STATES.UNKNOWN, COMPONENT_STATES.TODO].includes(state)) {
    const projectId = helpWantedProject.number.toString();
    const componentChecks = getComponentChecks(componentProgress, projectId);
    const projectChecks = findProjectDetails(projectDetails, 'HELP_WANTED')
      .view.fields.checks.filter((check: { id: string }) => !EXCLUDED_HELP_WANTED_CHECKS.includes(check.id))
      .map((check: { dataType: string; name: string; id: string }) => {
        if (HELP_WANTED_CHECKS[check.id] !== undefined) {
          const checkData = HELP_WANTED_CHECKS[check.id];
          return {
            ...check,
            ...checkData,
          };
        }
        return check;
      });

    if (componentProgress) fs.appendFileSync(fileName, getComponentStatus(projectChecks, componentChecks));
  }

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
