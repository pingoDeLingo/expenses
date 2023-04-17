import './Expenses.css'
import ExpenseItem  from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props){
    return (
        <Card className="expenses">
            <ExpenseItem expenseData={props}></ExpenseItem>
        </Card>
    )
}
export default Expenses