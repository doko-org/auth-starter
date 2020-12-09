import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { useUser, updateUser, User } from 'doko';

interface Values {
  email: string;
  password: string;
  name: string;
}

const ProfileUpdate: React.FC<{ user: User }> = ({ user }) => {
  return (
    <Formik
      initialValues={{
        email: String(user.email),
        name: String(user.name),
        password: '',
      }}
      onSubmit={(
        values: Values,
        { setSubmitting, setStatus }: FormikHelpers<Values>
      ) => {
        setSubmitting(true);
        try {
          console.log(JSON.stringify(values, null, 2));
          updateUser(values);
        } catch (err) {
          console.error(err);
          setStatus({
            error: err,
          });
        }
        setSubmitting(false);
      }}
    >
      {({ values, handleSubmit, handleChange, status, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <h3>Settings</h3>

          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            disabled
            onChange={handleChange}
            value={values.email}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
          />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>

          {status && status.error ? <span>{status.error}</span> : null}
        </form>
      )}
    </Formik>
  );
};

export const Settings: React.FC = () => {
  const { loading, user } = useUser();

  if (loading || !user) return <span>loading...</span>;

  return <ProfileUpdate user={user} />;
};
