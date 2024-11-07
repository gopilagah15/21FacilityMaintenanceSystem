import React, { useState } from 'react';
import MaintenanceRequestForm from './components/MaintenanceRequestForm';
import RoutineCheckScheduler from './components/RoutineCheckScheduler';
import ExpenseReport from './components/ExpenseReport';
import PerformanceReport from './components/PerformanceReport';

const App = () => {
  const [requests, setRequests] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [completedRequests, setCompletedRequests] = useState([]);

  const addRequest = (request) => setRequests([...requests, request]);
  const addAlert = (alert) => setAlerts([...alerts, alert]);
  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const markAsCompleted = (request) => setCompletedRequests([...completedRequests, request]);

  return (
    <div>
      <h1>Facility Maintenance System</h1>
      <MaintenanceRequestForm onSubmitRequest={addRequest} onExpenseAdd={addExpense} />
      <RoutineCheckScheduler alerts={alerts} addAlert={addAlert} />
      <ExpenseReport expenses={expenses} />
      <PerformanceReport completedRequests={completedRequests} />
    </div>
  );
};

export default App;
