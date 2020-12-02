import React from 'react';
import { signout } from 'doko';
import styled from 'styled-components';

import TaskList from '../components/TaskList';

const Nav = styled('nav')`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 99;
`;

export const Home: React.FC = () => {
  return (
    <div>
      <Nav>
        <button onClick={signout}>Signout</button>
      </Nav>

      <TaskList />
    </div>
  );
};
