import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i) => {
            return <BurgerIngredient key={igkey + i} type={igkey}/>;
        });
    });
    return(
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
          {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
};
export default burger;