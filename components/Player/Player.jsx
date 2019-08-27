import React from "react";

const Player = ({
  name,
  scores,
  active,
  playerIndex,
  setActivePlayerIndex
}) => {
  const total =
    (scores.length && scores.reduce((one, two) => Number(one) + Number(two))) ||
    "0";

  return (
    <button
      className={active ? "is-active" : ""}
      onClick={() => setActivePlayerIndex(playerIndex)}
    >
      <span>{name}</span>
      <span>{total}</span>

      <style jsx>
        {`
          button {
            display: flex;
            width: 100%;
            justify-content: space-between;
            border-radius: 8px;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
            padding: 14px;
            margin: 8px 0;
          }

          button:focus {
            outline: none;
          }

          .is-active {
            border: 2px solid violet;
          }
        `}
      </style>
    </button>
  );
};

export default Player;
