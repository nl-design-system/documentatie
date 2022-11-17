import React from 'react';
import clsx from 'clsx';
import style from './CoreTeam.module.css';

export const Angela = () => (
  <img
    alt="Avatar van Angela"
    className={clsx(style['core-team__avatar'])}
    src="https://user-images.githubusercontent.com/877246/202432223-37fa08ed-9417-4b58-ac83-154f46300069.png"
    title="Angela - Project manager"
  />
);

export const Robbert = () => (
  <img
    alt="Avatar van Robbert"
    className={clsx(style['core-team__avatar'])}
    src="https://user-images.githubusercontent.com/877246/202432228-f12817a5-4025-4615-bcae-ef65ff01d324.png"
    title="Robbert - Techlead"
  />
);

export const Yolijn = () => (
  <img
    alt="Avatar van Yolijn"
    className={clsx(style['core-team__avatar'])}
    src="https://user-images.githubusercontent.com/877246/202432231-384dfc4c-ee54-4b75-bfd7-b050e30c1590.png"
    title="Yolijn - Developer"
  />
);

export const Egor = () => (
  <img
    alt="Avatar van Egor"
    className={clsx(style['core-team__avatar'])}
    src="https://user-images.githubusercontent.com/877246/202432226-d8b369ce-fe6b-4f1f-92a3-f2f416397cc9.png"
    title="Egor - Developer"
  />
);

export const Jeffrey = () => (
  <img
    alt="Avatar van Jeffrey"
    className={clsx(style['core-team__avatar'])}
    src="https://user-images.githubusercontent.com/877246/202432227-4eb75fd5-9820-48c1-b691-9087244754d3.png"
    title="Jeffrey - UX Designer"
  />
);

export const CoreTeam = () => {
  return (
    <div className={clsx(style['core-team'])}>
      <Angela />
      <Robbert />
      <Yolijn />
      <Egor />
      <Jeffrey />
    </div>
  );
};

export const Contact = () => (
  <div className={clsx(style['core-team__contact'])}>
    <h2>Contact met het kernteam</h2>
    <p>
      Wil je kennismaken met het kernteam, heb je brandende vragen of wil je bespreken hoe je het beste kunt bijdragen?
    </p>
    <p>
      Neem gerust contact op met 1 van de kernteamleden of op ons centrale e-mailadres:{' '}
      <a href="mailto:nldesignsystem@ictu.nl">nldesignsystem@ictu.nl</a>
    </p>

    <ul>
      <li>
        Projectleider Angela Imhof, <a href="mailto:angela.imhof@ictu.nl">angela.imhof@ictu.nl</a>,{' '}
        <a href="https://praatmee.codefor.nl">@Angela op Slack</a> of 06-18307886
      </li>
      <li>
        Lead developer Robbert Broersma, <a href="mailto:robbert@gebruikercentraal.nl">robbert@gebruikercentraal.nl</a>,{' '}
        <a href="https://praatmee.codefor.nl">@Robbert op Slack</a>
      </li>
      <li>
        Front-end developer Yolijn van der Kolk,{' '}
        <a href="mailto:yolijn@gebruikercentraal.nl">yolijn@gebruikercentraal.nl</a>,{' '}
        <a href="https://praatmee.codefor.nl">@Yolijn op Slack</a>
      </li>
      <li>
        Front-end developer Egor Kloos, <a href="https://praatmee.codefor.nl">@Egor op Slack</a>
      </li>
      <li>
        UX designer Jeffrey Lauwers, <a href="https://praatmee.codefor.nl">@Jeffrey op Slack</a>
      </li>
    </ul>
  </div>
);

export default CoreTeam;
