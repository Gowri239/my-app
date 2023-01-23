import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = ({amount,date,title}) => {

    // const deleteExpense = () => {
    //     document.getElementById('delete').remove()
    // }

    // let [title,setTitle] = useState(props.title)
    // let [amount,setAmount] = useState(props.amount)

    // const changeTitle = () => {
    //     setTitle('updated!')
    //     console.log(title)
    // }

    // const changeAmount = () => {
    //     setAmount(100)
    // }

    
    return (
        // // <div id="delete">
        //     <div className="expense-item">
        //     <ExpenseDate date={props.date}/>
        //     <div className="expense-item__description">
        //         <h2>{title}</h2>
        //         {/* <h2>{props.location}</h2> */}
        //         <ExpenseAmount amount={amount}/>
        //     {/* </div>
        //       <button onClick={deleteExpense}>Delete Expense</button>
        //       <button onClick={changeTitle}>Change Title</button>
        //       <button onClick={changeAmount}>Change amount</button>
        //     </div> */}
        // </div>
    <li>
    <Card className="expense-item" >
      <ExpenseDate date={date} />
      <ExpenseDetails amount={amount} title={title} />
      
    </Card>
    </li>
        
    
    )

    
}

export default ExpenseItem