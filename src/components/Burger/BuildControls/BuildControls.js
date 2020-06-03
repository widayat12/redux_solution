import React from "react";

import "./BuildControls.css";
import BuildControl from "../BuildControls/BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className="buildControls">
    <p>Current Price: {props.price.toFixed(2)}</p>
    {controls.map((ctrl) => (
      <BuildControl key={ctrl.label} label={ctrl.label} 
          added={() => props.ingredientsAdded(ctrl.type)}
          removed={() => props.ingredientsRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button 
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.ordered}
        >ORDER NOW</button>
  </div>
);

export default BuildControls;
