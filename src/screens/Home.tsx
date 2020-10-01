import React from 'react';
import { useUser, signout } from 'doko';

export const Home: React.FC = () => {
  const user = useUser();

  return (
    <div>
      <h2>Welcome {user.email}</h2>
      <button onClick={signout}>Signout</button>
    </div>
  );
};
