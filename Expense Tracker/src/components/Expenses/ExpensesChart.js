import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
   const datapoint = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0},
   ]

   for(const expense of props.expense)                   // Sum the expenses for each month of filter year
   {
      const expense_month = expense.date.getMonth();
      datapoint[expense_month].value += expense.amount;
      
   }
   
   return(
      <Chart dataPoint = {datapoint}></Chart>
   )
}

export default ExpensesChart