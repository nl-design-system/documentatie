import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import style from './SessionTable.module.css';
import {
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
import { IconCalendarCheck, IconUser } from '@tabler/icons-react';

interface Speaker {
  name: string;
  organisation: string;
}

interface Session {
  isoDateTime: string;
  speakers: Speaker[];
  subject: string;
  singupLink: string;
  icalLink?: string;
  language: { abbr: string; description: string };
}

interface SessionTableProps extends HTMLAttributes<HTMLTableElement> {
  sessions: Session[];
}

const Speaker = ({ name, organisation }: Speaker) => (
  <Paragraph className={clsx(style['session-table__speaker'], style['speaker'])}>
    <Icon role="presentational" className={style['speaker__icon']}>
      <IconUser />
    </Icon>
    <span className={clsx(style['speaker__name'])}>{name}</span>
    <br />
    <span className={clsx(style['speaker__organisation'])}>{organisation}</span>
  </Paragraph>
);

export const SessionTable = ({ lang, sessions, className, ...props }: SessionTableProps) => {
  return (
    <Table className={clsx(style['session-table'], className)} {...props}>
      <TableHeader>
        <TableRow className={clsx(style['session-table__row'])}>
          <TableHeaderCell>{lang === 'nl-NL' ? 'Tijd' : 'Time'}</TableHeaderCell>
          <TableHeaderCell>{lang === 'nl-NL' ? 'Spreker' : 'Speaker'}</TableHeaderCell>
          <TableHeaderCell>{lang === 'nl-NL' ? 'Onderwerp' : 'Subject'}</TableHeaderCell>
          {lang === 'nl-NL' && <TableHeaderCell>Taal</TableHeaderCell>}
          <TableHeaderCell>{lang === 'nl-NL' ? 'Agenda' : 'Calendar'}</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sessions.map(({ isoDateTime, speakers, subject, singupLink, icalLink, language }) => (
          <TableRow className={clsx(style['session-table__row'])}>
            <TableCell className={clsx(style['session-table__time'])}>
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
              <div className={clsx(style['session-table__speakers'])}>
                {speakers.map((speaker) => (
                  <Speaker {...speaker} />
                ))}
              </div>
            </TableCell>
            <TableCell className={clsx(style['session-table__subject'])}>
              <Paragraph>
                <Link href={singupLink}>{subject}</Link>
              </Paragraph>
            </TableCell>
            {lang === 'nl-NL' && (
              <TableCell className={clsx(style['session-table__language'])}>
                <abbr title={language.description}>{language.abbr}</abbr>
              </TableCell>
            )}
            <TableCell className={clsx(style['session-table__time'])}>
              {icalLink && (
                <Link href={icalLink} download={icalLink}>
                  <Icon aria-label="Download uitnodiging">
                    <IconCalendarCheck />
                  </Icon>{' '}
                  iCal
                </Link>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
