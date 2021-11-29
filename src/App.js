import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

import React from 'react';
const App = () => {
  const expenses = [
    { id: 'e1', title: "bed", amount: 500, date: new Date(2021, 2, 28) },
    { id: 'e2', title: "grocery", amount: 1000, date: new Date(2021, 5, 14) },
    { id: 'e3', title: "furniture", amount: 1500, date: new Date(2021, 4, 10) },
    { id: 'e4', title: "fruits", amount: 700, date: new Date(2021, 6, 16) },
  ];
const addExpenseHandler = expense =>{
  console.log('in App.js');
  console.log(expense);
}
  return (
    <div>
      <NewExpenses onAddExpense = {addExpenseHandler}/>
      <Expenses expenses = {expenses}> </Expenses>
    </div>
  );
}

export default App;
