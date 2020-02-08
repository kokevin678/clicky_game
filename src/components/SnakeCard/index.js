import React from "react";
import "./style.css";

function SnakeCard(props) {
  return (
    <span onClick={() => props.shuffleCard(props.id)} className="remove">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </span>
  );
}

export default SnakeCard;
