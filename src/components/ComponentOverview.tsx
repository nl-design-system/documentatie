import React from 'react';
import { ComponentCard } from './ComponentCard';
import style from './ComponentOverview.module.css';
import { components } from '../../componentConfig';

export const ComponentOverview = () => (
  <div className={style['component-overview']}>
    {components
      .sort((a, b) => (a.name >= b.name ? 1 : -1))
      .map(({ name, state, id, preview }) => {
        const link = `/docs/componenten/${state}/${id}`;

        return <ComponentCard key={id} title={name} status={state} doc={link} preview={preview} />;
      })}
  </div>
);
