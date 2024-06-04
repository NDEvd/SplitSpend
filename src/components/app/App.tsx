import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { AddEventPage } from '../../pages/add-event/add-event';
import { AddExpensePage } from '../../pages/addExpense/addExpense';
import { ExpensesPage } from '../../pages/expenses/expenses';
import { FriendsPage } from '../../pages/friends/friends';
import { ResultsPage } from '../../pages/results/results';
import { StartPage } from '../../pages/start-page/start-page';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';


function App() {
  const [isActiveTab, setIsActiveTab] = useState<string>('tab-home');
  const handlClickTab = (tabId: string) => {
    setIsActiveTab(tabId);
    console.log(location.pathname);
  }

  const location = useLocation();

  return (
    <>
      <Header homePage={(location.pathname === '/' || location.pathname === '/addEvent') ? true : false}
        event='Поездка в Мадрид'
        datesEvent='01.06.24 - 25.06.24'
      />
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/addEvent' element={<AddEventPage />} />
        <Route path='/friends' element={<FriendsPage />} />
        <Route path='/expenses' element={<ExpensesPage />} />
        <Route path='/addExpense' element={<AddExpensePage />} />
        <Route path='/results' element={<ResultsPage />} />
      </Routes>
      <Footer
        notEmpty={location.pathname === '/' ? false : true}
        isActiveTab={isActiveTab}
        handlClickTab={handlClickTab} />
    </>

  )
}

export default App
