import React from "react";

const MetricsCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md text-center">
      <h3 className="text-gray-600 font-semibold">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default MetricsCard;
