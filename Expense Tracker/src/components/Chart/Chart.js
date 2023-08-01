import './Chart.css';
import React from 'react';
import ChartBar from './ChartBar'

const Chart = (props) => {

    // Find the maximum value from all months

    const dataPointValues = props.dataPoint.map((points) => points.value)

    const maximum = Math.max(... dataPointValues);          // max method read only stand alone numbers
    console.log(maximum)
    console.log(dataPointValues)

    return(
        <div className='chart'>
            {props.dataPoint.map((data) => (<ChartBar value = {data.value} label = {data.label} key = {data.label} maxvalue = {maximum}></ChartBar>))}
        </div>
    )

}

export default Chart