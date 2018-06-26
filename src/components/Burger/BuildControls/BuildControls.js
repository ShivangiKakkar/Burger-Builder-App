import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Meat', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
           
 ];

const buildControls = (props)=>(
     <div className={classes.BuildControls}>
     {controls.map(ctrl => ( 

        <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        type={ctrl.type}
        added={props.ingredientAdded}
        />
     ))}

     </div>

);

export default buildControls;