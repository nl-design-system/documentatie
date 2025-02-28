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

const iconSvg: { [index: string]: string } = {
  'actor-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="133 366 10 19"><circle cx="138" cy="370" r="3" fill="none" stroke="currentColor" clip-path="url(#clipPath15)"/><path stroke="currentColor" d="M138 373v6m0 0-4 5m4-5 4 5m-8-8h8"/></svg>',
  'artifact-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="485 972.5 14 17.5"><path fill="none" stroke="currentColor" d="M486 974h7l5 5v10h-12v-15.5m7 .5v5h5" clip-path="url(#clipPath83)"/></svg>',
  'assessment-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="290 1103 13 14"><circle cx="298" cy="1108" r="4" fill="none" stroke="currentColor" clip-path="url(#clipPath97)"/><path fill="none" stroke="currentColor" d="m296 1111-5 5" clip-path="url(#clipPath97)"/></svg>',
  'capability-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="304 286 14 14"><path fill="none" stroke="currentColor" d="M313 287h4v4h-4zm-4 4h4v4h-4zm4 0h4v4h-4zm-8 4h4v4h-4zm4 0h4v4h-4zm4 0h4v4h-4z" clip-path="url(#clipPath9)"/></svg>',
  'collaboration-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="464 371 16 12"><circle cx="470" cy="377" r="5" fill="none" stroke="currentColor" clip-path="url(#clipPath19)"/><circle cx="474" cy="377" r="5" fill="none" stroke="currentColor" clip-path="url(#clipPath19)"/></svg>',
  'communication-network-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="126 894 17 15"><path fill="none" stroke="currentColor" d="M132 905.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2-8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm8 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm-2 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm-10-2.5 1-3m7 3 1-3m-7 5.5h3m-1-8h3" clip-path="url(#clipPath71)"/></svg>',
  'component-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="295 594 15 15"><path fill="none" stroke="currentColor" d="M299 608v-4m0-2v-2m0-3v-2h10v13h-10.5m-2.5-11h6v2.5h-6Zm0 5h6v2.5h-6Z" clip-path="url(#clipPath41)"/></svg>',
  'constraint-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="283 1179 18 11"><path fill="none" stroke="currentColor" d="M288 1180h12l-4 9h-12zm4 0-4 9" clip-path="url(#clipPath105)"/></svg>',
  'contract-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="466 530 15 12"><path fill="none" stroke="currentColor" d="M467 531h13v10h-13zm0 3h13m-13 4h13" clip-path="url(#clipPath35)"/></svg>',
  'course-of-action-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="630.576 291 22.424 18.132"><path fill-rule="evenodd" d="m633.6 301 6 1-3 5.2" clip-path="url(#clipPath13)"/><path fill="none" stroke="currentColor" stroke-width="2" d="M636.5 304a5 5 0 0 0-4.924 4.132" clip-path="url(#clipPath13)"/><path fill="none" stroke="currentColor" stroke-width="1.2" d="M652 298.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Zm-2.5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-2.5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm0 0" clip-path="url(#clipPath13)"/></svg>',
  'deliverable-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="282.5 1247 16.5 11.786"><path fill="none" stroke="currentColor" d="M284 1248v7.5q3 4 8 1 3-2.5 6 0v-8.5h-14.5" clip-path="url(#clipPath113)"/></svg>',
  'device-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="639 755 15 14"><rect width="11" height="8" x="641" y="756" fill="none" stroke="currentColor" clip-path="url(#clipPath61)" rx="1.5" ry="1.5"/><path fill="none" stroke="currentColor" d="m640 768 3-4h7l3 4z" clip-path="url(#clipPath61)"/></svg>',
  'distribution-network-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="292 1040 19 12"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M295 1044h13m-13 4h13m-10-7-5 5 5 5m7-10 5 5-5 5" clip-path="url(#clipPath89)"/></svg>',
  'driver-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="126 1101 19 19"><path fill="none" stroke="currentColor" stroke-width="1.2" d="M142 1110.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Zm-5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm0 0" clip-path="url(#clipPath95)"/><path fill="none" stroke="currentColor" d="M127 1110.5h17m-8.5-8.5v17m-6-14.5 12 12m-12 0 12-12" clip-path="url(#clipPath95)"/></svg>',
  'equipment-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="641 975 20 26"><path fill="none" stroke="currentColor" d="M656 993h2v-2h-2l-1-2 1-2-1-1-2 1-2-1v-2h-2v2l-2 1-2-1-1 1 1 2-1 2h-2v2h2l1 2-1 2 1 1 2-1 2 1v2h2v-2l2-1 2 1 1-1-1-2z" clip-path="url(#clipPath85)"/><path fill="none" stroke="currentColor" d="M653 992a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm6-10h1v-2h-1l-1-2v-1l-1-1-1 1h-2l-1-1-1 1v1l-1 2h-1v2h1l1 2v1l1 1 1-1h2l1 1 1-1v-1z" clip-path="url(#clipPath85)"/><path fill="none" stroke="currentColor" d="M657 981a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm0 0" clip-path="url(#clipPath85)"/></svg>',
  'event-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="638 453 18 11"><path fill="none" stroke="currentColor" d="M639 463c2.21 0 4-2.015 4-4.5s-1.79-4.5-4-4.5m12 9c2.21 0 4-2.015 4-4.5s-1.79-4.5-4-4.5m-12 0h12m-12 9h12" clip-path="url(#clipPath29)"/></svg>',
  'facility-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="125 1030 17 14"><path fill="none" stroke="currentColor" stroke-width="1.2" d="M126 1043h15v-6l-4 3v-3l-4 3v-3l-4 3v-9h-3z" clip-path="url(#clipPath87)"/></svg>',
  'function-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="297 452 14 16"><path fill="none" stroke="currentColor" d="M298 467v-9l6-5 6 5v9l-6-6z" clip-path="url(#clipPath25)"/></svg>',
  'gap-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="129 1308 19 15"><circle cx="138.5" cy="1315.5" r="6.5" fill="none" stroke="currentColor" clip-path="url(#clipPath119)"/><path fill="none" stroke="currentColor" d="M130 1314h17m-17 3h17" clip-path="url(#clipPath119)"/></svg>',
  'goal-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="478 1108 15 15"><path fill="none" stroke="currentColor" stroke-width="1.2" d="M492 1115.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Zm-2.5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-2.5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm0 0" clip-path="url(#clipPath99)"/></svg>',
  'interaction-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="465 452.5 15 15"><path fill="none" stroke="currentColor" d="M471 454c-2.761 0-5 2.686-5 6s2.239 6 5 6v-12.5m3 12.5c2.761 0 5-2.686 5-6s-2.239-6-5-6v12.5" clip-path="url(#clipPath27)"/></svg>',
  'interface-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="633 371 19 12"><circle cx="646" cy="377" r="5" fill="none" stroke="currentColor" clip-path="url(#clipPath21)"/><path fill="none" stroke="currentColor" d="M641 377h-7" clip-path="url(#clipPath21)"/></svg>',
  'location-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="115 13.999 12.001 17.001"><path fill="none" stroke="currentColor" d="M125.699 21.71a5 5 0 1 0-9.397 0L121 30Zm0 0" clip-path="url(#clipPath1)"/></svg>',
  'material-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="479 1041 18 16"><path fill="none" stroke="currentColor" stroke-width="1.2" d="M492 1042h-8l-4 7 3 7h9l4-7zm-6 2-3.3 5.5m1.6 4h6.7m2-4-3-5.5" clip-path="url(#clipPath91)"/></svg>',
  'meaning-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="472.5 1185.5 12 9"><path fill="none" stroke="#000" d="M479 1186.402c-1.913-.829-4.36-.337-5.464 1.098-.702.912-.715 2.033-.034 2.955" clip-path="url(#clipPath107)"/><path fill="none" stroke="#000" d="M483.152 1190.847c1.36-1.306 1.052-3.191-.69-4.211-1.264-.741-2.997-.843-4.401-.26m.203 6.764c-1.087 1.042-2.982 1.153-4.232.247-1.114-.807-1.358-2.169-.576-3.212" clip-path="url(#clipPath107)"/><path fill="none" stroke="#000" d="M482.978 1190.634a3 3 0 0 1-4.866 2.697" clip-path="url(#clipPath107)"/></svg>',
  'node-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="478.8 749 16.5 16"><path fill="none" stroke="currentColor" d="M480 753h11v11h-11Zm-.2 0 3.4-3m7.8 3 3-3m-2.8 14 3-3M483 750.2h11.3m-.3-.2v11.2" clip-path="url(#clipPath59)"/></svg>',
  'object-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="296 525 15 12"><path fill="none" stroke="currentColor" d="M297 526h13v10h-13zm0 3h13" clip-path="url(#clipPath33)"/></svg>',
  'outcome-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="778 1114 20 20"><path fill="none" stroke="currentColor" stroke-width="1.2" d="M792 1126.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Zm-2.5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-2.5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm0 0" clip-path="url(#clipPath121)"/><path fill="none" stroke="currentColor" d="m785 1127 9.5-9.5m-2.5 2.5 1-5m-1 5 5-1" clip-path="url(#clipPath121)"/></svg>',
  'path-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="638 833 19 12"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M642.5 839h2m2 0h2m2 0h2m-8.5-5-5 5 5 5m7-10 5 5-5 5" clip-path="url(#clipPath69)"/></svg>',
  'plateau-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="631 1255 18 8"><path fill="none" stroke="currentColor" stroke-width="2" d="M632 1262h12m-10-3h12m-10-3h12" clip-path="url(#clipPath117)"/></svg>',
  'principle-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="644 1116 14 16"><rect width="12" height="14" x="645" y="1117" fill="none" stroke="currentColor" clip-path="url(#clipPath101)" rx="2" ry="2"/><path fill="none" stroke="currentColor" d="M650.5 1119v7m1-7v7m-1 1.5v2m1-2v2" clip-path="url(#clipPath101)"/></svg>',
  'process-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="128 454 16 12"><path fill="none" stroke="currentColor" d="M129 458h8v-3l6 5-6 5v-3h-8z" clip-path="url(#clipPath23)"/></svg>',
  'product-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="131.5 584.5 14 11"><path fill="none" stroke="currentColor" d="M132 585h13v10h-13z" clip-path="url(#clipPath39)"/><path fill="none" stroke="currentColor" d="M132 585h6v3h-6z" clip-path="url(#clipPath39)"/></svg>',
  'representation-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="643 530.5 15.5 10.786"><path fill="none" stroke="currentColor" d="M644 531v7.5q3 4 8 1 3-2.5 6 0V531h-14.5m.5 3h14" clip-path="url(#clipPath37)"/></svg>',
  'requirement-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="124.5 1170.5 17 10"><path fill="none" stroke="currentColor" d="M129 1171h12l-4 9h-12z" clip-path="url(#clipPath103)"/></svg>',
  'resource-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="129.5 283.5 18 11"><rect width="15" height="10" x="130" y="284" fill="none" stroke="currentColor" clip-path="url(#clipPath7)" rx="1.5" ry="1.5"/><rect width="2" height="4" x="145" y="287" fill="none" stroke="currentColor" clip-path="url(#clipPath7)" rx=".5" ry=".5"/><path fill="none" stroke="currentColor" d="M133 286v6m3-6v6m3-6v6" clip-path="url(#clipPath7)"/></svg>',
  'role-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="295.5 374.5 16 9"><path fill="none" stroke="currentColor" d="M298.5 375c-1.38 0-2.5 1.79-2.5 4s1.12 4 2.5 4h9.5m-10-8h10" clip-path="url(#clipPath17)"/><ellipse cx="308.5" cy="379" fill="none" stroke="currentColor" clip-path="url(#clipPath17)" rx="2.5" ry="4"/></svg>',
  'service-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="125.5 518.5 17 10"><rect width="16" height="9" x="126" y="519" fill="none" stroke="currentColor" clip-path="url(#clipPath31)" rx="4" ry="4"/></svg>',
  'stakeholder-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="647.5 1052.5 16 8"><path fill="none" stroke="currentColor" d="M652 1053c-2.21 0-4 1.567-4 3.5s1.79 3.5 4 3.5h7m-7.5-7h7.5" clip-path="url(#clipPath93)"/><circle cx="659.5" cy="1056.5" r="3.5" fill="none" stroke="currentColor" clip-path="url(#clipPath93)"/></svg>',
  'system-software-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="128.5 822.499 14.001 14.001"><path fill="none" stroke="currentColor" d="M134.5 825a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm4.75 8.263a5.5 5.5 0 1 0-7.513-7.513" clip-path="url(#clipPath63)"/></svg>',
  'value-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="633.5 1189.5 15 10"><ellipse cx="641" cy="1194.5" fill="none" stroke="currentColor" clip-path="url(#clipPath109)" rx="7" ry="4.5"/></svg>',
  'value-stream-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="463.5 290.5 16 11"><path fill="none" stroke="currentColor" d="M464 291h10l5 5-5 5h-10l5-5z" clip-path="url(#clipPath11)"/></svg>',
  'work-package-icon.svg':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="131.499 1242.499 16.001 13.001"><path fill="none" stroke="currentColor" d="M140.729 1249.04a4.5 4.5 0 1 0-3.837 2.943m-.392.017h6.5" clip-path="url(#clipPath111)"/><path fill-rule="evenodd" d="m143 1249 4 3-4 3Zm0 0" clip-path="url(#clipPath111)"/></svg>',
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

.archimate-img__element-icon {
  display: block;
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
}

.archimate-img__element-icon svg {
  width: 100%;
  height: 100%;
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

const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync(css);

class ArchimateImgElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.adoptedStyleSheets = [sheet];

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
              // const icon = vakje.appendChild(document.createElement('img'));
              const icon = vakje.appendChild(document.createElement('span'));
              icon.innerHTML = iconSvg[iconUrl] || '';
              icon.classList.add('archimate-img__element-icon');
              // icon.setAttribute('src', `../../archimate-icons/${iconUrl}`);
              // icon.setAttribute('width', '16');
              // icon.setAttribute('height', '16');
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
