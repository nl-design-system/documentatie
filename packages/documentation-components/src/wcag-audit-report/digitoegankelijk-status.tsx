import { t } from '@nl-design-system-community/documentation-i18n/src/rosetta';
import { ColorSample, Link } from '@utrecht/component-library-react';

export interface DigiToegankelijkColorSampleProps {
  status: string | 'A' | 'B' | 'C' | 'D' | 'E';
}

export const DigiToegankelijkColorSample = ({ status }: DigiToegankelijkColorSampleProps) => {
  const color: { [index: string]: string } = {
    A: 'rgb(34, 96, 34)',
    B: 'rgb(57, 148, 57)',
    C: 'rgb(254, 189, 87)',
    D: 'rgb(253, 107, 57)',
    E: 'rgb(252, 20, 46)',
  };

  return <ColorSample color={color[status] || color['E']} />;
};

export interface DigiToegankelijkStatusProps {
  criteriaTested: number;
  criteriaFailed: number;
  /** ISO8061 date */
  evaluationDate: string;

  /** ISO8061 date */
  renderDate: string;
}

export const DigiToegankelijkStatus = ({
  criteriaFailed,
  criteriaTested,
  evaluationDate,
  renderDate,
}: DigiToegankelijkStatusProps) => {
  let status = 'E';
  if (criteriaTested >= 50) {
    status = 'C';
    if (criteriaFailed < 50) {
      status = 'B';
    }
    if (criteriaFailed === 0) {
      status = 'A';
    }
  }

  const SECONDS_IN_YEAR = 60 * 60 * 24 * 365;

  if (new Date(evaluationDate).getTime() - new Date(renderDate).getTime() > SECONDS_IN_YEAR * 3) {
    status = 'C';
  }

  const statusLabel = t(`wcagEvaluation.digitoegankelijk_status_label.${status}`);
  const linkLanguageNote = t('wcagEvaluation.digitoegankelijk_link_language_note');

  return (
    <>
      {/* <DigiToegankelijkColorSample status={status} /> */}
      <Link href="https://www.digitoegankelijk.nl/toegankelijkheidsverklaring/status">
        {t('wcagEvaluation.digitoegankelijk_status')}
      </Link>{' '}
      {linkLanguageNote && `${linkLanguageNote} `}
      {t('wcagEvaluation.digitoegankelijk_status_is')} {status} - {statusLabel}
    </>
  );
};
