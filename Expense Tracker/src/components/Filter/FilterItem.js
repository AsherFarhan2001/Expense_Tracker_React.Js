import ExpenseDate from '../Expenses/ExpenseDate';
import './FilterItem.css';

const FilterItem = (props) => {

    const DateHandler = (event) => {
        props.onChangeFilterYear(event.target.value);
    }
    return(
        <div className='filter-expense'>
            <label>Filter by Year</label>
            <div className='filter-options'>
                <select  className='select-options' value={props.selected} onChange={DateHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="All">All</option>
                </select>
            </div>
        </div>
    )
}

export default FilterItem;