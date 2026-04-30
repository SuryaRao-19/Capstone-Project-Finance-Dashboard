import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export default function ExpenseForm() {
  const { addExpense } = useContext(ExpenseContext);

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Food",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.amount) {
      setError("Please fill all fields");
      return;
    }

    addExpense({
      ...form,
      amount: Number(form.amount),
    });

    setForm({ title: "", amount: "", category: "Food" });
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto card p-6 mt-6">

      <h2 className="text-xl font-semibold mb-4">➕ Add Expense</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Expense Title"
          value={form.title}
          onChange={(e)=>setForm({...form,title:e.target.value})}
        />

        <input
          type="number"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Amount"
          value={form.amount}
          onChange={(e)=>setForm({...form,amount:e.target.value})}
        />

        <select
          className="w-full border p-3 rounded-lg"
          value={form.category}
          onChange={(e)=>setForm({...form,category:e.target.value})}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
        </select>

        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-full py-3 rounded-lg hover:scale-105 transition">
          Add Expense
        </button>

      </form>
    </div>
  );
}