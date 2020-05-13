import React, { Component } from 'react';

import Sidebar from "./sidebar/sidebar";
import Content from "./maincontent/content";

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Sidebar/>

      </div>
    );
  }
}

export default Layout;