import React, { useState } from 'react';

const MaintenanceRequestForm = ({ onSubmitRequest, onExpenseAdd }) => {
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = { id: Date.now(), description, cost: parseFloat(cost), status: 'Pending' };
    onSubmitRequest(request);
    onExpenseAdd({ ...request, expenseId: `EXP-${Date.now()}` });
    setDescription('');
    setCost('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Maintenance Request Form</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Maintenance description"
        required
      />
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Estimated cost"
        required
      />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default MaintenanceRequestForm;
