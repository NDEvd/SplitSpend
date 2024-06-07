import { FC } from 'react';
import styles from './start-page.module.scss';
import { useNavigate } from 'react-router-dom';
import store, { useSelector } from '../../services/store';
import { EventItem } from '../../components/event-item/event-item';

export const StartPage: FC = () => {
  const navigate = useNavigate();
  // const events = useSelector(state => state.services.eventsOnly);
  const events = useSelector(state => state.services.events);

  return (
    <>
      {events &&
        <ul className={styles.ul}>
        {events.map(( event ) => (
          <EventItem
            key={event.id}
            // id={tariffInfo.id}
            title={event.title}
            dateFrom={event.dateFrom}
            dateTo={event.dateTo}
            onClick={() => console.log('click')}
          />
        ))}
        </ul>}
      <button className={styles.button} onClick={() => navigate('/addEvent')}></button>
      
    </>

  );
};