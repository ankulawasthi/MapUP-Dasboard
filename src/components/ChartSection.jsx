import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const ChartSection = ({ data, title }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.label,
        data: data.values,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h3 className="text-gray-600 font-semibold mb-2">{title}</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default ChartSection;
