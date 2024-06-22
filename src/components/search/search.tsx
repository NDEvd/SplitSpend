import { FC, useState } from 'react';
import styles from './search.module.scss';
// import { useSelector } from '../../services/store';
import loupe from '../../images/loupe.svg';

// export type HeaderProps = {
//   homePage: boolean;
// }

export const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
 
  return (
    <div className={styles.item}>
      <img src={loupe} alt="лупа" />
      <input
        className={styles.input}
        type="text"
        value={searchTerm}
        autoFocus
        autoComplete='off'
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />

    </div>
  );
};