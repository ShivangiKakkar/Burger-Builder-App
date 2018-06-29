import React from 'react';
import classes from './Modal.css';

const modal = (props) => (
    <div className={classes.Modal}>
    {props.childern}
    </div>

);

export default modal;