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

//https://stackoverflow.com/a/55001358
const cartesian = <T>(arr: T[][]): T[][] => {
  return arr.reduce(
    (a, b) => {
      return a
        .map((x) => {
          return b.map((y) => {
            return x.concat(y);
          });
        })
        .reduce((c, d) => c.concat(d), []);
    },
    [[]] as T[][],
  );
};
interface RectCoords {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface AnchorCoords {
  x: number;
  y: number;
  priority: number;
}

const getAnchorCoordinates = ({ x, y, width, height }: RectCoords): AnchorCoords[] => {
  return [
    // top left
    { x, y, priority: 0.8 },
    // top center
    { x: x + width / 2, y, priority: 0.9 },
    // top right
    { x: x + width, y, priority: 0.8 },
    // right center
    { x: x + width, y: y + height / 2, priority: 1 },
    // right bottom
    { x: x + width, y: y + height, priority: 0.8 },
    // bottom center
    { x: x + width / 2, y: y + height, priority: 0.9 },
    // left bottom
    { x, y: y + height, priority: 0.8 },
    // left center
    { x, y: y + height / 2, priority: 1 },
  ];
};

const getClosestAnchors = (anchor1: RectCoords, anchor2: RectCoords) => {
  const lines = cartesian([getAnchorCoordinates(anchor1), getAnchorCoordinates(anchor2)]);

  const measuredLines = lines
    .map(([from, to]): [AnchorCoords, AnchorCoords, number] => {
      const distance = Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
      return [from, to, distance / from.priority / to.priority];
    })
    .sort(([, , distanceA], [, , distanceB]) => distanceA - distanceB);

  const shortestLine = measuredLines[0];
  return [shortestLine[0], shortestLine[1]];
};

const isElement = (node: Node | null): node is Element => !!node && node.nodeType === 1;

const getChildElementsByName = (node: Node, localName: string): Element[] => {
  let child = node.firstChild;
  const nodes = [];

  for (; child; child = child.nextSibling) {
    if (isElement(child) && child.localName === localName) {
      nodes.push(child as Element);
    }
  }

  return nodes;
};

const testRequiredAttribute = (elementName: string, attributeName: string, value: unknown): value is string => {
  if (typeof value !== 'string') {
    throw new Error(`Missing "${attributeName}" attribute on element "${elementName}".`);
  }
  return true;
};

interface ChildData extends RectCoords {
  id: string;
  text: string;
  type: string;
  children: ChildData[];
}

const parseChild = (doc: Document, child: Element): ChildData | null => {
  const bounds = child.querySelector('bounds');

  if (!bounds) {
    throw new Error('Element "child" is missing child element "bounds".');
  }

  const x = bounds.getAttribute('x');
  const y = bounds.getAttribute('y');
  const width = bounds.getAttribute('width');
  const height = bounds.getAttribute('height');

  if (
    !testRequiredAttribute('child', 'x', x) ||
    !testRequiredAttribute('child', 'y', y) ||
    !testRequiredAttribute('child', 'height', height) ||
    !testRequiredAttribute('child', 'width', width)
  ) {
    return null;
  }

  const boundsData = bounds
    ? {
        x: parseInt(x, 10),
        y: parseInt(y, 10),
        width: parseInt(width, 10),
        height: parseInt(height, 10),
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
        text: targetEl.getAttribute('name') || '',
        type: targetEl.getAttribute('xsi:type') || '',
      }
    : {
        text: '',
        type: '',
      };

  const id = child.getAttribute('id');

  if (!testRequiredAttribute('child', 'id', id)) {
    return null;
  }

  return {
    id,
    children: parseChildElements(doc, child),
    ...targetData,
    ...boundsData,
  };
};

const createChildMap = (array: ChildData[]): Map<string, ChildData> =>
  array.reduce((map, vakje) => {
    map.set(vakje.id, vakje);
    return map;
  }, new Map());

interface Bounds {
  xMin: number;
  yMin: number;
  yMax: number;
  xMax: number;
}

const getRectBounds = (rects: RectCoords[]): Bounds =>
  rects.reduce(
    (acc, { x, y, width, height }) => {
      if (!acc.xMin || x < acc.xMin) acc.xMin = x;
      if (!acc.xMax || x + width > acc.xMax) acc.xMax = x + width;
      if (!acc.yMin || y < acc.yMin) acc.yMin = y;
      if (!acc.yMax || y + height > acc.yMax) acc.yMax = y + height;
      return acc;
    },
    { xMin: 0, yMin: 0, xMax: 0, yMax: 0 },
  );

const parseChildElements = (doc: Document, parent: Element): ChildData[] =>
  (parent ? Array.from(parent.querySelectorAll('child')) : [])
    .map((x) => parseChild(doc, x))
    .filter(<ChildData>(x: ChildData | null): x is ChildData => x !== null);

interface ElementData {
  id: string;
  type: string;
  name: string;
}

const parseElement = (element: Element): ElementData | null => {
  const id = element.getAttribute('id');
  const type = element.getAttribute('xsi:type');
  const name = element.getAttribute('name');

  if (!testRequiredAttribute('element', 'id', id) || !testRequiredAttribute('element', 'type', type)) {
    return null;
  }

  return {
    id,
    name: name || '',
    type,
  };
};

const parseElements = (parent: Element | Document): ElementData[] =>
  (parent ? Array.from(parent.querySelectorAll('element')) : [])
    .map((x) => parseElement(x))
    .filter(<ElementData>(x: ElementData | null): x is ElementData => x !== null);

const createElementMap = (array: ElementData[]): Map<string, ElementData> =>
  array.reduce((map, vakje) => {
    map.set(vakje.id, vakje);
    return map;
  }, new Map());

interface Connection {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  type?: string;
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/^[^\w]+|[^\w]+$/g, '')
    .replace(/[^\w]+/g, '-');

const css = `
:host {
  display: block;
}

[role="img"] {
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

.archimate-img__svg {
  color: currentColor;
  pointer-events: none;
  width: var(--my-icon-size, auto);
  height: var(--my-icon-size, auto);
}


.archimate-img__element {
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

.archimate-img__element--location {
  background-color: var(--location-background-color);
}

.archimate-img__element--business {
  background-color: var(--business-background-color);
}

.archimate-img__element--resource {
  background-color: var(--resource-background-color);
}

.archimate-img__element--application {
  background-color: var(--application-background-color);
}

.archimate-img__element--technology {
  background-color: var(--technology-background-color);
}

.archimate-img__element--implementation {
  background-color: var(--implementation-background-color);
}

.archimate-img__element--strategy {
  background-color: var(--strategy-background-color);
}

.archimate-img__element--physical {
  background-color: var(--physical-background-color);
}

.archimate-img__element--motivation {
  background-color: var(--motivation-background-color);
}

.archimate-img__element--note {
  background-color: var(--note-background-color);
}

.archimate-img__element--group {
  background-color: var(--group-background-color);
}

.archimate-img__connection--flowrelationship {
  stroke-dasharray: 0.2em;
}
`;

class ArchimateImgElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    const style = this.ownerDocument.createElement('style');
    style.textContent = css;
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

        if (!isElement(x)) {
          return;
        }

        let allVakjes: ChildData[] = parseChildElements(doc, x);

        const allElements = parseElements(doc);
        const allElementsMap = createElementMap(allElements);

        const { xMin, xMax, yMin, yMax } = getRectBounds(allVakjes);

        allVakjes = allVakjes.map((vakje) => ({
          ...vakje,
          x: vakje.x - xMin,
          y: vakje.y - yMin,
        }));

        const allVakjesMap = createChildMap(allVakjes);

        let vakjes: ChildData[] = (x ? getChildElementsByName(x, 'child') : [])
          .map((x) => parseChild(doc, x))
          .filter(<ChildData>(x: ChildData | null): x is ChildData => x !== null);

        vakjes = vakjes.map((vakje) => ({
          ...vakje,
          x: vakje.x - xMin,
          y: vakje.y - yMin,
        }));

        // const vakjesMap = createChildMap(vakjes);

        const connections: Connection[] = (x ? getChildElementsByName(x, 'child') : [])
          .map((child) => {
            return (child ? getChildElementsByName(child, 'sourceConnection') : [])
              .filter((sourceConnectionEl) => {
                const type = sourceConnectionEl.getAttribute('xsi:type');
                return type === 'archimate:Connection';
              })
              .map((sourceConnectionEl): Connection | null => {
                const source = sourceConnectionEl.getAttribute('source');
                const target = sourceConnectionEl.getAttribute('target');
                const archimateRelationship = sourceConnectionEl.getAttribute('archimateRelationship');

                if (
                  !testRequiredAttribute('sourceConnection', 'source', source) ||
                  !testRequiredAttribute('sourceConnection', 'target', target) ||
                  !testRequiredAttribute('sourceConnection', 'archimateRelationship', archimateRelationship)
                ) {
                  return null;
                }

                const sourceVakje = allVakjesMap.get(source);
                const targetVakje = allVakjesMap.get(target);
                const relationship = allElementsMap.get(archimateRelationship);

                if (!sourceVakje) {
                  throw new Error(
                    `Cannot find element with ID "${source}", as defined in "sourceConnection" "source".`,
                  );
                }

                if (!targetVakje) {
                  throw new Error(
                    `Cannot find element with ID "${target}", as defined in "sourceConnection" "target".`,
                  );
                }

                if (!relationship) {
                  throw new Error(
                    `Cannot find element with ID "${archimateRelationship}", as defined in "sourceConnection" "archimateRelationship".`,
                  );
                }

                const [sourceAnchor, targetAnchor] = getClosestAnchors(sourceVakje, targetVakje);

                return {
                  x1: sourceAnchor.x,
                  y1: sourceAnchor.y,
                  x2: targetAnchor.x,
                  y2: targetAnchor.y,
                  type: relationship.type,
                };
              })
              .filter(<Connection>(x: Connection | null): x is Connection => x !== null);
          })
          .reduce((a, b) => [...a, ...b], []);

        const container = shadowRoot.appendChild(document.createElement('div'));
        container.style.cssText = `position: relative; width: ${xMax}px; height: ${yMax}px;`;
        container.setAttribute('role', 'img');

        const svgEl = container.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
        svgEl.setAttribute('viewBox', `0 0 ${xMax} ${yMax}`);
        svgEl.classList.add('archimate-img__svg');

        const svgDefs = svgEl.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'defs'));
        const svgMarker = svgDefs.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'marker'));
        svgMarker.setAttribute('id', 'archimate-arrow');
        svgMarker.setAttribute('viewBox', '0 0 10 10');
        svgMarker.setAttribute('refX', '5');
        svgMarker.setAttribute('refY', '5');
        svgMarker.setAttribute('markerWidth', '6');
        svgMarker.setAttribute('markerHeight', '6');
        svgMarker.setAttribute('orient', 'auto-start-reverse');
        svgMarker.setAttribute('fill', 'currentColor');

        const svgMarkerPath = svgMarker.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
        svgMarkerPath.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');

        connections
          .filter(
            (connection) =>
              // TODO: Only exclude `CompositionRelationship` when the `target` visually contains the `source`
              connection.type !== 'archimate:CompositionRelationship',
          )
          .forEach((connection) => {
            const svgLineEl = svgEl.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'line'));
            svgLineEl.setAttribute('x1', String(connection.x1));
            svgLineEl.setAttribute('y1', String(connection.y1));
            svgLineEl.setAttribute('x2', String(connection.x2));
            svgLineEl.setAttribute('y2', String(connection.y2));
            svgLineEl.setAttribute('stroke', 'currentColor');
            svgLineEl.setAttribute('marker-end', 'url(#archimate-arrow)');

            if (connection.type) {
              svgLineEl.classList.add('archimate-img__connection');
              svgLineEl.classList.add(
                `archimate-img__connection--${slugify(connection.type.replace(/^archimate:/, ''))}`,
              );
            }
          });

        const renderChildren = (vakjes: ChildData[], zIndex = 1) => {
          vakjes.forEach(({ text, x, y, width, height, type, children }) => {
            const [category] = Object.entries(categories).find(([, value]) => value.includes(type || '')) || ['', []];

            const svgRect = svgEl.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'rect'));
            svgRect.setAttribute('x', String(x));
            svgRect.setAttribute('y', String(y));
            svgRect.setAttribute('width', String(width));
            svgRect.setAttribute('height', String(height));
            svgRect.setAttribute('fill', 'red');
            svgRect.classList.add('archimate-img__element-shape');
            svgRect.classList.toggle(`archimate-img__element-shape--${category}`, !!category);

            const vakje = container.appendChild(document.createElement('div'));
            const label = container.appendChild(document.createElement('div'));
            label.classList.add('archimate-img__element-label');
            label.textContent = text;
            vakje.appendChild(label);

            vakje.classList.add('archimate-img__element');
            vakje.classList.toggle(`archimate-img__element--${category}`, !!category);
            // vakje.classList.add('archimate-img__element--resource');
            vakje.style.cssText = `top: ${y}px; left: ${x}px; width: ${width}px; height: ${height}px;`;
            vakje.style.zIndex = String(zIndex);

            const iconUrl = iconMap[type || ''] ?? '';

            if (iconUrl) {
              const icon = vakje.appendChild(document.createElement('img'));
              icon.classList.add('archimate-img__element-icon');
              icon.setAttribute('src', `../../archimate-icons/${iconUrl}`);
              icon.setAttribute('width', '16');
              icon.setAttribute('height', '16');
              vakje.appendChild(icon);
            }

            // Recursive rendering
            renderChildren(
              children.map((vakje) => ({
                ...vakje,
                x: vakje.x + x,
                y: vakje.y + y,
              })),
              zIndex + 1,
            );
          });
        };

        renderChildren(vakjes);
      });
    });
  }
}

customElements.define('archimate-img', ArchimateImgElement);
