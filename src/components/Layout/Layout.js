import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
const layout = (props) => (
    <Aux>
    <Toolbar />
    <main className= {classes.Content}>
      {props.children}
    </main>
    </Aux>
);
export default layout;