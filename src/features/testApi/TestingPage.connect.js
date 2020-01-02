import { connect } from 'react-redux';

import TestingPageContainer from './TestingPage';

// import { store } from "../../redux";

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export const TestingPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestingPageContainer);
