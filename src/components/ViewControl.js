import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export function ViewControl() {
  const [isHome, setIsHome] = useState(true);

  return (
    <div className="view-control">
      <div>
        <NavLink
          className={isHome ? "on" : ""}
          to="/"
          onClick={() => {
            if (!isHome) {
              setIsHome(true);
            }
          }}>
          <i className="fas fa-globe-americas"></i>
        </NavLink>
      </div>
      <div>
        <NavLink
          className={isHome ? "" : "on"}
          to="/dashboard"
          onClick={() => {
            if (isHome) {
              setIsHome(false);
            }
          }}>
          <i className="fas fa-sliders-h"></i>
        </NavLink>
      </div>
    </div>
  );
}
