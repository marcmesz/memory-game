import { useCallback, useMemo, useState } from "react"
import { FormattedMessage } from "react-intl"
import { useDispatch, useSelector } from "react-redux"
import { actions, initialSettings, type SupportedLocale } from "../../../slice"
import type { RootState } from "../../../store"
import type { MessageModalProps } from "../../modal/MessageModal"
import type { SettingsModalProps } from "../../modal/SettingsModal"

const useHeaderProps = () => {
  const dispatch = useDispatch()
  const { locale, timer, matchedCount, mistakesCount, gameOver, userWon } =
    useSelector((state: RootState) => state.game)
  const { numberOfCards: initCards, countDown: initCountDown } = initialSettings
  const [numberOfCards, setNumberOfCards] = useState(initCards / 2)
  const [countDown, setCountDown] = useState(initCountDown)
  const [badGuesses, setBadGuesses] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleSetLocale = useCallback(
    (locale: SupportedLocale) => {
      dispatch(actions.setLocale(locale))
    },
    [dispatch]
  )

  const handleRestart = useCallback(() => {
    const settings = { numberOfCards: numberOfCards * 2, countDown, badGuesses }
    setModalOpen(false)
    dispatch(actions.resetCards())
    setTimeout(() => {
      dispatch(actions.setSettings(settings))
      dispatch(actions.startGame())
    }, 300)
  }, [badGuesses, countDown, dispatch, numberOfCards])

  const message = useMemo(() => {
    const reachedMaxMistakes = badGuesses > 0 && mistakesCount >= badGuesses
    if (!gameOver && !userWon) return null

    return (
      <>
        <h2 className="mt-0 mb-1">
          {
            <FormattedMessage
              id={gameOver ? "game-over.title" : userWon ? "you-won" : ""}
            />
          }
        </h2>
        {gameOver && badGuesses > 0 && reachedMaxMistakes && (
          <p className="my-3 gilroy-regular">
            <FormattedMessage
              id="game-over.subtitle"
              values={{
                count: <span className="gilroy-bold">{badGuesses}</span>
              }}
            />
          </p>
        )}
        <p className="my-0 gilroy-regular">
          {
            <FormattedMessage
              id={gameOver ? "game-over.text" : userWon ? "you-won.text" : ""}
            />
          }
        </p>
      </>
    )
  }, [badGuesses, gameOver, mistakesCount, userWon])

  const settingsModalProps: SettingsModalProps = useMemo(() => {
    return {
      locale,
      modalOpen,
      numberOfCards,
      countDown,
      badGuesses,
      setBadGuesses,
      setNumberOfCards,
      setCountDown,
      handleRestart,
      handleCloseModal,
      handleSetLocale
    }
  }, [
    locale,
    modalOpen,
    numberOfCards,
    countDown,
    badGuesses,
    handleRestart,
    handleSetLocale
  ])

  const messageModalProps: MessageModalProps = useMemo(() => {
    return {
      show: !!message,
      onHide: handleRestart,
      message
    }
  }, [handleRestart, message])

  return {
    timer,
    matchedCount,
    mistakesCount,
    modalOpen,
    message,
    settingsModalProps,
    messageModalProps,
    handleOpenModal,
    handleRestart
  }
}

export { useHeaderProps as default }
