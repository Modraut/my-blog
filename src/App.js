import React, { Fragment } from 'react';
import './globalStyle.scss';

import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './common/components/Navbar';
import { Homepage } from './pages/Homepage';
// import './style.scss';
// import {BackgroundImage} from "./common/components/backgroundImage/index";
import { Resume } from './pages/Resume';
import { Portfolio } from './pages/Portfolio';
import { ContactMe } from './pages/ContactMe';
import './style.scss'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Switch>
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact-me" component={ContactMe} />
          <Route path="/" component={Homepage} />
        </Switch>
      </main>
      {/* <BackgroundImage /> */}
      <div className="app__background"></div>
    </div>
  );
}

export default App;
