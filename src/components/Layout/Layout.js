import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
  state= {
    showSideDrawer: true
  }
  sideDrawerClosedhandler = () => {
      this.setState({showSideDrawer: false});
  }
  render () {
    return (
        <Aux>
        <Toolbar />
        <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedhandler}/>
        <main className= {classes.Content}>
          {this.props.children}
        </main>
        </Aux>
    )
  }
} 
export default Layout;