import React from 'react';
import { useUser } from 'doko';

export const Home: React.FC = () => {
  const { user } = useUser();

  return (
    <div>
      <h2>Welcome {user?.email}</h2>
    </div>
  );
};
