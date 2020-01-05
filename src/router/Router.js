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
            <MenuItem>
              <Link to={'/'}>Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/lifecycle'}>Lifecycle</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/renderprops'}>RenderProps</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/hocs'}>HOCs</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/contextapi'}>ContextAPI</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/persistevent'}>PersistEvent</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/nestedrouter'}>NestedRouter</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/privaterouter'}>PrivateRoute</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/forwardedref'}>ForwardedRef</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/Hooks'}>Hooks</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/HooksReducer'}>HooksReducer</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/basicredux'}>BasicRedux</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/middlewares'}>Middlewares</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/reduxsaga'}>ReduxSaga</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/reduxthunk'}>ReduxThunk</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/test'}>TestingPage</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/forms/redux-form/'}>ReduxForm</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/forms/formik/'}>Formik</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/forms/ReactFinalForm/'}>ReactFinalForm</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/forms/FormikYup/'}>FormikYup</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/customizing/Styling/'}>Styling</Link>
            </MenuItem>
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
