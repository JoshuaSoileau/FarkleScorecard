import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Player from "../Player/Player";

const PlayerList = ({ players }) => {
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

  return (
    <Container>
      {players.map(player => (
        <Row>
          <Col>
            <Player {...player} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default PlayerList;
