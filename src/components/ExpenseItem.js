import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

function ExpenseItem(props){
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.expenseData.title}</h2>
                <div className='expense-item__price'>{props.expenseData.expenseData.price}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;