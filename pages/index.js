import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import PlayerList from "../components/PlayerList/PlayerList";
import Calculator from "../components/Calculator/Calculator";

const initialPlayers = [
  {
    name: "Player 1",
    order: 0,
    scores: []
  },
  {
    name: "Player 2",
    order: 1,
    scores: []
  }
];

const Home = () => {
  const [title, setTitle] = useState("Farkle Scorecard");
  const [players, setPlayers] = useState(initialPlayers);
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);

  const addPlayer = name => {
    setPlayers([
      ...players,
      {
        name,
        order: players.length,
        scores: []
      }
    ]);
  };

  const addScore = score => {
    // const player = players[activePlayerIndex];
    // const playerName = player.name;
    // const others = players.filter(({ name }) => name !== playerName);

    // if (!player) return;

    let newPlayers = players;

    newPlayers[activePlayerIndex].scores.push(score);

    // player.scores.push(score);
    // setPlayers([...others, player]);
    setPlayers(newPlayers);

    if (activePlayerIndex + 1 >= players.length) {
      setActivePlayerIndex(0);
    } else {
      setActivePlayerIndex(activePlayerIndex + 1);
    }
  };

  const renamePlayer = (index, name) => {
    let newPlayers = players;
    newPlayers[index].name = name;

    setPlayers(newPlayers);
    if (activePlayerIndex + 1 >= players.length) {
      setActivePlayerIndex(0);
    } else {
      setActivePlayerIndex(activePlayerIndex + 1);
    }
  };

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Header title={title} addPlayer={addPlayer} />
      <PlayerList
        players={players}
        activePlayerIndex={activePlayerIndex}
        setActivePlayerIndex={setActivePlayerIndex}
        renamePlayer={renamePlayer}
      />
      <Calculator addScore={addScore} />

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
