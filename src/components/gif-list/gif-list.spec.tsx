import React from 'react'
import { TResult, TResultTrending } from '@api/types/giphy.types'
import { render, cleanup } from '@testing-library/react'
import { GifList } from './gif-list'

describe('GifList', () => {
  afterEach(cleanup)

  it('should render GifList component', () => {
    // Arrange
    // Act
    const { asFragment } = render(<GifList list={[]} loading={false} />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render a list of elements when list has elements to render', () => {
    // Arrange
    const list: (TResult | TResultTrending)[] = [
      { id: 'fake id1', title: 'title1', url: '/this/is/url1' },
      { id: 'fake id2', title: 'title2', url: '/this/is/url2' },
    ]

    // Act
    const { getByTestId, getAllByTestId } = render(<GifList list={list} loading={false} />)
    const listElement = getByTestId('gif-list')
    const previews = getAllByTestId('gif-preview')

    // Assert
    expect(listElement.childElementCount).toEqual(2)
    expect(previews.length).toEqual(2)
  })
})
