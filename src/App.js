import { useState } from "react";
// import ExpensesFilter from "./components/Expenses/Expenses/ExpenseFilter";
// import ExpenseItem from "./components/Expenses/Expenses/ExpenseItem";
import NewExpense from "./components/Expenses/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses/Expenses";
import './components/Expenses/Expenses/Expenses.css'


const App = () => {
  const expenses = [];

  const [addExpense,setAddExpense] = useState(expenses)
  // const [filteredYear,setFilterdYear] = useState('2020')

  const addExpenseHandler = expense => {
    console.log('In app.js')
    console.log(expense)
    setAddExpense((prevState)=>{
      return [expense,...prevState]
    })
    
  }

  // const filterChangeHandler = selectedYear => {
  //   setFilterdYear(selectedYear)
  // }

  // const filteredExpenses = addExpense.filter(expense => {
  //   return expense.date.getFullYear().toString() === filteredYear
  // })
  return (
    <div>
      {/* <div> */}
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={addExpense}></Expenses>
        {/* <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      </div> */}
      
      {/* {
        filteredExpenses.map(expense => {
          return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        })
      } */}
    </div>
  );
}

export default App;
