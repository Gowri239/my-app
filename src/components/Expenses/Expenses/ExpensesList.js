import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return (<h2 className="expense-list__fallback"> Found no expenses</h2>)
  }

  if(props.item.length === 1) {
    return (
        <div>
        <ul className="expenses-list">
          {props.item.map((expense) => {
            return (
              <div key={expense.id}>
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              </div>
            )
          })}
        </ul>
        <div>
            <h2 className="expense-list__fallback"> Only single Expense here. Please add more...</h2>
        </div>
        </div>

    )
    
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => {
        return (
          <div key={expense.id}>
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </div>
        )
      })}
    </ul>
  );
};

export default ExpensesList;