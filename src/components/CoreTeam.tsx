import React from 'react';
import clsx from 'clsx';
import style from './CoreTeam.module.css';

export const Angela = () => (
  <img
    alt="Avatar van Angela"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_angela.png"
    title="Angela - Project manager"
  />
);

export const Robbert = () => (
  <img
    alt="Avatar van Robbert"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_robbert.png"
    title="Robbert - Techlead"
  />
);

export const Yolijn = () => (
  <img
    alt="Avatar van Yolijn"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_yolijn.png"
    title="Yolijn - Developer"
  />
);

export const Jeffrey = () => (
  <img
    alt="Avatar van Jeffrey"
    className={clsx(style['core-team__avatar'])}
    src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/kernteam_jeffrey.png"
    title="Jeffrey - UX Designer"
  />
);

export const CoreTeam = () => {
  return (
    <div className={clsx(style['core-team'])}>
      <Angela />
      <Robbert />
      <Yolijn />
      <Jeffrey />
    </div>
  );
};

export default CoreTeam;
