import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory, Link } from 'react-router-dom';
import { signup } from 'doko';

import { validateRequired, validateEmail } from '../utils/validations';

export function SignUp() {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={async (values: any, actions: any) => {
        actions.setSubmitting(true);
        try {
          await signup(values);
          history.push('/apps');
        } catch (err) {
          console.error('*', err);
          actions.setStatus({ error: err.response.data });
        }
        actions.setSubmitting(false);
      }}
    >
      {formikBag => {
        const { handleSubmit, isSubmitting, status, errors } = formikBag;

        return (
          <Form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>

            <label>
              <strong>Name</strong>
              <Field
                name="name"
                type="text"
                autoFocus
                validate={validateRequired('Name')}
              />
              <ErrorMessage name="name" component="div" />
            </label>

            <label>
              <strong>Email</strong>
              <Field name="email" type="email" validate={validateEmail(true)} />
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
            </label>

            <button disabled={isSubmitting} type="submit">
              Create an account
            </button>

            {status && status.error ? <p>{status.error}</p> : null}

            <p>
              Already have an account? <Link to="/sign-in">Sign in here.</Link>
            </p>
          </Form>
        );
      }}
    </Formik>
  );
}
