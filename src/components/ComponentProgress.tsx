import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';

interface ComponentProgressProps {
  checked: number;
  unchecked: number;
}

export const ComponentProgress = ({ checked, unchecked }: ComponentProgressProps) => (
  <BrowserOnly fallback={<></>}>
    {() => {
      const DonutChart = require('@persoonlijke-regelingen-assistent/components-react').DonutChart;
      return (
        <DonutChart
          radius={20}
          arcWidth={4}
          data={[
            {
              fill: 'var(--component-progress-background-color--checked, currentColor)',
              key: 'Done',
              value: checked,
              stroke: '2',
            },
            {
              fill: 'var(--component-progress-background-color--unchecked, #ddd)',
              key: 'Todo',
              value: unchecked,
              stroke: '2',
            },
          ]}
          donutValue={null}
          showLabels={false}
        />
      );
    }}
  </BrowserOnly>
);
