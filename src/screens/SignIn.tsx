import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory, Link } from 'react-router-dom';
import { signin } from 'doko';

import { validateRequired, validateEmail } from '../utils/validations';

export function SignIn() {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values: any, actions: any) => {
        actions.setSubmitting(true);
        try {
          await signin(values);
          history.push('/apps');
        } catch (err) {
          console.error('*', err);
          actions.setStatus({ error: err.message });
          actions.setSubmitting(false);
        }
      }}
    >
      {formikBag => {
        const { handleSubmit, isSubmitting, status } = formikBag;

        return (
          <Form onSubmit={handleSubmit}>
            <h2>Sign In</h2>

            <label>
              <strong>Email</strong>
              <Field
                name="email"
                type="email"
                autoFocus
                validate={validateEmail(true)}
              />
              <ErrorMessage name="email" component="div" />
            </label>

            <label>
              <strong>Password</strong>
              <Field
                name="password"
                type="password"
                validate={validateRequired('Password')}
              />
              <ErrorMessage name="password" component="div" />
              <Link to="/forgotten-password">
                <p>Forgotten your password?</p>
              </Link>
            </label>

            <button disabled={isSubmitting} type="submit">
              Sign in
            </button>

            {status && status.error ? <p>{status.error}</p> : null}

            <p>
              Don't have an account? <Link to="/sign-up">Sign up here.</Link>
            </p>
          </Form>
        );
      }}
    </Formik>
  );
}
