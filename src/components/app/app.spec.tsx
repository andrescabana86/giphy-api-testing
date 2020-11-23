import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { App } from '@components/app/app'

describe('App', () => {
  afterEach(cleanup)

  it('should render App component', () => {
    // Arrange
    // Act
    const { asFragment } = render(<App />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
