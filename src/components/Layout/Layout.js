import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const layout = (props) => (
    <Aux>
    <Toolbar />
    <SideDrawer />
    <main className= {classes.Content}>
      {props.children}
    </main>
    </Aux>
);
export default layout;