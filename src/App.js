import logo from './logo.svg';
import './App.css';
import Expenses from "./components/Expenses";

function App() {
    const expenses = [
        {
            date: new Date(2023, 2, 28),
            title: 'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 2, 28),
            title: 'New jeans',
            price: 99.99
        }
    ]
    return (
        <div className="App">
            <Expenses expenseData={expenses[0]}></Expenses>
            <Expenses expenseData={expenses[1]}></Expenses>
        </div>
    );
}
export default App;
