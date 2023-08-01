import './ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import React, { useState} from 'react';


function ExpenseItem(props)
{
    // Presentational or dumb component because it does not have any state, just outputting the data

    return(
       <Card className='expense-item'>
         <ExpenseDate date = {props.date} />
            <h2>{props.title}</h2>
            <div className='expense-item-description'>
                 <div className='expense-item-price'>${props.amount}</div>
            </div> 
        
       </Card>
    )
}

// We use states in react because overall function code does not execute to render changes after changing value

export default ExpenseItem;