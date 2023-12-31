import './ExpensesList.css';
import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if(props.expenses.length === 0)
    {
        return <h2 className='heading'>No Expenses Found for Year {props.year}</h2>
    }

    return(
        <ul className='expenses-list'>
            {
                props.expenses.map((expense) =>  (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                ))
            }
        </ul>
    )
}

export default ExpensesList;