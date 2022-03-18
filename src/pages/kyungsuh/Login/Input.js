import React, { useState } from 'react';

function Input(props) {
  return (
    <>
      <input
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.함수}
      />
    </>
  );
}

export default Input;
