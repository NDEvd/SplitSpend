import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './expenses.module.scss';
import { ExpenseItem } from '../../components/expense-item/expense-item';
import { Search } from '../../components/search/search';
import { useSelector } from '../../services/store';
import { TExpense } from '../../utils/types';

export const ExpensesPage: FC = () => {
  const navigate = useNavigate();
  const idSelectedEvent = useSelector(state => state.services.selectedEvent.id);
  const expenses = useSelector(state => state.services.expenses).filter((item) => item.idEvent === idSelectedEvent);

  const friends = useSelector(state => state.services.friends);

  const getFriendNameById = (id: string): string => {
    const friend = friends.find(friend => friend.id === id);
    return friend ? friend.name : 'Unknown';
  }

  const [listOfExpenses, setListOfExpenses] = useState(expenses);
  const [searchTerm, setSearchTerm] = useState('');

  const filterExpenses = (searchText: string, allExpenses: TExpense[]) => {
    if (!searchText) {
      return allExpenses;
    }
    return allExpenses.filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase()));
  }

  useEffect (() => {
    const Debounce = setTimeout(() => {
      const filteredExpenses = filterExpenses(searchTerm, expenses);
      setListOfExpenses(filteredExpenses);
    }, 1000);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  return (
    <>
      <Search
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      {listOfExpenses &&
        <ul className={styles.ul}>
          {listOfExpenses.map(( data ) => (
          <ExpenseItem
            key={data.id}
            title={data.title}
            name={getFriendNameById(data.idWhoPaid)}
            date={data.date}
            sum={data.sum}
            onClick={() => {}}
          />  
          ))}
        </ul>
      }
      <button className={styles.button} onClick={() => navigate('/addExpense')}></button> 
    </>
  );
};