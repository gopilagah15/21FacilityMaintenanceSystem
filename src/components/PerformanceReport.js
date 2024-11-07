import React from 'react';

const PerformanceReport = ({ completedRequests }) => {
  const totalCompleted = completedRequests.length;
  const avgCost = totalCompleted
    ? (completedRequests.reduce((sum, request) => sum + request.cost, 0) / totalCompleted).toFixed(2)
    : 0;

  return (
    <div>
      <h2>Performance Report</h2>
      <ul>
        {completedRequests.map((request) => (
          <li key={request.id}>
            {request.description} - Completed, Cost: ${request.cost.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total Completed Requests: {totalCompleted}</p>
      <p>Average Cost per Request: ${avgCost}</p>
    </div>
  );
};

export default PerformanceReport;
