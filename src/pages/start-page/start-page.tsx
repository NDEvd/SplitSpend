import { FC } from 'react';
import styles from './start-page.module.scss';
import { useNavigate } from 'react-router-dom';
import store, { useDispatch, useSelector } from '../../services/store';
import { EventItem } from '../../components/event-item/event-item';
import { changeSelectedEvent } from '../../services/slices/slices';

export const StartPage: FC = () => {
  const navigate = useNavigate();
  const events = useSelector(state => state.services.events);
  const dispatch = useDispatch();

  return (
    <>
      {events &&
        <ul className={styles.ul}>
        {events.map(( event ) => (
          <EventItem
            key={event.id}
            title={event.title}
            dateFrom={event.dateFrom}
            dateTo={event.dateTo}
            onClick={() => {
              const id = event.id;
              if (id) {
                dispatch(changeSelectedEvent(id));
                navigate('/friends');
              }
            }
            }
          />
        ))}
        </ul>}
      <button className={styles.button} onClick={() => navigate('/addEvent')}></button> 
    </>
  );
};