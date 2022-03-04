import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';


function Budget(){
    const {budget, dispatch} = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setIsEditing(false);
    };

    return (
        // the alert here is a bootstrap class
        <div className='alert alert-secondary'>
            {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
            ): (
                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            )}
            {/* <span>Budget: ${budget}</span> */}

        </div>
    );
};

export default Budget;