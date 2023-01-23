import ExpenseFilter from "./ExpenseFilter"
import './Expenses.css'
import Card from '../UI/Card'
import { useState } from "react"
import ExpensesList from "./ExpensesList"

const Expenses = ({expenses}) => {

  const [filteredYear , setFilteredYear] = useState('2022')


  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
  }

  const filteredExpense = expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
  })


  return (
    <li>
        <Card className="expenses">
           <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
           <ExpensesList item={filteredExpense}/>
        </Card>
    </li>
    
  )
}

export default Expenses