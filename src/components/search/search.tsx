import { FC } from 'react';
import styles from './search.module.scss';
import loupe from '../../images/loupe.svg';

export type SearchProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = ({ value, onChange }) => {
 
  return (
    <div className={styles.item}>
      <img src={loupe} alt="лупа" />
      <input
        className={styles.input}
        type="text"
        value={value}
        autoFocus
        autoComplete='off'
        onChange={onChange}
      />
    </div>
  );
};