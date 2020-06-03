import React from "react";

import "./Order.css";

const order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }
  console.log(ingredients);
  const outputIngredient = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          margin: "0 8px",
          padding: "10px",
          display: "inline-block",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={"Order"}>
      <p>Ingredients: {outputIngredient}</p>
      <p>
        Price <strong>Rp {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
