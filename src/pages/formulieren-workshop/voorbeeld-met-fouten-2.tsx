import { GraffitiForm } from '@site/src/components/examples/GraffitiForm';
import React from 'react';

const VoorbeeldMetFouten1 = () => {
  return (
    <GraffitiForm unlinkedLables defaultOptional astrixOnly unnecessaryQuestions={['gender']} validationMode="onBlur" />
  );
};

export default VoorbeeldMetFouten1;
