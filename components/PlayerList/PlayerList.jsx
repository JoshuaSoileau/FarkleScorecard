import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Player from "../Player/Player";

const PlayerList = ({ players, activePlayerIndex, setActivePlayerIndex }) => {
  if (!players.length)
    return (
      <div>
        Click + to add players
        <style jsx>
          {`
            div {
              text-align: center;
              margin: 20px 0;
            }
          `}
        </style>
      </div>
    );

  const sortedPlayers = players.sort((a, b) => {
    return a.order > b.order;
  });

  console.log(sortedPlayers.map(({ name }) => name));
  return (
    <Container>
      {sortedPlayers.map((player, index) => (
        <Row>
          <Col>
            <Player
              {...player}
              playerIndex={index}
              active={index === activePlayerIndex}
              setActivePlayerIndex={setActivePlayerIndex}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default PlayerList;
