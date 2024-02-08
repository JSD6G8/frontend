import React, { useState } from "react";

const SelectorButton = ({ selected, choicesData, setResult }) => {
  const [selectedChoice, setSelectedChoice] = useState(selected);

  function handleClick(value) {
    setSelectedChoice(value);
    setResult(value);
  }

  const buttonGroup = choicesData.map((data) => (
    <button
      className={`join-item btn-sm ${
        data === selected
          ? "btn btn-accent text-neutral"
          : "hover:text btn btn-outline btn-accent"
      }`}
      onClick={() => {
        handleClick(data);
      }}
      key={data}
    >
      {data}
    </button>
  ));

  return (
    <div className="flex justify-around align-middle">
      <div className="join mb-2 mt-2"> {buttonGroup}</div>
    </div>
  );
};

export default SelectorButton;
