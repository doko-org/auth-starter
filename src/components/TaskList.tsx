import React from 'react';
// TODO import doko useFindMany hook

import { Task } from '../types';
import Loading from '../components/Loading';
import TaskItem from '../components/TaskItem';
import Progress from '../components/Progress';
import TaskCreate from '../components/TaskCreate';

const TaskList: React.FC = () => {
  // TODO replace with useFindMany hook to get real data
  const loading = false;
  const tasks = [
    {
      id: '1',
      name: 'Task 1',
      completed: false,
      user: { id: '', email: '', name: '' },
      lastUpdated: '',
      createdAt: '',
    },
    {
      id: '2',
      name: 'Task 2',
      completed: true,
      user: { id: '', email: '', name: '' },
      lastUpdated: '',
      createdAt: '',
    },
    {
      id: '3',
      name: 'Task 3',
      completed: false,
      user: { id: '', email: '', name: '' },
      lastUpdated: '',
      createdAt: '',
    },
  ];

  return (
    <div>
      <Progress
        total={tasks.length}
        completed={tasks.filter(t => t.completed).length}
      />

      <TaskCreate />

      {tasks.map(task => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
