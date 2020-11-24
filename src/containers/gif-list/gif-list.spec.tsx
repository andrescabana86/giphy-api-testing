import React from 'react'
import { disableFetchMocks, enableFetchMocks } from 'jest-fetch-mock'
import { render, cleanup } from '@testing-library/react'
import { GifListContainer } from './gif-list'

beforeAll(enableFetchMocks)
afterAll(disableFetchMocks)

describe('GifListContainer', () => {
  afterEach(cleanup)

  it('should render GifListContainer component', () => {
    // Arrange
    fetchMock.mockResponseOnce(JSON.stringify({ data: [] }))

    // Act
    const { asFragment } = render(
      <GifListContainer>{() => <span>this is fake children</span>}</GifListContainer>,
    )

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
