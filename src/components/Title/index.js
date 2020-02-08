import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div>
      <h1 className="title">{props.children}</h1>
      <p className="container">
        Ball python memory game. Click each python once, earn points. Game lost
        when you clicked repeated snake.
      </p>
    </div>
  );
}

export default Title;
