import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import Chart from "../components/Chart";
import ExpenseList from "../components/ExpenseList";

export default function Dashboard() {
  const { expenses } = useContext(ExpenseContext);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="p-6 space-y-6">

      <h2 className="text-2xl font-bold">📊 Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 gap-4">

        <div className="card p-5">
          <p>Total Expenses</p>
          <h3 className="text-2xl font-bold text-blue-600">₹{total}</h3>
        </div>

        <div className="card p-5">
          <p>Total Entries</p>
          <h3 className="text-2xl font-bold text-indigo-600">{expenses.length}</h3>
        </div>

      </div>

      <Chart expenses={expenses} />
      <ExpenseList />

    </div>
  );
}