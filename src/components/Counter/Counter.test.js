import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./Counter"

describe('Counter Test', () => {
  let initialCount, increaseButton, decreaseButton

  //works in each time before test start
  //variants : beforeAll, afterAll, beforeEach, afterEach
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Counter />)

    initialCount = screen.getByText('0')
    increaseButton = screen.getByText('Increase')
    decreaseButton = screen.getByText('Decrease')
  })

  //test going to fail 
  test('increase test', () => {
    userEvent.click(increaseButton)
    expect(initialCount).toHaveTextContent('1')
  })

  //test going to pass
  test('decrease test', () => {
    userEvent.click(decreaseButton)
    expect(initialCount).toHaveTextContent('-1')
  })



})