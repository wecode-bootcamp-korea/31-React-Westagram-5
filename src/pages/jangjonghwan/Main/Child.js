import React from 'react';

const Child = props => {
  console.log(props);
  return (
    <>
      {props.commentList.map((comm, idx) => {
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
