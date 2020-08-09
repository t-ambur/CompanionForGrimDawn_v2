import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './companion.css';

import CompanionV1 from './companionV1';
import Masteries from './masteries';


function Nav()
{

return(
  //This first div is the top navigation bar, the second div is the router for pages
  <Router>
    <div className="link-buttons">
      <header className="buttons-header">
        <Link to="/CompanionForGrimDawn_v2">
            <button className="const-butt"> Devotions </button>
        </Link>
        <Link to="/CompanionForGrimDawn_v2/masteries">
            <button className="mastery-butt"> Masteries </button>
        </Link>
      </header>
    </div>
    <div>
      <Switch>
        <Route path="/" exact> <CompanionV1 /> </Route>
        <Route path="/CompanionForGrimDawn_v2" exact> <CompanionV1 /> </Route>
        <Route path="/CompanionForGrimDawn_v2/masteries"> <Masteries /> </Route>
      </Switch>
    </div>
  </Router>
    )
}

export default Nav;