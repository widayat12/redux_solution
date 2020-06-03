import React from "react";
import "./BuildControl.css";

const BuildControl = (props) => (
  <div className="BuildControl">
    <div className="label">{props.label}</div>
    <button 
        className="less" 
        onClick={props.removed} 
        disabled={props.disabled}
        >
      Less
    </button>
    <button 
        className="more" 
        onClick={props.added}
        >
      More
    </button>
  </div>
);

export default BuildControl;
