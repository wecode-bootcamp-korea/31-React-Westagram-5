import React from 'react';

function Input(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.handleInput}
    />
  );
}

export default Input;
