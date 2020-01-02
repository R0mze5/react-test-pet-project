import React from 'react';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  surname: '',
  tel: '',
  email: '',
  sex: '',
  about: '',
  agreement: false,
};

const schema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(5, 'min 5 characters')
    .max(20, 'max 20 characters'),
  surname: Yup.string()
    .required()
    .min(5, 'min 5 characters')
    .max(20, 'max 20 characters'),
  tel: Yup.string()
    .min(10, 'must contains 10 characters')
    // .matches(/^(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/, {
    //   excludeEmptyString: true,
    //   message: 'must contains 10 numbers',
    // })
    .required('telephone number is required field'),
  email: Yup.string().email('incorrect email'),
  // sex: Yup.string().required('sex is required field'),
  about: Yup.string().max(10, 'max 10 characters'),
  agreement: Yup.boolean().oneOf([true], 'Must Accept Terms of Service'),
});

export const FormikYup = () => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      validateOnBlur={false}
      validateOnChange={true}
      onSubmit={values => console.log('values', values)}
      render={props => (
        <form>
          <Field
            label="Ваше имя"
            placeholder="Иван"
            name="name"
            value={props.values.name}
            onChange={(value: string) => props.setFieldValue('name', value)}
            onBlur={props.handleBlur}
            // error={props.touched.name && props.errors.name}
          />

          <Field
            label="Ваша фамилия"
            placeholder="Иванов"
            name="surname"
            value={props.values.surname}
            onChange={(value: string) => props.setFieldValue('surname', value)}
            onBlur={props.handleBlur}
            // error={props.touched.surname && props.errors.surname}
          />

          <Field
            // startAdornment="+7"
            label="Номер телефона"
            placeholder="XXXXXXXXXX"
            name="tel"
            value={props.values.tel}
            onChange={(value: string | number) => props.setFieldValue('tel', value)}
            onBlur={props.handleBlur}
            // error={props.touched.tel && props.errors.tel}
          />

          <Field
            label="Email"
            placeholder="simple@mail.com"
            name="email"
            value={props.values.email}
            onChange={(value: string) => props.setFieldValue('email', value)}
            onBlur={props.handleBlur}
            // error={props.touched.email && props.errors.email}
          />

          <textarea
            placeholder="Ваше хобби, любимые книги и т.д."
            name="about"
            value={props.values.about}
            onChange={value => props.setFieldValue('about', value)}
            onBlur={props.handleBlur}
          />

          <button type={'submit'} disabled={!props.isValid} onClick={() => props.handleSubmit()}>
            Отправить
          </button>
        </form>
      )}
    />
  );
};

export default FormikYup;
