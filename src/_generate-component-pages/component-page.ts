import { COMPONENT_TYPES } from '../../src/utils';
import { ComponentImplementation } from '../../src/types/DesignSystemComponent';

const COMPONENT_STATES = {
  TODO: 'Help Wanted',
  COMMUNITY: 'Community',
  NL_UNSTABLE: 'Candidate',
  NL_STABLE: 'Hall of fame',
};

export const getStateDescription = ({ state }) => {
  let description = '';

  switch (state) {
    case COMPONENT_STATES.TODO:
      description =
        'Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.';
      break;
    case COMPONENT_STATES.COMMUNITY:
      description =
        'Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.';
      break;
    case COMPONENT_STATES.NL_STABLE:
      description =
        'Het component is een kandidaat voor onze "Hall of fame". Heb je hem gebruikt en ben je enthousiast? Hebben jullie gebruikersonderzoek gedaan en goede feedback? Laat het ons dan weten!';
      break;
    default:
      description =
        'Dit component is onderdeel van de NL Design System Hall of fame en wordt al door anderen succesvol in productie ingezet';
      break;
  }

  return `## Component status

Dit component heeft de "${state}" status: ${description}

`;
};

export const getAliasOverview = ({ name, aliases }) => {
  if (!aliases.length) {
    return;
  }

  const lastAlias = aliases.pop();

  return aliases.length
    ? `## Aliassen

${name} is ook bekend als ${aliases.map((a) => `"${a}"`).join(', ')} en "${lastAlias}"

`
    : `## Alias

${name} is ook bekend als "${lastAlias}"

`;
};

export const componentPage = ({ name, state }) => {
  return `---
title: ${name}
hide_title: true
hide_table_of_contents: false
sidebar_label: ${name}
pagination_label: ${name}
description: UX richtlijnen voor ${name} component
tags:
  - ${state}
---

<!-- @license CC0-1.0 -->
<!-- File is automatically generated, please modify the componentConfig.ts file and run the script to generate component pages to modify this file  -->

`;
};

export const getDocumentTitle = ({ name }) => `# ${name}
`;

export const getImplementationsSection = () => `## Implementaties
`;

export const getImplementationTitle = ({ type }) => `### ${type}
`;

export const implementationDetails = ({
  name,
  organisation,
  implementation,
  story,
  type,
}: ComponentImplementation & { name: string }) => {
  if (type !== COMPONENT_TYPES.FIGMA) {
    return `#### ${organisation}

- Implementatie: [${name} ${type} implementatie van ${organisation}](${implementation})
- Storybook: ${story ? `[${name} ${type} storybook van ${organisation}](${story})` : '(nog) geen story beschikbaar'}

`;
  } else {
    return `#### ${organisation}

- Implementatie: [${name} ${type} implementatie van ${organisation}](${implementation})

`;
  }
};

export const getBacklogLink = ({ name, backlog }) => `## Levende Backlog

De ${name} component staat bij NL Design System in de [levende backlog](${backlog}), heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!

`;
