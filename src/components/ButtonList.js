import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Live", "cricket", "Soccer", "Cooking","Joy"];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((data) => (
        <Button name={data} />
      ))}
    </div>
  );
};

export default ButtonList;
