import { render, screen } from "@testing-library/react"
import App from "./App"

jest.mock("./components/card/GameCard", () => () => <div>Mocked GameCard</div>)
jest.mock("./components/header/Header", () => () => <div>Mocked Header</div>)

test("renders mocked components without crashing with SVG and SCSS imports", async () => {
  render(<App />)
  const mockedGameCards = await screen.findAllByText("Mocked GameCard")
  const mockedHeader = await screen.findAllByText("Mocked Header")
  expect(mockedGameCards.length).toBeGreaterThan(0)
  expect(mockedHeader.length).toBeGreaterThan(0)
})
