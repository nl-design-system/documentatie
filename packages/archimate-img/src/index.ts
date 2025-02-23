const categories: { [index: string]: string[] } = {
  ['application']: [
    'archimate:ApplicationCollaboration',
    'archimate:ApplicationComponent',
    'archimate:ApplicationEvent',
    'archimate:ApplicationFunction',
    'archimate:ApplicationInteraction',
    'archimate:ApplicationInterface',
    'archimate:ApplicationProcess',
    'archimate:ApplicationService',
    'archimate:DataObject',
  ],
  ['business']: [
    'archimate:BusinessActor',
    'archimate:BusinessCollaboration',
    'archimate:BusinessEvent',
    'archimate:BusinessFunction',
    'archimate:BusinessInteraction',
    'archimate:BusinessInterface',
    'archimate:BusinessObject',
    'archimate:BusinessProcess',
    'archimate:BusinessRole',
    'archimate:BusinessService',
    'archimate:Contract',
    'archimate:Product',
    'archimate:Representation',
  ],
  ['location']: ['archimate:Location'],
  ['motivation']: [
    'archimate:Assessment',
    'archimate:Constraint',
    'archimate:Driver',
    'archimate:Goal',
    'archimate:Meaning',
    'archimate:Outcome',
    'archimate:Principle',
    'archimate:Requirement',
    'archimate:Stakeholder',
    'archimate:Value',
  ],
  ['strategy']: ['archimate:Capability', 'archimate:CourseOfAction', 'archimate:Resource', 'archimate:ValueStream'],
  ['technology']: [
    'archimate:Artifact',
    'archimate:CommunicationNetwork',
    'archimate:Device',
    'archimate:DistributionNetwork',
    'archimate:Equipment',
    'archimate:Facility',
    'archimate:Material',
    'archimate:Node',
    'archimate:Path',
    'archimate:SystemSoftware',
    'archimate:TechnologyCollaboration',
    'archimate:TechnologyEvent',
    'archimate:TechnologyFunction',
    'archimate:TechnologyInteraction',
    'archimate:TechnologyInterface',
    'archimate:TechnologyProcess',
    'archimate:TechnologyService',
  ],
  ['implementation']: [
    'archimate:Deliverable',
    'archimate:Gap',
    'archimate:ImplementationEvent',
    'archimate:Plateau',
    'archimate:WorkPackage',
  ],
};

const iconMap: { [index: string]: string } = {
  'archimate:ApplicationCollaboration': 'collaboration-icon.svg',
  'archimate:ApplicationComponent': 'component-icon.svg',
  'archimate:ApplicationEvent': 'event-icon.svg',
  'archimate:ApplicationFunction': 'function-icon.svg',
  'archimate:ApplicationInteraction': 'interaction-icon.svg',
  'archimate:ApplicationInterface': 'interface-icon.svg',
  'archimate:ApplicationProcess': 'process-icon.svg',
  'archimate:ApplicationService': 'service-icon.svg',
  'archimate:Artifact': 'artifact-icon.svg',
  'archimate:Assessment': 'assessment-icon.svg',
  'archimate:BusinessActor': 'actor-icon.svg',
  'archimate:BusinessCollaboration': 'collaboration-icon.svg',
  'archimate:BusinessEvent': 'event-icon.svg',
  'archimate:BusinessFunction': 'function-icon.svg',
  'archimate:BusinessInteraction': 'interaction-icon.svg',
  'archimate:BusinessInterface': 'interface-icon.svg',
  'archimate:BusinessObject': 'object-icon.svg',
  'archimate:BusinessProcess': 'process-icon.svg',
  'archimate:BusinessRole': 'role-icon.svg',
  'archimate:BusinessService': 'service-icon.svg',
  'archimate:Capability': 'capability-icon.svg',
  'archimate:CommunicationNetwork': 'communication-network-icon.svg',
  'archimate:Constraint': 'constraint-icon.svg',
  'archimate:Contract': 'contract-icon.svg',
  'archimate:CourseOfAction': 'course-of-action-icon.svg',
  'archimate:DataObject': 'object-icon.svg',
  'archimate:Deliverable': 'deliverable-icon.svg',
  'archimate:Device': 'device-icon.svg',
  'archimate:DistributionNetwork': 'distribution-network-icon.svg',
  'archimate:Driver': 'driver-icon.svg',
  'archimate:Equipment': 'equipment-icon.svg',
  'archimate:Facility': 'facility-icon.svg',
  'archimate:Gap': 'gap-icon.svg',
  'archimate:Goal': 'goal-icon.svg',
  'archimate:ImplementationEvent': 'event-icon.svg',
  'archimate:Location': 'location-icon.svg',
  'archimate:Material': 'material-icon.svg',
  'archimate:Meaning': 'meaning-icon.svg',
  'archimate:Node': 'node-icon.svg',
  'archimate:Outcome': 'outcome-icon.svg',
  'archimate:Path': 'path-icon.svg',
  'archimate:Plateau': 'plateau-icon.svg',
  'archimate:Principle': 'principle-icon.svg',
  'archimate:Product': 'product-icon.svg',
  'archimate:Representation': 'representation-icon.svg',
  'archimate:Requirement': 'requirement-icon.svg',
  'archimate:Resource': 'resource-icon.svg',
  'archimate:Stakeholder': 'stakeholder-icon.svg',
  'archimate:SystemSoftware': 'system-software-icon.svg',
  'archimate:TechnologyCollaboration': 'collaboration-icon.svg',
  'archimate:TechnologyEvent': 'event-icon.svg',
  'archimate:TechnologyFunction': 'function-icon.svg',
  'archimate:TechnologyInteraction': 'interaction-icon.svg',
  'archimate:TechnologyInterface': 'interface-icon.svg',
  'archimate:TechnologyProcess': 'process-icon.svg',
  'archimate:TechnologyService': 'service-icon.svg',
  'archimate:Value': 'value-icon.svg',
  'archimate:ValueStream': 'value-stream-icon.svg',
  'archimate:WorkPackage': 'work-package-icon.svg',
};
class ArchimateImgElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    const style = this.ownerDocument.createElement('style');
    style.textContent = `
        svg {
            color: currentColor;
            pointer-events: none;
            width: var(--my-icon-size, auto);
            height: var(--my-icon-size, auto);
        }
        * {
        --archi-white: rgb(255 255 255);
        --archi-yellow: rgb(255 255 189);
        --archi-red: rgb(250 225 225);
        --archi-blue: rgb(204 204 251);
        --archi-green: rgb(207 230 188);
        --archi-aqua: rgb(197 253 254);
        --archi-purple: rgb(216 193 209);
        --archi-orange: rgb(242 223 176);
        --archi-grey: rgb(211 215 215);
        --location-background-color: var(--archi-purple);
        --resource-background-color: var(--archi-orange);
        --business-background-color: var(--archi-yellow);
        --application-background-color: var(--archi-aqua);
        --technology-background-color: var(--archi-green);
        --physical-background-color: var(--archi-green);
        --motivation-background-color: var(--archi-blue);
        --note-background-color: var(--archi-white);
        --group-background-color: var(--archi-grey);
        --implementation-background-color: var(--archi-red);
        --strategy-background-color: var(--archi-orange);
  }
        .archimate-vakje {
          border: 1px solid black;
          box-sizing: border-box;
          column-gap: 1ch;
          display: flex;
          flex-direction: row;
          font-size: 12px;
          hyphens: auto;
          overflow: hidden;
          padding-block: 0.25em;
          padding-inline: 0.5em;
          position: absolute;
          word-break: break-word;
          justify-content: space-between;
          text-wrap-style: pretty;
        }
        .archimate-vakje--location {
          background-color: var(--location-background-color);
        }
          .archimate-vakje--business {
          background-color: var(--business-background-color);
        }
          .archimate-vakje--resource {
          background-color: var(--resource-background-color);
        }
          .archimate-vakje--application {
          background-color: var(--application-background-color);
        }
          .archimate-vakje--technology {
          background-color: var(--technology-background-color);
        }
          .archimate-vakje--implementation {
          background-color: var(--implementation-background-color);
        }
          .archimate-vakje--strategy {
          background-color: var(--strategy-background-color);
        }

        .archimate-vakje--physical {
          background-color: var(--physical-background-color);
        }
          .archimate-vakje--motivation {
          background-color: var(--motivation-background-color);
        }
          .archimate-vakje--note {
          background-color: var(--note-background-color);
        }
          .archimate-vakje--group {
          background-color: var(--group-background-color);
        }
      `;
    shadowRoot.appendChild(style);

    const src = this.getAttribute('src');

    if (!src) {
      return;
    }

    const url = new URL(src, location.href);
    const idRef = url.hash.substring(1);

    fetch(url).then((response) => {
      response.text().then((svg) => {
        const doc = new DOMParser().parseFromString(svg, 'application/xml');
        const x = doc.getElementById(idRef);
        const vakjes = Array.from(x?.querySelectorAll('child') || []).map((child) => {
          const bounds = child.querySelector('bounds');
          const boundsData = bounds
            ? {
                x: parseInt(bounds.getAttribute('x') || '', 10),
                y: parseInt(bounds.getAttribute('y') || '', 10),
                width: parseInt(bounds.getAttribute('width') || '', 10),
                height: parseInt(bounds.getAttribute('height') || '', 10),
              }
            : {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
              };

          const targetId = child.getAttribute('archimateElement');
          const targetEl = targetId ? doc.getElementById(targetId) : null;

          const targetData = targetEl
            ? {
                text: targetEl.getAttribute('name'),
                type: targetEl.getAttribute('xsi:type'),
              }
            : {
                text: '',
                type: '',
              };

          return {
            ...targetData,
            ...boundsData,
          };
        });
        const container = shadowRoot.appendChild(document.createElement('div'));
        container.style.cssText = `position: relative;`;
        container.setAttribute('role', 'img');
        vakjes.forEach(({ text, x, y, width, height, type }) => {
          const vakje = container.appendChild(document.createElement('div'));
          const label = container.appendChild(document.createElement('div'));
          label.classList.add('archimate-vakje__label');
          label.textContent = text;
          vakje.appendChild(label);

          const [category] = Object.entries(categories).find(([, value]) => value.includes(type || '')) || ['', []];
          vakje.classList.add('archimate-vakje');
          vakje.classList.add(`archimate-vakje--${category}`);
          // vakje.classList.add('archimate-vakje--resource');
          vakje.style.cssText = `top: ${y}px; left: ${x}px; width: ${width}px; height: ${height}px;`;

          const iconUrl = iconMap[type || ''] ?? '';
          console.log(type, iconUrl);
          if (iconUrl) {
            const icon = vakje.appendChild(document.createElement('img'));
            icon.classList.add('archimate-vakje__icon');
            icon.setAttribute('src', `../../archimate-icons/${iconUrl}`);
            icon.setAttribute('width', '16');
            icon.setAttribute('height', '16');
            vakje.appendChild(icon);
          }
        });
        // const span = this.ownerDocument.createElement('span');
        // span.insertAdjacentHTML('beforeend', svg);
        // shadowRoot.appendChild(span);
      });
    });
  }
}

customElements.define('archimate-img', ArchimateImgElement);
