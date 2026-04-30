import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">
        💰 Expense Tracker
      </h1>

      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/add" className="hover:underline">Add</Link>
      </div>
    </nav>
  );
}