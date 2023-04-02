import React from "react";

const Input = (handleChange, name, value, text) => {
  return (
    <div>
      <label>
        {text}
        <input type="text" value={value} name={name} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Input;
