import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, markAsDone } from '../../redux/slices/tasksSlice';
import ReactPaginate from 'react-paginate';
import { FaBell } from 'react-icons/fa';
import './TaskList.css';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const taskStatus = useSelector((state) => state.tasks.status);
  const [currentPage, setCurrentPage] = useState(0);
  const tasksPerPage = 8;

  useEffect(() => {
    if (taskStatus === 'idle') {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleMarkAsDone = (id) => {
    dispatch(markAsDone(id));
  };

  // Logic for displaying current tasks
  const offset = currentPage * tasksPerPage;
  const currentTasks = tasks.slice(offset, offset + tasksPerPage);
  const pageCount = Math.ceil(tasks.length / tasksPerPage);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  return (
    <>
      <h3 className='tasks'>Tasks</h3>
      <div className="task-list">
        {currentTasks.map((task) => (
          <div key={task.id} className={`task-item priority-${task.priority.toLowerCase()}`}>
            <div className="task-content">
              <div className="left-content">
                <FaBell className={`bell-icon ${task.priority.toLowerCase()}`} />
                <div>
                  <h4>{task.todo}</h4>
                  <p className='task-name'>{task.name}</p>
                </div>
              </div>
              <div className="right-content">
                {task.completed ? (
                  <p className="status done">Done</p>
                ) : (
                  <p className="status in-progress">In Progress</p>
                )}
                <p className="date">{formatDate(task.createdAt)}</p>
              </div>
            </div>
            {!task.completed && (
              <p className='mark' onClick={() => handleMarkAsDone(task.id)}>Mark as done</p>
            )}
          </div>
        ))}
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>
    </>
  );
};

export default TaskList;
