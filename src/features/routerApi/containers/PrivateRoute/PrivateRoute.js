import React, { Component } from 'react';

import { Route, Link, Redirect, Switch } from 'react-router-dom';

const { Provider: AuthProvider, Consumer: AuthConsumer } = React.createContext({
  isAuthorized: false,
});

export class PrivateRouteExample extends Component {
  state = {
    isAuthorized: false,
  };

  authorize = () => {
    const { isAuthorized } = this.state;
    // console.log(isAuthorized);
    this.setState({ isAuthorized: !isAuthorized });
  };

  render() {
    const { isAuthorized } = this.state;
    const { match } = this.props;

    // console.log(match);

    return (
      <AuthProvider value={{ isAuthorized, authorize: this.authorize, match }}>
        <Link to={`${match.url}/public`}>Public</Link>
        <Link to={`${match.url}/private`}>Private</Link>
        <Link to={`${match.url}/login`}>Login</Link>
        <hr />
        <Switch>
          <Route path={`${match.path}/public`} render={() => <p>Public</p>} />
          <Route component={LoginPage} path={`${match.path}/login`} />
          <PrivateRoute component={() => <p>Private</p>} path={`${match.path}/private`} />
          <Redirect to={`${match.path}/public`} />
        </Switch>
      </AuthProvider>
    );
  }
}

const LoginPage = () => {
  return (
    <AuthConsumer>
      {({ authorize }) => (
        <button onClick={authorize} type={'button'}>
          Authorize
        </button>
      )}
    </AuthConsumer>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuthorized, match }) => (
      <Route
        {...rest}
        render={props =>
          isAuthorized ? <Component {...props} /> : <Redirect to={`${match.path}/login`} />
        }
      />
    )}
  </AuthConsumer>
);

export default PrivateRoute;
