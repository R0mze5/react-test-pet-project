import React from 'react';

import { Link, Route } from 'react-router-dom';

const AnotherNestedComponent = ({ match }) => {
  return <div>Nested Component {match.params.id}</div>;
};

export const NestedRouter = ({ match }) => {
  return (
    <div>
      <Link to={`${match.url}/nested/1`}>Nested 1</Link>
      <Link to={`${match.url}/nested/2`}>Nested 2</Link>
      <Link to={`${match.url}/nested/3`}>Nested 3</Link>
      <Link to={`${match.url}/nested/4`}>Nested 4</Link>
      <Link to={`${match.url}/nested/5`}>Nested 5</Link>

      <div>
        <Route component={AnotherNestedComponent} path={`${match.path}/nested/:id`} />
      </div>
    </div>
  );
};

export default NestedRouter;
