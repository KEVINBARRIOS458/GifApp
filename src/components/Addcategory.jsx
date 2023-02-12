import React, { useState } from "react";

export const Addcategory = () => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    // destructuring
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <form>
      <input
        type={"text"}
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
