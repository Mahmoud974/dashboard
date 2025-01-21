import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

export const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "",
      data: [65, 59, 80, 81, 56, 55],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: 0,
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { display: false },
      border: { display: false },
    },
    y: {
      grid: { display: false },
      ticks: { display: false },
      border: { display: false },
    },
  },
};

export function Courbe() {
  return (
    <div className="h-20 w-[11.6rem] flex-col  pl-16 -mt-8 flex  ">
      <Line data={data} options={options} />
      <p className="mx-auto flex justify-center -mt-2">Jan 24/25</p>
    </div>
  );
}
