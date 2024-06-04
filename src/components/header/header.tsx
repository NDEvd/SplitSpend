import { FC } from 'react';
import style from './header.module.scss';

export type HeaderProps = {
  homePage: boolean;
  // eventPages: boolean;
  event: string;
  datesEvent: string | number;
}

export const Header: FC<HeaderProps> = ({homePage, event, datesEvent}) => {

  return (
    <>
      {homePage && <div className={style.headerHome}>
        <h1 className={style.titleHome}>SplitSpend</h1>
        <p className={style.subtitleHome}>раздели расходы с друзьями</p>
      </div>}
      {!homePage && <div className={style.header}>
        <h1 className={style.title}>{event}</h1>
        <p className={style.subtitle}>{datesEvent}</p>
      </div>}
    </>
  );
};