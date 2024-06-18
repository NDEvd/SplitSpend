import { FC } from 'react';
import styles from './expenses.module.scss';
import { ExpenseItem } from '../../components/expense-item/expense-item';
import { useSelector,
  //  useDispatch 
  } from '../../services/store';


export const ExpensesPage: FC = () => {
  const idSelectedEvent = useSelector(state => state.services.selectedEvent.id);
  const arrayExpenses = useSelector(state => state.services.expenses).filter((item) => item.idEvent === idSelectedEvent);

  const friends = useSelector(state => state.services.friends);

  const getFriendNameById = (id: string): string => {
    const friend = friends.find(friend => friend.id === id);
    return friend ? friend.name : 'Unknown';
  }

  // const dispatch =  useDispatch();

  return (
    <>
      {arrayExpenses &&
        <ul className={styles.ul}>
          {arrayExpenses.map(( data ) => (
            
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
      <button className={styles.button} onClick={() => {}}></button> 
    </>
  );
};