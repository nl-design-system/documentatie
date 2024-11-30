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
import React, { HTMLTableAttributes } from 'react';
import './SessionTable.css';

interface Speaker {
  name: string;
  organisation: string;
}

export interface Session {
  uuid: string;
  isoDateTime: string;
  speakers: Speaker[];
  subject: string;
  sessionLink?: string;
  icalLink?: string;
  language: { abbr: string; description: string };
}

interface SessionTableProps extends HTMLTableAttributes<HTMLTableElement> {
  lang?: string;
  sessions: Session[];
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

export const SessionTable = ({ lang, sessions, className, ...props }: SessionTableProps) => {
  return (
    <div className={clsx('session-table-container', className)}>
      <Table className={clsx('session-table', className)} {...props}>
        <TableHeader>
          <TableRow className="session-table__row">
            <TableHeaderCell>{lang === 'nl-NL' ? 'Tijd' : 'Time'}</TableHeaderCell>
            <TableHeaderCell>{lang === 'nl-NL' ? 'Spreker' : 'Speaker'}</TableHeaderCell>
            <TableHeaderCell>{lang === 'nl-NL' ? 'Onderwerp' : 'Subject'}</TableHeaderCell>
            {lang === 'nl-NL' && <TableHeaderCell>Taal</TableHeaderCell>}
            <TableHeaderCell>{lang === 'nl-NL' ? 'Agenda' : 'Calendar'}</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sessions.map(({ isoDateTime, speakers, subject, icalLink, sessionLink, language }, index) => (
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
              <TableCell>
                <div className="session-table__speakers">
                  {speakers.map((speaker, index) => (
                    <SpeakerData key={index} {...speaker} />
                  ))}
                </div>
              </TableCell>
              <TableCell className="session-table__subject">
                <Paragraph>{sessionLink ? <Link href={sessionLink}>{subject}</Link> : subject}</Paragraph>
              </TableCell>
              {lang === 'nl-NL' && (
                <TableCell className="session-table__language">
                  <abbr title={language.description}>{language.abbr}</abbr>
                </TableCell>
              )}
              <TableCell className="session-table__time">
                {icalLink && (
                  <ButtonLink href={icalLink} download={icalLink} aria-label={`iCal file for ${subject} (download)`}>
                    <Icon>
                      <IconCalendarEvent />
                    </Icon>{' '}
                  </ButtonLink>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
