import { FC } from 'react';
import style from './header-start.module.scss';

export const HeaderStart: FC = () => {

  return (
    <div className={style.header}>
      <h1 className={style.title}>SplitSpend</h1>
      <p className={style.subtitle}>раздели расходы с друзьями</p>
    </div>
  );
};