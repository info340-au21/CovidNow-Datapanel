import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { withRouter } from "react-router-dom";
export function ViewControlToHide(props) {
    return <ViewControlContent />;
}

export const ViewControl = withRouter(ViewControlToHide);

function ViewControlContent() {
    return (
        <div className="view-control">
            <div>
                <NavLink exact activeClassName="on" to="/">
                    <i className="fas fa-globe-americas"></i>
                </NavLink>
            </div>
            <div>
                <NavLink activeClassName="on" to="/dashboard">
                    <i className="fas fa-sliders-h"></i>
                </NavLink>
            </div>
        </div>
    );
}
