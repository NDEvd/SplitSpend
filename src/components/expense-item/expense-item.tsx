import { FC, MouseEventHandler } from 'react';
import styles from './expense-item.module.scss';

export type ExpenseItemProps = {
  title: string;
  name: string;
  date: string;
  sum: number;
  onClick: MouseEventHandler<HTMLElement>;
  // onClick: (id: string) => void;
}

export const ExpenseItem: FC<ExpenseItemProps> = ({ 
  title,
  name,
  date,
  sum,
  onClick,
}) => (
    <div className={styles.item} onClick={onClick}>
      
      <span className={`${styles.title} ${styles.span}`}>{title}</span>
      <span className={styles.span}>({name})</span>
  
      <span className={styles.span}>{date}</span>
      <span className={styles.span}>{sum}</span>
      
    </div>
  );