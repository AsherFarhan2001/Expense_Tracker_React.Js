import './Expenses.css';
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import FilterItem from '../Filter/FilterItem';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filterYear, setFilteredYear] = useState('2023');         // returns array with 2 elements. 1. current value 2. function to updated value
    
    console.log(filterYear)
    const filterYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    } 
    let filter_array = props.items.filter((expense) => {
        return expense.date.getFullYear() == filterYear
    })
    if(filterYear === "All")
    {
        filter_array = props.items.map((expense) => {
            return expense
       })   
    }

    return (

        <li>
        <Card className="expenses">
            {/* Controlled component */}
            <FilterItem selected={filterYear} onChangeFilterYear={filterYearHandler}></FilterItem>
            <ExpensesChart expense = {filter_array}></ExpensesChart>
            <ExpensesList year = {filterYear} expenses = {filter_array}></ExpensesList>
            
        </Card>
        </li>
    )
}

export default Expenses;


// Not using Hard coded expressions

// { <ExpenseItem title = {props.items[0].title} amount= {props.items[0].amount} date = {props.items[0].date}></ExpenseItem>
// <ExpenseItem title = {props.items[1].title} amount= {props.items[1].amount} date = {props.items[1].date}></ExpenseItem>
// <ExpenseItem title = {props.items[2].title} amount= {props.items[2].amount} date = {props.items[2].date}></ExpenseItem>
// <ExpenseItem title = {props.items[3].title} amount= {props.items[3].amount} date = {props.items[3].date}></ExpenseItem> */
// }