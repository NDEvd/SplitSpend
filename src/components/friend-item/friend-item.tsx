import { FC, MouseEventHandler } from 'react';
import styles from './friend-item.module.scss';

export type EventItemProps = {
  name: string;
  handleChange: MouseEventHandler;
  handleDelete: MouseEventHandler;
}

export const FriendItem: FC<EventItemProps> = ({ name, handleChange, handleDelete }) => {
  
  return (
    <div className={styles.item} >
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.buttons}>
        <button className={styles.change} onClick={handleChange}></button>
        <button className={styles.delete} onClick={handleDelete}></button>
      </div>
    </div>
  );
}