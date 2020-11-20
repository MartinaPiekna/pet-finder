import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.html';
import './style.scss';
import { Navigation } from './components/Navigation/Navigation.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/" /*component={Home}*/ />
            <Route path="/new" /*component={About}*/ />
            <Route path="/info" /*component={Profile}*/ />
            <Route path="/about" /*component={Profile}*/ />
          </Switch>
        </main>
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));
