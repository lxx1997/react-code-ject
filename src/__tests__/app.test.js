import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../App'

test('app.js load', async () => {
  // ARRANGE
  render(<App />)
  // ACT
  let button = screen.getByRole('button')
  await userEvent.click(button)
})