import BrowserOnly from '@docusaurus/BrowserOnly';

interface ComponentProgressProps {
  checked: number;
  unchecked: number;
}

export const ComponentProgress = ({ checked, unchecked }: ComponentProgressProps) => (
  <BrowserOnly fallback={<></>}>
    {() => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const DonutChart = require('@persoonlijke-regelingen-assistent/components-react').DonutChart;
      return (
        <DonutChart
          radius={20}
          arcWidth={4}
          data={[
            {
              fill: 'var(--basis-color-accent-1-inverse-bg-default)',
              key: 'Done',
              value: checked,
              stroke: '2',
            },
            {
              fill: 'var(--basis-color-disabled-bg-default)',
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
