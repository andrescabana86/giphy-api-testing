import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { App } from '@components/app/app'

describe('App', () => {
  afterEach(cleanup)

  it('should render App component', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should show title "Welcome to my boilerplate"', () => {
    const { getByTestId } = render(<App />)
    const title = getByTestId('title')
    expect(title).toHaveTextContent('Welcome to my boilerplate')
    expect(title).toHaveClass('title')
    expect(title).toHaveAttribute('data-testid', 'title')
  })
})
