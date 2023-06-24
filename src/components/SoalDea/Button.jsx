import React from "react";
import withCalculate from "./Counter";

function Button(props) {
  console.log("props from button: ", props);
  return (
    <div>
      <h1>x + {props.counter}</h1>
      <p>hasil: {props.nomor}</p>
      <button onClick={props.handleNomor}>tambah</button>
    </div>
  );
}

export default withCalculate(Button);