import React, { Component } from "react";

import "./Layout.css";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerCloseHander = () => {
        this.setState({showSideDrawer: false})
    }
    drawerToggleHandler = () => {
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        })
    }
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.drawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHander}/>
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
