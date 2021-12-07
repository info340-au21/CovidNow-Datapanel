import React, { useState } from 'react';
import { NavBar } from './Nav';
import { Overview } from "./Overview";
import { Dashboard } from './Dashboard';
import { AboutUs } from "./About";
import { Login } from "./Login";
import { ViewControl } from './ViewControl.js';
import '../style.css';
import '../index.css';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { useQuery } from "react-query";

import { updateData } from './utils';
import states from '../data/us-states.json';


const COVID_URL = "https://api.covidactnow.org/v2/states.json?apiKey=f98006b9d23d4e88b6df92c4b709a9f6"
const US_URL = "https://api.covidactnow.org/v2/country/US.json?apiKey=f98006b9d23d4e88b6df92c4b709a9f6"


export default function App() {

  let [covidData, setData] = useState(states);

  useQuery("mapData", () => {
    fetch(COVID_URL)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
          setData(updateData(states, json))
          return getUS();
        }).catch(function(error) {
            console.log(error.message)
        })
  });

  let [usData, setUS] = useState({actuals: {cases: "0", deaths: "0"}, lastUpdatedDate : "0"});

  function getUS() {
    fetch(US_URL)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
          setUS(json)
        }).catch(function(error) {
            console.log(error.message)
        })
  }

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <Overview usData={usData} covidData={covidData}/>
          </Route>

          <Route path="/dashboard/:params">
            <Dashboard />
          </Route>

          <Route path="/about">
            <AboutUs />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>

      <ViewControl />

      <footer>
        <p className="copyright-text">
          Copyright &copy; 2021 All Rights Reserved by
          <NavLink to="/about"> Data Panel Project Team Members</NavLink>.
        </p>
      </footer>
    </div>
  );
}
