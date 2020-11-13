import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLocation, useHistory } from 'react-router-dom';
import { resetPassword } from 'doko';

import { validateRequired } from '../utils/validations';

export function ResetPassword() {
  const location = useLocation();
  const history = useHistory();

  const urlParams = new URLSearchParams(location.search);

  return (
    <Formik
      initialValues={{
        token: urlParams.get('token'),
        password: '',
      }}
      onSubmit={async (values: any, actions: any) => {
        actions.setSubmitting(true);
        try {
          await resetPassword(values);
          history.push('/');
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
            <h2>Reset Password</h2>

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
              Set new password
            </button>

            {status && status.error ? <p>{status.error}</p> : null}
          </Form>
        );
      }}
    </Formik>
  );
}
