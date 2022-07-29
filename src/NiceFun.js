import React from "react";

function NiceFun(props) {
  console.log(props);
  const clicked = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div>Hi NiceFun</div>
      <button onClick={clicked}>Click</button>
    </div>
  );
}

export default NiceFun;
