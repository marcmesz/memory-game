import { Container } from "react-bootstrap"
import { IntlProvider } from "react-intl"
import { Provider, useSelector } from "react-redux"
import "./assets/scss/index.scss"
import GameBoard from "./components/gameboard/GameBoard"
import Header from "./components/header/Header"
import messagesEN from "./lang/en.json"
import messagesHU from "./lang/hu.json"
import type { SupportedLocale } from "./slice"
import { store, type RootState } from "./store"

const messages = {
  EN: messagesEN,
  HU: messagesHU
} as const

const AppLocale = () => {
  const locale = useSelector(
    (state: RootState) => state.game.locale
  ) as SupportedLocale
  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale="EN"
    >
      <Container>
        <Header />
        <GameBoard />
      </Container>
    </IntlProvider>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <AppLocale />
    </Provider>
  )
}

export default App
