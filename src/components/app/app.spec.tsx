import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { App } from '@components/app/app'
import { disableFetchMocks, enableFetchMocks } from 'jest-fetch-mock'

beforeAll(enableFetchMocks)
afterAll(disableFetchMocks)

describe('App', () => {
  afterEach(cleanup)

  it('should render App component', () => {
    // Arrange
    fetchMock.mockResponseOnce(JSON.stringify({ data: [] }))

    // Act
    const { asFragment } = render(<App />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
