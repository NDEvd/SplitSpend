import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { AddEventPage } from '../../pages/add-event/add-event';
import { AddExpensePage } from '../../pages/addExpense/addExpense';
import { ExpensesPage } from '../../pages/expenses/expenses';
import { FriendsPage } from '../../pages/friends/friends';
import { ResultsPage } from '../../pages/results/results';
import { StartPage } from '../../pages/start-page/start-page';


function App() {

  return (
    <Routes>
      <Route path='/' element={<StartPage />} />
      <Route path='/addEvent' element={<AddEventPage />} />
      <Route path='/friends' element={<FriendsPage />} />
      <Route path='/expenses' element={<ExpensesPage />} />
      <Route path='/addExpense' element={<AddExpensePage />} />
      <Route path='/results' element={<ResultsPage />} />
    </Routes>
  )
}

export default App
