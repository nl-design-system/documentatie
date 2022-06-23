import { COMPONENT_STATES, COMPONENT_TYPES, ORGANISATIONS, DOCUMENTATION_TYPES } from '@site/src/utils';

declare interface DesignSystemComponent {
  id: string;
  name: string;
  aliases?: string[];
  communityDocs?: CommunityDocumentation[];
  implementations?: ComponentImplementation[];
  preview?: string;
  backlog: string;
  state: COMPONENT_STATES;
}

declare interface CommunityDocumentation {
  type: DOCUMENTATION_TYPES;
  organisation: ORGANISATIONS;
  href: string;
}

declare interface ComponentImplementation {
  organisation: ORGANISATIONS;
  type: COMPONENT_TYPES;
  implementation: string;
  package?: string;
  story?: string;
}
