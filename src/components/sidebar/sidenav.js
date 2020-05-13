import React, { Component } from 'react';

class SideNav extends Component {
    render() {
        return (
          <nav className="navigation">
            <div className="sidenav">
                <a href="#">Assignments Received</a>
                <a href="#">Open Accounts</a>
                <a href="#">Open Invoices</a>
                <a href="#">Contact Us</a>
            </div>
        </nav>
        )
    }
}

export default SideNav;