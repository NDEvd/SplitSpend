import { FC } from 'react';
import style from './header-event.module.scss';

export type HeaderEventProps = {
  event: string;
  datesEvent: string | number;
}

export const HeaderEvent: FC<HeaderEventProps> = ({event, datesEvent}) => {

  return (
    <div className={style.header}>
      <h1 className={style.title}>{event}</h1>
      <p className={style.subtitle}>{datesEvent}</p>
    </div>
  );
};