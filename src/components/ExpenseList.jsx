import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export default function ExpenseList() {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  if (expenses.length === 0) {
    return <p className="text-center mt-5">No expenses yet</p>;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-3 mt-5">

      {expenses.map((e) => (
        <div key={e.id} className="card p-4 flex justify-between items-center">

          <div>
            <h3 className="font-semibold">{e.title}</h3>
            <p className="text-sm text-gray-500">{e.category}</p>
          </div>

          <div className="text-right">
            <p className="font-bold text-blue-600">₹{e.amount}</p>
            <button
              onClick={() => deleteExpense(e.id)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </div>

        </div>
      ))}

    </div>
  );
}