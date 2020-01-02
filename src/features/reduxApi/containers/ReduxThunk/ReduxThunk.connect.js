import { connect } from 'react-redux';

import { forThunk } from '@shared/reduxThunk';

import ReduxThunkContainer from './ReduxThunk';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  forThunk,
};

export const ReduxThunk = connect(mapStateToProps, mapDispatchToProps)(ReduxThunkContainer);
