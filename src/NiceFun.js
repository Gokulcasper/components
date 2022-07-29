import React, { useState } from "react";

function NiceFun(props) {
  const [Name, setName] = useState("Cyber Dude");
  const [subs, setSubs] = useState(500);
  const clicked = (e) => {
    setSubs(subs + 1);
    setName(Name + " Network ");
  };
  return (
    <div>
      <p> ChannelName : {Name} </p>
      <p> Subscribes : {subs} </p>
      <button onClick={clicked}>Subscribe</button>
    </div>
  );
}

export default NiceFun;
