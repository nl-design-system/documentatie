import { Paragraph } from '@components/paragraph/paragraph';
import { SearchError as SearchErrorClass } from './algolia-api/fetch-results';
import { GroupError } from './algolia-api/group-hits-to-pages';

export interface SearchErrorProps {
  error: SearchErrorClass | GroupError;
}

export function SearchError(props: SearchErrorProps) {
  let status: number | undefined;
  let userMessage: string;

  if (props.error instanceof SearchErrorClass) {
    status = props.error.status;
    console.error(`Search Error${status ? ` (${status})` : ''}:`, props.error);
  }

  if (props.error instanceof GroupError) {
    console.error(`Group Error:`, props.error);
  }

  // Algolia has documented these status codes for their response:
  // 200 (Success):          Not relevant for this component
  // 400 (Bad Request):      Provide a user friendly message, since the user can do something about it
  // 402 (Payment Required): A message for us, not the user. Fallback to default message
  // 403 (Forbidden):        We did something wrong, not the user. Fallback to default message
  // 404 (Not Found):        Informative for the user
  switch (status) {
    case 400:
      userMessage = 'Er is een verkeerde zoekterm gebruikt';
      break;
    case 404:
      userMessage = 'Er zijn geen resultaten gevonden';
      break;
    default:
      userMessage = 'Er gaat iets mis met het ophalen van de zoekresultaten';
  }

  return <Paragraph>{userMessage}</Paragraph>;
}
