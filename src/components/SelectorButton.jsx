import React, { useState } from "react";

const SelectorButton = ({ selected, choicesData, setResult }) => {
  const [selectedChoice, setSelectedChoice] = useState(selected);

  function handleClick(value) {
    setSelectedChoice(value);
    setResult(value);
  }

  const buttonGroup = choicesData.map((data) => (
    <button
      className={
        data === selected ? "btn btn-outline" : "btn btn-active btn-neutral"
      }
      onClick={() => {
        handleClick(data);
        console.log(`${data} Clicked`);
      }}
      key={data}
    >
      {data}
    </button>
  ));

  return <>{buttonGroup}</>;
};

export default SelectorButton;
