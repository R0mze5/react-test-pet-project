import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import ReduxFormContainer from './ReduxForm';

const enchanced = compose(reduxForm({ form: 'reduxForm', onSubmit: value => console.log(value) }));

export const ReduxForm = enchanced(ReduxFormContainer);
export default ReduxForm;
