import React, { useState } from 'react';
// TODO import useUpdate, useRemove
import styled from 'styled-components';
import { XIcon } from '@primer/octicons-react';

import { Task } from '../types';
import { Checkbox } from './Checkbox';

interface Props {
  task: Task;
}

const Wrapper = styled('div')`
  display: flex;
  position: relative;
  padding: 14px 14px;
  border-radius: 4px;
  background: #111111;
  transition: background 0.3s;
  margin-bottom: 10px;
`;

const TaskName = styled('span')`
  font-size: 18px;
  font-weight: bold;
  user-select: none;
`;

const NameInput = styled('input')`
  font-size: 18px;
  font-weight: bold;
  outline: none;
  border: none;
  background: transparent;
  padding: 0px;
  margin: 0px;
  color: #ffffff;
`;

const Remove = styled('div')`
  position: absolute;
  top: 50%;
  right: 0px;
  padding: 10px;
  transform: translate(0, -50%);
  cursor: pointer;
`;

const TaskItem: React.FC<Props> = ({ task }) => {
  // TODO setup doko useUpdate hook
  // TODO setup doko useRemove hook

  // manage in component name editing
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>(task.name || '');

  async function updateTask(values: Task) {
    // TODO update task on doko
    console.log('update task', task.id);
  }

  async function removeTask() {
    // TODO remove task on doko
    console.log('delete task', task.id);
  }

  async function saveTask(values: Partial<Task>) {
    await updateTask({ ...task, ...values });
    setIsEditing(false);
  }

  return (
    <Wrapper onDoubleClick={() => setIsEditing(true)} className="task">
      <Checkbox
        checked={task.completed}
        handleChange={() => updateTask({ ...task, completed: !task.completed })}
      />

      {isEditing ? (
        <NameInput
          value={name}
          placeholder="Task name"
          autoFocus
          onKeyDown={async (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Escape') {
              setName(task.name || '');
              setIsEditing(false);
            }
            if (e.key === 'Enter') {
              await saveTask({ name });
              setIsEditing(false);
            }
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          onBlur={() => saveTask({ name })}
        />
      ) : (
        <TaskName>{task.name}</TaskName>
      )}

      <Remove onClick={removeTask}>
        <XIcon size={18} />
      </Remove>
    </Wrapper>
  );
};

export default TaskItem;
