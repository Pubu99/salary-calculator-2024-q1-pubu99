import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const activities = [
    { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: 'Sep 16, 2022 at 11:30 AM' },
    { id: 2, text: 'Maecenas pretium neque nec ipsum gravida.', time: 'Sep 16, 2022 at 11:45 AM' },
  ];

  return (
    <div className="activity-feed">
      <h2>Activity Feed</h2>
      {activities.map((activity) => (
        <div key={activity.id} className="activity-item">
          <p>{activity.text}</p>
          <span>{activity.time}</span>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
