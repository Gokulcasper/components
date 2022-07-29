import React from "react";
import "./App.css";
import Nice from "./Nice";
import NiceFun from "./NiceFun";

const App = () => {
  const name = "Raj";
  return (
    <div>
      <Nice name={name} title="passing props" />
      <p title="Hello">Welcome To JS </p>
      <NiceFun />
    </div>
  );
};

export default App;
