import AboutPage from './AboutPage'
import { render } from '@redwoodjs/testing'

describe('AboutPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutPage />)
    }).not.toThrow()
  })
})
