import { useSelector } from "react-redux"
import CardBack from "../../assets/images/svg/ico-card-back.svg?react"
import type { RootState } from "../../store"
import styles from "./GameCard.module.scss"

export interface GameCardType {
  id: number
  value: string
  isFlipped: boolean
  isMatched: boolean
}

const GameCard = ({
  card,
  onClick
}: {
  card: GameCardType
  onClick: () => void
}) => {
  const { gameOver, userWon } = useSelector((state: RootState) => state.game)
  const isFlipped = card.isFlipped || card.isMatched

  return (
    <div
      className={`${styles.gameCard} ${isFlipped ? styles.flipped : ""} ${
        gameOver ? styles.gameOver : ""
      } ${userWon ? styles.userWon : ""}`}
      onClick={onClick}
    >
      <div className={styles.cardInner}>
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <CardBack />
        </div>
        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          {card.value}
        </div>
      </div>
    </div>
  )
}

export { GameCard as default }
