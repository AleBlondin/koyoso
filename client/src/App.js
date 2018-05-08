// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routes';
import { Root } from './components';

type Props = {
  store: Store,
};

const RootComponentWithRoutes = () => (
  <Root>
    <Routes />
  </Root>
);

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router basename="/">
          <Route path="/" component={RootComponentWithRoutes} />
        </Router>
      </Provider>
    );
  }
}

export default App;
