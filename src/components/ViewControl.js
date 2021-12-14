import React from "react";
import { NavLink } from "react-router-dom";

import { withRouter } from "react-router-dom";
export function ViewControlToHide(props) {
    return <ViewControlContent pathname={props.location.pathname} user={props.user}/>;
}

export const ViewControl = withRouter(ViewControlToHide);

function ViewControlContent(props) {
    return (
        <div className="view-control">
            <div>
                <NavLink exact activeClassName="on" to="/">
                    <i className="fas fa-globe-americas"></i>
                </NavLink>
            </div>
            <div>
                <NavLink
                    activeClassName="on"
                    to={props.user ? "/dashboard/default" : "/dashboard/last"}
                    className={
                        props.pathname.substring(0, 11) === "/dashboard/"
                            ? "on"
                            : ""
                    }>
                    <i className="fas fa-sliders-h"></i>
                </NavLink>
            </div>
        </div>
    );
}
