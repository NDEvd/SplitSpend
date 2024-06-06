import { FC, MouseEventHandler } from 'react';
import styles from './event-item.module.scss';

export type EventItemProps = {
  id?: string;
  title: string;
  dateFrom: string;
  dateTo?: string;
  // onClick: MouseEventHandler<HTMLElement>;
  onClick: () => void;
}

export const EventItem: FC<EventItemProps> = ({ 
  title,
  dateFrom,
  dateTo,
  onClick,
}) => (
    <li className={styles.item} onClick={onClick}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.dateItem}>
        <h2 className={styles.date}>{dateFrom} </h2>
        {dateTo && <h2 className={styles.date}> - {dateTo}</h2>}
      </div>
    </li>
  );