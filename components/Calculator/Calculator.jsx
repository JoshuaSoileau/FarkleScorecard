import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import Button from "./Button";

const Calculator = ({ addScore }) => {
  const [score, setScore] = useState("0");

  const handleScoreClick = number => {
    const numberAsString = String(number);

    if (score === "0") {
      setScore(numberAsString);
      return;
    }

    if (typeof number === "number") {
      setScore(String(Number(score) + number));
      return;
    }

    setScore(score + numberAsString);
  };

  return (
    <div className="calculator">
      <Container>
        <Row>
          <Col xs={9}>
            <div className="score">
              <span>{score}</span>
            </div>
          </Col>
          <Col xs={3}>
            <Button onClick={() => setScore("0")}>C</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Button onClick={handleScoreClick}>7</Button>
          </Col>
          <Col xs={3}>
            <Button onClick={handleScoreClick}>8</Button>
          </Col>
          <Col xs={3}>
            <Button onClick={handleScoreClick}>9</Button>
          </Col>
          <Col xs={3}>
            <Button onClick={() => handleScoreClick(50)} color="lightgray">
              +
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Button onClick={handleScoreClick}>4</Button>
          </Col>
          <Col xs={3}>
            <Button onClick={handleScoreClick}>5</Button>
          </Col>
          <Col xs={3}>
            <Button onClick={handleScoreClick}>6</Button>
          </Col>
          <Col xs={3}>
            <Button onClick={() => handleScoreClick(-50)} color="lightgray">
              -
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Button onClick={handleScoreClick}>1</Button>
          </Col>
          <Col xs={3}>
            <Button onClick={handleScoreClick}>2</Button>
          </Col>
          <Col xs={3}>
            <Button onClick={handleScoreClick}>3</Button>
          </Col>
          <Col xs={3}>
            <Button onClick={handleScoreClick}>0</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Button
              small
              color="red"
              onClick={() => {
                addScore("0");
                setScore(0);
              }}
            >
              Farkle
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              small
              color="green"
              onClick={() => {
                addScore(score);
                setScore(0);
              }}
            >
              Bank
            </Button>
          </Col>
        </Row>
      </Container>

      <style jsx>
        {`
          .score {
            display: block;
            margin-bottom: 20px;
            border-radius: 70px;
            position: relative;
            background: #333;
            color: white;
            font-size: 24px;
            margin-bottom: 20px;
          }

          .score::before {
            content: "";
            display: block;
            padding-bottom: 20%;
          }

          .score span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .calculator {
            margin-top: 30px;
          }
        `}
      </style>
    </div>
  );
};

export default Calculator;
