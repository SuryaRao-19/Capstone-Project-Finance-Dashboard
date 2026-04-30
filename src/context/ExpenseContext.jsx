import { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...expense, id: Date.now() }] );
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((e) => e.id !== id));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};