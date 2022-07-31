import React, { useEffect, useState } from "react";

function NiceFun(props) {
  const [Name, setName] = useState("Cyber Dude");
  const [subs, setSubs] = useState(98);
  const clicked = (e) => {
    setSubs(subs + 1);
    // setName(Name + " Network ");
  };

  // console.log("This is Constructor");
  // useEffect(() => {
  //   console.log("ComponentDidMount");
  //   return () => {
  //     console.log("ComponentWillMount");
  //   };
  // }, []);

  // use Effect -> Accepts 2 functional arguments are functions(), dependency Array[].
  useEffect(() => {
    console.log("ComponentDidMount");
  }, []);

  useEffect(() => {
    console.log("Subscribe Counts");
  }, [subs]);

  return (
    <div>
      <p> ChannelName : {Name} </p>
      <p> Button Own : {subs < 100 ? "No Button" : "Silver Button"}</p>
      <p> Subscribes : {subs}K </p>
      <button onClick={clicked}>Subscribe</button>
    </div>
  );
}

export default NiceFun;
