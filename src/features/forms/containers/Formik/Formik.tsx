import React from 'react';

import { withFormik, Field } from 'formik';

type RenderProps = any;

const InnerForm: React.FunctionComponent<RenderProps> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field type="email" name="email"></Field>

      {touched.email && errors.email && <div>{errors.email}</div>}
      <input
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {touched.password && errors.password && <div>{errors.password}</div>}
      <button type={'submit'} disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

interface TErrors {
  email?: string;
}

export const Formik = withFormik({
  mapPropsToValues: (props: any) => ({ email: '', password: '' }),
  validate: (values: any, props: any) => {
    const errors: TErrors = {};
    if (!values.email) {
      errors.email = 'Required';
    }

    return errors;
  },
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    console.log(props);
  },
})(InnerForm);

export default Formik;
