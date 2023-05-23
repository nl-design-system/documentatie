import { GraffitiForm } from '@site/src/components/examples/GraffitiForm';
import React from 'react';

const VoorbeeldMetFouten1 = () => {
  return (
    <GraffitiForm unlinkedLables={['woonplaats', 'achternaam']} checkboxForRadio unnecessaryQuestions={['gender']} />
  );
};

export default VoorbeeldMetFouten1;
