import React from 'react';
import { NavBar } from './Nav';
import { Overview } from "./Overview";
import '../style.css';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <Overview />
          </Route>

          <Route path="/dashboard">
            
          </Route>

          <Route path="/about">
            
          </Route>

          <Route path="/login">
            
          </Route>

          <Redirect to="/"/>
        </Switch>
      </main>

      <footer>
            <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by
                <NavLink to="/about"> Data Panel Project Team Members</NavLink>.
            </p>
        </footer>
    </div>
  );
}
