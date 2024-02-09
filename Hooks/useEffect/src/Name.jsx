import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Name() {
  const [name, setName] = useState("____________");
  const [changed, setChanged] = useState(false);
  const hanldename = (e) => {
    setName(e.target.value);
  };
  const flagchane = () => {
    setChanged(!changed);
  };
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);
  return (
    <div>
      <input
        type="text"
        name="name"
        onBlur={hanldename}
        placeholder="enter name ....."
      />{" "}
      <br /> <br />
      <button onClick={flagchane}>updateFlag</button>
      <p>your name is :{name}</p>
      <p>flag set:{changed ? "yes" : "no"}</p>
    </div>
  );
}

export default Name;
