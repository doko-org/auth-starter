import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { resetPasswordRequest } from 'doko';

import { validateEmail } from '../utils/validations';

export function ForgottenPassword() {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={async (values: any, actions: any) => {
        actions.setSubmitting(true);
        try {
          await resetPasswordRequest(values);
          actions.setStatus({
            success: 'Check your email for your password reset',
            error: null,
          });
        } catch (err) {
          console.error(err);
          actions.setStatus({ error: err.response.data });
        }
        actions.setSubmitting(false);
      }}
    >
      {formikBag => {
        const { handleSubmit, isSubmitting, status } = formikBag;

        return (
          <Form onSubmit={handleSubmit}>
            <h2>Forgotten your password?</h2>

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

            <button disabled={isSubmitting} type="submit">
              Request password reset email
            </button>

            {status && status.success ? <p>{status.success}</p> : null}

            {status && status.error ? <p>{status.error}</p> : null}

            <p>
              Remembered your password? <Link to="/sign-in">Sign in here.</Link>
            </p>
          </Form>
        );
      }}
    </Formik>
  );
}
