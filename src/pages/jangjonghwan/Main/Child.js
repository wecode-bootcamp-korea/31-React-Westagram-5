/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Child = props => {
  return (
    <>
      {props.comment.map((comm, idx) => {
        return (
          <li className="addComments" key={idx}>
            {comm}
          </li>
        );
      })}
    </>
  );
};
export default Child;
