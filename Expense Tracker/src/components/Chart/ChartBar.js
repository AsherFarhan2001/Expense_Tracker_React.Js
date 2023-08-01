import React, {useState} from "react";
import './ChartBar.css';

const ChartBar = (props) => {

    let barFillHeight = '0%';
    console.log(props.maxvalue)
    console.log(props.label)
    if(props.maxvalue > 0)          // to check if year has any expense or not
    {
        barFillHeight = Math.round((props.value / props.maxvalue) * 100) + '%';
    }
    console.log(barFillHeight)

    return(
        <div className="chart-bar">
            <div className="chart-bar-inner">
                <div className="chart-bar-fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar-label">{props.label}</div>
        </div>

    )
}

export default ChartBar