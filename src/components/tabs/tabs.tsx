import { FC } from 'react';
// import { useNavigate , Link } from 'react-router-dom';
import styles from './tabs.module.scss';

export type TabsProps = {
  isActiveTab?: string;
  handlClickTab: (tabId: string) => void | undefined;
}

export const Tabs: FC<TabsProps> = ({ isActiveTab, handlClickTab }) => {

  // const [isActiveTab, setIsActiveTab] = useState<string>('tab-home');
  // const handlClickTab = (tabId: string) => {
  //   setIsActiveTab(tabId);
  //   console.log(tabId);
  //   console.log(isActiveTab);
  // }

  return (
    <div data-tab className={styles.tabs}>
      {/* <a href='#/main?tab=home' */}
      <a href='#/'
        data-trigger-tab='tab-home'
        className={`${styles.tab} ${isActiveTab === 'tab-home' ? styles.tabHomeActive : styles.tabHome}`}
        onClick={() => handlClickTab('tab-home')}>
      </a>
      <a href='#/friends'
        data-trigger-tab='tab-friends'
        className={`${styles.tab} ${isActiveTab === 'tab-friends' ? styles.tabFriendsActive : styles.tabFriends}`}
        onClick={() => handlClickTab('tab-friends')}>
      </a>
      <a href='#/expenses'
        data-trigger-tab='tab-expenses'
        className={`${styles.tab} ${isActiveTab === 'tab-expenses' ? styles.tabExpensesActive : styles.tabExpenses}`}
        onClick={() => handlClickTab('tab-expenses')}>
      </a>
      <a href='#/results'
        data-trigger-tab='tab-results'
        className={`${styles.tab} ${isActiveTab === 'tab-results' ? styles.tabResultsActive : styles.tabResults}`}
        onClick={() => handlClickTab('tab-results')}>
      </a>
    </div>



);
}