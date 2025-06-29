import { Card, Col, Row } from "react-bootstrap"
import GameCard from "../card/GameCard"
import useGameBoardProps from "./hooks/useGameBoardProps"

const GameBoard = () => {
  const { cards, onCardClick } = useGameBoardProps()

  return (
    <Row>
      <Col>
        <Card bg="light" className="border-0">
          <Card.Body className="d-flex flex-wrap justify-content-center gap-4">
            {cards.map((card, idx) => (
              <GameCard
                key={card.id}
                card={card}
                onClick={() => onCardClick(idx)}
              />
            ))}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export { GameBoard as default }
