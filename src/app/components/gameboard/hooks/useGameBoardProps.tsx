import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions, initialSettings } from "../../../slice"
import type { RootState } from "../../../store"

const useGameBoardProps = () => {
  const dispatch = useDispatch()
  const { cards, flipped, gameOver, gameStarted, userWon } = useSelector(
    (state: RootState) => state.game
  )

  const onCardClick = useCallback(
    (idx: number) => {
      if (!gameStarted) {
        dispatch(actions.startTimer())
      }
      dispatch(actions.flipCard(idx))
    },
    [dispatch, gameStarted]
  )

  useEffect(() => {
    dispatch(actions.setSettings(initialSettings))
    dispatch(actions.startGame())
  }, [dispatch])

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>
    if (gameStarted && !gameOver && !userWon) {
      interval = setInterval(() => {
        dispatch(actions.tick())
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [gameStarted, gameOver, dispatch, userWon])

  useEffect(() => {
    if (flipped.length === 2) {
      const timeout = setTimeout(() => dispatch(actions.resetFlips()), 1000)
      return () => clearTimeout(timeout)
    }
  }, [flipped, dispatch])

  return {
    cards,
    onCardClick
  }
}

export { useGameBoardProps as default }
