import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { GameCardType } from "./components/card/GameCard"
import { MAX_CARDS } from "./consts/consts"
import { emojis } from "./consts/emojis"

export type SupportedLocale = "EN" | "HU"

export interface InitialSettings {
  numberOfCards: number
  countDown: number
  badGuesses: number
}

export const initialSettings: InitialSettings = {
  numberOfCards: MAX_CARDS * 2,
  countDown: 60,
  badGuesses: 0
}

const gameSlice = createSlice({
  name: "game",
  initialState: {
    locale: "EN" as SupportedLocale,
    settings: initialSettings,
    cards: [] as GameCardType[],
    flipped: [] as number[],
    timer: initialSettings.countDown,
    gameOver: false,
    gameStarted: false,
    userWon: false,
    matchedCount: 0,
    mistakesCount: 0
  },
  reducers: {
    setSettings(state, action: PayloadAction<InitialSettings>) {
      state.settings = action.payload
    },
    startTimer(state) {
      state.gameStarted = true
    },
    startGame(state) {
      const pairCount = state.settings.numberOfCards / 2

      const values = [...emojis]
        .sort(() => Math.random() - 0.5)
        .slice(0, pairCount)

      const cards = [...values, ...values]
        .sort(() => Math.random() - 0.5)
        .map((val, i) => ({
          id: i,
          value: val,
          isFlipped: false,
          isMatched: false
        }))

      state.timer = state.settings.countDown
      state.gameOver = false
      state.gameStarted = false
      state.userWon = false
      state.matchedCount = 0
      state.mistakesCount = 0
      state.flipped = []
      state.cards = cards
    },
    flipCard(state, action: PayloadAction<number>) {
      const card = state.cards[action.payload]
      if (card.isFlipped || card.isMatched || state.flipped.length === 2) return

      card.isFlipped = true
      state.flipped.push(action.payload)

      if (state.flipped.length === 2) {
        const [first, second] = state.flipped
        if (state.cards[first].value === state.cards[second].value) {
          state.cards[first].isMatched = true
          state.cards[second].isMatched = true
          state.matchedCount++
        } else {
          state.mistakesCount++
        }
      }

      if (state.cards.every((card) => card.isMatched)) {
        state.userWon = true
        state.gameStarted = false
      }
    },
    resetFlips(state) {
      state.flipped.forEach((index) => {
        const card = state.cards[index]
        if (!card.isMatched) card.isFlipped = false
      })
      state.flipped = []
    },
    resetCards(state) {
      state.cards = state.cards.map((card) => ({
        ...card,
        isFlipped: false,
        isMatched: false
      }))
    },
    tick(state) {
      const { badGuesses } = state.settings
      const reachedMaxMistakes =
        badGuesses > 0 && state.mistakesCount >= badGuesses
      const timeLeft = state.timer > 1

      if (timeLeft && !reachedMaxMistakes) {
        state.timer--
      } else {
        state.timer = 0
        state.gameOver = true
        state.gameStarted = false
      }
    },
    setLocale(state, action) {
      state.locale = action.payload
    }
  }
})

export const { actions, reducer } = gameSlice
