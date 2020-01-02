import React from 'react';
import { Field } from 'redux-form';

interface ReduxFormProps {
  handleSubmit: any;
  pristine: any;
  reset: any;
  submitting: any;
}

export const ReduxForm: React.SFC<ReduxFormProps> = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  console.log(props);

  return (
    <form onSubmit={handleSubmit}>
      {' '}
      <div>
        <label htmlFor="">First name</label>
        <div>
          <Field
            name={'user.fistName'}
            component={'input'}
            type={'text'}
            plaseholder={'First name'}
            // validate={(value: string) => (value && value.length < 10 ? 'error' : null)}
          ></Field>
        </div>
      </div>
      <div>
        <label htmlFor="">Last Name</label>
        <div>
          <Field
            name={'user.lastName'}
            component={'input'}
            type={'text'}
            plaseholder={'Last Name'}
          ></Field>
        </div>
      </div>
      <div>
        <label htmlFor="">Email</label>
        <div>
          <Field
            name={'user.email'}
            component={'input'}
            type={'text'}
            plaseholder={'Email'}
          ></Field>
        </div>
      </div>
      <div>
        <div>
          <label>
            <Field name={'sex'} component={'input'} type={'radio'} value={'male'}></Field>Male
          </label>
        </div>
        <div>
          <label>
            <Field name={'sex'} component={'input'} type={'radio'} value={'female'}></Field>Feemale
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name={'favoriteColor'} component={'select'}>
            <option value=""></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name={'employed'} id={'employed'} component={'input'} type={'checkbox'}></Field>
        </div>
      </div>
      <div>
        <label htmlFor=""></label>
        <div>
          <Field name={'notes'} component={'textarea'}></Field>
        </div>
      </div>
      <div>
        <button type={'submit'} disabled={pristine || submitting}>
          Submit
        </button>
        <button type={'button'} disabled={pristine || submitting} onClick={reset}>
          Clear values
        </button>
      </div>
    </form>
  );
};

export default ReduxForm;
