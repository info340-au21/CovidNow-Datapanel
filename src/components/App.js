import React from 'react';
import { NavBar } from './Nav';
import { Overview } from "./Overview";
import { Dashboard } from './Dashboard';
import '../style.css';
import '../index.css';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import SAMPLE_DATA from '../data/covidStats.json';


export default function App() {

  const dataSamp = SAMPLE_DATA;

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <Overview data={dataSamp} />
            {console.log(dataSamp)}
          </Route>

          <Route path="/dashboard">
            <Dashboard data={dataSamp} />
          </Route>

          <Route path="/about">
            
          </Route>

          <Route path="/login">
            
          </Route>

          <Redirect to="/"/>
        </Switch>
      </main>

      <footer className="fixed-bottom">
            <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by
                <NavLink to="/about"> Data Panel Project Team Members</NavLink>.
            </p>
        </footer>
    </div>
  );
}
