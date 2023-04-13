import './Expenses.css'
import ExpenseItem  from "./ExpenseItem";
import Card from "./Card";

function Expenses(props){
    return (
        <Card className="expenses">
            <ExpenseItem expenseData={props}></ExpenseItem>
        </Card>
    )
}
export default Expenses