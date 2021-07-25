import React from 'react';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';

const index = () => {
  return (
    <Router>
      <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profil" exact component={Profil} />
            <Route path="/trending" exact component={Trending} />
            <Redirect to="/" />
        </Switch>
    </Router>
  );
};

export default index;