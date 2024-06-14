import { FC } from 'react';
import styles from './tabs.module.scss';
import { useLocation } from 'react-router-dom';

export const Tabs: FC = () => {
  const location = useLocation();
  const isActiveTab = location.pathname;

  return (
    <div data-tab className={styles.tabs}>
      {/* <a href='#/main?tab=home' */}
      <a href='#/'
        data-trigger-tab='/home'
        className={`${styles.tab} ${isActiveTab === '/home' ? styles.tabHomeActive : styles.tabHome}`}
        // onClick={() => handlClickTab('/home')}
        >
      </a>
      <a href='#/friends'
        data-trigger-tab='/friends'
        className={`${styles.tab} ${isActiveTab === '/friends' ? styles.tabFriendsActive : styles.tabFriends}`}
        // onClick={() => handlClickTab('/friends')}
        >
      </a>
      <a href='#/expenses'
        data-trigger-tab='/expenses'
        className={`${styles.tab} ${isActiveTab === '/expenses' ? styles.tabExpensesActive : styles.tabExpenses}`}
        // onClick={() => handlClickTab('/expenses')}
        >
      </a>
      <a href='#/results'
        data-trigger-tab='/results'
        className={`${styles.tab} ${isActiveTab === '/results' ? styles.tabResultsActive : styles.tabResults}`}
        // onClick={() => handlClickTab('/results')}
        >
      </a>
    </div>



);
}