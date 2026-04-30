import ExpenseForm from "../components/ExpenseForm";

export default function AddExpense() {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Add Expense</h2>
      <ExpenseForm />
    </div>
  );
}