import React, { useState } from 'react';

const RoutineCheckScheduler = ({ alerts, addAlert }) => {
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');

  const handleAlertSubmit = (e) => {
    e.preventDefault();
    addAlert({ id: Date.now(), message, date });
    setMessage('');
    setDate('');
  };

  return (
    <div>
      <h2>Routine Check Scheduler</h2>
      <form onSubmit={handleAlertSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Routine check message"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Alert</button>
      </form>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id}>{alert.message} - Scheduled for {alert.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoutineCheckScheduler;
