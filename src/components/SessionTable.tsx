import { IconCalendarEvent, IconUser } from '@tabler/icons-react';
import {
  ButtonLink,
  Icon,
  Link,
  Paragraph,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import './SessionTable.css';

interface Speaker {
  name: string;
  organisation: string;
}

export interface Session {
  uuid: string;
  isoDateTime: string;
  speakers: string[];
  subject: string;
  icalLink?: string;
  language: { abbr: string; description: string };
  videoId?: string;
}

interface SessionTableProps extends HTMLAttributes<HTMLTableElement> {
  lang?: string;
  sessions: Session[];
  speakers: { [key: string]: Speaker };
}

const SpeakerData = ({ name, organisation }: Speaker) => (
  <Paragraph className={clsx('session-table__speaker', 'speaker')}>
    <Icon className="speaker__icon">
      <IconUser />
    </Icon>
    <span className="speaker__name">{name}</span>
    <br />
    <span className="speaker__organisation">{organisation}</span>
  </Paragraph>
);

export const SessionTable = ({ lang, sessions, speakers: allSpeakers, className, ...props }: SessionTableProps) => (
  <div className={clsx('session-table-container', className)}>
    <Table className={clsx('session-table', className)} {...props}>
      <TableHeader>
        <TableRow className="session-table__row">
          <TableHeaderCell>{lang === 'nl-NL' ? 'Tijd' : 'Time'}</TableHeaderCell>
          <TableHeaderCell>{lang === 'nl-NL' ? 'Taal' : 'Language'}</TableHeaderCell>
          <TableHeaderCell>{lang === 'nl-NL' ? 'Spreker' : 'Speaker'}</TableHeaderCell>
          <TableHeaderCell>{lang === 'nl-NL' ? 'Onderwerp' : 'Subject'}</TableHeaderCell>
          <TableHeaderCell>{lang === 'nl-NL' ? 'Agenda' : 'Calendar'}</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sessions.map(({ isoDateTime, speakers, subject, icalLink, language }, index) => (
          <TableRow className="session-table__row" key={index}>
            <TableCell className="session-table__time">
              <Paragraph>
                <time dateTime={isoDateTime}>
                  {new Intl.DateTimeFormat(lang, {
                    hour: 'numeric',
                    minute: 'numeric',
                    timeZone: 'Europe/Amsterdam',
                    timeZoneName: lang !== 'nl-NL' ? 'short' : undefined,
                  }).format(new Date(isoDateTime))}
                </time>
              </Paragraph>
            </TableCell>
            <TableCell className="session-table__language">
              <abbr title={language.description}>{language.abbr}</abbr>
            </TableCell>
            <TableCell>
              <div className="session-table__speakers">
                {Object.entries(allSpeakers)
                  .filter(([fullName]) => speakers.includes(fullName))
                  .map(([_, speaker], index) => (
                    <SpeakerData key={index} {...speaker} />
                  ))}
              </div>
            </TableCell>
            <TableCell className="session-table__subject">
              <Paragraph lang={language.abbr}>
                <Link
                  href={`/events/design-systems-week-2025/${lang === 'nl-NL' ? 'programma' : language.abbr === 'EN' ? 'en/program' : 'programma'}#${subject.toLowerCase().replace(/\s/gi, '-')}`}
                >
                  {subject}
                </Link>
              </Paragraph>
            </TableCell>
            <TableCell className="session-table__time">
              {icalLink && (
                <ButtonLink href={icalLink} download={icalLink} aria-labelledby="ical-description">
                  <Icon>
                    <IconCalendarEvent />
                  </Icon>{' '}
                  <span id="ical-description" className="sr-only">
                    iCal file for <span lang={language.abbr}>{subject}</span>(download)
                  </span>
                </ButtonLink>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
