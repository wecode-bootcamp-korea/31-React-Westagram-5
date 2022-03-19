import React, { useState } from 'react';

function Input(props) {
  return (
    <>
      <input
        type={props.type}
        value={props.value}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.handleInput}
        // onChange={props.유효성검사}
      />
    </>
  );
}

export default Input;
