import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function ExpenseTotal(){

    const {expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total,item) => {
        return (total += item.cost);
    },0);


    return (
        // the alert here is a bootstrap class
        <div className='alert alert-primary'>
            <span>Spent so far: ${totalExpenses}</span>

        </div>
    );
};

export default ExpenseTotal;