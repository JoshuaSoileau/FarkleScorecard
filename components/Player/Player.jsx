import React from "react";

const Player = ({ name, scores }) => {
  const total =
    (scores.length && scores.reduce((one, two) => one + two)) || "0";

  return (
    <div>
      <span>{name}</span>
      <span>{total}</span>

      <style jsx>
        {`
          div {
            display: flex;
            justify-content: space-between;
            border-radius: 8px;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
            padding: 14px;
            margin: 8px 0;
          }
        `}
      </style>
    </div>
  );
};

export default Player;
