import React, { ChangeEvent, useCallback, useEffect, useState, KeyboardEvent } from 'react'
import { TSearchInputProps } from './search-input.types'
import './search-input.sass'

export const SearchInput = React.memo((props: TSearchInputProps) => {
  const { onSearch, onClear } = props
  const [value, setValue] = useState('')
  const [lastKeyPessed, setLastKeyPressed] = useState<string | undefined>()

  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setValue(value)
  }, [])

  const onKeyDown = useCallback((evt: KeyboardEvent<HTMLInputElement>) => {
    const lastKeyPressed = evt.key
    setLastKeyPressed(lastKeyPressed)
  }, [])

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value.length > 2) {
        onSearch(value)
      } else if (!value.length && lastKeyPessed === 'Backspace') {
        onClear()
      }
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [value, lastKeyPessed])

  return (
    <input
      className="search-input"
      data-testid="search-input"
      onChange={onChange}
      type="text"
      value={value}
      onKeyDown={onKeyDown}
    />
  )
})
