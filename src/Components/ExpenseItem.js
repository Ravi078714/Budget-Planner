import React, { useContext } from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";

function ExpenseItem(props) {

    const {dispatch} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <li className="alert alert-primary list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            
            <div className="row ">
                <span className="  col-sm text-primary ">
                    ${props.cost}
                </span>
                <TiDelete size='1.5em' className="col-auto" onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem;