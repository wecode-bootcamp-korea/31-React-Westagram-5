import React from 'react';

function Input(props) {
  const { type, value, className, placeholder, handleInput } = props;
  return (
    <input
      type={type}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={handleInput}
    />
  );
}

export default Input;
