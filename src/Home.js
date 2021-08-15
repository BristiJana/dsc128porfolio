import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App.js';
import About from './components/About.js';
import Skill from './components/Skill.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';
const Home = () => {
  return (
    <div>
      <Router>
      
        <Switch>
          <Route path="/" exact>
            <App/>
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/skill" exact>
          <Skill/>
          </Route>
          <Route path="/work" exact>
          <Work/>
          </Route>
          <Route path="/contact" exact>
          <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
