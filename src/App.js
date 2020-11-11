import React, { Fragment } from 'react';
import './globalStyle.scss';

import { Switch, Route } from 'react-router-dom';
import { Navbar } from './common/components/Navbar';
import { Homepage } from './pages/Homepage';
// import './style.scss';
import {BackgroundImage} from "./common/components/backgroundImage/index";
import {Resume} from './pages/Resume';
import { Portfolio } from './pages/Portfolio';
import { ContactMe } from './pages/ContactMe';

function App() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route path="resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact-me" component={ContactMe} />
          <Route path="/" component={Homepage} />
        </Switch>
      </main>
      <BackgroundImage />
    </Fragment>
  );
}

export default App;
