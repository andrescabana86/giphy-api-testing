import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { LikeButton } from '@components/like-button/like-button'

describe('LikeButton', () => {
  afterEach(cleanup)

  it('should render LikeButton component', () => {
    // Arrange
    // Act
    const { asFragment } = render(<LikeButton active={false} />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })

  it('should show text "Like" when button has non-active state"', () => {
    // Arrange
    // Act
    const { getByTestId } = render(<LikeButton active={false} />)
    const button = getByTestId('like-button')

    // Assert
    expect(button).toHaveTextContent('Like')
    expect(button).toHaveClass('like-button')
    expect(button).not.toHaveClass('like-button--active')
  })

  it('should show text "Liked!" when button has active state"', () => {
    // Arrange
    // Act
    const { getByTestId } = render(<LikeButton active={true} />)
    const button = getByTestId('like-button')

    // Assert
    expect(button).toHaveTextContent('Liked!')
    expect(button).toHaveClass('like-button')
    expect(button).toHaveClass('like-button--active')
  })

  it('should show custom "Love it!" text when receives text by props"', () => {
    // Arrange
    // Act
    const customText = 'Love it!'
    const { getByTestId } = render(<LikeButton active={true} text={customText} />)
    const button = getByTestId('like-button')

    // Assert
    expect(button).toHaveTextContent(customText)
    expect(button).toHaveClass('like-button', 'like-button--active')
  })
})
