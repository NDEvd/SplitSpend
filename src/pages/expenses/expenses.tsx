import { FC } from 'react';
import style from './expenses.module.scss';
import { Footer } from '../../components/footer/footer';

export const ExpensesPage: FC = () => {

  return (
    <>
    <h1>Expenses</h1>
    <Footer empty={true} />
    </>
  );
};