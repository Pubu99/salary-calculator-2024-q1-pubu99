import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TasksByPriorityChart.css';

const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

const TasksByPriorityChart = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const data = [
    { name: 'Low', value: tasks.filter((task) => task.priority === 'LOW').length },
    { name: 'Medium', value: tasks.filter((task) => task.priority === 'MEDIUM').length },
    { name: 'High', value: tasks.filter((task) => task.priority === 'HIGH').length },
  ];

  return (
    <div className="tasks-by-priority-chart">
      <h2>Task Priorities</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TasksByPriorityChart;
