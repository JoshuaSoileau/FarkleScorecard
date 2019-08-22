import React from "react";
import { Container, Row, Col } from "react-grid-system";

const Header = ({ title, addPlayer }) => {
  const handleAddPlayer = () => {
    const name = prompt("Enter player name");
    addPlayer(name);
  };

  return (
    <Container>
      <Row>
        <Col>
          <header>
            <button>Edit</button>
            <span>{title}</span>
            <button onClick={handleAddPlayer}>+</button>
          </header>
        </Col>
      </Row>

      <style jsx>
        {`
          header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }
        `}
      </style>
    </Container>
  );
};

export default Header;
