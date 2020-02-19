import React from "react";
import "./Score.css";

//stateless component
const Score = props => (
  <div className="gameScore">
    <h3 className="score">Score {props.total}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Score;