import './App.css';
import Expenses from './components/Expenses/Expenses';
import bgImage from './assets/Images/bg.jpg';
import NewExpense from './components/NewExpense/NewExpense';
import React, {useState} from 'react';

const DUMMY_EXPENSES = [
  {id: 1, title: 'Stationary ITems', amount: 323.2, date: new Date(2022,2,12)},
  {id: 2, title: 'Car Insurance', amount: 43.1, date: new Date(2019,10,3)},
  {id: 3, title: 'Grocery Items', amount: 938.2, date: new Date(2021,5,23)},
  {id: 4, title: 'Laptops', amount: 1020.2, date: new Date(2020,9,5)},
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const {firstname, lastname} = {firstname: "Asher", lastname: "Farhan"};     // destructing objects in Javascript

  const addExpenseHandler = (ExpenseData) => {
    setExpenses((prevExpenses) => {
      return [ExpenseData, ... prevExpenses]; 
    })
  }
  return(
    <div className="container">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items = {expenses}/>
    </div>
  )
}
 
export default App;
