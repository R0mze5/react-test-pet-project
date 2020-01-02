import { connect } from 'react-redux';

import { middlewaresActions, middlewaresSelectors } from '@shared/middlewares';

import MiddlewaresContainer from './Middlewares';

const mapStateToProps = state => ({
  isLoading: middlewaresSelectors.getIsLoading(state),
  error: middlewaresSelectors.getError(state),
  series: middlewaresSelectors.getSeries(state),
});

const mapDispatchToProps = { getSeriesRequest: middlewaresActions.getSeriesRequest };

export const Middlewares = connect(mapStateToProps, mapDispatchToProps)(MiddlewaresContainer);
