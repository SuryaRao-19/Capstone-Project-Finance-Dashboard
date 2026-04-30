import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return <p className="text-center mt-5">No data yet</p>;
  }

  const dataMap = {};
  expenses.forEach(e => {
    dataMap[e.category] = (dataMap[e.category] || 0) + e.amount;
  });

  const data = {
    labels: Object.keys(dataMap),
    datasets: [{
      data: Object.values(dataMap),
      backgroundColor: ["#3b82f6","#10b981","#f59e0b","#ef4444"]
    }]
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 mt-5 rounded shadow">
      <Pie data={data} />
    </div>
  );
}