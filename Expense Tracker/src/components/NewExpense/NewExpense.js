import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';
import { useState } from 'react';

const NewExpense = (props) => {

    const [isEditing, setEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {... enteredExpenseData, id: Math.random().toString()};
        props.onAddExpense(expenseData);            // Lifting state up
        setEditing(false);

    }

    const addExpenseHandler = () => {
        setEditing(true)
    }

    const cancelExpenseHandler = () => {
        setEditing(false)
    }

    console.log(isEditing)
    return(
        <Card className='new-expense'>
            <div className='heading'>
                <h1>Welcome to Expense Tracker</h1> 
            </div>
            {!isEditing && <button onClick={addExpenseHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {cancelExpenseHandler}></ExpenseForm>}
        </Card>
    )
}

export default NewExpense;