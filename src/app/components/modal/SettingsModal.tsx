import { Button, Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import CloseIcon from "../../assets/images/svg/ico-close-btn.svg?react"
import {
  MAX_BAD_GUESSES,
  MAX_CARDS,
  MAX_TIME,
  MIN_BAD_GUESSES,
  MIN_CARDS,
  MIN_TIME
} from "../../consts/consts.ts"
import { type InitialSettings, type SupportedLocale } from "../../slice"
import LanguageSelector from "./components/LanguageSelector.tsx"
import NumberInput from "./components/NumberInput.tsx"

export interface SettingsModalProps extends InitialSettings {
  locale: SupportedLocale
  modalOpen: boolean
  badGuesses: number
  setBadGuesses: (value: number) => void
  setCountDown: (value: number) => void
  setNumberOfCards: (value: number) => void
  handleSetLocale: (locale: SupportedLocale) => void
  handleCloseModal: () => void
  handleRestart: () => void
}

const SettingsModal = ({
  locale,
  modalOpen,
  numberOfCards,
  countDown,
  badGuesses,
  setCountDown,
  setNumberOfCards,
  handleSetLocale,
  setBadGuesses,
  handleCloseModal,
  handleRestart
}: SettingsModalProps) => {
  return (
    <Modal show={modalOpen} backdrop="static">
      <Modal.Header className="d-flex justify-content-between gilroy-heavy">
        <Modal.Title>
          <FormattedMessage id="modal.game-settings" />
        </Modal.Title>
        <CloseIcon onClick={handleCloseModal} />
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column gap-3">
          <NumberInput
            label={<FormattedMessage id="modal.number-of-pair-of-cards" />}
            value={numberOfCards || MIN_CARDS}
            min={MIN_CARDS}
            max={MAX_CARDS}
            step={MIN_CARDS}
            onChange={(e) => {
              let inputValue = +e.target.value
              inputValue = inputValue < MIN_CARDS ? MIN_CARDS : inputValue
              if (inputValue <= MAX_CARDS) {
                setNumberOfCards(inputValue)
              }
            }}
          />
          <NumberInput
            label={<FormattedMessage id="modal.countdown-time-sec" />}
            value={countDown || MIN_TIME}
            min={MIN_TIME}
            max={MAX_TIME}
            onChange={(e) => {
              let inputValue = +e.target.value
              inputValue = inputValue < MIN_TIME ? MIN_TIME : inputValue
              if (inputValue <= MAX_TIME) {
                setCountDown(inputValue)
              }
            }}
          />
          <NumberInput
            label={<FormattedMessage id="modal.restricted-bad-guesses" />}
            value={badGuesses}
            min={MIN_BAD_GUESSES}
            max={MAX_BAD_GUESSES}
            onChange={(e) => {
              let inputValue = +e.target.value
              inputValue =
                inputValue < MIN_BAD_GUESSES ? MIN_BAD_GUESSES : inputValue
              if (inputValue <= MAX_BAD_GUESSES) {
                setBadGuesses(inputValue)
              }
            }}
          />

          <LanguageSelector locale={locale} onChange={handleSetLocale} />

          <Button
            onClick={() => {
              handleRestart()
              handleCloseModal()
            }}
          >
            <FormattedMessage id="modal.btn.save-settings" />
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export { SettingsModal as default }
