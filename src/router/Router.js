import React from 'react';

import { Route, Link, Switch, Redirect } from 'react-router-dom';

import {
  Lifecycle,
  RenderProps,
  HOCs,
  ContextAPI,
  PersistEvent,
  ForwardedRef,
} from '@features/reactApi';

import { PrivateRoute, NestedRouter } from '@features/routerApi';

import { BasicRedux, Middlewares, ReduxSaga, ReduxThunk } from '@features/reduxApi';

import { TestingPage } from '@features/testApi';

import { ReduxForm, Formik, FormikYup, ReactFinalForm } from '@features/forms';

import { Container, Area } from './Router.styled';

export const Router = () => {
  return (
    <div>
      <Container>
        <Link to={'/'}>Home</Link>
        <Link to={'/lifecycle'}>Lifecycle</Link>
        <Link to={'/renderprops'}>RenderProps</Link>
        <Link to={'/hocs'}>HOCs</Link>
        <Link to={'/contextapi'}>ContextAPI</Link>
        <Link to={'/persistevent'}>PersistEvent</Link>
        <Link to={'/nestedrouter'}>NestedRouter</Link>
        <Link to={'/privaterouter'}>PrivateRoute</Link>
        <Link to={'/forwardedref'}>ForwardedRef</Link>
        <Link to={'/basicredux'}>BasicRedux</Link>
        <Link to={'/middlewares'}>Middlewares</Link>
        <Link to={'/reduxsaga'}>ReduxSaga</Link>
        <Link to={'/reduxthunk'}>ReduxThunk</Link>
        <Link to={'/test'}>TestingPage</Link>
        <Link to={'/forms/redux-form/'}>ReduxForm</Link>
        <Link to={'/forms/formik/'}>Formik</Link>
        <Link to={'/forms/ReactFinalForm/'}>ReactFinalForm</Link>
        <Link to={'/forms/FormikYup/'}>FormikYup</Link>
      </Container>
      <hr />
      <Area>
        <Switch>
          <Route
            exact
            path={'/lifecycle'}
            render={props => {
              return <Lifecycle {...props} creditCard={1234567890123456} />;
            }}
          />
          <Route component={RenderProps} path={'/renderprops/:id'} />
          <Route
            component={HOCs}
            exact
            path={'/hocs*'} /* при сивмволе * идет поиск по совпадению начала строки */
          />
          <Route component={ContextAPI} exact path={'/contextapi'} />
          <Route component={PersistEvent} exact path={'/persistevent'} />
          <Route component={NestedRouter} path={'/nestedrouter'} />
          <Route component={PrivateRoute} path={'/privaterouter'} />
          <Route component={ForwardedRef} path={'/forwardedref'} />
          <Route component={BasicRedux} path={'/basicredux'} />
          <Route component={Middlewares} path={'/middlewares'} />
          <Route component={ReduxSaga} path={'/reduxsaga'} />
          <Route component={ReduxThunk} path={'/reduxthunk'} />
          <Route component={TestingPage} path={'/test'} />

          <Route component={ReduxForm} path={'/forms/redux-form/'} />
          <Route component={Formik} path={'/forms/formik/'} />
          <Route component={ReactFinalForm} path={'/forms/ReactFinalForm/'} />
          <Route component={FormikYup} path={'/forms/FormikYup/'} />
          <Redirect from={'/persistevent(d+)'} to={'/nestedrouter'} />
          <Redirect from={'*'} to={'/'} />
        </Switch>
      </Area>
    </div>
  );
};

export default Router;
