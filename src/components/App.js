import React from "react";
import "../style.css";
import "../index.css";
import Navbar from "./Navbar";
import { Overview } from "./Overview";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div
          class="overview collapse show multi-collapse"
          id="collapseOverview">
          <Overview />
        </div>
      </main>
      <footer>
        <p className="copyright-text">
          Copyright &copy; 2021 All Rights Reserved by
          <a href="about.html">Data Panel Project Team Members</a>.
        </p>
      </footer>
    </div>
  );
}
