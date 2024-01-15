import React, { useState } from "react";

const SelectorButton = ({ selected, choicesData, setResult }) => {
  const [selectedChoice, setSelectedChoice] = useState(selected);

  function handleClick(value) {
    setSelectedChoice(value);
    setResult(value);
  }

  const buttonGroup = choicesData.map((data) => (
    <button
      className={`btn-sm mx-2 hover:bg-zinc-600 hover:text-white ${
        data === selected ? "btn btn-outline" : "btn btn-neutral btn-active"
      }`}
      onClick={() => {
        handleClick(data);
        console.log(`${data} Clicked`);
      }}
      key={data}
    >
      {data}
    </button>
  ));

  return (
    <div className="flex justify-around align-middle">
      <div className="mb-2 mt-2"> {buttonGroup}</div>
    </div>
  );
};

export default SelectorButton;
