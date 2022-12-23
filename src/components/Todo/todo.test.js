import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Todo from "."

describe('tests of TodoApp', () => {
  let button = null, input = null;

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Todo />)

    button = screen.getByText('Add')
    input = screen.getByLabelText('Todo:')

  })

  test('are button and input exist in the document?', () => {
    expect(button).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  test(`initial value's length must be 3`, () => {
    const todos = screen.getAllByText((a) => {
      return a.startsWith('Some')
    })

    expect(todos.length).toEqual(3)
  })

  test('has todo added to list', () => {
    userEvent.type(input, 'JestTest')
    userEvent.click(button)

    expect(screen.getByText('JestTest')).toBeInTheDocument()
  })

})