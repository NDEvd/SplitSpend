import { FC } from 'react';
// import { useNavigate , Link } from 'react-router-dom';
import styles from './tabs.module.scss';

export type TabsProps = {
  isActiveTab?: string;
  handlClickTab: (tabId: string) => void | undefined;
}

export const Tabs: FC<TabsProps> = ({ isActiveTab, handlClickTab }) => {

  // const [isActiveTab, setIsActiveTab] = useState<string>('/home');
  // const handlClickTab = (tabId: string) => {
  //   setIsActiveTab(tabId);
  //   console.log(tabId);
  //   console.log(isActiveTab);
  // }

  return (
    <div data-tab className={styles.tabs}>
      {/* <a href='#/main?tab=home' */}
      <a href='#/'
        data-trigger-tab='/home'
        className={`${styles.tab} ${isActiveTab === '/home' ? styles.tabHomeActive : styles.tabHome}`}
        onClick={() => handlClickTab('/home')}>
      </a>
      <a href='#/friends'
        data-trigger-tab='/friends'
        className={`${styles.tab} ${isActiveTab === '/friends' ? styles.tabFriendsActive : styles.tabFriends}`}
        onClick={() => handlClickTab('/friends')}>
      </a>
      <a href='#/expenses'
        data-trigger-tab='/expenses'
        className={`${styles.tab} ${isActiveTab === '/expenses' ? styles.tabExpensesActive : styles.tabExpenses}`}
        onClick={() => handlClickTab('/expenses')}>
      </a>
      <a href='#/results'
        data-trigger-tab='/results'
        className={`${styles.tab} ${isActiveTab === '/results' ? styles.tabResultsActive : styles.tabResults}`}
        onClick={() => handlClickTab('/results')}>
      </a>
    </div>



);
}