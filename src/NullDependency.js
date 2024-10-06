import React, {useState} from "react";

const NullDependency = () => {
  const [value, setValue] = useState("red");

  const handleClick = () => {
    if(value === "red") {
      setValue("green")
    } else {
      setValue("red")
    }
  }

  return (
    <>
    <div style={{height: 100, width: 100, content: "", background: value}}>

    </div>
      <button onClick={handleClick}>
        Click
      </button>
    </>
  );
};

export default NullDependency;
