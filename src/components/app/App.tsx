import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import { AddEventPage } from '../../pages/add-event/add-event';
import { AddExpensePage } from '../../pages/addExpense/addExpense';
import { ExpensesPage } from '../../pages/expenses/expenses';
import { FriendsPage } from '../../pages/friends/friends';
import { ResultsPage } from '../../pages/results/results';
import { StartPage } from '../../pages/start-page/start-page';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';


function App() {
  const location = useLocation();

  return (
    <div className='wrapper'>
      <Header homePage={(location.pathname === '/' || location.pathname === '/addEvent') ? true : false} />

      <div className='content'>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/addEvent' element={<AddEventPage />} />
          <Route path='/friends' element={<FriendsPage />} />
          <Route path='/expenses' element={<ExpensesPage />} />
          <Route path='/addExpense' element={<AddExpensePage />} />
          <Route path='/results' element={<ResultsPage />} />
          
        </Routes>
      </div>

      <Footer
        notEmpty={(location.pathname === '/' || location.pathname === '/addEvent') ? false : true}
      />
    </div>
  )
}

export default App
