import React, { useState, useEffect } from "react";
import { parseCSV } from "../utils/parseCSV"; // Update the path based on your file structure
import Chart from "../components/Chart"; // Import the Chart component

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Parse the CSV and set the data
    parseCSV((parsedData) => {
      setData(parsedData); // Store the parsed data in state
    });
  }, []);

  return (
    <div className="dashboard">
      <h1>Electric Vehicle Dashboard</h1>
      <div className="chart-container">
        <Chart data={data} /> {/* Pass the data to Chart component */}
      </div>
    </div>
  );
};

export default Dashboard;
