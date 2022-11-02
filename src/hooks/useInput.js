import React, { useState } from "react";

export const useInput = () => {
  const [inputs, setInputs] = useState("");

  const handler = (e) => {
    const inputValue = e.target.value;
    setInputs(inputValue);
  };

  return [inputs, handler, setInputs];
};

export default useInput;
