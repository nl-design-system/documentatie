import { Code, ColorSample, NumberData } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import './ContrastRatio.css';

export interface ContrastRatioProps {
  backgroundColor: string;
  color: string;
  contrastRatio: number;
}

export const ContrastRatio = ({ backgroundColor, color, contrastRatio }: ContrastRatioProps) => (
  <dl className="ma-contrast-ratio">
    <div className="ma-contrast-ratio__result">
      <dt className="ma-contrast-ratio__result-key">Contrast ratio:</dt>
      <dd className="ma-contrast-ratio__result-value">
        <NumberData>
          {new Intl.NumberFormat('nl', { maximumSignificantDigits: 3, roundingMode: 'floor' } as unknown).format(
            contrastRatio,
          )}
          {' ÷ 1'}
        </NumberData>
      </dd>
    </div>
    <div className={clsx('ma-contrast-ratio__sample', 'ma-contrast-ratio__sample--background-color')}>
      <dt className="ma-contrast-ratio__sample-key">Achtergrond:</dt>
      <dd className="ma-contrast-ratio__sample-value">
        <ColorSample
          className="ma-contrast-ratio__color-sample"
          color={backgroundColor}
          role="img"
          aria-label={`voorbeeld van: ${backgroundColor}`}
        />{' '}
        <Code>{backgroundColor}</Code>
      </dd>
    </div>
    <div className={clsx('ma-contrast-ratio__sample', 'ma-contrast-ratio__sample--color')}>
      <dt className="ma-contrast-ratio__sample-key">Voorgrond:</dt>
      <dd className="ma-contrast-ratio__sample-value">
        <ColorSample
          className="ma-contrast-ratio__color-sample"
          color={color}
          role="img"
          aria-label={`voorbeeld van: ${backgroundColor}`}
        />{' '}
        <Code>{color}</Code>
      </dd>
    </div>
  </dl>
);
