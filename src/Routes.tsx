import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useUser } from 'doko';

import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { ForgottenPassword } from './screens/ForgottenPassword';
import { ResetPassword } from './screens/ResetPassword';

import { Home } from './screens/Home';

export function Routes() {
  const user = useUser();

  return (
    <div className="app">
      {user ? (
        <Switch>
          <Route path="/">
            <Home />
          </Route>

          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>

          <Route path="/sign-up">
            <SignUp />
          </Route>

          <Route path="/forgotten-password">
            <ForgottenPassword />
          </Route>

          <Route path="/reset-password">
            <ResetPassword />
          </Route>

          <Redirect to="/sign-in" />
        </Switch>
      )}
    </div>
  );
}
