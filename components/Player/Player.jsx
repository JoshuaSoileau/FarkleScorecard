import React from "react";

const Player = ({
  name,
  scores,
  active,
  playerIndex,
  setActivePlayerIndex,
  renamePlayer
}) => {
  const total =
    (scores.length && scores.reduce((one, two) => Number(one) + Number(two))) ||
    "0";

  return (
    <div>
      <button
        className="edit-player-name"
        onClick={() =>
          renamePlayer(playerIndex, prompt("Enter new player name:"))
        }
      >
        ✎
      </button>
      <button
        className={active ? "player-button is-active" : "player-button"}
        onClick={() => setActivePlayerIndex(playerIndex)}
      >
        <span>{name}</span>
        <span className="score">{total}</span>
      </button>
      <style jsx>
        {`
          .player-button {
            font-size: 16px;
            line-height: 22px;
            display: flex;
            width: 100%;
            justify-content: space-between;
            border-radius: 8px;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
            padding: 14px 14px 14px 44px;
            margin: 8px 0;
          }

          .player-button:focus {
            outline: none;
          }

          .is-active {
            border: 2px solid violet;
          }

          .score {
            font-size: 24px;
          }

          div {
            position: relative;
          }

          .edit-player-name {
            border: none;
            padding: 0;
            margin: 0;
            background: none;
            position: absolute;
            font-size: 20px;
            top: 14px;
            left: 9px;
          }
        `}
      </style>
    </div>
  );
};

export default Player;
