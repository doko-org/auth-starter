import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useCreate } from 'doko';

export function ExampleForm() {
  const { create } = useCreate('example');

  return (
    <Formik
      initialValues={{
        name: '',
        amount: 0,
        done: false,
      }}
      onSubmit={async (values: any, actions: any) => {
        actions.setSubmitting(true);
        try {
          const res = await create(values);
          console.log(res);
          actions.resetForm();
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
            <Field type="text" name="name" placeholder="Name" />
            <Field type="number" name="amount" placeholder="Amount" />

            <label>
              <Field type="checkbox" name="done" />
              Done
            </label>

            <button disabled={isSubmitting} type="submit">
              Create
            </button>

            {status && status.error ? <p>{status.error}</p> : null}
          </Form>
        );
      }}
    </Formik>
  );
}
