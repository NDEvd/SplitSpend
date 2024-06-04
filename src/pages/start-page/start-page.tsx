import { FC } from 'react';
import style from './start-page.module.scss';
import { useNavigate } from 'react-router-dom';

export const StartPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className={style.button} onClick={() => navigate('/addEvent')}></button>
      
    </>

  );
};