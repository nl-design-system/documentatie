import { useHistory } from '@docusaurus/router';
import { BingoCard } from '@site/src/components/BingoCard';
import React from 'react';
import { issues } from './_issues';

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const BingoCards = () => {
  const { location } = useHistory();
  const params = new URLSearchParams(location.search);

  const players = parseInt(params.get('players'), 10) || 10;
  const columns = parseInt(params.get('columns'), 10) || 3;
  const freeCellsIds = [5];

  const bingoCards = Array(players)
    .fill(0)
    .map(() => {
      const cardIssues = shuffleArray([...issues]);
      return cardIssues.splice(0, columns * columns);
    });

  return (
    <div id="results">
      {bingoCards.map((issues, index) => (
        <BingoCard issues={issues} columns={columns} freeCellsIds={freeCellsIds} key={index} />
      ))}
    </div>
  );
};

export default BingoCards;
