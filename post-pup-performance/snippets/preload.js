import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Loading } from 'carbon-components-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const OverviewPage = Loadable({
  loader: () => import('./pages/Overview/index.js'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <LeftNav>
          <LeftNavItem onMouseOver={() => OverviewPage.preload()}>
            Overview
          </LeftNavItem>
        </LeftNav>
        <Route component={OverviewPage} />
      </Router>
    );
  }
}