import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { GifPreview } from './gif-preview'

describe('GifPreview', () => {
  afterEach(cleanup)

  it('should render GifPreview component', () => {
    // Arrange
    const id = 'uniqueID'
    const url = '/this/is/fake/url'

    // Act
    const { asFragment } = render(<GifPreview id={id} url={url} selected={false} />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })

  it('should has "fake url" when it is rendered properly"', () => {
    // Arrange
    const id = 'uniqueID'
    const url = '/this/is/fake/url'

    // Act
    const { getByTestId } = render(<GifPreview id={id} url={url} selected={false} />)
    const component = getByTestId('gif-preview')
    const image = getByTestId('gif-preview__image-src')

    // Assert
    expect(component).toHaveClass('gif-preview')
    expect(image).toHaveClass('gif-preview__image-src')
    expect(image).toHaveAttribute('src', url)
  })

  it('should has LikeButton when it is rendered properly"', () => {
    // Arrange
    const id = 'uniqueID'
    const url = '/this/is/fake/url'

    // Act
    const { getByTestId } = render(<GifPreview id={id} url={url} selected={false} />)
    const button = getByTestId('like-button')

    // Assert
    expect(button).not.toEqual(null)
  })
})
