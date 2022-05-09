import React from "react";

const Title = ({ firstText, secondText }) => {
  return (
    <>
      {firstText !== undefined ? (
        <div className="title">
          <h1>{firstText}</h1>
          {secondText !== undefined ? <h2>{secondText}</h2> : null}
        </div>
      ) : null}
    </>
  );
};

export default Title;
