import React from 'react';
import { FaUser } from 'react-icons/fa';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const activities = [
    { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: 'Sep 16, 2022 at 11:30 AM' },
    { id: 2, text: 'Maecenas pretium neque nec ipsum gravida.', time: 'Sep 16, 2022 at 11:45 AM' },
  ];

  return (
    <div className="activity-feed">
      <h3 className="activity-title">Activity Feed</h3>
      {activities.map((activity) => (
        <div key={activity.id} className="activity-item">
          <FaUser className="user-icon" />
          <div className="activity-content">
            <p>{activity.text}</p>
            <span>{activity.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
