import { connect } from 'react-redux';

import { reduxSagaActions, reduxSagaSelectors } from '@shared/reduxSaga';

import ReduxSagaContainer from './ReduxSaga';

const mapStateToProps = state => ({
  content: reduxSagaSelectors.getContent(state),
  isLoading: reduxSagaSelectors.getLoadingStatus(state),
});

const mapDispatchToProps = {
  getXkcdImageRequest: reduxSagaActions.getXkcdImageRequest,
};

export const ReduxSaga = connect(mapStateToProps, mapDispatchToProps)(ReduxSagaContainer);
