import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.html';
import './style.scss';
import { Navigation } from './components/Navigation/Navigation.jsx';
import { Form } from './components/Form/Form.jsx';
// import { About } from './components/About/About.jsx';
// import { Information } from './components/Information/Information.jsx';
// import { Footer } from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <>
      <Router>
        <header>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route exact path="/" /*component={Home}*/ />
            <Route path="/new" component={Form} />
            <Route path="/info" /*component={Information}*/ />
            <Route path="/about" /*component={About}*/ />
          </Switch>
        </main>
        <footer>{/* <Footer /> */}</footer>
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));
