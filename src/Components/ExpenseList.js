import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  // const expenses = [
  //   { id: 12, name: "shopping", cost: 50 },
  //   { id: 13, name: "holiday", cost: 450 },
  //   { id: 14, name: "car service", cost: 30 },
  // ];

  const {expenses} = useContext(AppContext);

  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) => 
    filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  return (
    <>
    <input 
    type='text'
    className='form control mb-2 mr-sm-2'
    placeholder='Type to search...'
    onChange={handleChange}
    />
    <ul className="list-group">
      {filteredExpenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
    </>
  );
};

export default ExpenseList;
