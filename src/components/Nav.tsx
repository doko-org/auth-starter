import React from 'react';
import { useUser, signout } from 'doko';
import { Link } from 'react-router-dom';

export const Nav: React.FC = () => {
  const { user } = useUser();

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/settings">Settings</Link>

      <span>{user?.email}</span>
      <button onClick={signout}>Signout</button>
    </div>
  );
};
