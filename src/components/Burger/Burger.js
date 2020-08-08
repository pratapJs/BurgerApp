import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
  /*  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  }); */

  let transformedIngredients = [];
  Object.entries(props.ingredients).forEach((el) => {
    //console.log(el);
    for (let i = 0; i < el[1]; i++) {
      transformedIngredients.push(
        <BurgerIngredient key={el[0] + i} type={el[0]} />
      );
    }
  });

  // console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding ingredients! </p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
