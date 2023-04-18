import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const filterHandler = (filter) =>{
        console.log('Filter Change in ExpensesFilter.js',filter)
        props.onFilterChange(filter)
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={e =>filterHandler(e.target.value)}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;