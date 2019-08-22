import React, { useState } from "react";
import Header from "../components/Header/Header";
import PlayerList from "../components/PlayerList/PlayerList";
import Calculator from "../components/Calculator/Calculator";

const initialPlayers = [
  {
    name: "Player 1",
    scores: []
  },
  {
    name: "Player 2",
    scores: []
  }
];

const Home = () => {
  const [title, setTitle] = useState("Farkle Scorecard");
  const [players, setPlayers] = useState(initialPlayers);

  const addPlayer = name => {
    setPlayers([
      ...players,
      {
        name,
        scores: []
      }
    ]);
  };

  const addScore = (playerName, score) => {
    const player = players.filter(({ name }) => name === playerName)[0];
    const others = players.filter(({ name }) => name !== playerName);

    if (!player) return;

    player.scores.push(score);
    setPlayers(players);
  };

  return (
    <div>
      <Header title={title} addPlayer={addPlayer} />
      <PlayerList players={players} />
      <Calculator />

      <style jsx>
        {`
          div {
            max-width: 320px;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
