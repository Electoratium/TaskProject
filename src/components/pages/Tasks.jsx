import React from 'react';
import TaskList from '../../containers/TaskList';

export default function Tasks() {
  return (
    <div className="container list-container">
      <h6 className="border-bottom border-gray pb-2 mb-0">Recent tasks:</h6>
      <TaskList />
    </div>
  );
}
