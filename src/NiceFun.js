import React, { useEffect, useState } from "react";

function NiceFun(props) {
  const [Name, setName] = useState("Cyber Dude");
  const [subs, setSubs] = useState(98);
  const [content, setContent] = useState([
    "JAVASCRIPT",
    "REACT",
    "REACT",
    "INTERVIEW",
  ]);
  const clicked = (e) => {
    setSubs(subs + 1);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  // use Effect -> Accepts 2 functional arguments are functions(), dependency Array[].
  useEffect(() => {
    console.log("ComponentDidMount");
  }, []);

  useEffect(() => {
    console.log("Subscribe Counts");
  }, [subs]);

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="ChangeName"
          value={Name}
          onChange={changeName}
        />
        <button type="submit">Change</button>
      </form>
      <p> ChannelName : {Name} </p>
      <p> Button Own : {subs < 100 ? "No Button" : "Silver Button"}</p>
      <p> Subscribes : {subs}K </p>
      <ul>
        {content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={clicked}>Subscribe</button>
    </div>
  );
}

export default NiceFun;
