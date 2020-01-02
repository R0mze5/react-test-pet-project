import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';

type FieldRenderProps = any;

const formValidation = (values: {
  user: { firstName: string; lastName: string };
  email: string;
}) => {
  const errors: object = {};
  const user = {
    firstName: '',
    lastName: '',
  };

  if (!values.user) {
    user.firstName = 'Required';
    user.lastName = 'Required';
  } else if (!values.user.firstName) {
    user.firstName = 'Required';
  } else if (!values.user.lastName) {
    user.lastName = 'Required';
  }

  // если возвращаем {}, то валидация асихронная, если Promice, то наоборот
  if (Object.keys(user).length > 0) {
    Object.defineProperty(errors, 'user', { value: user, writable: false });
    // errors.user = user;
    return errors;
  } else {
    return new Promise(resolve => {
      setTimeout(() => {
        if (!values.email) {
          resolve({ email: 'required' });
        } else {
          resolve({});
        }
      }, 3000);
    });
  }
};

const Input: React.FunctionComponent<FieldRenderProps> = ({ input, meta, label }) => (
  <Fragment>
    <p>{label}</p>
    <input {...input} />
    {meta.error && meta.visited && !meta.active && <pre style={{ color: 'red' }}>{meta.error}</pre>}
  </Fragment>
);

interface ReactFinalFormProps {
  handleSubmit: any;
  pristine: any;
  reset: any;
  submitting: any;
}
interface ReactFinalFormState {
  initialValues: any;
}

interface formValuesType {
  user: object;
  readonly id: string; // неизменяемый
  color?: string; // необязательный
}

export class ReactFinalForm extends React.PureComponent<ReactFinalFormProps, ReactFinalFormState> {
  _formValues: formValuesType;

  constructor(props: any) {
    super(props);

    let formValues: object;

    try {
      const storageValues: any = localStorage.getItem('form');
      formValues = JSON.parse(storageValues) || {};
    } catch (e) {
      formValues = {};
    }

    this._formValues = {
      user: {},
      id: 'asd',
    };

    this.state = {
      initialValues: formValues,
    };
  }

  handleSubmit = (values: any) => {
    console.log('handleSubmit');
    console.log(values);
  };

  saveFormValues = (form: any): void => {
    // Object.defineProperty(, 'user', form.values.user);
    this._formValues.user = form.values.user;
    // console.log(form)
  };

  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('form', JSON.stringify(this._formValues));
    });
  }

  render() {
    const { initialValues } = this.state;

    console.log(initialValues);

    return (
      <Form
        debug={this.saveFormValues} // брать промежуточные значения их самой формы
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validate={formValidation}
        render={({ handleSubmit, validating }) => (
          <form onSubmit={handleSubmit}>
            {validating && <p>async validating</p>}
            <Field
              name={'user.fistName'}
              component={Input}
              label={'First name'}
              // validate={(value: string) => (value && value.length < 10 ? 'error' : null)}
            ></Field>
            <br />

            <Field name={'user.lastName'} component={Input} label={'Last Name'}></Field>
            <br />

            <Field name={'user.email'} component={Input} label={'Email'}></Field>
            <br />

            <Field
              name={'user.cardNumber'}
              component={Input}
              label={'Credit Card'}
              format={value => (value ? value.replace(/(\d{4})/g, '$1 ').trim() : '')}
              parse={valueStr => valueStr.replace(/(\s+)/g, '').slice(0, 16)}
              validate={value => (value && value.length < 10 ? 'Error' : '')}
            ></Field>

            <button type={'submit'}>Submit</button>
          </form>
        )}
      ></Form>
    );
  }
}

export default ReactFinalForm;
