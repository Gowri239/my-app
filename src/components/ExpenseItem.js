import './ExpenseItem.css'

function ExpenseItem(){
    const expenseDate = new Date(2023,0,19)
    const expenseTitle = 'car Insurance'
    const expenseAmount = 2500
    const locationOfExpenditure = "tirupati"
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <h2>{locationOfExpenditure}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    
    )
}

export default ExpenseItem