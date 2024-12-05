import { IconMoodHappy, IconMoodSad } from '@tabler/icons-react';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { createContext } from 'react';
import './Guideline.css';
interface GuidelineProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  description?: ReactNode;
  appearance: 'do' | 'dont';
  figure?: boolean;
}
interface CodeExampleContextType {
  title?: ReactNode;
  type?: string;
}

export const CodeExampleContext = createContext<CodeExampleContextType>({});

export const Guideline = ({ title, appearance, description, children, figure }: PropsWithChildren<GuidelineProps>) => {
  const guidelineLabel = {
    do: 'Doen',
    dont: 'Niet doen',
  };
  const ContainerElement = figure ? 'figure' : 'div';
  const CaptionElement = figure ? 'figcaption' : 'div';

  return (
    <ContainerElement
      className={clsx('nlds-guideline', `nlds-guideline--${appearance}`)}
      id={typeof title === 'string' ? title?.toLowerCase().replace(/\s/g, '-') : undefined}
    >
      <CaptionElement className="nlds-guideline__description">
        {appearance === 'dont' ? (
          <>
            <Paragraph className={clsx('nlds-guideline__badge', `nlds-guideline__badge--${appearance}`)}>
              <IconMoodSad aria-hidden="true" role="presentation" className="nlds-guideline__icon" />
              <span className="nlds-guideline__title">{guidelineLabel['dont']}</span>
            </Paragraph>
            <Paragraph>{title}</Paragraph>
          </>
        ) : (
          <>
            <Paragraph className={clsx('nlds-guideline__badge', `nlds-guideline__badge--${appearance}`)}>
              <IconMoodHappy aria-hidden="true" role="presentation" className="nlds-guideline__icon" />
              <span className="nlds-guideline__title">{guidelineLabel['do']}</span>
            </Paragraph>
            <Paragraph>{title}</Paragraph>
          </>
        )}
        {description}
      </CaptionElement>
      <div className="nlds-guideline__example">
        <CodeExampleContext.Provider value={{ title: title, type: guidelineLabel[appearance] }}>
          {children}
        </CodeExampleContext.Provider>
      </div>
    </ContainerElement>
  );
};
