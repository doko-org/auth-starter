import React, { useState, useEffect } from 'react';
// TODO import doko useCreate hook
import styled from 'styled-components';

import { Task } from '../types';

const Wrapper = styled('label')`
  background: #1d1d1d;
  border-radius: 4px;
  margin-top: 15px;
  margin-bottom: 15px;
  position: relative;
  height: 50px;
  cursor: text;

  input {
    background: transparent;
    padding: 14px 18px;
    outline: none;
    border: none;
    color: #ffffff;
    height: 50px;
    font-weight: bold;
    font-size: 18px;
  }

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 40px;
    padding: 0px 20px;
    border: none;
    background: #0075fc;
    color: #ffffff;
    font-weight: bold;
    border-radius: 2px;
    cursor: pointer;
    font-size: 14px;
  }
`;

const TaskCreate: React.FC = () => {
  // TODO setup doko useCreate hook

  const [values, setValues] = useState<Partial<Task>>({
    name: '',
    completed: false,
  });

  async function createTask() {
    // quick and dirty validation check
    if (!values.name || !values.name.length) return;

    // TODO create task on doko
    console.log(values);

    // reset form
    setValues({
      ...values,
      name: '',
    });
  }

  return (
    <Wrapper>
      <input
        placeholder="Add task"
        value={values.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValues({ ...values, name: e.target.value })
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          // capture Enter key presses and create task
          if (e.key === 'Enter') {
            createTask();
          }
        }}
      />
      <button onClick={createTask}>Create</button>
    </Wrapper>
  );
};

export default TaskCreate;
