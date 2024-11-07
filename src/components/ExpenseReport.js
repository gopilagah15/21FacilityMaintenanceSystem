import React from 'react';

const ExpenseReport = ({ expenses }) => {
  const totalCost = expenses.reduce((sum, expense) => sum + expense.cost, 0);

  return (
    <div>
      <h2>Expense Report</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.expenseId}>
            {expense.description} - Cost: ${expense.cost.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total Expenses: ${totalCost.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseReport;
