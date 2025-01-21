import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const backgroundCirclePlugin = {
  id: "backgroundCircle",
  beforeDraw: (chart: any) => {
    const { ctx, chartArea } = chart;
    const { width, height } = chartArea;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2;

    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "#f5f5f5";
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  },
};

export const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 7],
      backgroundColor: ["#FF8465", "#015B5B", "#FFBD05"],
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    r: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

export function Pie() {
  return (
    <div className="w-36 h-36  rotate-90">
      <PolarArea
        data={data}
        options={options}
        plugins={[backgroundCirclePlugin]}
      />
    </div>
  );
}
