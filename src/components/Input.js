import React from "react";

function Input({ value, handleChange }) {
  return (
    <div>
      <input
        value={value}
        type="text"
        id="input-text"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter a message"
      />
    </div>
  );
}

export default Input;
