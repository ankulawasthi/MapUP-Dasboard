import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register the chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ data }) => {
    // Extract the regions and their counts from the data
    const regions = [...new Set(data.map((item) => item.region))];
    const regionCounts = regions.map((region) => 
      data.filter((item) => item.region === region).length
    );
  
    // Prepare chart data structure
    const chartData = {
      labels: regions,
      datasets: [
        {
          label: "Number of Vehicles by Region",
          data: regionCounts,
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Bar color
          borderColor: "rgba(75, 192, 192, 1)", // Bar border color
          borderWidth: 1,
        },
      ],
    };
  
    return (
      <div className="chart-container">
        <h2>Vehicles by Region</h2>
        <Bar data={chartData} />
      </div>
    );
  };
  
  export default Chart;
  