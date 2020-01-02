import { connect } from 'react-redux';

import { classicReduxActions } from '@shared/classicRedux';

import BasicReduxContainer from './BasicRedux';

const mapStateToProps = state => ({
  counter: state.classicRedux.classicCounter,
});

const mapDispatchToProps = {
  increase: classicReduxActions.increaseCounter,
};

// const mapDispatchToProps = dispatch => ({
//   increase: value => dispatch(classicReduxActions.increaseCounter(value)),
// });

export const BasicRedux = connect(mapStateToProps, mapDispatchToProps)(BasicReduxContainer);
