import React from 'react';

import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import {
  Lifecycle,
  RenderProps,
  HOCs,
  ContextAPI,
  PersistEvent,
  ForwardedRef,
  Hooks,
  HooksReducer,
  HooksUseRef,
} from '@features/reactApi';

import { PrivateRoute, NestedRouter } from '@features/routerApi';

import { BasicRedux, Middlewares, ReduxSaga, ReduxThunk } from '@features/reduxApi';

import { TestingPage } from '@features/testApi';

import { ReduxForm, Formik, FormikYup, ReactFinalForm } from '@features/forms';

import { Styling } from '@features/customizing';

// import { Container, Area } from './Router.styled';

export const Router = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Paper>
          <MenuList>
            <Link to={'/'}>
              <MenuItem> Home</MenuItem>
            </Link>

            <Link to={'/lifecycle'}>
              <MenuItem> Lifecycle</MenuItem>
            </Link>

            <Link to={'/renderprops'}>
              <MenuItem> RenderProps</MenuItem>
            </Link>

            <Link to={'/hocs'}>
              <MenuItem> HOCs</MenuItem>
            </Link>

            <Link to={'/contextapi'}>
              <MenuItem> ContextAPI</MenuItem>
            </Link>

            <Link to={'/persistevent'}>
              <MenuItem> PersistEvent</MenuItem>
            </Link>

            <Link to={'/nestedrouter'}>
              <MenuItem> NestedRouter</MenuItem>
            </Link>

            <Link to={'/privaterouter'}>
              <MenuItem> PrivateRoute</MenuItem>
            </Link>

            <Link to={'/forwardedref'}>
              <MenuItem> ForwardedRef</MenuItem>
            </Link>

            <Link to={'/Hooks'}>
              <MenuItem> Hooks</MenuItem>
            </Link>

            <Link to={'/HooksUseRef'}>
              <MenuItem> HooksUseRef</MenuItem>
            </Link>

            <Link to={'/HooksReducer'}>
              <MenuItem> HooksReducer</MenuItem>
            </Link>

            <Link to={'/basicredux'}>
              <MenuItem> BasicRedux</MenuItem>
            </Link>

            <Link to={'/middlewares'}>
              <MenuItem> Middlewares</MenuItem>
            </Link>

            <Link to={'/reduxsaga'}>
              <MenuItem> ReduxSaga</MenuItem>
            </Link>

            <Link to={'/reduxthunk'}>
              <MenuItem> ReduxThunk</MenuItem>
            </Link>

            <Link to={'/test'}>
              <MenuItem> TestingPage</MenuItem>
            </Link>

            <Link to={'/forms/redux-form/'}>
              <MenuItem> ReduxForm</MenuItem>
            </Link>

            <Link to={'/forms/formik/'}>
              <MenuItem> Formik</MenuItem>
            </Link>

            <Link to={'/forms/ReactFinalForm/'}>
              <MenuItem> ReactFinalForm</MenuItem>
            </Link>

            <Link to={'/forms/FormikYup/'}>
              <MenuItem> FormikYup</MenuItem>
            </Link>

            <Link to={'/customizing/Styling/'}>
              <MenuItem> Styling</MenuItem>
            </Link>
          </MenuList>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper>
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
            <Route component={Hooks} path={'/Hooks'} />
            <Route component={HooksUseRef} path={'/HooksUseRef'} />
            <Route component={HooksReducer} path={'/HooksReducer'} />
            <Route component={BasicRedux} path={'/basicredux'} />
            <Route component={Middlewares} path={'/middlewares'} />
            <Route component={ReduxSaga} path={'/reduxsaga'} />
            <Route component={ReduxThunk} path={'/reduxthunk'} />
            <Route component={TestingPage} path={'/test'} />

            <Route component={ReduxForm} path={'/forms/redux-form/'} />
            <Route component={Formik} path={'/forms/formik/'} />
            <Route component={ReactFinalForm} path={'/forms/ReactFinalForm/'} />
            <Route component={FormikYup} path={'/forms/FormikYup/'} />
            <Route component={Styling} path={'/customizing/Styling/'} />

            <Redirect from={'/persistevent(d+)'} to={'/nestedrouter'} />
            <Redirect from={'*'} to={'/'} />
          </Switch>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Router;
