// Dashboard.js
import React from 'react';
import TaskList from '../tasks/TaskList';
import ActivityFeed from '../activityFeed/ActivityFeed';
import TasksByPriorityChart from '../tasks/TasksByPriorityChart';
import Sidebar from '../../components/Sidebar';
import UpperBar from '../../components/UpperBar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
      <div className="dashboard-content">
        <UpperBar />
        
          <div className="welcome-message">
            <h2>Welcome back, John Doe</h2>
            <p>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
            <a href="/">Look here for more information</a>
          </div>
          <div className="main-content">
            <div className='task-cont'>
            <TaskList />
            </div>
            
            <div className="side-content">
              <ActivityFeed />
              <TasksByPriorityChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
