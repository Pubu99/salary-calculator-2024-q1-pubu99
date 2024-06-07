import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
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
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default TasksByPriorityChart;
