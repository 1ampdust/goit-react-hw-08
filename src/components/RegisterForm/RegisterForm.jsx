import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.formGroup}>
          <label htmlFor="name" className={css.label}>
            Username
          </label>
          <Field type="text" id="name" name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="email" className={css.label}>
            Email
          </label>
          <Field type="email" id="email" name="email" className={css.input} />
          <ErrorMessage name="email" component="div" className={css.error} />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="password" className={css.label}>
            Password
          </label>
          <Field type="password" id="password" name="password" className={css.input} />
          <ErrorMessage name="password" component="div" className={css.error} />
        </div>
        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};
