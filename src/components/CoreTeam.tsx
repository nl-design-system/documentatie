import React from 'react';
import clsx from 'clsx';
import style from './CoreTeam.module.css';

export const Peter = () => (
  <img
    alt="Avatar van Peter"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam-peter.png"
    title="Peter - Projectleider"
  />
);

export const Robbert = () => (
  <img
    alt="Avatar van Robbert"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_robbert.svg"
    title="Robbert - Techlead"
  />
);

export const Yolijn = () => (
  <img
    alt="Avatar van Yolijn"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_yolijn.svg"
    title="Yolijn - Developer"
    style={{ maxHeight: '190px' }}
  />
);

export const Jeffrey = () => (
  <img
    alt="Avatar van Jeffrey"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_jeffrey.svg"
    title="Jeffrey - UX Designer"
  />
);

export const Andrea = () => (
  <img
    alt="Avatar van Andrea"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_andrea-mvp.svg"
    title="Andrea - Developer"
  />
);

export const CoreTeam = () => {
  return (
    <div className={clsx(style['core-team'])}>
      <Peter />
      <Robbert />
      <Yolijn />
      <Jeffrey />
    </div>
  );
};

export default CoreTeam;
