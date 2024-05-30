import { FC } from 'react';
// import style from './start-page.module.scss';
// import { HeaderEvent } from '../../components/header-event/header-event';
import { Footer } from '../../components/footer/footer';
import { HeaderStart } from '../../components/header-start/header-start';

export const StartPage: FC = () => {

  return (
    <>
      {/* <HeaderEvent
        event='Поездка в Мадрид'
        datesEvent='01.06.24 - 25.06.24'
      /> */}
      <HeaderStart />
      
      <Footer />
    </>

  );
};