import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useUser } from 'doko';

import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { ForgottenPassword } from './screens/ForgottenPassword';
import { ResetPassword } from './screens/ResetPassword';

import { Home } from './screens/Home';
import { Settings } from './screens/Settings';

import { Nav } from './components/Nav';

export function Routes() {
  const { user } = useUser();

  return (
    <div className="app">
      {user ? (
        <>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/settings">
              <Settings />
            </Route>

            <Redirect to="/" />
          </Switch>
        </>
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
