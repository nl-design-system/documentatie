import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import style from './SessionTable.module.css';
import {
  DataList,
  Icon,
  Link,
  Paragraph,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react';
import { IconUser } from '@tabler/icons-react';

interface Speaker {
  name: string;
  organisation: string;
}

interface Session {
  isoDateTime: string;
  speakers: Speaker[];
  subject: string;
  singupLink: string;
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {sessions.map(({ isoDateTime, speakers, subject, singupLink, language }) => (
          <TableRow className={clsx(style['session-table__row'])}>
            <TableCell className={clsx(style['session-table__time'])}>
              <time dateTime={isoDateTime}>
                {new Intl.DateTimeFormat(lang, {
                  hour: 'numeric',
                  minute: 'numeric',
                  timeZone: 'Europe/Amsterdam',
                  timeZoneName: lang !== 'nl-NL' ? 'short' : undefined,
                }).format(new Date(isoDateTime))}
              </time>
            </TableCell>
            <TableCell>
              <div className={clsx(style['session-table__speakers'])}>
                {speakers.map((speaker) => (
                  <Speaker {...speaker} />
                ))}
              </div>
            </TableCell>
            <TableCell className={clsx(style['session-table__subject'])}>
              <Link href={singupLink}>{subject}</Link>
            </TableCell>
            {lang === 'nl-NL' && (
              <TableCell className={clsx(style['session-table__language'])}>
                <abbr title={language.description}>{language.abbr}</abbr>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
