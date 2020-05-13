import React, { Component } from 'react';

import SignIn from "./signin";
import SideNav from "./sidenav";
import IQLogo from "../../../static/logo.png";

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <img className="logo" src={IQLogo} />
                <SignIn />
                <SideNav /> 
            </div>
        )
    }
}

export default Sidebar;