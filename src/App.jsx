import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddExpense />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}