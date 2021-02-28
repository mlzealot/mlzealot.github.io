import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Demo from './components/demo';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/demo' component={Demo} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
