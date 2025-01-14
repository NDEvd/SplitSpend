import { FC } from 'react';
import style from './header.module.scss';
import { useSelector } from '../../services/store';

export type HeaderProps = {
  homePage: boolean;
}

export const Header: FC<HeaderProps> = ({ homePage }) => {
  const event = useSelector(state => state.services.selectedEvent);
 
  return (
    <>
      {homePage && <div className={style.headerHome}>
        <h2 className={style.titleHome}>
          SplitSpend
        </h2>
        <p className={style.subtitleHome}>
          раздели расходы с друзьями
        </p>
      </div>}
      {!homePage && <div className={style.header}>
        <h2 className={style.title}>
          {event.title}
        </h2>
        <p className={style.subtitle}>       
          {event.dateFrom} - {event?.dateTo}
        </p>
      </div>}
    </>
  );
};