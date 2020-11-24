import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { SearchInput } from './search-input'

jest.useFakeTimers()

describe('SearchInput', () => {
  afterEach(cleanup)

  it('should render SearchInput component', () => {
    // Arrange
    const onSearch = () => null
    const onClear = () => null

    // Act
    const { asFragment } = render(<SearchInput onSearch={onSearch} onClear={onClear} />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call onSearch when user type something and after 500ms', () => {
    // Arrange
    const onSearch = jest.fn(() => {
      console.log('call')
    })
    const onClear = () => null
    const { getByTestId } = render(<SearchInput onSearch={onSearch} onClear={onClear} />)
    const input = getByTestId('search-input')

    // Act
    input.onchange
    fireEvent.change(input, { target: { value: 'playstation' } })

    // Assert
    expect(onSearch).toHaveBeenCalledTimes(0)
    jest.runAllTimers()
    expect(onSearch).toHaveBeenCalledTimes(1) // func not called
  })
})
